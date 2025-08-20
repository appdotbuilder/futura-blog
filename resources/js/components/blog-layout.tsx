import React from 'react';
import { BlogNavbar } from './blog-navbar';
import { BlogFooter } from './blog-footer';

interface BlogLayoutProps {
    children: React.ReactNode;
    [key: string]: unknown;
}

export default function BlogLayout({ children }: BlogLayoutProps) {
    return (
        <div className="min-h-screen bg-neutral-50 dark:bg-neutral-950 text-neutral-900 dark:text-white">
            <BlogNavbar />
            <main className="flex-1">
                {children}
            </main>
            <BlogFooter />
        </div>
    );
}