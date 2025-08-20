<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Category>
 */
class CategoryFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $categories = [
            'Technology' => '#6366f1',
            'Design' => '#8b5cf6',
            'Business' => '#06b6d4',
            'Lifestyle' => '#ec4899',
            'Health' => '#10b981',
            'Travel' => '#f59e0b',
            'Food' => '#ef4444',
            'Science' => '#3b82f6',
        ];

        $name = $this->faker->randomElement(array_keys($categories));
        
        return [
            'name' => $name,
            'slug' => Str::slug($name),
            'description' => $this->faker->sentence(10),
            'color' => $categories[$name],
        ];
    }
}