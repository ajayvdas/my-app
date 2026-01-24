"use client"

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"

import { ProjectHeader } from "./project-header"
import { ProjectTitle } from "./project-title"
import { ProjectMetadata } from "./project-metadata"
import { ProjectOverview } from "./project-overview"
import { ProjectSidebar } from "./project-sidebar"
import { WorkstreamBreakdown } from "./workstream-breakdown"
import type { TimelineRowProps } from "@/lib/types/project"

// Mock data - In real app, this would come from props or API
const projectData = {
    title: "Fintech Mobile App Redesign",
    id: "1",
    priority: "high" as const,
    location: "Australia",
    sprint: "MVP 2 weeks",
    lastSync: "Just now",
    isActive: true,
    isAssignedToMe: true,
    description: "The internal project aims to optimize user experience and interface for the PM System Core. The goal is to standardize UX, enhance usability, and create a design content repository for daily publication on social media.",
    estimate: "1 months",
    dueDate: "31 Dec 2025",
    daysRemaining: 21,
    progress: 70,
    status: "active" as const,
    group: null,
    label: "Design",
    pic: {
        name: "John Doe",
        initials: "JD",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face"
    },
    support: {
        initials: "S"
    }
}

const overviewData = {
    description: projectData.description,
    inScope: [
        "UX research (existing users, light interviews)",
        "Core flows redesign (Onboarding, Payment, Transaction history)",
        "Design system (starter components)",
        "Usability fixes for critical flows"
    ],
    outOfScope: [
        "New feature ideation",
        "Backend logic changes",
        "Marketing landing pages"
    ],
    expectedOutcomes: [
        "Reduce payment flow steps from 6 → 4",
        "Increase task success rate (usability test) from 70% → 90%",
        "Deliver production-ready UI for MVP build",
        "Enable dev handoff without design clarification loops"
    ],
    keyFeatures: {
        p0: ["Onboarding & KYC flow", "Payment confirmation UX"],
        p1: ["Transaction history & filters", "Error / empty states"],
        p2: ["Visual polish & motion guidelines"]
    },
    timelineTasks: [
        {
            name: "Audit existing flows",
            taskLabel: "Audit existing flows",
            taskColor: "bg-gray-500 text-white dark:bg-gray-600",
            startCol: 1,
            span: 2
        },
        {
            name: "Redesign onboarding & payment",
            taskLabel: "Redesign onboarding & payment",
            taskColor: "bg-blue-500 text-white",
            startCol: 2,
            span: 3
        },
        {
            name: "Usability testing",
            taskLabel: "Usability testing",
            taskColor: "bg-purple-500 text-white",
            startCol: 4,
            span: 2
        },
        {
            name: "Iterate based on feedback",
            taskLabel: "Iterate based on feedback",
            taskColor: "bg-gray-500 text-white dark:bg-gray-600",
            startCol: 5,
            span: 3
        }
    ] as TimelineRowProps[]
}

export default function ProjectDetailPage() {
    return (
        <div className="flex flex-1 flex-col m-2 border rounded-lg min-w-0 overflow-x-hidden">
            {/* Breadcrumb Header */}
            <ProjectHeader projectTitle={projectData.title} />

            {/* Main Content Area */}
            <div className="flex flex-1 overflow-hidden">
                {/* Left Content */}
                <main className="flex-1 overflow-y-auto p-6">
                    <ProjectTitle
                        title={projectData.title}
                        isActive={projectData.isActive}
                        isAssignedToMe={projectData.isAssignedToMe}
                    />

                    <ProjectMetadata
                        id={projectData.id}
                        priority={projectData.priority}
                        location={projectData.location}
                        sprint={projectData.sprint}
                        lastSync={projectData.lastSync}
                    />

                    <Tabs defaultValue="overview" className="mb-6">
                        <TabsList className="bg-transparent p-0 h-auto border-b rounded-none w-full justify-start gap-0">
                            <TabsTrigger
                                value="overview"
                                className="bg-transparent rounded-none border-b-2 border-transparent data-[state=active]:border-foreground data-[state=active]:bg-transparent data-[state=active]:shadow-none px-4 py-2.5 text-sm font-medium text-muted-foreground data-[state=active]:text-foreground"
                            >
                                Overview
                            </TabsTrigger>
                            <TabsTrigger
                                value="workstream"
                                className="bg-transparent rounded-none border-b-2 border-transparent data-[state=active]:border-foreground data-[state=active]:bg-transparent data-[state=active]:shadow-none px-4 py-2.5 text-sm font-medium text-muted-foreground data-[state=active]:text-foreground"
                            >
                                Workstream
                            </TabsTrigger>
                            <TabsTrigger
                                value="tasks"
                                className="bg-transparent rounded-none border-b-2 border-transparent data-[state=active]:border-foreground data-[state=active]:bg-transparent data-[state=active]:shadow-none px-4 py-2.5 text-sm font-medium text-muted-foreground data-[state=active]:text-foreground"
                            >
                                Tasks
                            </TabsTrigger>
                            <TabsTrigger
                                value="notes"
                                className="bg-transparent rounded-none border-b-2 border-transparent data-[state=active]:border-foreground data-[state=active]:bg-transparent data-[state=active]:shadow-none px-4 py-2.5 text-sm font-medium text-muted-foreground data-[state=active]:text-foreground"
                            >
                                Notes
                            </TabsTrigger>
                            <TabsTrigger
                                value="assets"
                                className="bg-transparent rounded-none border-b-2 border-transparent data-[state=active]:border-foreground data-[state=active]:bg-transparent data-[state=active]:shadow-none px-4 py-2.5 text-sm font-medium text-muted-foreground data-[state=active]:text-foreground"
                            >
                                Assets & Files
                            </TabsTrigger>
                        </TabsList>

                        <TabsContent value="overview" className="mt-6">
                            <ProjectOverview {...overviewData} />
                        </TabsContent>

                        <TabsContent value="workstream" className="mt-6">
                            <WorkstreamBreakdown />
                        </TabsContent>
                        <TabsContent value="tasks">
                            <Card className="py-8 shadow-none">
                                <CardContent className="text-center text-muted-foreground">
                                    Tasks content coming soon
                                </CardContent>
                            </Card>
                        </TabsContent>
                        <TabsContent value="notes">
                            <Card className="py-8 shadow-none">
                                <CardContent className="text-center text-muted-foreground">
                                    Notes content coming soon
                                </CardContent>
                            </Card>
                        </TabsContent>
                        <TabsContent value="assets">
                            <Card className="py-8 shadow-none">
                                <CardContent className="text-center text-muted-foreground">
                                    Assets & Files content coming soon
                                </CardContent>
                            </Card>
                        </TabsContent>
                    </Tabs>
                </main>

                <ProjectSidebar
                    estimate={projectData.estimate}
                    dueDate={projectData.dueDate}
                    daysRemaining={projectData.daysRemaining}
                    progress={projectData.progress}
                    status={projectData.status}
                    group={projectData.group}
                    priority={projectData.priority}
                    label={projectData.label}
                    pic={projectData.pic}
                    support={projectData.support}
                />
            </div>
        </div>
    )
}