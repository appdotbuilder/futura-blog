import React from 'react';
import { Head, Link } from '@inertiajs/react';
import BlogLayout from '@/components/blog-layout';
import { ArrowRightIcon, SparklesIcon, UsersIcon, BookOpenIcon, RocketLaunchIcon } from '@/components/icons';

export default function About() {
    const features = [
        {
            icon: <SparklesIcon className="h-6 w-6" />,
            title: "Modern Design",
            description: "Built with 2025's design trends in mind, featuring clean typography and futuristic aesthetics."
        },
        {
            icon: <UsersIcon className="h-6 w-6" />,
            title: "Community Focused",
            description: "Connect with writers and readers from around the world in our growing community."
        },
        {
            icon: <BookOpenIcon className="h-6 w-6" />,
            title: "Rich Content",
            description: "Discover in-depth articles, tutorials, and stories across diverse topics."
        },
        {
            icon: <RocketLaunchIcon className="h-6 w-6" />,
            title: "Fast & Responsive",
            description: "Lightning-fast performance with a fully responsive design that works everywhere."
        }
    ];

    const team = [
        {
            name: "Alex Chen",
            role: "Founder & CEO",
            description: "Passionate about building platforms that connect people through storytelling."
        },
        {
            name: "Sarah Johnson",
            role: "Head of Content",
            description: "Curates amazing stories and helps writers reach their full potential."
        },
        {
            name: "Michael Brown",
            role: "Lead Developer",
            description: "Crafts beautiful user experiences with cutting-edge technology."
        }
    ];

    return (
        <BlogLayout>
            <Head title="About Us - ModernBlog">
                <meta name="description" content="Learn about ModernBlog - a cutting-edge blogging platform where stories come alive. Discover our mission, team, and vision for the future." />
            </Head>

            {/* Hero Section */}
            <section className="bg-gradient-to-b from-transparent to-neutral-100/60 dark:to-neutral-925/60 py-16 lg:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center space-y-8">
                        <div className="space-y-4">
                            <h1 className="text-4xl lg:text-6xl font-semibold tracking-tight">
                                About{' '}
                                <span className="bg-gradient-to-r from-indigo-500 via-violet-500 to-fuchsia-500 bg-clip-text text-transparent">
                                    ModernBlog
                                </span>
                            </h1>
                            <p className="text-xl leading-relaxed text-neutral-600 dark:text-neutral-300 max-w-3xl mx-auto">
                                We're building the future of blogging with cutting-edge technology, 
                                beautiful design, and a community-first approach.
                            </p>
                        </div>

                        <div className="flex justify-center">
                            <div className="w-32 h-32 rounded-full bg-gradient-to-r from-indigo-500 via-violet-500 to-fuchsia-500 
                                          flex items-center justify-center text-white text-6xl font-bold shadow-2xl">
                                📝
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission Section */}
            <section className="py-16">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="space-y-12">
                        <div className="text-center space-y-4">
                            <h2 className="text-3xl font-semibold tracking-tight">
                                🎯 Our Mission
                            </h2>
                            <p className="text-lg text-neutral-600 dark:text-neutral-300">
                                Empowering voices and connecting minds through the power of storytelling
                            </p>
                        </div>

                        <div className="prose prose-neutral dark:prose-invert prose-lg max-w-none">
                            <p>
                                At ModernBlog, we believe that everyone has a unique story to tell and valuable insights to share. 
                                Our platform is designed to make it easy for writers to create, publish, and share their content 
                                with a global audience.
                            </p>
                            <p>
                                Built with the latest web technologies and featuring a futuristic design aesthetic, 
                                ModernBlog represents the next evolution of blogging platforms. We combine beautiful, 
                                responsive design with powerful features to create an exceptional experience for both 
                                writers and readers.
                            </p>
                            <p>
                                Whether you're a professional writer, a passionate hobbyist, or someone just starting 
                                their writing journey, ModernBlog provides the tools and community you need to succeed. 
                                Join us in shaping the future of digital storytelling.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-16 bg-white/40 dark:bg-neutral-900/20 backdrop-blur">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="space-y-12">
                        <div className="text-center space-y-4">
                            <h2 className="text-3xl font-semibold tracking-tight">
                                ✨ What Makes Us Different
                            </h2>
                            <p className="text-lg text-neutral-600 dark:text-neutral-300">
                                Modern features for the next generation of content creators
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {features.map((feature, index) => (
                                <div
                                    key={index}
                                    className="p-6 rounded-2xl border bg-white/80 backdrop-blur shadow-lg
                                             dark:bg-neutral-900/60 dark:border-neutral-800"
                                >
                                    <div className="space-y-4">
                                        <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-indigo-500 to-fuchsia-500 
                                                      flex items-center justify-center text-white">
                                            {feature.icon}
                                        </div>
                                        <div className="space-y-2">
                                            <h3 className="text-xl font-semibold tracking-tight">
                                                {feature.title}
                                            </h3>
                                            <p className="leading-relaxed text-neutral-600 dark:text-neutral-300">
                                                {feature.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="space-y-12">
                        <div className="text-center space-y-4">
                            <h2 className="text-3xl font-semibold tracking-tight">
                                👥 Meet Our Team
                            </h2>
                            <p className="text-lg text-neutral-600 dark:text-neutral-300">
                                The passionate people behind ModernBlog
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {team.map((member, index) => (
                                <div
                                    key={index}
                                    className="text-center p-6 rounded-2xl border bg-white/80 backdrop-blur shadow-lg
                                             dark:bg-neutral-900/60 dark:border-neutral-800"
                                >
                                    <div className="space-y-4">
                                        <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-r from-indigo-500 to-fuchsia-500 
                                                      flex items-center justify-center text-white text-2xl font-bold">
                                            {member.name.charAt(0)}
                                        </div>
                                        <div className="space-y-2">
                                            <h3 className="text-xl font-semibold tracking-tight">
                                                {member.name}
                                            </h3>
                                            <p className="text-sm font-medium text-indigo-600 dark:text-indigo-400">
                                                {member.role}
                                            </p>
                                            <p className="text-sm leading-relaxed text-neutral-600 dark:text-neutral-300">
                                                {member.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-20 bg-gradient-to-r from-indigo-500/10 via-violet-500/10 to-fuchsia-500/10">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="space-y-8">
                        <div className="space-y-4">
                            <h2 className="text-3xl lg:text-4xl font-semibold tracking-tight">
                                Ready to Join Our Community? 🚀
                            </h2>
                            <p className="text-lg text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto">
                                Start your writing journey with ModernBlog today. Share your stories, 
                                connect with readers, and be part of something amazing.
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
                                Get Started Today
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
                                Explore Stories
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </BlogLayout>
    );
}