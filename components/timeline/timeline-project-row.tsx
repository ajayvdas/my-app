'use client'

import React, { useState } from 'react'
import { ChevronRight } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger
} from '@/components/ui/collapsible'
import { Project, calculateBarPosition, formatDateRange, calculateProjectCompletion } from './timeline-types'
import TimelineBar from './timeline-bar'
import TimelineTaskRow from './timeline-task-row'
import { cn } from '@/lib/utils'

interface TimelineProjectRowProps {
    project: Project
    timelineStart: Date
    columnWidth: number
    columnCount: number
}

export default function TimelineProjectRow({
    project,
    timelineStart,
    columnWidth,
    columnCount
}: TimelineProjectRowProps) {
    const [isOpen, setIsOpen] = useState(false)

    const { left, width } = calculateBarPosition(
        project.startDate,
        project.endDate,
        timelineStart,
        columnWidth
    )

    const completionPercentage = calculateProjectCompletion(project.tasks)

    return (
        <Collapsible open={isOpen} onOpenChange={setIsOpen}>
            {/* Mobile project row */}
            <div className="md:hidden flex hover:bg-muted/50 transition-colors border-b min-h-[44px]">
                <div className="flex-1 px-4 py-3 flex items-center gap-3">
                    <CollapsibleTrigger className="flex items-center gap-2 flex-1 text-left group outline-none">
                        <ChevronRight
                            className={cn(
                                'h-4 w-4 text-muted-foreground transition-transform duration-200 shrink-0',
                                isOpen && 'rotate-90'
                            )}
                        />
                        <div className="flex flex-col gap-0.5 min-w-0 flex-1">
                            <div className="flex items-center gap-2">
                                <span className="font-semibold text-sm truncate">{project.name}</span>
                                <Badge
                                    variant="secondary"
                                    className="h-5 min-w-5 px-1.5 text-xs font-normal bg-muted text-muted-foreground border-none shrink-0"
                                >
                                    {project.tasks.length}
                                </Badge>
                            </div>
                            <span className="text-xs text-muted-foreground">
                                {formatDateRange(project.startDate, project.endDate)}
                            </span>
                        </div>
                    </CollapsibleTrigger>
                    <span className="text-sm font-medium text-muted-foreground shrink-0">
                        {completionPercentage}%
                    </span>
                </div>
            </div>

            {/* Desktop project row */}
            <div className="hidden md:flex hover:bg-muted/50 transition-colors border-b min-h-[44px]">
                {/* Left column - Project name */}
                <div className="w-80 shrink-0 px-4 py-3 border-r bg-background sticky left-0 z-10">
                    <CollapsibleTrigger className="flex items-center gap-2 w-full text-left group outline-none">
                        <ChevronRight
                            className={cn(
                                'h-4 w-4 text-muted-foreground transition-transform duration-200',
                                isOpen && 'rotate-90'
                            )}
                        />
                        <span className="font-semibold text-sm">{project.name}</span>
                        <Badge
                            variant="secondary"
                            className="ml-1 h-5 min-w-5 px-1.5 text-xs font-normal bg-muted text-muted-foreground border-none"
                        >
                            {project.tasks.length}
                        </Badge>
                    </CollapsibleTrigger>
                </div>

                {/* Right column - Timeline grid with project bar */}
                <div
                    className="relative flex-1 flex items-center"
                    style={{ minWidth: columnWidth * columnCount }}
                >
                    {/* Grid lines */}
                    <div className="absolute inset-0 flex h-full">
                        {Array.from({ length: columnCount }).map((_, index) => (
                            <div
                                key={index}
                                className="shrink-0 border-r border-border/30 h-full"
                                style={{ width: columnWidth }}
                            />
                        ))}
                    </div>

                    {/* Project bar */}
                    {left >= 0 && width > 0 && (
                        <div
                            className="absolute top-1/2 -translate-y-1/2"
                            style={{
                                left: left + 4,
                                width: Math.max(width - 8, 150)
                            }}
                        >
                            <TimelineBar
                                startDate={project.startDate}
                                endDate={project.endDate}
                                name={project.name}
                                variant="project"
                            />
                        </div>
                    )}
                </div>
            </div>

            {/* Collapsible task rows */}
            <CollapsibleContent className="data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:slide-out-to-top-1 data-[state=open]:slide-in-from-top-1 duration-200">
                {project.tasks.map((task) => (
                    <TimelineTaskRow
                        key={task.id}
                        task={task}
                        timelineStart={timelineStart}
                        columnWidth={columnWidth}
                        columnCount={columnCount}
                    />
                ))}
            </CollapsibleContent>
        </Collapsible>
    )
}

