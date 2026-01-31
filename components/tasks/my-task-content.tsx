"use client"

import { Folder, Circle, CheckCircle2, Plus, MoreVertical, Signal } from "lucide-react"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { ProgressCircle } from "@/components/progress-circle"
import { EmptyTaskContent } from "./EmptyTaskContent"

// Types
interface Task {
    id: number
    title: string
    category: string
    status: "Done" | "To do" | "In Progress"
    startDate: string
    dueDate: string
    completed: boolean
    assignee: {
        name: string
        avatar: string
    }
}

interface Project {
    id: number
    name: string
    priority: "Urgent" | "High" | "Medium" | "Low"
    duration: string
    status: "In Progress" | "Backlog" | "Completed"
    completedTasks: number
    totalTasks: number
    tasks: Task[]
}

// Sample data matching the images
const projects: Project[] = [
    {
        id: 1,
        name: "Fintech Mobile App Redesign",
        priority: "High",
        duration: "MVP 2 weeks",
        status: "In Progress",
        completedTasks: 1,
        totalTasks: 11,
        tasks: [
            {
                id: 1,
                title: "Processing documents for signing the deal",
                category: "Processing documents for signing the deal",
                status: "Done",
                startDate: "Start: 25/01",
                dueDate: "Today",
                completed: true,
                assignee: { name: "John Doe", avatar: "/avatars/avatar1.jpg" }
            },
            {
                id: 2,
                title: "Internal approval & sign-off",
                category: "Processing documents for signing the deal",
                status: "To do",
                startDate: "Start: 25/01",
                dueDate: "Today",
                completed: false,
                assignee: { name: "Jane Smith", avatar: "/avatars/avatar2.jpg" }
            },
            {
                id: 3,
                title: "Send contract to client",
                category: "Processing documents for signing the deal",
                status: "To do",
                startDate: "Start: 26/01",
                dueDate: "Tomorrow",
                completed: false,
                assignee: { name: "Mike Johnson", avatar: "/avatars/avatar3.jpg" }
            },
            {
                id: 4,
                title: "Track client signature",
                category: "Processing documents for signing the deal",
                status: "To do",
                startDate: "Start: 27/01",
                dueDate: "",
                completed: false,
                assignee: { name: "Sarah Brown", avatar: "/avatars/avatar4.jpg" }
            },
            {
                id: 5,
                title: "Collect onboarding requirements",
                category: "Client onboarding setup",
                status: "In Progress",
                startDate: "Start: 27/01",
                dueDate: "This week",
                completed: false,
                assignee: { name: "Tom Wilson", avatar: "/avatars/avatar5.jpg" }
            },
            {
                id: 6,
                title: "Configure sandbox account",
                category: "Client onboarding setup",
                status: "To do",
                startDate: "Start: 28/01",
                dueDate: "",
                completed: false,
                assignee: { name: "Emily Davis", avatar: "/avatars/avatar6.jpg" }
            },
            {
                id: 7,
                title: "Schedule onboarding session",
                category: "Client onboarding setup",
                status: "To do",
                startDate: "Start: 29/01",
                dueDate: "",
                completed: false,
                assignee: { name: "Chris Lee", avatar: "/avatars/avatar7.jpg" }
            },
            {
                id: 8,
                title: "Prepare low-fidelity wireframes",
                category: "Product wireframe & review",
                status: "To do",
                startDate: "Start: 28/01",
                dueDate: "",
                completed: false,
                assignee: { name: "Anna Taylor", avatar: "/avatars/avatar8.jpg" }
            },
            {
                id: 9,
                title: "Review with stakeholders",
                category: "Product wireframe & review",
                status: "To do",
                startDate: "Start: 29/01",
                dueDate: "",
                completed: false,
                assignee: { name: "David Clark", avatar: "/avatars/avatar9.jpg" }
            }
        ]
    },
    {
        id: 2,
        name: "AI Learning Platform",
        priority: "Urgent",
        duration: "Revamp 3 weeks",
        status: "In Progress",
        completedTasks: 1,
        totalTasks: 2,
        tasks: [
            {
                id: 10,
                title: "Kickoff with stakeholders",
                category: "Initial discovery & alignment",
                status: "Done",
                startDate: "Start: 25/01",
                dueDate: "Today",
                completed: true,
                assignee: { name: "John Doe", avatar: "/avatars/avatar1.jpg" }
            },
            {
                id: 11,
                title: "Define problem statement",
                category: "Initial discovery & alignment",
                status: "In Progress",
                startDate: "Start: 26/01",
                dueDate: "Tomorrow",
                completed: false,
                assignee: { name: "Jane Smith", avatar: "/avatars/avatar2.jpg" }
            }
        ]
    },
    {
        id: 3,
        name: "Internal CRM System",
        priority: "Low",
        duration: "New —",
        status: "Backlog",
        completedTasks: 1,
        totalTasks: 2,
        tasks: [
            {
                id: 12,
                title: "Kickoff with stakeholders",
                category: "Initial discovery & alignment",
                status: "Done",
                startDate: "Start: 25/01",
                dueDate: "Today",
                completed: true,
                assignee: { name: "Mike Johnson", avatar: "/avatars/avatar3.jpg" }
            },
            {
                id: 13,
                title: "Define problem statement",
                category: "Initial discovery & alignment",
                status: "In Progress",
                startDate: "Start: 26/01",
                dueDate: "Tomorrow",
                completed: false,
                assignee: { name: "Sarah Brown", avatar: "/avatars/avatar4.jpg" }
            }
        ]
    },
    {
        id: 4,
        name: "Ecommerce website",
        priority: "Medium",
        duration: "Audit 1 week",
        status: "Completed",
        completedTasks: 1,
        totalTasks: 2,
        tasks: [
            {
                id: 14,
                title: "Kickoff with stakeholders",
                category: "Initial discovery & alignment",
                status: "Done",
                startDate: "Start: 25/01",
                dueDate: "Today",
                completed: true,
                assignee: { name: "Tom Wilson", avatar: "/avatars/avatar5.jpg" }
            },
            {
                id: 15,
                title: "Define problem statement",
                category: "Initial discovery & alignment",
                status: "In Progress",
                startDate: "Start: 26/01",
                dueDate: "Tomorrow",
                completed: false,
                assignee: { name: "Emily Davis", avatar: "/avatars/avatar6.jpg" }
            }
        ]
    }
]

