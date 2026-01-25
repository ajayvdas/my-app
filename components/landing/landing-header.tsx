"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Rocket } from "lucide-react";

export default function LandingHeader() {
    return (
        <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                {/* Logo */}
                <Link href="/landing" className="flex items-center gap-2">
                    <div className="w-7 h-7 bg-violet-600 rounded-lg flex items-center justify-center">
                        <Rocket className="w-4 h-4 text-white" />
                    </div>
                    <span className="font-semibold text-gray-900 text-lg">Maven</span>
                </Link>

                {/* Navigation */}
                <nav className="hidden md:flex items-center gap-8">
                    <Link href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                        Products
                    </Link>
                    <Link href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                        Solutions
                    </Link>
                    <Link href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                        Resources
                    </Link>
                    <Link href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                        Pricing
                    </Link>
                </nav>

                {/* Auth Buttons */}
                <div className="flex items-center gap-3">
                    <Button variant="ghost" className="text-sm text-gray-600 hover:text-gray-900 font-normal">
                        Login
                    </Button>
                    <Button className="bg-violet-600 hover:bg-violet-700 text-white text-sm px-4 py-2 rounded-lg">
                        Get Started
                    </Button>
                </div>
            </div>
        </header>
    );
}
