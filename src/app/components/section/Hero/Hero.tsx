// src/components/sections/hero.tsx
'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Download, Github, Linkedin, Twitter } from 'lucide-react';
import Link from 'next/link';

export function Hero() {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center">
            <div className="container mx-auto px-4 py-16 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h1 className="text-4xl md:text-6xl font-bold">
                        Hi, I am <span className="text-primary">Your Name</span>
                    </h1>
                    <p className="mt-4 text-xl md:text-2xl text-muted-foreground">
                        Full Stack Developer
                    </p>
                    <p className="mt-6 max-w-2xl mx-auto text-muted-foreground">
                        I am a passionate developer specializing in building modern, responsive web applications with cutting-edge technologies.
                    </p>
                </motion.div>

                <motion.div
                    className="mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <Button size="lg" className="gap-2">
                        <Download className="w-5 h-5" />
                        Download CV
                    </Button>
                    <Link href="#contact">
                        <Button variant="outline" size="lg">Get In Touch</Button>
                    </Link>
                </motion.div>

                <motion.div
                    className="mt-12 flex justify-center gap-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    <Link href="https://github.com" target="_blank" aria-label="Github">
                        <Github className="w-6 h-6 hover:text-primary transition-colors" />
                    </Link>
                    <Link href="https://linkedin.com" target="_blank" aria-label="LinkedIn">
                        <Linkedin className="w-6 h-6 hover:text-primary transition-colors" />
                    </Link>
                    <Link href="https://twitter.com" target="_blank" aria-label="Twitter">
                        <Twitter className="w-6 h-6 hover:text-primary transition-colors" />
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}