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
        Active: "bg-teal-50 text-teal-700 border-teal-100 dark:bg-teal-950/50 dark:text-teal-400 dark:border-teal-800/50",
        Completed: "bg-green-50 text-green-700 border-green-100 dark:bg-green-950/50 dark:text-green-400 dark:border-green-800/50",
        "On Hold": "bg-yellow-50 text-yellow-700 border-yellow-100 dark:bg-yellow-950/50 dark:text-yellow-400 dark:border-yellow-800/50",
        Archived: "bg-gray-50 text-gray-700 border-gray-100 dark:bg-gray-800/50 dark:text-gray-400 dark:border-gray-700/50",
        Backlog: "bg-slate-50 text-slate-700 border-slate-100 dark:bg-slate-800/50 dark:text-slate-400 dark:border-slate-700/50",
        Planned: "bg-purple-50 text-purple-700 border-purple-100 dark:bg-purple-950/50 dark:text-purple-400 dark:border-purple-800/50",
    }

    const priorityColors = {
        High: "text-red-600 dark:text-red-400",
        Medium: "text-orange-600 dark:text-orange-400",
        Low: "text-blue-600 dark:text-blue-400",
        Urgent: "text-rose-700 dark:text-rose-400",
    }

    return (
        <Link href={`/projects/${id}`}>
            <Card className="hover:shadow-lg/5 dark:hover:shadow-lg dark:hover:shadow-primary/5 border-border/50 dark:border-border/30 border transition-all duration-300 cursor-pointer rounded-2xl p-0 focus:outline-none dark:bg-card/80 dark:backdrop-blur-sm hover:border-border dark:hover:border-border/50">
                <CardContent className="p-6 pb-2">
                    {/* Header with Flag Icon and Status Badge */}
                    <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-2">
                            <Flag className="w-4 h-4 text-gray-600 dark:text-gray-400" />
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
                    <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100 mb-2 truncate">
                        {title}
                    </h3>

                    {/* Project Details */}
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2 truncate whitespace-nowrap">
                        {client} • {type} • {duration}
                    </p>

                    <Separator className="mb-2 dark:bg-border/50" />

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
                        <Avatar className="w-8 h-8 border-2 border-white dark:border-gray-700 shadow-sm dark:shadow-black/20">
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
