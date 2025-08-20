import React from 'react';
import { Head, Link } from '@inertiajs/react';
import BlogLayout from '@/components/blog-layout';
import { ArrowRightIcon } from '@/components/icons';

export default function CategoriesIndex() {
    // Sample categories data - in a real app this would come from props
    const categories = [
        { name: 'Technology', slug: 'technology', color: '#6366f1', posts: 25, description: 'Latest in tech, programming, and digital innovation' },
        { name: 'Design', slug: 'design', color: '#8b5cf6', posts: 18, description: 'UI/UX design, creative processes, and visual inspiration' },
        { name: 'Business', slug: 'business', color: '#06b6d4', posts: 22, description: 'Entrepreneurship, marketing, and business strategies' },
        { name: 'Lifestyle', slug: 'lifestyle', color: '#ec4899', posts: 15, description: 'Personal growth, wellness, and life experiences' },
        { name: 'Health', slug: 'health', color: '#10b981', posts: 12, description: 'Health tips, fitness, and mental wellness' },
        { name: 'Travel', slug: 'travel', color: '#f59e0b', posts: 20, description: 'Travel guides, adventures, and cultural experiences' },
        { name: 'Food', slug: 'food', color: '#ef4444', posts: 16, description: 'Recipes, restaurant reviews, and culinary adventures' },
        { name: 'Science', slug: 'science', color: '#3b82f6', posts: 14, description: 'Scientific discoveries and research insights' },
    ];

    return (
        <BlogLayout>
            <Head title="Categories - ModernBlog">
                <meta name="description" content="Explore our content by category. Find articles on technology, design, business, lifestyle, and more." />
            </Head>

            {/* Header */}
            <section className="bg-gradient-to-b from-transparent to-neutral-100/60 dark:to-neutral-925/60 py-16 lg:py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center space-y-6">
                        <h1 className="text-4xl lg:text-5xl font-semibold tracking-tight">
                            🗂️ Explore Categories
                        </h1>
                        <p className="text-lg text-neutral-600 dark:text-neutral-300 max-w-3xl mx-auto">
                            Discover content organized by your interests. From technology and design 
                            to lifestyle and business, find the topics that inspire you.
                        </p>
                    </div>
                </div>
            </section>

            {/* Categories Grid */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {categories.map((category) => (
                            <Link
                                key={category.slug}
                                href={`/blog?category=${category.slug}`}
                                className="group p-6 rounded-2xl border bg-white/80 backdrop-blur shadow-lg 
                                         hover:shadow-xl hover:-translate-y-1 transition-all duration-300
                                         dark:bg-neutral-900/60 dark:border-neutral-800"
                            >
                                <div className="space-y-4">
                                    {/* Icon */}
                                    <div 
                                        className="w-16 h-16 rounded-2xl flex items-center justify-center text-white text-2xl font-bold"
                                        style={{ backgroundColor: category.color }}
                                    >
                                        {category.name.charAt(0)}
                                    </div>

                                    {/* Content */}
                                    <div className="space-y-2">
                                        <div className="flex items-center justify-between">
                                            <h3 className="text-xl font-semibold tracking-tight group-hover:text-indigo-600 
                                                         dark:group-hover:text-indigo-400 transition-colors">
                                                {category.name}
                                            </h3>
                                            <ArrowRightIcon className="h-5 w-5 text-neutral-400 group-hover:text-indigo-500 
                                                                     group-hover:translate-x-1 transition-all duration-200" />
                                        </div>
                                        
                                        <p className="text-sm leading-relaxed text-neutral-600 dark:text-neutral-300">
                                            {category.description}
                                        </p>

                                        <div className="pt-2">
                                            <span className="inline-flex items-center px-2.5 py-1 text-xs font-medium 
                                                           rounded-full bg-neutral-100/60 text-neutral-600
                                                           dark:bg-neutral-800/60 dark:text-neutral-400">
                                                {category.posts} articles
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-16 bg-white/40 dark:bg-neutral-900/20 backdrop-blur">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="space-y-6">
                        <h2 className="text-3xl font-semibold tracking-tight">
                            Can't Find What You're Looking For? 🔍
                        </h2>
                        <p className="text-lg text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto">
                            Use our search feature to find specific topics, or browse all articles 
                            to discover something new and interesting.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Link
                                href="/blog"
                                className="inline-flex items-center px-6 py-3 text-sm font-medium text-white 
                                         bg-gradient-to-r from-indigo-500 via-violet-500 to-fuchsia-500 
                                         rounded-full hover:shadow-lg hover:shadow-indigo-500/25 
                                         transition-all duration-200"
                            >
                                Browse All Articles
                                <ArrowRightIcon className="ml-2 h-4 w-4" />
                            </Link>
                            <Link
                                href="/"
                                className="inline-flex items-center px-6 py-3 text-sm font-medium 
                                         rounded-full border border-neutral-200/60 
                                         bg-white/70 backdrop-blur text-neutral-700
                                         hover:bg-neutral-100/60 transition-all duration-200
                                         dark:bg-neutral-900/60 dark:border-neutral-800 
                                         dark:text-neutral-300 dark:hover:bg-neutral-800/40"
                            >
                                Back to Home
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </BlogLayout>
    );
}