// Priority color mapping
const getPriorityColor = (priority: string) => {
    switch (priority) {
        case "Urgent":
            return "text-red-500"
        case "High":
            return "text-orange-500"
        case "Medium":
            return "text-yellow-600"
        case "Low":
            return "text-green-500"
        default:
            return "text-gray-500"
    }
}

// Status badge color mapping
const getStatusColor = (status: string) => {
    switch (status) {
        case "Done":
            return "text-emerald-600"
        case "In Progress":
            return "text-orange-500"
        case "To do":
            return "text-gray-500"
        default:
            return "text-gray-500"
    }
}

// Project status color mapping
const getProjectStatusColor = (status: string) => {
    switch (status) {
        case "In Progress":
            return "text-emerald-600"
        case "Completed":
            return "text-emerald-600"
        case "Backlog":
            return "text-gray-500"
        default:
            return "text-gray-500"
    }
}

// Category badge color mapping
const getCategoryColor = (category: string) => {
    if (category.includes("Processing documents")) {
        return "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400"
    }
    if (category.includes("Initial discovery")) {
        return "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400"
    }
    if (category.includes("Client onboarding")) {
        return "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400"
    }
    if (category.includes("Product wireframe")) {
        return "bg-teal-100 text-teal-700 dark:bg-teal-900/30 dark:text-teal-400"
    }
    return "bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-400"
}


