"use client";

import React from "react";
import { Button } from "@/components/ui/button";

export default function CtaSection() {
    return (
        <section className="py-16 px-6">
            <div className="max-w-4xl mx-auto">
                <div className="bg-gradient-to-r from-violet-600 to-violet-700 rounded-3xl p-10 md:p-14 text-center relative overflow-hidden">
                    {/* Subtle pattern overlay */}
                    <div className="absolute inset-0 opacity-10">
                        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.3)_0%,transparent_50%)]" />
                        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.2)_0%,transparent_50%)]" />
                    </div>

                    <div className="relative z-10">
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
                            Elevate Your Work Today
                        </h2>
                        <p className="text-violet-200 text-sm md:text-base max-w-lg mx-auto mb-8">
                            Discover how your teams can enhance productivity with Maven
                            - providing resources and tools that enable you to do more.
                        </p>
                        <div className="flex items-center justify-center gap-4">
                            <Button className="bg-white text-violet-600 hover:bg-violet-50 px-6 py-2.5 rounded-lg text-sm font-medium">
                                Get Started Free
                            </Button>
                            <Button variant="outline" className="border-white/30 text-white hover:bg-white/10 px-6 py-2.5 rounded-lg text-sm font-medium">
                                Book a Demo
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
