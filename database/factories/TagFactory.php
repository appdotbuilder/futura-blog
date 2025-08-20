<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Tag>
 */
class TagFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $tags = [
            'React', 'Laravel', 'Vue.js', 'TypeScript', 'PHP', 'JavaScript',
            'TailwindCSS', 'UI/UX', 'Frontend', 'Backend', 'API', 'Database',
            'Mobile', 'Web Development', 'DevOps', 'Cloud', 'Security',
            'Performance', 'Testing', 'Open Source', 'Tutorial', 'Best Practices'
        ];

        $name = $this->faker->randomElement($tags);
        
        return [
            'name' => $name,
            'slug' => Str::slug($name),
        ];
    }
}