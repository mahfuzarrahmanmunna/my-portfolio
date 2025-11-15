// src/components/sections/services.tsx
'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Code, Palette, Smartphone, Zap } from 'lucide-react';

const servicesData = [
    {
        icon: <Code className="w-10 h-10 text-primary" />,
        title: 'Web Development',
        description: 'Building robust and scalable web applications using modern frameworks like Next.js and Node.js.',
    },
    {
        icon: <Palette className="w-10 h-10 text-primary" />,
        title: 'UI/UX Design',
        description: 'Creating intuitive and visually appealing user interfaces with a focus on user experience.',
    },
    {
        icon: <Smartphone className="w-10 h-10 text-primary" />,
        title: 'Responsive Design',
        description: 'Ensuring your website looks and functions perfectly on all devices, from mobile to desktop.',
    },
    {
        icon: <Zap className="w-10 h-10 text-primary" />,
        title: 'Performance Optimization',
        description: 'Optimizing your website for speed and performance to provide the best user experience.',
    },
];

export function Services() {
    return (
        <section id="services" className="py-20 bg-muted/50">
            <div className="container mx-auto px-4">
                <motion.h2
                    className="text-3xl md:text-4xl font-bold text-center mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    My Services
                </motion.h2>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {servicesData.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <Card className="text-center h-full">
                                <CardHeader>
                                    <div className="mx-auto mb-4">{service.icon}</div>
                                    <CardTitle>{service.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <CardDescription>{service.description}</CardDescription>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}