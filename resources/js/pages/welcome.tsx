import React from 'react';
import { Head, Link } from '@inertiajs/react';
import BlogLayout from '@/components/blog-layout';
import { PostCard } from '@/components/post-card';
import { ArrowRightIcon } from '@/components/icons';

interface Post {
    id: number;
    title: string;
    slug: string;
    excerpt: string;
    featured_image: string;
    reading_time: number;
    views_count: number;
    published_at: string;
    author: {
        name: string;
    };
    category: {
        name: string;
        color: string;
    } | null;
    tags: Array<{
        name: string;
        slug: string;
    }>;
}

interface Category {
    id: number;
    name: string;
    slug: string;
    color: string;
    published_posts_count: number;
}

interface Tag {
    id: number;
    name: string;
    slug: string;
    published_posts_count: number;
}

interface Props {
    featuredPost: Post | null;
    latestPosts: Post[];
    categories: Category[];
    tags: Tag[];
    [key: string]: unknown;
}

export default function Welcome({ featuredPost, latestPosts, categories, tags }: Props) {
    return (
        <BlogLayout>
            <Head title="ModernBlog - Share Your Story">
                <meta name="description" content="A modern blogging platform built with cutting-edge technology. Discover amazing stories and share your own thoughts with the world." />
            </Head>

            {/* Hero Section */}
            <section className="bg-gradient-to-b from-transparent to-neutral-100/60 dark:to-neutral-925/60 py-16 lg:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {featuredPost ? (
                        <div className="space-y-8">
                            <div className="text-center space-y-4 mb-12">
                                <h1 className="text-3xl lg:text-4xl font-semibold tracking-tight">
                                    ✨ Featured Story
                                </h1>
                                <p className="text-lg text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto">
                                    Discover the latest insights and stories from our community
                                </p>
                            </div>
                            <PostCard post={featuredPost} featured />
                        </div>
                    ) : (
                        <div className="text-center space-y-8 py-16">
                            <div className="space-y-4">
                                <h1 className="text-4xl lg:text-6xl font-semibold tracking-tight">
                                    📝 Welcome to{' '}
                                    <span className="bg-gradient-to-r from-indigo-500 via-violet-500 to-fuchsia-500 bg-clip-text text-transparent">
                                        ModernBlog
                                    </span>
                                </h1>
                                <p className="text-xl leading-relaxed text-neutral-600 dark:text-neutral-300 max-w-3xl mx-auto">
                                    A cutting-edge blogging platform where stories come alive. 
                                    Share your thoughts, discover amazing content, and connect with writers worldwide.
                                </p>
                            </div>

                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                                <Link
                                    href="/blog"
                                    className="inline-flex items-center px-6 py-3 text-sm font-medium text-white 
                                             bg-gradient-to-r from-indigo-500 via-violet-500 to-fuchsia-500 
                                             rounded-full hover:shadow-lg hover:shadow-indigo-500/25 
                                             transition-all duration-200"
                                >
                                    Explore Stories
                                    <ArrowRightIcon className="ml-2 h-4 w-4" />
                                </Link>
                                <Link
                                    href="/register"
                                    className="inline-flex items-center px-6 py-3 text-sm font-medium 
                                             rounded-full border border-neutral-200/60 
                                             bg-white/70 backdrop-blur text-neutral-700
                                             hover:bg-neutral-100/60 transition-all duration-200
                                             dark:bg-neutral-900/60 dark:border-neutral-800 
                                             dark:text-neutral-300 dark:hover:bg-neutral-800/40"
                                >
                                    Join Community
                                </Link>
                            </div>
                        </div>
                    )}
                </div>
            </section>

            {/* Latest Posts */}
            {latestPosts.length > 0 && (
                <section className="py-16">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex items-center justify-between mb-12">
                            <div className="space-y-2">
                                <h2 className="text-3xl font-semibold tracking-tight">
                                    📚 Latest Stories
                                </h2>
                                <p className="text-neutral-600 dark:text-neutral-300">
                                    Fresh perspectives and insights from our community
                                </p>
                            </div>
                            <Link
                                href="/blog"
                                className="inline-flex items-center text-sm font-medium text-indigo-600 
                                         dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 
                                         transition-colors group"
                            >
                                View all posts
                                <ArrowRightIcon className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {latestPosts.map((post) => (
                                <PostCard key={post.id} post={post} />
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Categories Section */}
            {categories.length > 0 && (
                <section className="py-16 bg-white/40 dark:bg-neutral-900/20 backdrop-blur">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="space-y-8">
                            <div className="text-center space-y-4">
                                <h2 className="text-3xl font-semibold tracking-tight">
                                    🗂️ Explore Categories
                                </h2>
                                <p className="text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto">
                                    Discover content organized by your interests
                                </p>
                            </div>

                            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-4">
                                {categories.map((category) => (
                                    <Link
                                        key={category.id}
                                        href={`/blog?category=${category.slug}`}
                                        className="group p-4 rounded-2xl border bg-white/80 backdrop-blur 
                                                 shadow-lg hover:shadow-xl hover:-translate-y-1 
                                                 transition-all duration-300 text-center
                                                 dark:bg-neutral-900/60 dark:border-neutral-800"
                                    >
                                        <div className="space-y-2">
                                            <div 
                                                className="w-12 h-12 rounded-xl mx-auto flex items-center justify-center text-white font-semibold"
                                                style={{ backgroundColor: category.color }}
                                            >
                                                {category.name.charAt(0)}
                                            </div>
                                            <div>
                                                <h3 className="text-sm font-medium group-hover:text-indigo-600 
                                                             dark:group-hover:text-indigo-400 transition-colors">
                                                    {category.name}
                                                </h3>
                                                <p className="text-xs text-neutral-500 dark:text-neutral-400">
                                                    {category.published_posts_count} posts
                                                </p>
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                            </div>

                            <div className="text-center">
                                <Link
                                    href="/categories"
                                    className="inline-flex items-center px-6 py-3 text-sm font-medium 
                                             rounded-full border border-neutral-200/60 
                                             bg-white/70 backdrop-blur text-neutral-700
                                             hover:bg-neutral-100/60 transition-all duration-200
                                             dark:bg-neutral-900/60 dark:border-neutral-800 
                                             dark:text-neutral-300 dark:hover:bg-neutral-800/40"
                                >
                                    View All Categories
                                    <ArrowRightIcon className="ml-2 h-4 w-4" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            )}

            {/* Popular Tags */}
            {tags.length > 0 && (
                <section className="py-16">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="space-y-8">
                            <div className="text-center space-y-4">
                                <h2 className="text-3xl font-semibold tracking-tight">
                                    🏷️ Popular Topics
                                </h2>
                                <p className="text-neutral-600 dark:text-neutral-300">
                                    Trending topics in our community
                                </p>
                            </div>

                            <div className="flex flex-wrap justify-center gap-3">
                                {tags.map((tag) => (
                                    <Link
                                        key={tag.id}
                                        href={`/blog?tag=${tag.slug}`}
                                        className="px-4 py-2 text-sm rounded-full border bg-white/60 backdrop-blur 
                                                 border-neutral-200/60 text-neutral-700 hover:border-indigo-300 
                                                 hover:text-indigo-600 hover:bg-indigo-50/60 transition-all duration-200
                                                 dark:bg-neutral-900/60 dark:border-neutral-800 
                                                 dark:text-neutral-300 dark:hover:border-indigo-500 
                                                 dark:hover:text-indigo-400 dark:hover:bg-indigo-900/20"
                                    >
                                        #{tag.name} ({tag.published_posts_count})
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            )}

            {/* Call to Action */}
            <section className="py-20 bg-gradient-to-r from-indigo-500/10 via-violet-500/10 to-fuchsia-500/10">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="space-y-8">
                        <div className="space-y-4">
                            <h2 className="text-3xl lg:text-4xl font-semibold tracking-tight">
                                Ready to Share Your Story? ✍️
                            </h2>
                            <p className="text-lg text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto">
                                Join thousands of writers sharing their unique perspectives. 
                                Create your account and start publishing today.
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Link
                                href="/register"
                                className="inline-flex items-center px-8 py-4 text-base font-medium text-white 
                                         bg-gradient-to-r from-indigo-500 via-violet-500 to-fuchsia-500 
                                         rounded-full hover:shadow-lg hover:shadow-indigo-500/25 
                                         transition-all duration-200"
                            >
                                Start Writing Today
                                <ArrowRightIcon className="ml-2 h-5 w-5" />
                            </Link>
                            <Link
                                href="/blog"
                                className="inline-flex items-center px-8 py-4 text-base font-medium 
                                         rounded-full border border-neutral-200/60 
                                         bg-white/70 backdrop-blur text-neutral-700
                                         hover:bg-neutral-100/60 transition-all duration-200
                                         dark:bg-neutral-900/60 dark:border-neutral-800 
                                         dark:text-neutral-300 dark:hover:bg-neutral-800/40"
                            >
                                Browse Stories
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </BlogLayout>
    );
}