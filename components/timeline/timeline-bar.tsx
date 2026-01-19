'use client'

import React from 'react'
import { cn } from '@/lib/utils'

interface TimelineBarProps {
    startDate: string
    endDate: string
    name: string
    variant?: 'project' | 'task'
    className?: string
}

export default function TimelineBar({
    startDate,
    endDate,
    name,
    variant = 'project',
    className
}: TimelineBarProps) {
    const dateRange = `${startDate} - ${endDate}`

    return (
        <div
            className={cn(
                'flex items-center gap-2 px-3 whitespace-nowrap overflow-hidden text-ellipsis',
                variant === 'project' && [
                    'h-7 bg-neutral-100 dark:bg-neutral-800 rounded-sm',
                    'text-sm font-medium text-foreground'
                ],
                variant === 'task' && [
                    'h-7 bg-cyan-100 dark:bg-cyan-900/40 rounded-sm',
                    'text-sm font-medium text-cyan-800 dark:text-cyan-200',
                    'border-l-2 border-cyan-500'
                ],
                className
            )}
        >
            <span className="text-muted-foreground">{dateRange}:</span>
            <span className="truncate">{name}</span>
        </div>
    )
}
