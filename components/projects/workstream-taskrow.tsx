"use client"

import * as React from "react"
import { MoreVertical } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Checkbox } from "@/components/ui/checkbox"
import { cn } from "@/lib/utils"
import { Task } from "@/lib/types/workstream-types"

interface TaskRowProps {
    task: Task
}

export function TaskRow({ task }: TaskRowProps) {
    const [isCompleted, setIsCompleted] = React.useState(task.completed)

    const dueDateColorClass = {
        default: "text-muted-foreground",
        warning: "text-amber-600",
        muted: "text-muted-foreground"
    }

    return (
        <div className="flex items-center gap-3 py-3 px-4 hover:bg-muted/30 transition-colors group">
            {/* Checkbox */}
            <Checkbox
                checked={isCompleted}
                onCheckedChange={(checked) => setIsCompleted(checked === true)}
                className={cn(
                    "size-5 shrink-0 rounded-full border-2",
                    isCompleted
                        ? "bg-emerald-500 border-emerald-500 data-[state=checked]:bg-emerald-500 data-[state=checked]:border-emerald-500"
                        : "border-muted-foreground/40 hover:border-muted-foreground"
                )}
            />

            {/* Task name */}
            <span
                className={cn(
                    "flex-1 text-sm",
                    isCompleted && "line-through text-muted-foreground"
                )}
            >
                {task.name}
            </span>

            {/* Due date */}
            {task.dueDate && (
                <span className={cn("text-xs", dueDateColorClass[task.dueDateColor || "default"])}>
                    {task.dueDate}
                </span>
            )}

            {/* Assignee avatar */}
            {task.assignee && (
                <Avatar className="w-6 h-6 border-2 border-white shadow-sm">
                    <AvatarImage src={task.assignee.avatar} alt={task.assignee.name} />
                    <AvatarFallback className="text-xs">{task.assignee.initials}</AvatarFallback>
                </Avatar>
            )}

            {/* More options */}
            <Button
                variant="ghost"
                size="icon"
                className="size-6 opacity-0 group-hover:opacity-100 transition-opacity"
            >
                <MoreVertical className="size-4 text-muted-foreground" />
            </Button>
        </div>
    )
}
