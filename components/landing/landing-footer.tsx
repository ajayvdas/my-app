"use client";

import React from "react";
import Link from "next/link";
import { Rocket, Twitter, Linkedin, Github, Instagram } from "lucide-react";

export default function LandingFooter() {
    const footerLinks = {
        Product: ["Features", "Integrations", "Pricing", "Changelog", "Roadmap"],
        General: ["About", "Blog", "Careers", "Press", "Partners"],
        Support: ["Help Center", "Community", "Status", "Contact", "Feedback"],
        Resources: ["Documentation", "Guides", "API Reference", "Templates", "Webinars"],
    };

    return (
        <footer className="bg-white border-t border-gray-100 py-12 px-6">
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
                    {/* Brand Column */}
                    <div className="col-span-2 md:col-span-1">
                        <Link href="/landing" className="flex items-center gap-2 mb-4">
                            <div className="w-7 h-7 bg-violet-600 rounded-lg flex items-center justify-center">
                                <Rocket className="w-4 h-4 text-white" />
                            </div>
                            <span className="font-semibold text-gray-900 text-lg">Maven</span>
                        </Link>
                        <p className="text-xs text-gray-500 leading-relaxed mb-4">
                            A simple way to track your favorite projects&apos;<br />
                            manage with best for your team and organization.
                        </p>
                        {/* Social Icons */}
                        <div className="flex items-center gap-3">
                            <Link href="#" className="text-gray-400 hover:text-gray-600 transition-colors">
                                <Twitter className="w-4 h-4" />
                            </Link>
                            <Link href="#" className="text-gray-400 hover:text-gray-600 transition-colors">
                                <Linkedin className="w-4 h-4" />
                            </Link>
                            <Link href="#" className="text-gray-400 hover:text-gray-600 transition-colors">
                                <Github className="w-4 h-4" />
                            </Link>
                            <Link href="#" className="text-gray-400 hover:text-gray-600 transition-colors">
                                <Instagram className="w-4 h-4" />
                            </Link>
                        </div>
                    </div>

                    {/* Link Columns */}
                    {Object.entries(footerLinks).map(([category, links]) => (
                        <div key={category}>
                            <h4 className="text-sm font-semibold text-gray-900 mb-4">{category}</h4>
                            <ul className="space-y-2">
                                {links.map((link) => (
                                    <li key={link}>
                                        <Link href="#" className="text-xs text-gray-500 hover:text-gray-700 transition-colors">
                                            {link}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Bottom Bar */}
                <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-gray-100">
                    <p className="text-xs text-gray-400 mb-4 md:mb-0">
                        © 2024 Maven Inc. All rights reserved.
                    </p>
                    <div className="flex items-center gap-6">
                        <Link href="#" className="text-xs text-gray-400 hover:text-gray-600 transition-colors">
                            Terms of Service
                        </Link>
                        <Link href="#" className="text-xs text-gray-400 hover:text-gray-600 transition-colors">
                            Privacy Policy
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