// Task Row Component
function TaskRow({ task }: { task: Task }) {
    return (
        <div className="flex items-center gap-4 px-6 py-3 hover:bg-muted/30 transition-colors border-b border-gray-100 dark:border-gray-800 last:border-b-0">
            {/* Checkbox */}
            <button className="shrink-0 ml-6">
                {task.completed ? (
                    <CheckCircle2 className="size-5 text-emerald-500" />
                ) : (
                    <Circle className="size-5 text-gray-300 dark:text-gray-600 hover:text-gray-400 transition-colors" />
                )}
            </button>

            {/* Task Title */}
            <div className="flex-1 min-w-0">
                <p className={`text-sm ${task.completed ? "line-through text-muted-foreground" : "text-foreground"}`}>
                    {task.title}
                </p>
            </div>

            {/* Category Badge */}
            <span className={`text-xs leading-tight px-2.5 py-0.5 rounded-full shrink-0 ${getCategoryColor(task.category)}`}>
                {task.category}
            </span>

            {/* Status */}
            <span className={`text-xs shrink-0 min-w-[70px] ${getStatusColor(task.status)}`}>
                {task.status}
            </span>

            {/* Start Date */}
            <span className="text-xs text-muted-foreground shrink-0 min-w-[80px]">
                {task.startDate}
            </span>

            {/* Due Date */}
            <span className="text-xs text-muted-foreground shrink-0 min-w-[70px]">
                {task.dueDate}
            </span>

            {/* Avatar */}
            <Avatar className="size-7 shrink-0">
                <AvatarImage src={task.assignee.avatar} alt={task.assignee.name} />
                <AvatarFallback className="text-xs bg-gray-200 dark:bg-gray-700">
                    {task.assignee.name.split(' ').map(n => n[0]).join('')}
                </AvatarFallback>
            </Avatar>

            {/* More Options */}
            <button className="shrink-0 p-1 hover:bg-muted rounded transition-colors">
                <MoreVertical className="size-4 text-muted-foreground" />
            </button>
        </div>
    )
}

// Project Card Component
function ProjectCard({ project }: { project: Project }) {
    return (
        <div className="border rounded-xl overflow-hidden mb-4">
            {/* Project Header */}
            <div className="flex items-center gap-4 px-6 py-4 bg-muted/70">
                {/* Folder Icon */}
                <div className="flex size-10 items-center justify-center rounded-xl border border-border bg-background text-muted-foreground">
                    <Folder className="h-5 w-5" />
                </div>

                {/* Project Info */}
                <div className="flex-1 min-w-0">
                    <h3 className=" text-sm leading-tight font-semibold text-foreground">{project.name}</h3>
                    <div className="flex items-center gap-3 mt-0.5">
                        {/* Priority */}
                        <div className="flex items-center gap-1">
                            <Signal className={`size-3.5 ${getPriorityColor(project.priority)}`} />
                            <span className={`text-xs ${getPriorityColor(project.priority)}`}>
                                {project.priority}
                            </span>
                        </div>
                        {/* Duration */}
                        <span className="text-xs text-muted-foreground">
                            {project.duration}
                        </span>
                        {/* Status */}
                        <span className={`text-xs ${getProjectStatusColor(project.status)}`}>
                            {project.status}
                        </span>
                    </div>
                </div>

                {/* Progress */}
                <div className="flex items-center gap-3 shrink-0">
                    <span className="text-sm text-muted-foreground">
                        {project.completedTasks}/{project.totalTasks}
                    </span>
                    <ProgressCircle
                        progress={project.totalTasks > 0 ? (project.completedTasks / project.totalTasks) * 100 : 0}
                        color="#10b981"
                        size={20}
                    />
                    <button className="p-1.5 hover:bg-muted rounded-lg transition-colors">
                        <Plus className="size-4 text-muted-foreground" />
                    </button>
                </div>
            </div>

            {/* Tasks List */}
            <div className="border-t border-gray-100  dark:border-gray-800">
                {project.tasks.map((task) => (
                    <TaskRow key={task.id} task={task} />
                ))}
            </div>
        </div>
    )
}

export function MyTaskContent() {
    const totalProjects = projects.length

    if (totalProjects === 0) {
        return <EmptyTaskContent />
    }

    return (
        <div className="flex flex-1 flex-col mx-6 my-4 min-w-0 overflow-hidden">
            {/* Projects List */}
            <div className="flex-1 overflow-y-auto p-2 space-y-4">
                {projects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
        </div>
    )
}


