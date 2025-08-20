import React from 'react';
import { Head, Link } from '@inertiajs/react';
import BlogLayout from '@/components/blog-layout';
import { PostCard } from '@/components/post-card';
import { 
    ClockIcon, 
    EyeIcon, 
    CalendarIcon,
    ShareIcon,
    HeartIcon,
    BookmarkIcon,
    ArrowLeftIcon
} from '@/components/icons';

interface Post {
    id: number;
    title: string;
    slug: string;
    excerpt: string;
    content: string;
    featured_image: string;
    reading_time: number;
    views_count: number;
    published_at: string;
    author: {
        name: string;
    };
    category: {
        name: string;
        slug: string;
        color: string;
    } | null;
    tags: Array<{
        name: string;
        slug: string;
    }>;
}

interface RelatedPost {
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

interface Props {
    post: Post;
    relatedPosts: RelatedPost[];
    [key: string]: unknown;
}

export default function BlogShow({ post, relatedPosts }: Props) {
    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    const formatContent = (content: string) => {
        return content.split('\n\n').map((paragraph, index) => (
            <p key={index} className="mb-6 leading-relaxed">
                {paragraph}
            </p>
        ));
    };

    return (
        <BlogLayout>
            <Head title={`${post.title} - ModernBlog`}>
                <meta name="description" content={post.excerpt} />
                <meta property="og:title" content={post.title} />
                <meta property="og:description" content={post.excerpt} />
                <meta property="og:image" content={post.featured_image} />
                <meta property="og:type" content="article" />
            </Head>

            {/* Back Navigation */}
            <div className="bg-white/40 dark:bg-neutral-900/20 backdrop-blur border-b border-neutral-200/60 dark:border-neutral-800">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <Link
                        href="/blog"
                        className="inline-flex items-center text-sm font-medium text-neutral-600 
                                 dark:text-neutral-400 hover:text-indigo-600 dark:hover:text-indigo-400 
                                 transition-colors group"
                    >
                        <ArrowLeftIcon className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
                        Back to Blog
                    </Link>
                </div>
            </div>

            {/* Article Header */}
            <article className="py-16">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <header className="space-y-8 mb-12">
                        {/* Category Badge */}
                        {post.category && (
                            <div className="flex justify-center">
                                <Link
                                    href={`/blog?category=${post.category.slug}`}
                                    className="px-4 py-2 text-sm font-medium rounded-full border bg-white/80 backdrop-blur 
                                             hover:bg-white transition-all duration-200
                                             dark:bg-neutral-900/60 dark:hover:bg-neutral-900/80"
                                    style={{ 
                                        borderColor: post.category.color,
                                        color: post.category.color
                                    }}
                                >
                                    {post.category.name}
                                </Link>
                            </div>
                        )}

                        {/* Title */}
                        <div className="text-center space-y-4">
                            <h1 className="text-4xl lg:text-5xl font-semibold tracking-tight leading-tight">
                                {post.title}
                            </h1>
                            <p className="text-xl leading-relaxed text-neutral-600 dark:text-neutral-300 max-w-3xl mx-auto">
                                {post.excerpt}
                            </p>
                        </div>

                        {/* Meta Information */}
                        <div className="flex flex-col sm:flex-row items-center justify-between pt-8 border-t border-neutral-200/60 dark:border-neutral-800">
                            <div className="flex items-center space-x-4 mb-4 sm:mb-0">
                                <div className="flex items-center space-x-3">
                                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-indigo-500 to-fuchsia-500 
                                                  flex items-center justify-center text-white text-lg font-semibold">
                                        {post.author.name.charAt(0)}
                                    </div>
                                    <div>
                                        <div className="text-sm font-medium">{post.author.name}</div>
                                        <div className="text-xs text-neutral-500">Author</div>
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-center space-x-6 text-sm text-neutral-600 dark:text-neutral-400">
                                <div className="flex items-center space-x-1">
                                    <CalendarIcon className="h-4 w-4" />
                                    <span>{formatDate(post.published_at)}</span>
                                </div>
                                <div className="flex items-center space-x-1">
                                    <ClockIcon className="h-4 w-4" />
                                    <span>{post.reading_time} min read</span>
                                </div>
                                <div className="flex items-center space-x-1">
                                    <EyeIcon className="h-4 w-4" />
                                    <span>{post.views_count.toLocaleString()} views</span>
                                </div>
                            </div>
                        </div>

                        {/* Featured Image */}
                        <div className="relative overflow-hidden rounded-2xl">
                            <img
                                src={post.featured_image}
                                alt={post.title}
                                className="w-full aspect-[21/9] object-cover"
                            />
                        </div>

                        {/* Action Buttons */}
                        <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-4">
                                <button className="flex items-center space-x-2 px-4 py-2 text-sm font-medium 
                                                 rounded-full border border-neutral-200/60 bg-white/70 backdrop-blur 
                                                 hover:bg-neutral-100/60 transition-all duration-200
                                                 dark:bg-neutral-900/60 dark:border-neutral-800 
                                                 dark:hover:bg-neutral-800/40">
                                    <HeartIcon className="h-4 w-4" />
                                    <span>Like</span>
                                </button>
                                <button className="flex items-center space-x-2 px-4 py-2 text-sm font-medium 
                                                 rounded-full border border-neutral-200/60 bg-white/70 backdrop-blur 
                                                 hover:bg-neutral-100/60 transition-all duration-200
                                                 dark:bg-neutral-900/60 dark:border-neutral-800 
                                                 dark:hover:bg-neutral-800/40">
                                    <BookmarkIcon className="h-4 w-4" />
                                    <span>Save</span>
                                </button>
                            </div>

                            <button className="flex items-center space-x-2 px-4 py-2 text-sm font-medium 
                                             rounded-full border border-neutral-200/60 bg-white/70 backdrop-blur 
                                             hover:bg-neutral-100/60 transition-all duration-200
                                             dark:bg-neutral-900/60 dark:border-neutral-800 
                                             dark:hover:bg-neutral-800/40">
                                <ShareIcon className="h-4 w-4" />
                                <span>Share</span>
                            </button>
                        </div>
                    </header>

                    {/* Article Content */}
                    <div className="prose prose-neutral dark:prose-invert prose-lg max-w-none">
                        <div className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
                            {formatContent(post.content)}
                        </div>
                    </div>

                    {/* Tags */}
                    {post.tags.length > 0 && (
                        <div className="mt-12 pt-8 border-t border-neutral-200/60 dark:border-neutral-800">
                            <div className="space-y-4">
                                <h3 className="text-sm font-semibold text-neutral-900 dark:text-white">
                                    Tagged with:
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {post.tags.map((tag) => (
                                        <Link
                                            key={tag.slug}
                                            href={`/blog?tag=${tag.slug}`}
                                            className="px-3 py-1 text-sm rounded-full border bg-white/60 backdrop-blur 
                                                     border-neutral-200/60 text-neutral-600 hover:border-indigo-300 
                                                     hover:text-indigo-600 hover:bg-indigo-50/60 transition-all duration-200
                                                     dark:bg-neutral-900/60 dark:border-neutral-800 
                                                     dark:text-neutral-300 dark:hover:border-indigo-500 
                                                     dark:hover:text-indigo-400 dark:hover:bg-indigo-900/20"
                                        >
                                            #{tag.name}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Comments Section (Static UI) */}
                    <div className="mt-16 pt-12 border-t border-neutral-200/60 dark:border-neutral-800">
                        <div className="space-y-8">
                            <h3 className="text-2xl font-semibold tracking-tight">
                                💬 Join the Conversation
                            </h3>

                            {/* Comment Form */}
                            <div className="p-6 rounded-2xl border bg-white/80 backdrop-blur dark:bg-neutral-900/60 dark:border-neutral-800">
                                <div className="space-y-4">
                                    <textarea
                                        placeholder="Share your thoughts..."
                                        rows={4}
                                        className="w-full px-4 py-3 rounded-xl border border-neutral-200/60 
                                                 bg-white/70 backdrop-blur placeholder:text-neutral-400 
                                                 focus:outline-none focus:ring-2 focus:ring-indigo-400/40 focus:border-transparent
                                                 dark:bg-neutral-900/60 dark:border-neutral-700 dark:text-white dark:placeholder:text-neutral-500"
                                    />
                                    <div className="flex justify-end">
                                        <button className="px-6 py-3 text-sm font-medium text-white 
                                                         bg-gradient-to-r from-indigo-500 via-violet-500 to-fuchsia-500 
                                                         rounded-xl hover:shadow-lg hover:shadow-indigo-500/25 
                                                         transition-all duration-200">
                                            Post Comment
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* Sample Comments */}
                            <div className="space-y-6">
                                {[
                                    {
                                        author: "Alex Chen",
                                        time: "2 hours ago",
                                        content: "Great article! Really enjoyed the insights you shared. The examples were particularly helpful in understanding the concepts."
                                    },
                                    {
                                        author: "Sarah Johnson",
                                        time: "5 hours ago",
                                        content: "This is exactly what I was looking for. Thanks for breaking it down so clearly. Looking forward to implementing these ideas!"
                                    }
                                ].map((comment, index) => (
                                    <div key={index} className="flex space-x-4">
                                        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-indigo-500 to-fuchsia-500 
                                                      flex items-center justify-center text-white text-sm font-semibold">
                                            {comment.author.charAt(0)}
                                        </div>
                                        <div className="flex-1 p-4 rounded-2xl bg-white/60 backdrop-blur border border-neutral-200/60 
                                                      dark:bg-neutral-900/40 dark:border-neutral-800">
                                            <div className="flex items-center justify-between mb-2">
                                                <span className="text-sm font-medium">{comment.author}</span>
                                                <span className="text-xs text-neutral-500">{comment.time}</span>
                                            </div>
                                            <p className="text-sm leading-relaxed text-neutral-600 dark:text-neutral-300">
                                                {comment.content}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </article>

            {/* Related Posts */}
            {relatedPosts.length > 0 && (
                <section className="py-16 bg-white/40 dark:bg-neutral-900/20 backdrop-blur">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="space-y-8">
                            <div className="text-center">
                                <h2 className="text-3xl font-semibold tracking-tight mb-4">
                                    🔗 Related Stories
                                </h2>
                                <p className="text-neutral-600 dark:text-neutral-300">
                                    More great content you might enjoy
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                {relatedPosts.map((relatedPost) => (
                                    <PostCard key={relatedPost.id} post={relatedPost} />
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            )}
        </BlogLayout>
    );
}