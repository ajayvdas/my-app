'use client'

import React from 'react'
import { SignalHigh, SignalLow, SignalMedium } from 'lucide-react'
import { Task, calculateBarPosition } from './timeline-types'
import TimelineBar from './timeline-bar'
import { Checkbox } from '@/components/ui/checkbox'
import { cn } from '@/lib/utils'

interface TimelineTaskRowProps {
    task: Task
    timelineStart: Date
    columnWidth: number
    columnCount: number
}

export default function TimelineTaskRow({
    task,
    timelineStart,
    columnWidth,
    columnCount
}: TimelineTaskRowProps) {
    const { left, width } = calculateBarPosition(
        task.startDate,
        task.endDate,
        timelineStart,
        columnWidth
    )

    const isChecked = task.status === 'done'

    const getStatusLabel = () => {
        switch (task.status) {
            case 'done':
                return 'done'
            case 'in-progress':
                return 'in-progress'
            default:
                return 'todo'
        }
    }

    const getPriorityIcon = () => {
        switch (task.priority) {
            case 'high':
                return <SignalHigh className="w-3.5 h-3.5 text-red-500" />
            case 'medium':
                return <SignalMedium className="w-3.5 h-3.5 text-yellow-500" />
            case 'low':
            default:
                return <SignalLow className="w-3.5 h-3.5 text-muted-foreground/70" />
        }
    }

    return (
        <>
            {/* Mobile task row */}
            <div className="md:hidden flex hover:bg-muted/30 transition-colors border-b border-border/30 min-h-[52px]">
                <div className="flex-1 px-4 py-2 pl-10">
                    <div className="flex flex-col gap-0.5">
                        {/* Task name row */}
                        <div className="flex items-center gap-2">
                            <Checkbox
                                checked={isChecked}
                                className={cn(
                                    "h-4 w-4 rounded-sm shrink-0",
                                    isChecked && "bg-teal-500 border-teal-500 data-[state=checked]:bg-teal-500 data-[state=checked]:border-teal-500"
                                )}
                            />
                            <span
                                className={cn(
                                    'text-sm',
                                    task.status === 'done' && 'line-through text-muted-foreground'
                                )}
                            >
                                {task.name}
                            </span>
                        </div>
                        {/* Metadata row */}
                        <div className="flex items-center gap-1.5 text-xs text-muted-foreground pl-6">
                            <span className="font-medium">{task.assignee}</span>
                            <span>•</span>
                            <span className="inline-flex items-center">
                                {getPriorityIcon()}
                            </span>
                            <span>•</span>
                            <span>{getStatusLabel()}</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Desktop task row */}
            <div className="hidden md:flex hover:bg-muted/30 transition-colors border-b border-border/30 min-h-[52px]">
                {/* Left column - Task info */}
                <div className="w-80 shrink-0 px-4 py-2 border-r bg-background sticky left-0 z-10">
                    <div className="pl-6 flex flex-col gap-0.5">
                        {/* Task name row */}
                        <div className="flex items-center gap-2">
                            <Checkbox
                                checked={isChecked}
                                className={cn(
                                    "h-4 w-4 rounded-sm shrink-0",
                                    isChecked && "bg-teal-500 border-teal-500 data-[state=checked]:bg-teal-500 data-[state=checked]:border-teal-500"
                                )}
                            />
                            <span
                                className={cn(
                                    'text-sm',
                                    task.status === 'done' && 'line-through text-muted-foreground'
                                )}
                            >
                                {task.name}
                            </span>
                        </div>
                        {/* Metadata row */}
                        <div className="flex items-center gap-1.5 text-xs text-muted-foreground pl-6">
                            <span className="font-medium">{task.assignee}</span>
                            <span>•</span>
                            <span className="inline-flex items-center">
                                {getPriorityIcon()}
                            </span>
                            <span>•</span>
                            <span>{getStatusLabel()}</span>
                        </div>
                    </div>
                </div>

                {/* Right column - Timeline grid with task bar */}
                <div
                    className="relative flex-1 flex items-center"
                    style={{ minWidth: columnWidth * columnCount }}
                >
                    {/* Grid lines */}
                    <div className="absolute inset-0 flex">
                        {Array.from({ length: columnCount }).map((_, index) => (
                            <div
                                key={index}
                                className="shrink-0 border-r border-border/30 h-full"
                                style={{ width: columnWidth }}
                            />
                        ))}
                    </div>

                    {/* Task bar */}
                    {left >= 0 && width > 0 && (
                        <div
                            className="absolute top-1/2 -translate-y-1/2"
                            style={{
                                left: left + 4,
                                width: Math.max(width - 8, 120)
                            }}
                        >
                            <TimelineBar
                                startDate={task.startDate}
                                endDate={task.endDate}
                                name={task.name}
                                variant="task"
                            />
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}

