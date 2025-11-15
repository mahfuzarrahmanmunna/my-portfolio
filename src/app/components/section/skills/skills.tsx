// src/components/sections/skills.tsx
'use client';

import { motion } from 'framer-motion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const codingSkills = [
    { name: 'HTML/CSS', level: 95 },
    { name: 'TypeScript', level: 90 },
    { name: 'React/Next.js', level: 85 },
    { name: 'Node.js', level: 80 },
    { name: 'Python', level: 70 },
];

const professionalSkills = [
    { name: 'Communication', level: 90 },
    { name: 'Teamwork', level: 95 },
    { name: 'Problem-Solving', level: 85 },
    { name: 'Time Management', level: 80 },
];

export function Skills() {
    return (
        <section id="skills" className="py-20">
            <div className="container mx-auto px-4">
                <motion.h2
                    className="text-3xl md:text-4xl font-bold text-center mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    My Skills
                </motion.h2>
                <Tabs defaultValue="coding" className="max-w-3xl mx-auto">
                    <TabsList className="grid w-full grid-cols-2">
                        <TabsTrigger value="coding">Coding Skills</TabsTrigger>
                        <TabsTrigger value="professional">Professional Skills</TabsTrigger>
                    </TabsList>
                    <TabsContent value="coding" className="mt-8">
                        <Card>
                            <CardHeader>
                                <CardTitle>Technical Proficiency</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                {codingSkills.map((skill, index) => (
                                    <div key={index}>
                                        <div className="flex justify-between mb-1">
                                            <span>{skill.name}</span>
                                            <span>{skill.level}%</span>
                                        </div>
                                        <Progress value={skill.level} className="w-full" />
                                    </div>
                                ))}
                            </CardContent>
                        </Card>
                    </TabsContent>
                    <TabsContent value="professional" className="mt-8">
                        <Card>
                            <CardHeader>
                                <CardTitle>Professional Competencies</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                {professionalSkills.map((skill, index) => (
                                    <div key={index}>
                                        <div className="flex justify-between mb-1">
                                            <span>{skill.name}</span>
                                            <span>{skill.level}%</span>
                                        </div>
                                        <Progress value={skill.level} className="w-full" />
                                    </div>
                                ))}
                            </CardContent>
                        </Card>
                    </TabsContent>
                </Tabs>
            </div>
        </section>
    );
}