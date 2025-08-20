<?php

namespace Tests\Feature;

use App\Models\Category;
use App\Models\Post;
use App\Models\Tag;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class BlogTest extends TestCase
{
    use RefreshDatabase;

    protected function setUp(): void
    {
        parent::setUp();
        
        // Create test data
        $this->user = User::factory()->create();
        $this->category = Category::factory()->create();
        $this->tag = Tag::factory()->create();
        
        $this->publishedPost = Post::factory()
            ->published()
            ->create([
                'user_id' => $this->user->id,
                'category_id' => $this->category->id,
            ]);
            
        $this->publishedPost->tags()->attach($this->tag->id);
    }

    public function test_home_page_displays_blog_content(): void
    {
        $response = $this->get('/');

        $response->assertStatus(200);
        $response->assertInertia(fn ($page) => 
            $page->component('welcome')
                ->has('featuredPost')
                ->has('latestPosts')
                ->has('categories')
                ->has('tags')
        );
    }

    public function test_blog_index_page_displays_posts(): void
    {
        $response = $this->get('/blog');

        $response->assertStatus(200);
        $response->assertInertia(fn ($page) => 
            $page->component('blog/index')
                ->has('posts.data')
                ->has('categories')
                ->has('tags')
                ->has('filters')
        );
    }

    public function test_blog_show_page_displays_single_post(): void
    {
        $response = $this->get("/blog/{$this->publishedPost->slug}");

        $response->assertStatus(200);
        $response->assertInertia(fn ($page) => 
            $page->component('blog/show')
                ->has('post')
                ->has('relatedPosts')
                ->where('post.title', $this->publishedPost->title)
        );
    }

    public function test_blog_post_increments_views_on_visit(): void
    {
        $initialViews = $this->publishedPost->views_count;
        
        $this->get("/blog/{$this->publishedPost->slug}");
        
        $this->publishedPost->refresh();
        $this->assertEquals($initialViews + 1, $this->publishedPost->views_count);
    }

    public function test_blog_search_filters_posts(): void
    {
        $response = $this->get('/blog?search=' . urlencode($this->publishedPost->title));

        $response->assertStatus(200);
        $response->assertInertia(fn ($page) => 
            $page->has('posts.data', 1)
                ->where('filters.search', $this->publishedPost->title)
        );
    }

    public function test_blog_category_filter_works(): void
    {
        $response = $this->get("/blog?category={$this->category->slug}");

        $response->assertStatus(200);
        $response->assertInertia(fn ($page) => 
            $page->has('posts.data', 1)
                ->where('filters.category', $this->category->slug)
        );
    }

    public function test_blog_tag_filter_works(): void
    {
        $response = $this->get("/blog?tag={$this->tag->slug}");

        $response->assertStatus(200);
        $response->assertInertia(fn ($page) => 
            $page->has('posts.data', 1)
                ->where('filters.tag', $this->tag->slug)
        );
    }

    public function test_categories_page_loads(): void
    {
        $response = $this->get('/categories');

        $response->assertStatus(200);
        $response->assertInertia(fn ($page) => 
            $page->component('categories/index')
        );
    }

    public function test_about_page_loads(): void
    {
        $response = $this->get('/about');

        $response->assertStatus(200);
        $response->assertInertia(fn ($page) => 
            $page->component('about')
        );
    }

    public function test_draft_posts_are_not_shown(): void
    {
        $draftPost = Post::factory()
            ->draft()
            ->create([
                'user_id' => $this->user->id,
                'category_id' => $this->category->id,
            ]);

        $response = $this->get('/blog');
        $response->assertInertia(fn ($page) => 
            $page->has('posts.data', 1) // Only the published post
        );

        $response = $this->get("/blog/{$draftPost->slug}");
        $response->assertStatus(404);
    }
}