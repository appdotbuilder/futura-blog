<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Category;
use App\Models\Post;
use App\Models\Tag;
use Inertia\Inertia;

class HomeController extends Controller
{
    /**
     * Display the homepage.
     */
    public function index()
    {
        // Get featured post (most recent)
        $featuredPost = Post::with(['author', 'category', 'tags'])
            ->published()
            ->recent()
            ->first();

        // Get latest posts (excluding featured)
        $latestPosts = Post::with(['author', 'category', 'tags'])
            ->published()
            ->recent()
            ->when($featuredPost, fn($query) => $query->where('id', '!=', $featuredPost->id))
            ->limit(6)
            ->get();

        // Get categories with post counts
        $categories = Category::withCount('publishedPosts')
            ->whereHas('publishedPosts')
            ->limit(8)
            ->get();

        // Get popular tags
        $tags = Tag::withCount('publishedPosts')
            ->whereHas('publishedPosts')
            ->orderBy('published_posts_count', 'desc')
            ->limit(10)
            ->get();

        return Inertia::render('welcome', [
            'featuredPost' => $featuredPost,
            'latestPosts' => $latestPosts,
            'categories' => $categories,
            'tags' => $tags,
        ]);
    }
}