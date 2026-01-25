"use client";

import React from "react";
import { CheckCircle, Settings, Shield } from "lucide-react";

export default function ExperienceSection() {
    const features = [
        {
            icon: CheckCircle,
            title: "Simple Performance",
            description: "Streamline your projects with innovative solutions, boost productivity & visibility.",
            iconBg: "bg-blue-50",
            iconColor: "text-blue-500",
        },
        {
            icon: Settings,
            title: "Innovative Design",
            description: "Find the right design to keep track of work and make creative project management simple.",
            iconBg: "bg-purple-50",
            iconColor: "text-purple-500",
        },
        {
            icon: Shield,
            title: "Robust Security",
            description: "Protect your data at every step. Keep your data safe and work.",
            iconBg: "bg-green-50",
            iconColor: "text-green-500",
        },
    ];

    return (
        <section className="py-20 px-6 bg-white">
            <div className="max-w-6xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <p className="text-violet-600 text-sm font-medium mb-2">— Features</p>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Experience the Difference
                    </h2>
                    <p className="text-gray-500 max-w-md mx-auto text-sm">
                        Unleash full potential for your team and use the power
                        of visual projects and tasks all together.
                    </p>
                </div>

                {/* Feature Cards */}
                <div className="grid md:grid-cols-3 gap-6">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="bg-gray-50/50 border border-gray-100 rounded-2xl p-6 hover:shadow-lg hover:shadow-gray-100 transition-all duration-300"
                        >
                            <div className={`w-12 h-12 ${feature.iconBg} rounded-xl flex items-center justify-center mb-4`}>
                                <feature.icon className={`w-6 h-6 ${feature.iconColor}`} />
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                            <p className="text-gray-500 text-sm leading-relaxed">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
