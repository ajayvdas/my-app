"use client";

import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function FaqSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const faqs = [
        {
            question: "How does the platform work and getting started?",
            answer: "Getting started is simple. Sign up for a free account, create your first project, and invite your team members. Our intuitive interface guides you through setting up tasks, timelines, and collaboration workflows.",
        },
        {
            question: "What information is usually shared for the browser addon?",
            answer: "The browser extension securely syncs your project data and enables quick task creation, time tracking, and notifications directly from your browser without switching contexts.",
        },
        {
            question: "About installing and importing your installation files for your own office?",
            answer: "We offer enterprise installation options including on-premise deployment. Contact our sales team for custom installation packages and data migration assistance.",
        },
        {
            question: "How to integrate a quick API with third party auth?",
            answer: "Our comprehensive API documentation covers OAuth 2.0 integration, webhook setup, and RESTful endpoints for seamless third-party authentication and data synchronization.",
        },
        {
            question: "Can I cancel and then re-add to the dues/costs of my?",
            answer: "Yes, you can cancel your subscription at any time. Reactivation is instant, and we'll prorate your billing based on your usage period. No hidden fees or penalties.",
        },
    ];

    return (
        <section className="py-20 px-6 bg-gray-50/30">
            <div className="max-w-3xl mx-auto">
                {/* Section Header */}
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-10">
                    <div>
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                            Need Help?
                        </h2>
                        <p className="text-gray-500 text-sm">
                            Find quick answers to common questions with our help<br />
                            from FAQs or platform.
                        </p>
                    </div>
                    <Button className="bg-violet-600 hover:bg-violet-700 text-white px-5 py-2 rounded-lg text-sm font-medium whitespace-nowrap">
                        Contact Support
                    </Button>
                </div>

                {/* FAQ Accordion */}
                <div className="space-y-3">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="bg-white border border-gray-200 rounded-xl overflow-hidden"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 transition-colors"
                            >
                                <span className="text-sm font-medium text-gray-900 pr-4">{faq.question}</span>
                                {openIndex === index ? (
                                    <ChevronUp className="w-5 h-5 text-gray-400 shrink-0" />
                                ) : (
                                    <ChevronDown className="w-5 h-5 text-gray-400 shrink-0" />
                                )}
                            </button>
                            {openIndex === index && (
                                <div className="px-4 pb-4">
                                    <p className="text-sm text-gray-500 leading-relaxed">{faq.answer}</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
