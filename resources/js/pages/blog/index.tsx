import React, { useState } from 'react';
import { Head, Link, router } from '@inertiajs/react';
import BlogLayout from '@/components/blog-layout';
import { PostCard } from '@/components/post-card';
import { MagnifyingGlassIcon, FunnelIcon } from '@/components/icons';

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

interface PaginationMeta {
    current_page: number;
    from: number;
    last_page: number;
    path: string;
    per_page: number;
    to: number;
    total: number;
}

interface PaginationLinks {
    first: string;
    last: string;
    prev: string | null;
    next: string | null;
}

interface PaginatedPosts {
    data: Post[];
    links: PaginationLinks;
    meta: PaginationMeta;
}

interface Props {
    posts: PaginatedPosts;
    categories: Category[];
    tags: Tag[];
    filters: {
        category?: string;
        tag?: string;
        search?: string;
    };
    [key: string]: unknown;
}

export default function BlogIndex({ posts, categories, tags, filters }: Props) {
    const [searchQuery, setSearchQuery] = useState(filters.search || '');
    const [selectedCategory, setSelectedCategory] = useState(filters.category || '');
    const [selectedTag, setSelectedTag] = useState(filters.tag || '');

    const handleSearch = () => {
        const params = new URLSearchParams();
        if (searchQuery) params.append('search', searchQuery);
        if (selectedCategory) params.append('category', selectedCategory);
        if (selectedTag) params.append('tag', selectedTag);
        
        router.get(`/blog?${params.toString()}`);
    };

    const clearFilters = () => {
        setSearchQuery('');
        setSelectedCategory('');
        setSelectedTag('');
        router.get('/blog');
    };

    const hasActiveFilters = filters.search || filters.category || filters.tag;

    return (
        <BlogLayout>
            <Head title="Blog - ModernBlog">
                <meta name="description" content="Discover amazing stories, insights, and perspectives from our community of writers." />
            </Head>

            {/* Header */}
            <section className="bg-gradient-to-b from-transparent to-neutral-100/60 dark:to-neutral-925/60 py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center space-y-6 mb-12">
                        <h1 className="text-4xl lg:text-5xl font-semibold tracking-tight">
                            📚 All Stories
                        </h1>
                        <p className="text-lg text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto">
                            Explore our collection of {posts.meta.total.toLocaleString()} amazing stories 
                            from writers around the world
                        </p>
                    </div>

                    {/* Search and Filters */}
                    <div className="max-w-4xl mx-auto space-y-6">
                        {/* Search Bar */}
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                <MagnifyingGlassIcon className="h-5 w-5 text-neutral-400" />
                            </div>
                            <input
                                type="text"
                                placeholder="Search articles, topics, or authors..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                                className="w-full pl-12 pr-4 py-4 text-base rounded-2xl border border-neutral-200/60 
                                         bg-white/80 backdrop-blur placeholder:text-neutral-400 
                                         focus:outline-none focus:ring-2 focus:ring-indigo-400/40 focus:border-transparent
                                         dark:bg-neutral-900/60 dark:border-neutral-700 dark:text-white dark:placeholder:text-neutral-500"
                            />
                        </div>

                        {/* Filters */}
                        <div className="flex flex-col sm:flex-row gap-4">
                            <div className="flex-1">
                                <select
                                    value={selectedCategory}
                                    onChange={(e) => setSelectedCategory(e.target.value)}
                                    className="w-full px-4 py-3 rounded-xl border border-neutral-200/60 
                                             bg-white/80 backdrop-blur focus:outline-none focus:ring-2 
                                             focus:ring-indigo-400/40 focus:border-transparent
                                             dark:bg-neutral-900/60 dark:border-neutral-700 dark:text-white"
                                >
                                    <option value="">All Categories</option>
                                    {categories.map((category) => (
                                        <option key={category.id} value={category.slug}>
                                            {category.name} ({category.published_posts_count})
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <div className="flex-1">
                                <select
                                    value={selectedTag}
                                    onChange={(e) => setSelectedTag(e.target.value)}
                                    className="w-full px-4 py-3 rounded-xl border border-neutral-200/60 
                                             bg-white/80 backdrop-blur focus:outline-none focus:ring-2 
                                             focus:ring-indigo-400/40 focus:border-transparent
                                             dark:bg-neutral-900/60 dark:border-neutral-700 dark:text-white"
                                >
                                    <option value="">All Topics</option>
                                    {tags.map((tag) => (
                                        <option key={tag.id} value={tag.slug}>
                                            #{tag.name} ({tag.published_posts_count})
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <div className="flex gap-2">
                                <button
                                    onClick={handleSearch}
                                    className="px-6 py-3 text-sm font-medium text-white 
                                             bg-gradient-to-r from-indigo-500 via-violet-500 to-fuchsia-500 
                                             rounded-xl hover:shadow-lg hover:shadow-indigo-500/25 
                                             transition-all duration-200 flex items-center space-x-2"
                                >
                                    <FunnelIcon className="h-4 w-4" />
                                    <span>Filter</span>
                                </button>

                                {hasActiveFilters && (
                                    <button
                                        onClick={clearFilters}
                                        className="px-6 py-3 text-sm font-medium rounded-xl border border-neutral-200/60 
                                                 bg-white/70 backdrop-blur text-neutral-700
                                                 hover:bg-neutral-100/60 transition-all duration-200
                                                 dark:bg-neutral-900/60 dark:border-neutral-800 
                                                 dark:text-neutral-300 dark:hover:bg-neutral-800/40"
                                    >
                                        Clear
                                    </button>
                                )}
                            </div>
                        </div>

                        {/* Active Filters Display */}
                        {hasActiveFilters && (
                            <div className="flex flex-wrap gap-2">
                                {filters.search && (
                                    <span className="px-3 py-1 text-sm rounded-full bg-indigo-100 text-indigo-700 
                                                   dark:bg-indigo-900/30 dark:text-indigo-300">
                                        Search: "{filters.search}"
                                    </span>
                                )}
                                {filters.category && (
                                    <span className="px-3 py-1 text-sm rounded-full bg-violet-100 text-violet-700 
                                                   dark:bg-violet-900/30 dark:text-violet-300">
                                        Category: {categories.find(c => c.slug === filters.category)?.name}
                                    </span>
                                )}
                                {filters.tag && (
                                    <span className="px-3 py-1 text-sm rounded-full bg-fuchsia-100 text-fuchsia-700 
                                                   dark:bg-fuchsia-900/30 dark:text-fuchsia-300">
                                        Topic: #{tags.find(t => t.slug === filters.tag)?.name}
                                    </span>
                                )}
                            </div>
                        )}
                    </div>
                </div>
            </section>

            {/* Posts Grid */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {posts.data.length > 0 ? (
                        <>
                            <div className="mb-8">
                                <p className="text-neutral-600 dark:text-neutral-400">
                                    Showing {posts.meta.from?.toLocaleString()} - {posts.meta.to?.toLocaleString()} of {posts.meta.total.toLocaleString()} articles
                                </p>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                                {posts.data.map((post) => (
                                    <PostCard key={post.id} post={post} />
                                ))}
                            </div>

                            {/* Pagination */}
                            {posts.meta.last_page > 1 && (
                                <div className="flex items-center justify-center space-x-2">
                                    {posts.links.prev && (
                                        <Link
                                            href={posts.links.prev}
                                            className="px-4 py-2 text-sm font-medium rounded-full border border-neutral-200/60 
                                                     bg-white/70 backdrop-blur text-neutral-700
                                                     hover:bg-neutral-100/60 transition-all duration-200
                                                     dark:bg-neutral-900/60 dark:border-neutral-800 
                                                     dark:text-neutral-300 dark:hover:bg-neutral-800/40"
                                        >
                                            Previous
                                        </Link>
                                    )}

                                    <div className="flex items-center space-x-1">
                                        {Array.from({ length: Math.min(5, posts.meta.last_page) }, (_, i) => {
                                            const page = i + Math.max(1, posts.meta.current_page - 2);
                                            if (page <= posts.meta.last_page) {
                                                return (
                                                    <Link
                                                        key={page}
                                                        href={`${posts.meta.path}?page=${page}`}
                                                        className={`px-3 py-2 text-sm font-medium rounded-full transition-all duration-200
                                                                  ${page === posts.meta.current_page
                                                                    ? 'bg-gradient-to-r from-indigo-500 via-violet-500 to-fuchsia-500 text-white'
                                                                    : 'border border-neutral-200/60 bg-white/70 backdrop-blur text-neutral-700 hover:bg-neutral-100/60 dark:bg-neutral-900/60 dark:border-neutral-800 dark:text-neutral-300 dark:hover:bg-neutral-800/40'
                                                                  }`}
                                                    >
                                                        {page}
                                                    </Link>
                                                );
                                            }
                                            return null;
                                        })}
                                    </div>

                                    {posts.links.next && (
                                        <Link
                                            href={posts.links.next}
                                            className="px-4 py-2 text-sm font-medium rounded-full border border-neutral-200/60 
                                                     bg-white/70 backdrop-blur text-neutral-700
                                                     hover:bg-neutral-100/60 transition-all duration-200
                                                     dark:bg-neutral-900/60 dark:border-neutral-800 
                                                     dark:text-neutral-300 dark:hover:bg-neutral-800/40"
                                        >
                                            Next
                                        </Link>
                                    )}
                                </div>
                            )}
                        </>
                    ) : (
                        <div className="text-center py-16">
                            <div className="text-6xl mb-4">📭</div>
                            <h3 className="text-2xl font-semibold tracking-tight mb-2">No stories found</h3>
                            <p className="text-neutral-600 dark:text-neutral-400 mb-8">
                                {hasActiveFilters 
                                    ? "Try adjusting your search criteria or filters"
                                    : "Be the first to share your story!"
                                }
                            </p>
                            {hasActiveFilters ? (
                                <button
                                    onClick={clearFilters}
                                    className="px-6 py-3 text-sm font-medium text-white 
                                             bg-gradient-to-r from-indigo-500 via-violet-500 to-fuchsia-500 
                                             rounded-full hover:shadow-lg hover:shadow-indigo-500/25 
                                             transition-all duration-200"
                                >
                                    Clear Filters
                                </button>
                            ) : (
                                <Link
                                    href="/register"
                                    className="px-6 py-3 text-sm font-medium text-white 
                                             bg-gradient-to-r from-indigo-500 via-violet-500 to-fuchsia-500 
                                             rounded-full hover:shadow-lg hover:shadow-indigo-500/25 
                                             transition-all duration-200"
                                >
                                    Start Writing
                                </Link>
                            )}
                        </div>
                    )}
                </div>
            </section>
        </BlogLayout>
    );
}