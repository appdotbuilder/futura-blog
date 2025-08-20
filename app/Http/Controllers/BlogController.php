<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Category;
use App\Models\Post;
use App\Models\Tag;
use Illuminate\Http\Request;
use Inertia\Inertia;

class BlogController extends Controller
{
    /**
     * Display the blog homepage.
     */
    public function index(Request $request)
    {
        $query = Post::with(['author', 'category', 'tags'])
            ->published()
            ->recent();

        // Filter by category if provided
        if ($request->filled('category')) {
            $query->whereHas('category', function ($q) use ($request) {
                $q->where('slug', $request->category);
            });
        }

        // Filter by tag if provided
        if ($request->filled('tag')) {
            $query->whereHas('tags', function ($q) use ($request) {
                $q->where('slug', $request->tag);
            });
        }

        // Search posts if query provided
        if ($request->filled('search')) {
            $searchTerm = $request->search;
            $query->where(function ($q) use ($searchTerm) {
                $q->where('title', 'like', "%{$searchTerm}%")
                  ->orWhere('excerpt', 'like', "%{$searchTerm}%")
                  ->orWhere('content', 'like', "%{$searchTerm}%");
            });
        }

        $posts = $query->paginate(12);
        $categories = Category::withCount('publishedPosts')->get();
        $tags = Tag::withCount('publishedPosts')->get();

        return Inertia::render('blog/index', [
            'posts' => $posts,
            'categories' => $categories,
            'tags' => $tags,
            'filters' => $request->only(['category', 'tag', 'search']),
        ]);
    }

    /**
     * Display the specified post.
     */
    public function show(string $slug)
    {
        $post = Post::with(['author', 'category', 'tags'])
            ->where('slug', $slug)
            ->published()
            ->firstOrFail();

        // Increment views count
        $post->increment('views_count');

        // Get related posts from same category
        $relatedPosts = Post::with(['author', 'category'])
            ->where('category_id', $post->category_id)
            ->where('id', '!=', $post->id)
            ->published()
            ->recent()
            ->limit(3)
            ->get();

        return Inertia::render('blog/show', [
            'post' => $post,
            'relatedPosts' => $relatedPosts,
        ]);
    }
}