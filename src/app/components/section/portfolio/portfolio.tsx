// src/components/sections/portfolio.tsx
'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { ExternalLink } from 'lucide-react';

const projectsData = [
    { id: 1, title: 'E-commerce Platform', category: 'Web Development', image: '/project1.jpg' },
    { id: 2, title: 'Mobile Banking App UI', category: 'UI/UX', image: '/project2.jpg' },
    { id: 3, title: 'Corporate Branding', category: 'Branding', image: '/project3.jpg' },
    { id: 4, title: 'SaaS Dashboard', category: 'Web Development', image: '/project4.jpg' },
    { id: 5, title: 'Portfolio Website', category: 'UI/UX', image: '/project5.jpg' },
    { id: 6, title: 'Logo Design', category: 'Branding', image: '/project6.jpg' },
];

const categories = ['All', 'Web Development', 'UI/UX', 'Branding'];

export function Portfolio() {
    const [activeCategory, setActiveCategory] = useState('All');

    const filteredProjects = activeCategory === 'All'
        ? projectsData
        : projectsData.filter(project => project.category === activeCategory);

    return (
        <section id="portfolio" className="py-20 bg-muted/50">
            <div className="container mx-auto px-4">
                <motion.h2
                    className="text-3xl md:text-4xl font-bold text-center mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    My Portfolio
                </motion.h2>

                <div className="flex justify-center mb-8 flex-wrap gap-2">
                    {categories.map((category) => (
                        <Button
                            key={category}
                            variant={activeCategory === category ? 'default' : 'outline'}
                            onClick={() => setActiveCategory(category)}
                        >
                            {category}
                        </Button>
                    ))}
                </div>

                <motion.div
                    layout
                    className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    {filteredProjects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            layout
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            transition={{ duration: 0.3, delay: index * 0.1 }}
                        >
                            <Card className="overflow-hidden group">
                                <CardContent className="p-0">
                                    <div className="relative overflow-hidden">
                                        <Image src={project.image} alt={project.title} width={400} height={250} className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110" />
                                        <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            <Button size="sm" className="gap-2">
                                                <ExternalLink className="w-4 h-4" /> View Project
                                            </Button>
                                        </div>
                                    </div>
                                    <div className="p-4">
                                        <h3 className="font-semibold text-lg">{project.title}</h3>
                                        <p className="text-sm text-muted-foreground">{project.category}</p>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}