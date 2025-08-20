import React from 'react';
import { Link } from '@inertiajs/react';
import { ClockIcon, EyeIcon } from '@/components/icons';

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

interface PostCardProps {
    post: Post;
    featured?: boolean;
    [key: string]: unknown;
}

export function PostCard({ post, featured = false }: PostCardProps) {
    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    if (featured) {
        return (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="space-y-6">
                    {post.category && (
                        <div className="inline-flex items-center">
                            <span 
                                className="px-3 py-1 text-xs font-medium rounded-full border bg-white/60 backdrop-blur dark:bg-neutral-900/60"
                                style={{ 
                                    borderColor: post.category.color,
                                    color: post.category.color
                                }}
                            >
                                {post.category.name}
                            </span>
                        </div>
                    )}
                    
                    <div className="space-y-4">
                        <h1 className="text-4xl lg:text-5xl font-semibold tracking-tight leading-tight">
                            {post.title}
                        </h1>
                        <p className="text-lg leading-relaxed text-neutral-600 dark:text-neutral-300">
                            {post.excerpt}
                        </p>
                    </div>

                    <div className="flex items-center space-x-6 text-sm text-neutral-600 dark:text-neutral-400">
                        <div className="flex items-center space-x-2">
                            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-indigo-500 to-fuchsia-500 flex items-center justify-center text-white text-xs font-medium">
                                {post.author.name.charAt(0)}
                            </div>
                            <span>{post.author.name}</span>
                        </div>
                        <span>•</span>
                        <span>{formatDate(post.published_at)}</span>
                        <span>•</span>
                        <div className="flex items-center space-x-1">
                            <ClockIcon className="h-4 w-4" />
                            <span>{post.reading_time} min read</span>
                        </div>
                    </div>

                    <div className="flex items-center space-x-4">
                        <Link
                            href={`/blog/${post.slug}`}
                            className="inline-flex items-center px-6 py-3 text-sm font-medium text-white 
                                     bg-gradient-to-r from-indigo-500 via-violet-500 to-fuchsia-500 
                                     rounded-full hover:shadow-lg hover:shadow-indigo-500/25 
                                     transition-all duration-200"
                        >
                            Read Article
                        </Link>
                        <div className="flex items-center space-x-1 text-neutral-500">
                            <EyeIcon className="h-4 w-4" />
                            <span className="text-sm">{post.views_count.toLocaleString()} views</span>
                        </div>
                    </div>

                    {post.tags.length > 0 && (
                        <div className="flex flex-wrap gap-2">
                            {post.tags.slice(0, 3).map((tag) => (
                                <Link
                                    key={tag.slug}
                                    href={`/blog?tag=${tag.slug}`}
                                    className="px-3 py-1 text-xs rounded-full border bg-white/60 backdrop-blur 
                                             border-neutral-200/60 text-neutral-600 hover:border-indigo-300 
                                             hover:text-indigo-600 transition-colors
                                             dark:bg-neutral-900/60 dark:border-neutral-800 
                                             dark:text-neutral-300 dark:hover:border-indigo-500 
                                             dark:hover:text-indigo-400"
                                >
                                    #{tag.name}
                                </Link>
                            ))}
                        </div>
                    )}
                </div>

                <div className="order-first lg:order-last">
                    <Link href={`/blog/${post.slug}`} className="block group">
                        <div className="relative overflow-hidden rounded-2xl">
                            <img
                                src={post.featured_image}
                                alt={post.title}
                                className="w-full aspect-[16/10] object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </div>
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <article className="group rounded-2xl border bg-white/80 backdrop-blur shadow-lg hover:shadow-xl 
                          hover:-translate-y-0.5 hover:ring-1 hover:ring-neutral-200/80 
                          transition-all duration-300 overflow-hidden
                          dark:bg-neutral-900/60 dark:border-neutral-800 
                          dark:hover:ring-neutral-700">
            <Link href={`/blog/${post.slug}`} className="block">
                <div className="relative overflow-hidden">
                    <img
                        src={post.featured_image}
                        alt={post.title}
                        className="w-full aspect-[16/10] object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    {post.category && (
                        <div className="absolute top-4 left-4">
                            <span 
                                className="px-3 py-1 text-xs font-medium rounded-full border bg-white/80 backdrop-blur"
                                style={{ 
                                    borderColor: post.category.color,
                                    color: post.category.color
                                }}
                            >
                                {post.category.name}
                            </span>
                        </div>
                    )}
                </div>

                <div className="p-6 space-y-4">
                    <div className="space-y-3">
                        <h3 className="text-xl font-semibold tracking-tight line-clamp-2 group-hover:text-indigo-600 
                                     dark:group-hover:text-indigo-400 transition-colors">
                            {post.title}
                        </h3>
                        <p className="text-sm leading-relaxed text-neutral-600 dark:text-neutral-300 line-clamp-2">
                            {post.excerpt}
                        </p>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-neutral-200/60 dark:border-neutral-800">
                        <div className="flex items-center space-x-3 text-xs text-neutral-600 dark:text-neutral-400">
                            <div className="flex items-center space-x-2">
                                <div className="w-6 h-6 rounded-full bg-gradient-to-r from-indigo-500 to-fuchsia-500 
                                              flex items-center justify-center text-white text-xs font-medium">
                                    {post.author.name.charAt(0)}
                                </div>
                                <span>{post.author.name}</span>
                            </div>
                            <span>•</span>
                            <span>{formatDate(post.published_at)}</span>
                        </div>

                        <div className="flex items-center space-x-3 text-xs text-neutral-500">
                            <div className="flex items-center space-x-1">
                                <ClockIcon className="h-3 w-3" />
                                <span>{post.reading_time}m</span>
                            </div>
                            <div className="flex items-center space-x-1">
                                <EyeIcon className="h-3 w-3" />
                                <span>{post.views_count}</span>
                            </div>
                        </div>
                    </div>

                    {post.tags.length > 0 && (
                        <div className="flex flex-wrap gap-1 pt-2">
                            {post.tags.slice(0, 3).map((tag) => (
                                <span
                                    key={tag.slug}
                                    className="px-2 py-1 text-xs rounded-full bg-neutral-100/60 
                                             text-neutral-600 dark:bg-neutral-800/60 dark:text-neutral-400"
                                >
                                    #{tag.name}
                                </span>
                            ))}
                        </div>
                    )}
                </div>
            </Link>
        </article>
    );
}