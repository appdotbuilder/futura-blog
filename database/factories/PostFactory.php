<?php

namespace Database\Factories;

use App\Models\Category;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Post>
 */
class PostFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $title = $this->faker->sentence(random_int(4, 8));
        $publishedAt = $this->faker->dateTimeBetween('-1 year', 'now');
        
        $content = collect(range(1, random_int(5, 12)))
            ->map(fn() => $this->faker->paragraph(random_int(3, 8)))
            ->implode("\n\n");
            
        $readingTime = ceil(str_word_count($content) / 200); // 200 words per minute
        
        return [
            'title' => $title,
            'slug' => Str::slug($title),
            'excerpt' => $this->faker->sentences(2, true),
            'content' => $content,
            'featured_image' => 'https://picsum.photos/800/450?random=' . random_int(1, 1000),
            'user_id' => User::factory(),
            'category_id' => Category::factory(),
            'status' => $this->faker->randomElement(['draft', 'published', 'published', 'published']), // More published posts
            'published_at' => $publishedAt,
            'reading_time' => $readingTime,
            'views_count' => $this->faker->numberBetween(10, 5000),
        ];
    }

    /**
     * Indicate that the post is published.
     */
    public function published(): static
    {
        return $this->state(fn (array $attributes) => [
            'status' => 'published',
            'published_at' => $this->faker->dateTimeBetween('-1 year', 'now'),
        ]);
    }

    /**
     * Indicate that the post is a draft.
     */
    public function draft(): static
    {
        return $this->state(fn (array $attributes) => [
            'status' => 'draft',
            'published_at' => null,
        ]);
    }
}