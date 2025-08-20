<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('posts', function (Blueprint $table) {
            $table->id();
            $table->string('title')->comment('Post title');
            $table->string('slug')->unique()->comment('URL friendly post title');
            $table->text('excerpt')->comment('Short description of the post');
            $table->longText('content')->comment('Full post content');
            $table->string('featured_image')->nullable()->comment('Featured image URL');
            $table->foreignId('user_id')->constrained()->onDelete('cascade');
            $table->foreignId('category_id')->nullable()->constrained()->onDelete('set null');
            $table->enum('status', ['draft', 'published', 'archived'])->default('draft')->comment('Post status');
            $table->timestamp('published_at')->nullable()->comment('When the post was published');
            $table->integer('reading_time')->default(0)->comment('Estimated reading time in minutes');
            $table->integer('views_count')->default(0)->comment('Number of views');
            $table->timestamps();
            
            // Indexes for performance
            $table->index('title');
            $table->index('slug');
            $table->index('status');
            $table->index('published_at');
            $table->index(['status', 'published_at']);
            $table->index(['category_id', 'published_at']);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('posts');
    }
};