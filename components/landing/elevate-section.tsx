"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, Circle, Calendar, MoreHorizontal, Smile, Paperclip, Send, User } from "lucide-react";

export default function ElevateSection() {
    return (
        <section className="py-20 px-6 bg-gray-50/30">
            <div className="max-w-6xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <p className="text-violet-600 text-sm font-medium mb-2">— Performance</p>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Elevate Your Team&apos;s Performance
                    </h2>
                    <p className="text-gray-500 max-w-lg mx-auto text-sm">
                        Streamline your complete project management
                        efforts seamlessly all together, and stay aligned.
                    </p>
                </div>

                {/* Feature 1: Real-Time Collaboration */}
                <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
                    <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">Real-Time Collaboration</h3>
                        <p className="text-gray-500 mb-6 leading-relaxed">
                            Keep everyone on the same page with instant
                            updates and real-time collaboration. Keep everyone in
                            the same loop with instant updates and files.
                        </p>
                        <Button className="bg-violet-600 hover:bg-violet-700 text-white px-5 py-2 rounded-lg text-sm font-medium">
                            Learn More
                        </Button>
                    </div>
                    <div className="bg-white rounded-2xl border border-gray-200 shadow-xl shadow-gray-100 p-5">
                        {/* Collaboration Mockup */}
                        <div className="space-y-3">
                            {/* Task rows */}
                            <div className="flex items-center gap-3 py-2 px-3 bg-gray-50 rounded-lg">
                                <div className="w-5 h-5 rounded border-2 border-violet-500 flex items-center justify-center">
                                    <Check className="w-3 h-3 text-violet-500" />
                                </div>
                                <span className="text-sm text-gray-700 flex-1">Design system updates</span>
                                <div className="flex -space-x-1.5">
                                    <div className="w-6 h-6 rounded-full bg-blue-500 border-2 border-white" />
                                    <div className="w-6 h-6 rounded-full bg-pink-500 border-2 border-white" />
                                </div>
                                <span className="text-xs text-gray-400">Jan 15</span>
                            </div>
                            <div className="flex items-center gap-3 py-2 px-3 bg-white rounded-lg border border-gray-100">
                                <Circle className="w-5 h-5 text-gray-300" />
                                <span className="text-sm text-gray-700 flex-1">User research analysis</span>
                                <div className="w-6 h-6 rounded-full bg-green-500 border-2 border-white" />
                                <span className="text-xs text-gray-400">Jan 18</span>
                            </div>
                            <div className="flex items-center gap-3 py-2 px-3 bg-white rounded-lg border border-gray-100">
                                <Circle className="w-5 h-5 text-gray-300" />
                                <span className="text-sm text-gray-700 flex-1">API documentation review</span>
                                <div className="flex -space-x-1.5">
                                    <div className="w-6 h-6 rounded-full bg-yellow-500 border-2 border-white" />
                                    <div className="w-6 h-6 rounded-full bg-purple-500 border-2 border-white" />
                                    <div className="w-6 h-6 rounded-full bg-gray-300 border-2 border-white flex items-center justify-center">
                                        <span className="text-[10px] text-gray-600">+2</span>
                                    </div>
                                </div>
                                <span className="text-xs text-gray-400">Jan 20</span>
                            </div>
                            {/* Calendar mini */}
                            <div className="mt-4 p-3 bg-violet-50/50 rounded-lg border border-violet-100">
                                <div className="flex items-center gap-2 mb-2">
                                    <Calendar className="w-4 h-4 text-violet-500" />
                                    <span className="text-xs font-medium text-violet-700">Upcoming Deadlines</span>
                                </div>
                                <div className="flex gap-2">
                                    <span className="text-xs bg-white px-2 py-1 rounded text-gray-600">Today (3)</span>
                                    <span className="text-xs bg-violet-600 text-white px-2 py-1 rounded">This Week (8)</span>
                                    <span className="text-xs bg-white px-2 py-1 rounded text-gray-600">Later (12)</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Feature 2: In-App Messaging */}
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="order-2 md:order-1 bg-white rounded-2xl border border-gray-200 shadow-xl shadow-gray-100 p-5">
                        {/* Messaging Mockup */}
                        <div className="flex gap-4">
                            {/* Chat list */}
                            <div className="w-1/3 border-r border-gray-100 pr-4">
                                <div className="flex items-center justify-between mb-3">
                                    <span className="text-sm font-medium text-gray-900">Team / Members</span>
                                </div>
                                <div className="space-y-2">
                                    <div className="flex items-center gap-2 p-2 bg-violet-50 rounded-lg">
                                        <div className="w-8 h-8 rounded-full bg-blue-500" />
                                        <div className="flex-1 min-w-0">
                                            <p className="text-xs font-medium text-gray-900 truncate">Sarah Chen</p>
                                            <p className="text-[10px] text-gray-400 truncate">Active now</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2 p-2">
                                        <div className="w-8 h-8 rounded-full bg-pink-500" />
                                        <div className="flex-1 min-w-0">
                                            <p className="text-xs font-medium text-gray-700 truncate">Mike Johnson</p>
                                            <p className="text-[10px] text-gray-400 truncate">2 min ago</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2 p-2">
                                        <div className="w-8 h-8 rounded-full bg-green-500" />
                                        <div className="flex-1 min-w-0">
                                            <p className="text-xs font-medium text-gray-700 truncate">Emily Davis</p>
                                            <p className="text-[10px] text-gray-400 truncate">1 hour ago</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Chat window */}
                            <div className="flex-1">
                                <div className="flex items-center gap-2 pb-3 border-b border-gray-100 mb-3">
                                    <div className="w-8 h-8 rounded-full bg-blue-500" />
                                    <div>
                                        <p className="text-sm font-medium text-gray-900">Sarah Chen</p>
                                        <p className="text-xs text-green-500">Online</p>
                                    </div>
                                    <MoreHorizontal className="w-4 h-4 text-gray-400 ml-auto" />
                                </div>
                                <div className="space-y-3 mb-4">
                                    <div className="flex gap-2">
                                        <div className="w-6 h-6 rounded-full bg-blue-500 shrink-0" />
                                        <div className="bg-gray-100 rounded-lg rounded-tl-none px-3 py-2 max-w-[80%]">
                                            <p className="text-xs text-gray-700">Hey! Have you checked the latest design updates?</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-2 justify-end">
                                        <div className="bg-violet-600 rounded-lg rounded-tr-none px-3 py-2 max-w-[80%]">
                                            <p className="text-xs text-white">Yes! They look great. I have a few suggestions.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-2">
                                        <div className="w-6 h-6 rounded-full bg-blue-500 shrink-0" />
                                        <div className="bg-gray-100 rounded-lg rounded-tl-none px-3 py-2 max-w-[80%]">
                                            <p className="text-xs text-gray-700">Perfect, let&apos;s discuss in the meeting!</p>
                                        </div>
                                    </div>
                                </div>
                                {/* Input */}
                                <div className="flex items-center gap-2 bg-gray-50 rounded-lg px-3 py-2">
                                    <Smile className="w-4 h-4 text-gray-400" />
                                    <input type="text" placeholder="Type a message..." className="flex-1 bg-transparent text-xs outline-none text-gray-600 placeholder:text-gray-400" />
                                    <Paperclip className="w-4 h-4 text-gray-400" />
                                    <Send className="w-4 h-4 text-violet-500" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="order-1 md:order-2">
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">In-App Messaging</h3>
                        <p className="text-gray-500 mb-6 leading-relaxed">
                            Never miss a conversation. Let the entire team
                            discuss, BRAG, and chat. Elevate the team
                            conversation to share ideas, give and receive
                            feedback.
                        </p>
                        <Button className="bg-violet-600 hover:bg-violet-700 text-white px-5 py-2 rounded-lg text-sm font-medium">
                            Explore
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
