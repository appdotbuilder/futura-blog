import React from 'react';
import { Link } from '@inertiajs/react';

export function BlogFooter() {
    return (
        <footer className="bg-white/80 backdrop-blur border-t border-neutral-200/60 dark:bg-neutral-900/60 dark:border-neutral-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Brand */}
                    <div className="space-y-4">
                        <div className="text-2xl font-bold bg-gradient-to-r from-indigo-500 via-violet-500 to-fuchsia-500 bg-clip-text text-transparent">
                            📝 ModernBlog
                        </div>
                        <p className="text-sm leading-relaxed text-neutral-600 dark:text-neutral-300 max-w-sm">
                            A modern blogging platform built with cutting-edge technology. 
                            Share your thoughts and connect with readers worldwide.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-4">
                        <h3 className="text-sm font-semibold text-neutral-900 dark:text-white tracking-tight">
                            Quick Links
                        </h3>
                        <ul className="space-y-3">
                            <li>
                                <Link 
                                    href="/blog"
                                    className="text-sm text-neutral-600 dark:text-neutral-300 
                                             hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                                >
                                    All Posts
                                </Link>
                            </li>
                            <li>
                                <Link 
                                    href="/categories"
                                    className="text-sm text-neutral-600 dark:text-neutral-300 
                                             hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                                >
                                    Categories
                                </Link>
                            </li>
                            <li>
                                <Link 
                                    href="/about"
                                    className="text-sm text-neutral-600 dark:text-neutral-300 
                                             hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                                >
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link 
                                    href="/register"
                                    className="text-sm text-neutral-600 dark:text-neutral-300 
                                             hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                                >
                                    Join Community
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Connect */}
                    <div className="space-y-4">
                        <h3 className="text-sm font-semibold text-neutral-900 dark:text-white tracking-tight">
                            Connect
                        </h3>
                        <ul className="space-y-3">
                            <li>
                                <a 
                                    href="#"
                                    className="text-sm text-neutral-600 dark:text-neutral-300 
                                             hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                                >
                                    Twitter
                                </a>
                            </li>
                            <li>
                                <a 
                                    href="#"
                                    className="text-sm text-neutral-600 dark:text-neutral-300 
                                             hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                                >
                                    LinkedIn
                                </a>
                            </li>
                            <li>
                                <a 
                                    href="#"
                                    className="text-sm text-neutral-600 dark:text-neutral-300 
                                             hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                                >
                                    GitHub
                                </a>
                            </li>
                            <li>
                                <a 
                                    href="#"
                                    className="text-sm text-neutral-600 dark:text-neutral-300 
                                             hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                                >
                                    RSS Feed
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-12 pt-8 border-t border-neutral-200/60 dark:border-neutral-800">
                    <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
                        <p className="text-xs text-neutral-600 dark:text-neutral-400">
                            © 2024 ModernBlog. All rights reserved.
                        </p>
                        <div className="flex items-center space-x-6">
                            <a 
                                href="#"
                                className="text-xs text-neutral-600 dark:text-neutral-400 
                                         hover:text-neutral-900 dark:hover:text-white transition-colors"
                            >
                                Privacy Policy
                            </a>
                            <a 
                                href="#"
                                className="text-xs text-neutral-600 dark:text-neutral-400 
                                         hover:text-neutral-900 dark:hover:text-white transition-colors"
                            >
                                Terms of Service
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}