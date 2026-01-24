"use client"

import * as React from "react"
import { ChevronDown, Plus } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { cn } from "@/lib/utils"
import { ProgressCircle } from "@/components/progress-circle"
import { Workstream } from "@/lib/types/workstream-types"
import { TaskRow } from "./workstream-taskrow"

interface WorkstreamItemProps {
    workstream: Workstream
    isOpen: boolean
    onOpenChange: (open: boolean) => void
}

export function WorkstreamItem({ workstream, isOpen, onOpenChange }: WorkstreamItemProps) {
    const completedCount = workstream.tasks.filter(t => t.completed).length
    const totalCount = workstream.tasks.length

    return (
        <Collapsible open={isOpen} onOpenChange={onOpenChange}>
            <Card className="border shadow-none p-0 rounded-xl">
                <CollapsibleTrigger asChild className="rounded-xl rounded-b-none border-b">
                    <div className="flex items-center gap-3 p-4 cursor-pointer hover:bg-muted/30 transition-colors">
                        {/* Chevron */}
                        <ChevronDown
                            className={cn(
                                "size-4 text-muted-foreground shrink-0 transition-transform duration-200",
                                isOpen && "rotate-180"
                            )}
                        />

                        {/* Workstream name */}
                        <span className="flex-1 text-sm font-medium">{workstream.name}</span>

                        {/* Add task button */}
                        <Button
                            variant="ghost"
                            size="icon"
                            className="size-6 shrink-0"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <Plus className="size-4 text-muted-foreground" />
                        </Button>

                        {/* Progress counter */}
                        <span className="text-sm text-muted-foreground tabular-nums">
                            {completedCount}/{totalCount}
                        </span>

                        {/* Circular progress */}
                        <ProgressCircle
                            progress={totalCount > 0 ? (completedCount / totalCount) * 100 : 0}
                            color="#f59e0b"
                            size={20}
                            strokeWidth={2}
                        />
                    </div>
                </CollapsibleTrigger>

                <CollapsibleContent>
                    {workstream.tasks.map((task) => (
                        <TaskRow key={task.id} task={task} />
                    ))}
                </CollapsibleContent>
            </Card>
        </Collapsible>
    )
}
