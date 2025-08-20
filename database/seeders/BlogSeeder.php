<?php

namespace Database\Seeders;

use App\Models\Category;
use App\Models\Post;
use App\Models\Tag;
use App\Models\User;
use Illuminate\Database\Seeder;

class BlogSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Create categories
        $categories = [
            ['name' => 'Technology', 'color' => '#6366f1'],
            ['name' => 'Design', 'color' => '#8b5cf6'],
            ['name' => 'Business', 'color' => '#06b6d4'],
            ['name' => 'Lifestyle', 'color' => '#ec4899'],
            ['name' => 'Health', 'color' => '#10b981'],
            ['name' => 'Travel', 'color' => '#f59e0b'],
        ];

        foreach ($categories as $categoryData) {
            Category::firstOrCreate(
                ['slug' => \Illuminate\Support\Str::slug($categoryData['name'])],
                [
                    'name' => $categoryData['name'],
                    'description' => "Everything about {$categoryData['name']}",
                    'color' => $categoryData['color'],
                ]
            );
        }

        // Create tags
        $tagNames = [
            'React', 'Laravel', 'Vue.js', 'TypeScript', 'PHP', 'JavaScript',
            'TailwindCSS', 'UI/UX', 'Frontend', 'Backend', 'API', 'Database',
            'Mobile', 'Web Development', 'DevOps', 'Cloud', 'Security',
            'Performance', 'Testing', 'Open Source', 'Tutorial', 'Best Practices'
        ];

        foreach ($tagNames as $tagName) {
            Tag::firstOrCreate(
                ['slug' => \Illuminate\Support\Str::slug($tagName)],
                ['name' => $tagName]
            );
        }

        // Create users if they don't exist
        if (User::count() === 0) {
            User::factory(3)->create();
        }

        // Create posts
        $categories = Category::all();
        $tags = Tag::all();
        $users = User::all();

        // Create 20 published posts
        Post::factory(20)
            ->published()
            ->create()
            ->each(function (Post $post) use ($categories, $tags, $users) {
                $post->user_id = $users->random()->id;
                $post->category_id = $categories->random()->id;
                $post->save();
                
                // Attach random tags (1-4 tags per post)
                $post->tags()->attach(
                    $tags->random(random_int(1, 4))->pluck('id')->toArray()
                );
            });

        // Create 5 draft posts
        Post::factory(5)
            ->draft()
            ->create()
            ->each(function (Post $post) use ($categories, $tags, $users) {
                $post->user_id = $users->random()->id;
                $post->category_id = $categories->random()->id;
                $post->save();
                
                // Attach random tags
                $post->tags()->attach(
                    $tags->random(random_int(1, 3))->pluck('id')->toArray()
                );
            });
    }
}