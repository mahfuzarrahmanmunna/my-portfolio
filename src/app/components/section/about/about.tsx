// src/components/sections/about.tsx
'use client';

import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
    Terminal,
    Code2,
    Database,
    Cloud,
    GitBranch,
    Rocket,
    Download,
    ArrowRight
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

// Tech stack data with icons
const techStack = [
    { name: 'React / Next.js', icon: <Code2 className="w-5 h-5" /> },
    { name: 'Node.js / Express', icon: <Terminal className="w-5 h-5" /> },
    { name: 'MongoDB / PostgreSQL', icon: <Database className="w-5 h-5" /> },
    { name: 'Docker / K8s', icon: <Cloud className="w-5 h-5" /> },
    { name: 'Git / CI/CD', icon: <GitBranch className="w-5 h-5" /> },
];

// Timeline data for your journey
const journey = [
    { year: '2021', title: 'Started with HTML/CSS', description: 'Built my first static websites.' },
    { year: '2022', title: 'Dived into the MERN Stack', description: 'Developed full-stack applications.' },
    { year: '2023', title: 'Embraced DevOps', description: 'Learning Docker, K8s, and CI/CD pipelines.' },
    { year: 'Now', title: 'Building & Automating', description: 'Focusing on scalable cloud solutions.' },
];

export function About() {
    return (
        <section id="about" className="relative overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5" />

            <div className="container mx-auto px-4 relative z-10">
                {/* Section Title */}
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <Badge variant="outline" className="mb-4 text-sm">ABOUT ME</Badge>
                    <h2 className="text-4xl md:text-5xl font-bold">
                        Crafting <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Digital Experiences</span>
                    </h2>
                </motion.div>

                {/* Main Content Grid */}
                <div className="grid lg:grid-cols-12 gap-8 items-center">
                    {/* Image Column - Asymmetrical */}
                    <motion.div
                        className="lg:col-span-5"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="relative group">
                            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-lg blur opacity-25 group-hover:opacity-40 transition duration-300"></div>
                            <div className="relative bg-background border rounded-lg p-1">
                                <Image
                                    src="/placeholder-about.jpg"
                                    alt="Mahfuzar Rahman Munna"
                                    width={500}
                                    height={600}
                                    className="rounded-lg"
                                />
                            </div>
                        </div>
                    </motion.div>

                    {/* Text & Journey Column */}
                    <motion.div
                        className="lg:col-span-7 space-y-8 lg:pl-12"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        {/* "Who I Am" Section */}
                        <div>
                            <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                                <Terminal className="w-6 h-6 text-primary" />
                                Who I Am
                            </h3>
                            <p className="text-muted-foreground leading-relaxed">
                                Hey, I'm <span className="font-semibold text-foreground">Mahfuzar Rahman Munna</span>. I'm a MERN Stack Developer with a growing passion for DevOps and cloud engineering. I don't just write code; I build solutions that are fast, scalable, and maintainable. My journey is driven by curiosity and a constant desire to learn and automate.
                            </p>
                        </div>

                        {/* "What I Do" Section */}
                        <div>
                            <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                                <Code2 className="w-6 h-6 text-primary" />
                                What I Do
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {techStack.map((tech, index) => (
                                    <Badge key={index} variant="secondary" className="gap-1 px-3 py-1">
                                        {tech.icon}
                                        {tech.name}
                                    </Badge>
                                ))}
                            </div>
                        </div>

                        {/* "My Journey" Timeline */}
                        <div>
                            <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                                <Rocket className="w-6 h-6 text-primary" />
                                My Journey
                            </h3>
                            <div className="space-y-4 border-l-2 border-muted pl-6">
                                {journey.map((item, index) => (
                                    <motion.div
                                        key={index}
                                        className="relative"
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.3, delay: index * 0.1 }}
                                    >
                                        <div className="absolute -left-[30px] top-0 w-4 h-4 bg-primary rounded-full border-4 border-background"></div>
                                        <p className="text-sm font-semibold text-primary">{item.year}</p>
                                        <p className="font-medium">{item.title}</p>
                                        <p className="text-sm text-muted-foreground">{item.description}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* Call to Action */}
                        <Button asChild size="lg" className="group gap-2">
                            <Link href="/cv.pdf" download>
                                <Download className="w-5 h-5" /> Download My CV
                                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                            </Link>
                        </Button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}