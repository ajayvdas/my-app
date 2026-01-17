'use client'

import { Skeleton } from "@/components/ui/skeleton"
import { useState } from "react"
import { Empty, EmptyHeader, EmptyMedia, EmptyTitle, EmptyDescription, EmptyContent } from "./ui/empty"
import { File } from "lucide-react"
import { Button } from "./ui/button"
import ProjectItemCard from "./project-item-card"

// Mock data for projects
const mockProjects = [
    {
        id: "1",
        title: "Fintech Mobile App Redesign",
        client: "Acme Bank",
        type: "MVP",
        duration: "2 weeks",
        status: "Active" as const,
        date: "Feb 12, 2024",
        priority: "High" as const,
        progress: 35,
        completedTasks: 1,
        totalTasks: 4,
        avatar: "https://i.pravatar.cc/150?img=1",
        avatarFallback: "AB",
    },
    {
        id: "2",
        title: "E-commerce Platform Development",
        client: "TechStore Inc",
        type: "Full Stack",
        duration: "3 months",
        status: "Active" as const,
        date: "Jan 28, 2024",
        priority: "High" as const,
        progress: 68,
        completedTasks: 12,
        totalTasks: 18,
        avatar: "https://i.pravatar.cc/150?img=2",
        avatarFallback: "TS",
    },
    {
        id: "3",
        title: "Marketing Website Refresh",
        client: "GrowthCo",
        type: "Design",
        duration: "1 week",
        status: "Completed" as const,
        date: "Jan 15, 2024",
        priority: "Medium" as const,
        progress: 100,
        completedTasks: 8,
        totalTasks: 8,
        avatar: "https://i.pravatar.cc/150?img=3",
        avatarFallback: "GC",
    },
    {
        id: "4",
        title: "CRM System Integration",
        client: "SalesPro",
        type: "Backend",
        duration: "6 weeks",
        status: "Active" as const,
        date: "Feb 5, 2024",
        priority: "High" as const,
        progress: 45,
        completedTasks: 9,
        totalTasks: 20,
        avatar: "https://i.pravatar.cc/150?img=4",
        avatarFallback: "SP",
    },
    {
        id: "5",
        title: "Mobile App Performance Optimization",
        client: "FastApp",
        type: "Optimization",
        duration: "2 weeks",
        status: "On Hold" as const,
        date: "Jan 20, 2024",
        priority: "Medium" as const,
        progress: 25,
        completedTasks: 2,
        totalTasks: 8,
        avatar: "https://i.pravatar.cc/150?img=5",
        avatarFallback: "FA",
    },
    {
        id: "6",
        title: "Dashboard Analytics Implementation",
        client: "DataViz Corp",
        type: "Frontend",
        duration: "4 weeks",
        status: "Active" as const,
        date: "Feb 8, 2024",
        priority: "Medium" as const,
        progress: 55,
        completedTasks: 6,
        totalTasks: 11,
        avatar: "https://i.pravatar.cc/150?img=6",
        avatarFallback: "DV",
    },
    {
        id: "7",
        title: "API Documentation Portal",
        client: "DevTools Inc",
        type: "Documentation",
        duration: "1 week",
        status: "Completed" as const,
        date: "Jan 10, 2024",
        priority: "Low" as const,
        progress: 100,
        completedTasks: 5,
        totalTasks: 5,
        avatar: "https://i.pravatar.cc/150?img=7",
        avatarFallback: "DT",
    },
    {
        id: "8",
        title: "Cloud Migration Project",
        client: "Enterprise Co",
        type: "Infrastructure",
        duration: "8 weeks",
        status: "Active" as const,
        date: "Feb 1, 2024",
        priority: "High" as const,
        progress: 30,
        completedTasks: 5,
        totalTasks: 16,
        avatar: "https://i.pravatar.cc/150?img=8",
        avatarFallback: "EC",
    },
]

export default function ProjectsList() {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    const [projects, setProjects] = useState(mockProjects)

    return (
        <div className="p-4">
            {loading ? (
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {Array.from({ length: 8 }).map((_, index) => (
                        <Skeleton key={index} className="h-64" />
                    ))}
                </div>
            ) : error ? (
                <Empty className="border rounded-lg border-dashed w-96 h-64 mx-auto" >
                    <EmptyHeader>
                        <EmptyMedia variant="icon">
                            <File />
                        </EmptyMedia>
                        <EmptyTitle>No Projects Yet</EmptyTitle>
                        <EmptyDescription>
                            You haven&apos;t created any projects yet. Get started by creating
                            your first project.
                        </EmptyDescription>
                    </EmptyHeader>
                    <EmptyContent>
                        <Button>Create Project</Button>
                    </EmptyContent>
                </Empty>
            ) : (
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {projects.map((project) => (
                        <ProjectItemCard key={project.id} {...project} />
                    ))}
                </div>
            )}
        </div>
    )
}