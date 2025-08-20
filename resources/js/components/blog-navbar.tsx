import React, { useState } from 'react';
import { Link, usePage } from '@inertiajs/react';
import { MagnifyingGlassIcon, SunIcon, MoonIcon } from '@/components/icons';
import { type SharedData } from '@/types';

export function BlogNavbar() {
    const { auth, url } = usePage<SharedData>().props;
    const currentUrl = url as string;
    const [searchQuery, setSearchQuery] = useState('');
    const [isDarkMode, setIsDarkMode] = useState(false);

    const isActiveLink = (href: string) => {
        return currentUrl === href || (href !== '/' && currentUrl.startsWith(href));
    };

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
        document.documentElement.classList.toggle('dark');
    };

    return (
        <nav className="sticky top-0 z-50 bg-white/70 backdrop-blur border-b border-neutral-200/60 dark:bg-neutral-900/60 dark:border-neutral-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <Link 
                        href="/"
                        className="flex items-center space-x-2"
                    >
                        <div className="text-2xl font-bold bg-gradient-to-r from-indigo-500 via-violet-500 to-fuchsia-500 bg-clip-text text-transparent">
                            📝 ModernBlog
                        </div>
                    </Link>

                    {/* Navigation Links */}
                    <div className="hidden md:flex items-center space-x-8">
                        <Link
                            href="/"
                            className={`relative px-3 py-2 text-sm font-medium transition-all duration-200 
                                ${isActiveLink('/') 
                                    ? 'text-indigo-600 dark:text-indigo-400' 
                                    : 'text-neutral-600 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-white'
                                }
                                after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:h-[2px] 
                                after:bg-gradient-to-r after:from-indigo-500 after:to-fuchsia-500 after:transition-all after:duration-200
                                ${isActiveLink('/') ? 'after:w-full' : 'after:w-0 hover:after:w-full'}
                            `}
                        >
                            Home
                        </Link>
                        <Link
                            href="/blog"
                            className={`relative px-3 py-2 text-sm font-medium transition-all duration-200 
                                ${isActiveLink('/blog') 
                                    ? 'text-indigo-600 dark:text-indigo-400' 
                                    : 'text-neutral-600 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-white'
                                }
                                after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:h-[2px] 
                                after:bg-gradient-to-r after:from-indigo-500 after:to-fuchsia-500 after:transition-all after:duration-200
                                ${isActiveLink('/blog') ? 'after:w-full' : 'after:w-0 hover:after:w-full'}
                            `}
                        >
                            Blog
                        </Link>
                        <Link
                            href="/categories"
                            className={`relative px-3 py-2 text-sm font-medium transition-all duration-200 
                                ${isActiveLink('/categories') 
                                    ? 'text-indigo-600 dark:text-indigo-400' 
                                    : 'text-neutral-600 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-white'
                                }
                                after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:h-[2px] 
                                after:bg-gradient-to-r after:from-indigo-500 after:to-fuchsia-500 after:transition-all after:duration-200
                                ${isActiveLink('/categories') ? 'after:w-full' : 'after:w-0 hover:after:w-full'}
                            `}
                        >
                            Categories
                        </Link>
                        <Link
                            href="/about"
                            className={`relative px-3 py-2 text-sm font-medium transition-all duration-200 
                                ${isActiveLink('/about') 
                                    ? 'text-indigo-600 dark:text-indigo-400' 
                                    : 'text-neutral-600 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-white'
                                }
                                after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:h-[2px] 
                                after:bg-gradient-to-r after:from-indigo-500 after:to-fuchsia-500 after:transition-all after:duration-200
                                ${isActiveLink('/about') ? 'after:w-full' : 'after:w-0 hover:after:w-full'}
                            `}
                        >
                            About
                        </Link>
                    </div>

                    {/* Right Section */}
                    <div className="flex items-center space-x-4">
                        {/* Search */}
                        <div className="relative hidden sm:block">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <MagnifyingGlassIcon className="h-4 w-4 text-neutral-400" />
                            </div>
                            <input
                                type="text"
                                placeholder="Search posts..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-64 pl-10 pr-4 py-2 text-sm rounded-full border border-neutral-200/60 
                                         bg-white/70 backdrop-blur placeholder:text-neutral-400 
                                         focus:outline-none focus:ring-2 focus:ring-indigo-400/40 focus:border-transparent
                                         dark:bg-neutral-900/60 dark:border-neutral-700 dark:text-white dark:placeholder:text-neutral-500"
                            />
                        </div>

                        {/* Dark Mode Toggle */}
                        <button
                            onClick={toggleDarkMode}
                            className="p-2 rounded-full hover:bg-neutral-100/60 dark:hover:bg-neutral-800/40 transition-colors"
                        >
                            {isDarkMode ? (
                                <SunIcon className="h-5 w-5 text-neutral-600 dark:text-neutral-300" />
                            ) : (
                                <MoonIcon className="h-5 w-5 text-neutral-600 dark:text-neutral-300" />
                            )}
                        </button>

                        {/* Auth Links */}
                        <div className="flex items-center space-x-2">
                            {auth.user ? (
                                <Link
                                    href="/dashboard"
                                    className="px-4 py-2 text-sm font-medium text-white rounded-full 
                                             bg-gradient-to-r from-indigo-500 via-violet-500 to-fuchsia-500 
                                             hover:shadow-lg hover:shadow-indigo-500/25 transition-all duration-200"
                                >
                                    Dashboard
                                </Link>
                            ) : (
                                <>
                                    <Link
                                        href="/login"
                                        className="px-4 py-2 text-sm font-medium text-neutral-600 dark:text-neutral-300 
                                                 hover:text-neutral-900 dark:hover:text-white transition-colors"
                                    >
                                        Sign In
                                    </Link>
                                    <Link
                                        href="/register"
                                        className="px-4 py-2 text-sm font-medium text-white rounded-full 
                                                 bg-gradient-to-r from-indigo-500 via-violet-500 to-fuchsia-500 
                                                 hover:shadow-lg hover:shadow-indigo-500/25 transition-all duration-200"
                                    >
                                        Get Started
                                    </Link>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}