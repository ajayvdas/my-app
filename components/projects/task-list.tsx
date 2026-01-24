"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import FilterPopover from "@/components/FilterPopover"
import { Filter, Plus, MoreVertical } from "lucide-react"

interface Task {
    id: string
    title: string
    project: string
    status: "Done" | "To do" | "In Progress"
    dueDate: string
    assignee: {
        name: string
        avatar: string
        initials: string
    }
    completed: boolean
}

const mockTasks: Task[] = [
    {
        id: "1",
        title: "Processing documents for signing the deal",
        project: "Processing documents for signing the deal",
        status: "Done",
        dueDate: "Today",
        assignee: {
            name: "John Doe",
            avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face",
            initials: "JD"
        },
        completed: true
    },
    {
        id: "2",
        title: "Internal approval & sign-off",
        project: "Processing documents for signing the deal",
        status: "To do",
        dueDate: "Today",
        assignee: {
            name: "John Doe",
            avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face",
            initials: "JD"
        },
        completed: false
    },
    {
        id: "3",
        title: "Send contract to client",
        project: "Processing documents for signing the deal",
        status: "To do",
        dueDate: "Tomorrow",
        assignee: {
            name: "John Doe",
            avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face",
            initials: "JD"
        },
        completed: false
    },
    {
        id: "4",
        title: "Track client signature",
        project: "Processing documents for signing the deal",
        status: "To do",
        dueDate: "",
        assignee: {
            name: "John Doe",
            avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face",
            initials: "JD"
        },
        completed: false
    },
    {
        id: "5",
        title: "Collect onboarding requirements",
        project: "Client onboarding setup",
        status: "In Progress",
        dueDate: "This week",
        assignee: {
            name: "John Doe",
            avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face",
            initials: "JD"
        },
        completed: false
    },
    {
        id: "6",
        title: "Configure sandbox account",
        project: "Client onboarding setup",
        status: "To do",
        dueDate: "",
        assignee: {
            name: "John Doe",
            avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face",
            initials: "JD"
        },
        completed: false
    },
    {
        id: "7",
        title: "Schedule onboarding session",
        project: "Client onboarding setup",
        status: "To do",
        dueDate: "",
        assignee: {
            name: "John Doe",
            avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face",
            initials: "JD"
        },
        completed: false
    },
    {
        id: "8",
        title: "Prepare low-fidelity wireframes",
        project: "Product wireframe & review",
        status: "To do",
        dueDate: "",
        assignee: {
            name: "John Doe",
            avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face",
            initials: "JD"
        },
        completed: false
    },
    {
        id: "9",
        title: "Review with stakeholders",
        project: "Product wireframe & review",
        status: "To do",
        dueDate: "",
        assignee: {
            name: "John Doe",
            avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face",
            initials: "JD"
        },
        completed: false
    },
    {
        id: "10",
        title: "Prepare clickable prototype",
        project: "Demo UI Concept",
        status: "To do",
        dueDate: "",
        assignee: {
            name: "John Doe",
            avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face",
            initials: "JD"
        },
        completed: false
    },
    {
        id: "11",
        title: "Collect feedback from stakeholders",
        project: "Feedback and iteration with stakeholders",
        status: "To do",
        dueDate: "",
        assignee: {
            name: "John Doe",
            avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face",
            initials: "JD"
        },
        completed: false
    }
]

export function TaskList() {
    const [tasks, setTasks] = useState<Task[]>(mockTasks)

    const toggleTask = (taskId: string) => {
        setTasks(tasks.map(task =>
            task.id === taskId
                ? { ...task, completed: !task.completed, status: !task.completed ? "Done" : "To do" }
                : task
        ))
    }

    const getStatusColor = (status: Task["status"]) => {
        switch (status) {
            case "Done":
                return "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400 hover:bg-emerald-100 dark:hover:bg-emerald-900/30"
            case "In Progress":
                return "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400 hover:bg-amber-100 dark:hover:bg-amber-900/30"
            case "To do":
                return "bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
            default:
                return "bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-400"
        }
    }

    return (
        <div className="space-y-0 border rounded-xl border-muted-foreground/20">
            {/* Header */}
            <div className="flex items-center justify-between mb-6 p-4 border-b">
                <Popover>
                    <PopoverTrigger asChild>
                        <Button variant="ghost" size="sm" className="text-sm font-normal gap-2 h-9 px-3">
                            <Filter className="h-4 w-4" />
                            Filter
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0 border-0 shadow-lg" align="start">
                        <FilterPopover />
                    </PopoverContent>
                </Popover>
                <div className="flex items-center gap-2">
                    <Button variant="ghost" size="sm" className="text-sm font-normal h-9 px-3">
                        View
                    </Button>
                    <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white h-9 px-3 gap-2">
                        <Plus className="h-4 w-4" />
                        New Task
                    </Button>
                </div>
            </div>

            {/* Task List */}
            <div className="space-y-0">
                {tasks.map((task, index) => (
                    <div
                        key={task.id}
                        className={`flex items-center gap-4 py-3 px-4 hover:bg-muted/50 transition-colors ${index !== tasks.length - 1 ? 'border-b' : ''
                            }`}
                    >
                        {/* Checkbox */}
                        <Checkbox
                            checked={task.completed}
                            onCheckedChange={() => toggleTask(task.id)}
                            className="h-5 w-5 rounded-full data-[state=checked]:bg-emerald-500 data-[state=checked]:border-emerald-500"
                        />

                        {/* Task Title */}
                        <div className="flex-1 min-w-0">
                            <p className={`text-sm font-normal ${task.completed
                                ? 'line-through text-muted-foreground'
                                : 'text-foreground'
                                }`}>
                                {task.title}
                            </p>
                        </div>

                        {/* Project Tag */}
                        <div className="hidden md:block flex-shrink-0 max-w-[200px]">
                            <p className="text-xs text-muted-foreground truncate">
                                {task.project}
                            </p>
                        </div>

                        {/* Status Badge */}
                        <Badge
                            variant="secondary"
                            className={`flex-shrink-0 font-normal text-xs px-2.5 py-0.5 ${getStatusColor(task.status)}`}
                        >
                            {task.status}
                        </Badge>

                        {/* Due Date */}
                        <div className="hidden sm:block flex-shrink-0 w-20 text-right">
                            <p className="text-xs text-muted-foreground">
                                {task.dueDate}
                            </p>
                        </div>

                        {/* Avatar */}
                        <Avatar className="h-7 w-7 flex-shrink-0">
                            <AvatarImage src={task.assignee.avatar} alt={task.assignee.name} />
                            <AvatarFallback className="text-xs bg-muted">
                                {task.assignee.initials}
                            </AvatarFallback>
                        </Avatar>

                        {/* More Menu */}
                        <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8 flex-shrink-0 text-muted-foreground hover:text-foreground"
                        >
                            <MoreVertical className="h-4 w-4" />
                        </Button>
                    </div>
                ))}
            </div>
        </div>
    )
}
