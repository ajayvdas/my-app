import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Calendar, TrendingUp, ListChecks, Flag, EllipsisVertical } from "lucide-react"
import { ProgressCircle } from "./progress-circle"
import { Separator } from "./ui/separator"
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from "./ui/select"
import Link from "next/link"

interface ProjectItemCardProps {
    id: string
    title: string
    client: string
    type: string
    duration: string
    status: "Active" | "Completed" | "On Hold" | "Archived" | "Backlog" | "Planned"
    date: string
    priority: "High" | "Medium" | "Low" | "Urgent"
    progress: number
    completedTasks: number
    totalTasks: number
    avatar: string
    avatarFallback: string
}

export default function ProjectItemCard({
    id,
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
        Backlog: "bg-slate-50 text-slate-700 border-slate-100",
        Planned: "bg-purple-50 text-purple-700 border-purple-100",
    }

    const priorityColors = {
        High: "text-red-600",
        Medium: "text-orange-600",
        Low: "text-blue-600",
        Urgent: "text-rose-700",
    }

    return (
        <Link href={`/projects/${id}`}>
            <Card className="hover:shadow-lg/5 border-border/50 border transition-shadow duration-200 cursor-pointer rounded-2xl p-0 focus:outline-none">
                <CardContent className="p-6 pb-2">
                    {/* Header with Flag Icon and Status Badge */}
                    <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-2">
                            <Flag className="w-4 h-4 text-gray-600" />
                            <span className="text-muted-foreground text-xs">{date}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className={`flex items-center gap-1.5 font-medium text-xs ${priorityColors[priority]}`}>
                                <TrendingUp className="w-4 h-4" />
                                <span>{priority}</span>
                            </div>
                            <div onClick={(e) => e.stopPropagation()}>
                                <Select onValueChange={(value) => console.log('Selected:', value)}>
                                    <SelectTrigger hideIcon className="!w-auto !h-auto !border-0 !bg-transparent !p-1 hover:!bg-accent !rounded-md !shadow-none focus:!ring-0 focus:!ring-offset-0 focus-visible:!ring-0">
                                        <SelectValue className="sr-only" />
                                        <EllipsisVertical className="w-4 h-4 text-muted-foreground" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="backlog">Move to backlog</SelectItem>
                                        <SelectItem value="planned">Move to planned</SelectItem>
                                        <SelectItem value="active">Move to active</SelectItem>
                                        <SelectItem value="completed">Move to completed</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>
                    </div>

                    {/* Project Title */}
                    <h3 className="text-md font-semibold text-gray-900 mb-2 truncate">
                        {title}
                    </h3>

                    {/* Project Details */}
                    <p className="text-sm text-gray-600 mb-2 truncate whitespace-nowrap">
                        {client} • {type} • {duration}
                    </p>

                    <Separator className="mb-2" />

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
        </Link>
    )
}
