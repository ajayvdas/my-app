import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Folder, Calendar, TrendingUp, ListChecks } from "lucide-react"
import { ProgressCircle } from "./progress-circle"
import { Separator } from "./ui/separator"

interface ProjectItemCardProps {
    id: string
    title: string
    client: string
    type: string
    duration: string
    status: "Active" | "Completed" | "On Hold" | "Archived"
    date: string
    priority: "High" | "Medium" | "Low"
    progress: number
    completedTasks: number
    totalTasks: number
    avatar: string
    avatarFallback: string
}

export default function ProjectItemCard({
    title,
    client,
    type,
    duration,
    status,
    date,
    priority,
    progress,
    completedTasks,
    totalTasks,
    avatar,
    avatarFallback,
}: ProjectItemCardProps) {
    const statusColors = {
        Active: "bg-teal-50 text-teal-700 border-teal-100",
        Completed: "bg-green-50 text-green-700 border-green-100",
        "On Hold": "bg-yellow-50 text-yellow-700 border-yellow-100",
        Archived: "bg-gray-50 text-gray-700 border-gray-100",
    }

    const priorityColors = {
        High: "text-red-600",
        Medium: "text-orange-600",
        Low: "text-blue-600",
    }

    return (
        <Card className="hover:shadow-lg/5 border-border/50 border transition-shadow duration-200 cursor-pointer rounded-2xl p-0 focus:outline-none">
            <CardContent className="p-6 pb-2">
                {/* Header with Folder Icon and Status Badge */}
                <div className="flex items-center justify-between mb-4">
                    <Folder className="w-4 h-4 text-gray-600" />
                    <Badge
                        variant="outline"
                        className={`${statusColors[status]} font-medium text-xs px-2 py-0`}
                    >
                        • {status}
                    </Badge>
                </div>

                {/* Project Title */}
                <h3 className="text-md font-semibold text-gray-900 mb-2 truncate">
                    {title}
                </h3>

                {/* Project Details */}
                <p className="text-sm text-gray-600 mb-2">
                    {client} • {type} • {duration}
                </p>

                {/* Date and Priority */}
                <div className="flex items-center justify-between mb-2 text-sm">
                    <div className="flex items-center gap-1.5 text-muted-foreground">
                        <Calendar className="w-4 h-4" />
                        <span>{date}</span>
                    </div>
                    <div className={`flex items-center gap-1.5 font-medium ${priorityColors[priority]}`}>
                        <TrendingUp className="w-4 h-4" />
                        <span>{priority}</span>
                    </div>
                </div>

                <Separator className="mb-4" />

                {/* Progress and Tasks */}
                <div className="flex items-center justify-between gap-3 text-muted-foreground">
                    {/* Progress Bar */}
                    <div className="flex items-center gap-4 flex-1">
                        <div className="flex items-center justify-between mr-2 w-8 h-8 gap-1">
                            <ProgressCircle
                                progress={progress}
                                color="#f59e0b"
                                size={18}
                                strokeWidth={2}
                            />
                            <span className="flex items-center justify-center text-sm text-muted-foreground">
                                {progress}%
                            </span>
                        </div>

                        {/* Task Count */}
                        <div className="flex items-center gap-1.5 text-sm">
                            <ListChecks className="w-4 h-4" />
                            <span>
                                {completedTasks} / {totalTasks} Tasks
                            </span>
                        </div>
                    </div>

                    {/* Avatar */}
                    <Avatar className="w-8 h-8 border-2 border-white shadow-sm">
                        <AvatarImage src={avatar} alt="Team member" />
                        <AvatarFallback className="bg-gradient-to-br from-purple-400 to-pink-400 text-white text-xs">
                            {avatarFallback}
                        </AvatarFallback>
                    </Avatar>
                </div>
            </CardContent>
        </Card>
    )
}
