"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Check, Users, Bell, Calendar, MoreHorizontal } from "lucide-react";

export default function HeroSection() {
    return (
        <section className="pt-16 pb-8 px-6">
            <div className="max-w-7xl mx-auto text-center">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 bg-violet-50 border border-violet-200 rounded-full px-4 py-1.5 mb-6">
                    <span className="text-xs text-violet-600 font-medium">✨ Introducing Maven 2.0</span>
                    <ArrowRight className="w-3 h-3 text-violet-600" />
                </div>

                {/* Headline */}
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                    All you need for seamless<br />project management
                </h1>

                {/* Subtext */}
                <p className="text-gray-500 text-base md:text-lg max-w-xl mx-auto mb-8">
                    A faster way to write, edit & collaborate on the<br />
                    notes you use for reference on your app or web.
                </p>

                {/* CTA Buttons */}
                <div className="flex items-center justify-center gap-4 mb-16">
                    <Button className="bg-violet-600 hover:bg-violet-700 text-white px-6 py-2.5 rounded-lg text-sm font-medium">
                        Get Started
                    </Button>
                    <Button variant="ghost" className="text-gray-600 hover:text-gray-900 px-4 py-2.5 text-sm font-medium flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-violet-100 flex items-center justify-center">
                            <Play className="w-3 h-3 text-violet-600 fill-violet-600" />
                        </div>
                        Watch Demo
                    </Button>
                </div>

                {/* Product Mockup */}
                <div className="relative max-w-4xl mx-auto">
                    {/* Main Card */}
                    <div className="bg-white rounded-2xl border border-gray-200 shadow-2xl shadow-gray-200/50 overflow-hidden">
                        {/* Mockup Header */}
                        <div className="p-4 border-b border-gray-100 flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="flex gap-1.5">
                                    <div className="w-3 h-3 rounded-full bg-red-400" />
                                    <div className="w-3 h-3 rounded-full bg-yellow-400" />
                                    <div className="w-3 h-3 rounded-full bg-green-400" />
                                </div>
                                <span className="text-sm text-gray-400">Maven.design.io</span>
                            </div>
                        </div>

                        {/* Mockup Content */}
                        <div className="p-6 bg-gray-50/50">
                            <div className="flex gap-4">
                                {/* Left Sidebar Mini */}
                                <div className="w-48 bg-white rounded-lg border border-gray-100 p-4 hidden md:block">
                                    <div className="flex items-center gap-2 mb-4">
                                        <div className="w-8 h-8 bg-violet-600 rounded-lg flex items-center justify-center">
                                            <span className="text-white text-xs font-bold">M</span>
                                        </div>
                                        <span className="text-sm font-medium text-gray-900">Maven Design</span>
                                    </div>
                                    <div className="space-y-2">
                                        <div className="flex items-center gap-2 px-2 py-1.5 bg-violet-50 rounded-md">
                                            <div className="w-4 h-4 bg-violet-200 rounded" />
                                            <span className="text-xs text-violet-700 font-medium">Dashboard</span>
                                        </div>
                                        <div className="flex items-center gap-2 px-2 py-1.5 text-gray-500">
                                            <div className="w-4 h-4 bg-gray-200 rounded" />
                                            <span className="text-xs">Projects</span>
                                        </div>
                                        <div className="flex items-center gap-2 px-2 py-1.5 text-gray-500">
                                            <div className="w-4 h-4 bg-gray-200 rounded" />
                                            <span className="text-xs">Tasks</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Main Content Area */}
                                <div className="flex-1 space-y-4">
                                    {/* Stats Row */}
                                    <div className="grid grid-cols-3 gap-3">
                                        <div className="bg-white rounded-lg border border-gray-100 p-3">
                                            <div className="flex items-center justify-between mb-2">
                                                <span className="text-xs text-gray-500">Active Projects</span>
                                                <Users className="w-4 h-4 text-gray-400" />
                                            </div>
                                            <p className="text-xl font-bold text-gray-900">24</p>
                                        </div>
                                        <div className="bg-white rounded-lg border border-gray-100 p-3">
                                            <div className="flex items-center justify-between mb-2">
                                                <span className="text-xs text-gray-500">Tasks Completed</span>
                                                <Check className="w-4 h-4 text-green-500" />
                                            </div>
                                            <p className="text-xl font-bold text-gray-900">156</p>
                                        </div>
                                        <div className="bg-white rounded-lg border border-gray-100 p-3">
                                            <div className="flex items-center justify-between mb-2">
                                                <span className="text-xs text-gray-500">Upcoming</span>
                                                <Calendar className="w-4 h-4 text-gray-400" />
                                            </div>
                                            <p className="text-xl font-bold text-gray-900">8</p>
                                        </div>
                                    </div>

                                    {/* Task List */}
                                    <div className="bg-white rounded-lg border border-gray-100 p-4">
                                        <div className="flex items-center justify-between mb-3">
                                            <span className="text-sm font-medium text-gray-900">Recent Tasks</span>
                                            <MoreHorizontal className="w-4 h-4 text-gray-400" />
                                        </div>
                                        <div className="space-y-2">
                                            <div className="flex items-center gap-3 py-2 border-b border-gray-50">
                                                <div className="w-4 h-4 rounded border-2 border-violet-500" />
                                                <span className="text-sm text-gray-700 flex-1">Design system updates</span>
                                                <span className="text-xs bg-violet-100 text-violet-600 px-2 py-0.5 rounded">In Progress</span>
                                            </div>
                                            <div className="flex items-center gap-3 py-2 border-b border-gray-50">
                                                <div className="w-4 h-4 rounded border-2 border-green-500 bg-green-500 flex items-center justify-center">
                                                    <Check className="w-3 h-3 text-white" />
                                                </div>
                                                <span className="text-sm text-gray-400 flex-1 line-through">User research analysis</span>
                                                <span className="text-xs bg-green-100 text-green-600 px-2 py-0.5 rounded">Completed</span>
                                            </div>
                                            <div className="flex items-center gap-3 py-2">
                                                <div className="w-4 h-4 rounded border-2 border-gray-300" />
                                                <span className="text-sm text-gray-700 flex-1">API integration review</span>
                                                <span className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded">Pending</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Right Panel */}
                                <div className="w-48 bg-white rounded-lg border border-gray-100 p-4 hidden lg:block">
                                    <div className="flex items-center justify-between mb-3">
                                        <span className="text-sm font-medium text-gray-900">Team</span>
                                        <Bell className="w-4 h-4 text-gray-400" />
                                    </div>
                                    <div className="flex -space-x-2 mb-4">
                                        <div className="w-8 h-8 rounded-full bg-blue-500 border-2 border-white" />
                                        <div className="w-8 h-8 rounded-full bg-pink-500 border-2 border-white" />
                                        <div className="w-8 h-8 rounded-full bg-green-500 border-2 border-white" />
                                        <div className="w-8 h-8 rounded-full bg-yellow-500 border-2 border-white" />
                                        <div className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white flex items-center justify-center">
                                            <span className="text-xs text-gray-600">+5</span>
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <div className="flex items-center gap-2">
                                            <div className="w-2 h-2 bg-green-500 rounded-full" />
                                            <span className="text-xs text-gray-600">4 online now</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Caption under mockup */}
                    <p className="text-xs text-gray-400 mt-4">Glimpse from a modern-day project dashboard</p>
                </div>
            </div>
        </section>
    );
}
