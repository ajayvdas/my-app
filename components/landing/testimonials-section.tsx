"use client";

import React from "react";
import { Star } from "lucide-react";

export default function TestimonialsSection() {
    const testimonials = [
        {
            quote: "Tremendous, we spend less 5 hours managing tasks, get ahead of all expectations, and know where we were lagging.",
            author: "John Smith",
            role: "Product Manager",
            company: "TechFlow Inc",
            avatar: "bg-blue-500",
            rating: 5,
        },
        {
            quote: "Now my end-to-end sales are completely designed, and our launch projects go smoothly and without issues to respond on time and we use Maven now.",
            author: "Sarah Johnson",
            role: "Sales Director",
            company: "Growth Labs",
            avatar: "bg-pink-500",
            rating: 5,
        },
        {
            quote: "Maven has reduced our project delivery and workflow time efficiently and moved a lot. Process has simplified completely.",
            author: "Mike Davis",
            role: "Operations Lead",
            company: "ScaleUp Co",
            avatar: "bg-green-500",
            rating: 5,
        },
        {
            quote: "The team was struggling greatly, so by taking shifts, seeing tasks and delivering in time now our service department has gone up by 40%.",
            author: "Emily Chen",
            role: "Marketing Director",
            company: "InnovateTech",
            avatar: "bg-purple-500",
            rating: 5,
        },
        {
            quote: "Using Maven for a lot of time, completely all of our clients are happy with our delivery and projects now, I manage and stay in sync daily.",
            author: "David Wilson",
            role: "CEO",
            company: "StartupX",
            avatar: "bg-orange-500",
            rating: 5,
        },
        {
            quote: "Workflow collaboration got better. I found a same way of working which now is making a lot of team members comfortable using Maven.",
            author: "Lisa Thompson",
            role: "Team Lead",
            company: "DesignHub",
            avatar: "bg-teal-500",
            rating: 5,
        },
    ];

    return (
        <section className="py-20 px-6 bg-white">
            <div className="max-w-6xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <p className="text-violet-600 text-sm font-medium mb-2">— Testimonials</p>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Trusted by Teams
                    </h2>
                    <p className="text-gray-500 max-w-lg mx-auto text-sm">
                        Real stories of partnership experience with Maven from
                        new startups and enterprise companies.
                    </p>
                </div>

                {/* Testimonials Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className="bg-gray-50/50 border border-gray-100 rounded-2xl p-6 hover:shadow-lg hover:shadow-gray-100 transition-all duration-300"
                        >
                            {/* Rating Stars */}
                            <div className="flex gap-1 mb-4">
                                {Array.from({ length: testimonial.rating }).map((_, i) => (
                                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                ))}
                            </div>

                            {/* Quote */}
                            <p className="text-gray-600 text-sm leading-relaxed mb-6">
                                &ldquo;{testimonial.quote}&rdquo;
                            </p>

                            {/* Author */}
                            <div className="flex items-center gap-3">
                                <div className={`w-10 h-10 rounded-full ${testimonial.avatar}`} />
                                <div>
                                    <p className="text-sm font-semibold text-gray-900">{testimonial.author}</p>
                                    <p className="text-xs text-gray-500">{testimonial.role} at {testimonial.company}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
