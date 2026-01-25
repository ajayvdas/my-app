"use client"

import { CheckSquare, Circle, CheckCircle2, Clock, Calendar, Flag, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"

const tasks = [
    {
        id: 1,
        title: "Review dashboard wireframes",
        project: "AI Learning Platform",
        priority: "high",
        dueDate: "Today",
        completed: false,
    },
    {
        id: 2,
        title: "Update API documentation",
        project: "Fintech Mobile App",
        priority: "medium",
        dueDate: "Tomorrow",
        completed: false,
    },
    {
        id: 3,
        title: "Fix authentication bug",
        project: "E-commerce Admin",
        priority: "high",
        dueDate: "Today",
        completed: true,
    },
    {
        id: 4,
        title: "Design user onboarding flow",
        project: "AI Learning Platform",
        priority: "low",
        dueDate: "Jan 28",
        completed: false,
    },
    {
        id: 5,
        title: "Prepare sprint retrospective",
        project: "Team",
        priority: "medium",
        dueDate: "Jan 30",
        completed: false,
    },
    {
        id: 6,
        title: "Code review for payment module",
        project: "Fintech Mobile App",
        priority: "high",
        dueDate: "Today",
        completed: true,
    },
]

const priorityColors = {
    high: "text-red-500",
    medium: "text-yellow-500",
    low: "text-green-500",
}

const projectColors: Record<string, string> = {
    "AI Learning Platform": "bg-orange-500",
    "Fintech Mobile App": "bg-blue-500",
    "E-commerce Admin": "bg-purple-500",
    "Team": "bg-gray-500",
}

export default function MyTaskContent() {
    const completedTasks = tasks.filter((t) => t.completed).length
    const totalTasks = tasks.length
    const progress = (completedTasks / totalTasks) * 100

    return (
        <div className="flex flex-1 flex-col m-2 border rounded-lg min-w-0 overflow-hidden">
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b bg-gradient-to-r from-green-500/5 to-emerald-500/5">
                <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-gradient-to-br from-green-500 to-emerald-600 text-white">
                        <CheckSquare className="size-6" />
                    </div>
                    <div>
                        <h1 className="text-2xl font-bold">My Tasks</h1>
                        <p className="text-muted-foreground text-sm">
                            {completedTasks} of {totalTasks} tasks completed
                        </p>
                    </div>
                </div>
                <Button className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700">
                    <Plus className="size-4 mr-2" />
                    Add Task
                </Button>
            </div>

            {/* Progress Bar */}
            <div className="px-6 py-4 border-b">
                <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium">Daily Progress</span>
                    <span className="text-sm text-muted-foreground">{Math.round(progress)}%</span>
                </div>
                <Progress value={progress} className="h-2" />
            </div>

            {/* Filter Tabs */}
            <div className="flex items-center gap-4 px-6 py-3 border-b">
                <Button variant="ghost" size="sm" className="text-primary">
                    All Tasks
                    <Badge className="ml-2 bg-primary/10 text-primary hover:bg-primary/10">{totalTasks}</Badge>
                </Button>
                <Button variant="ghost" size="sm">
                    Today
                    <Badge className="ml-2" variant="secondary">3</Badge>
                </Button>
                <Button variant="ghost" size="sm">
                    Upcoming
                    <Badge className="ml-2" variant="secondary">2</Badge>
                </Button>
                <Button variant="ghost" size="sm">
                    Completed
                    <Badge className="ml-2" variant="secondary">{completedTasks}</Badge>
                </Button>
            </div>

            {/* Tasks List */}
            <div className="flex-1 overflow-y-auto">
                {tasks.map((task) => (
                    <div
                        key={task.id}
                        className={`flex items-center gap-4 p-4 border-b hover:bg-muted/50 transition-colors ${task.completed ? "opacity-60" : ""
                            }`}
                    >
                        <button className="shrink-0">
                            {task.completed ? (
                                <CheckCircle2 className="size-5 text-green-500" />
                            ) : (
                                <Circle className="size-5 text-muted-foreground hover:text-primary transition-colors" />
                            )}
                        </button>
                        <div className="flex-1 min-w-0">
                            <p className={`font-medium ${task.completed ? "line-through text-muted-foreground" : ""}`}>
                                {task.title}
                            </p>
                            <div className="flex items-center gap-2 mt-1">
                                <div className={`size-2 rounded-full ${projectColors[task.project]}`} />
                                <span className="text-sm text-muted-foreground">{task.project}</span>
                            </div>
                        </div>
                        <div className="flex items-center gap-3 shrink-0">
                            <div className="flex items-center gap-1">
                                <Flag className={`size-4 ${priorityColors[task.priority as keyof typeof priorityColors]}`} />
                            </div>
                            <div className="flex items-center gap-1 text-sm text-muted-foreground">
                                <Calendar className="size-4" />
                                {task.dueDate}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
