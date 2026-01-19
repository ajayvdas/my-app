'use client'

import React from 'react'
import { formatDateHeader, generateDateRange } from './timeline-types'
import { cn } from '@/lib/utils'

interface TimelineHeaderProps {
    timelineStart: Date
    columnCount: number
    columnWidth: number
}

export default function TimelineHeader({
    timelineStart,
    columnCount,
    columnWidth
}: TimelineHeaderProps) {
    const dates = generateDateRange(timelineStart, columnCount)
    const today = new Date()

    // Check if a date is today
    const isToday = (date: Date): boolean => {
        return (
            date.getDate() === today.getDate() &&
            date.getMonth() === today.getMonth() &&
            date.getFullYear() === today.getFullYear()
        )
    }

    // Get month name from the first date
    const getMonthYear = () => {
        const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
            'July', 'August', 'September', 'October', 'November', 'December']
        return `${monthNames[dates[0]?.getMonth() ?? 0]} ${dates[0]?.getFullYear() ?? 2024}`
    }

    return (
        <>
            {/* Mobile header - shows month only */}
            <div className="flex md:hidden sticky top-0 z-20 bg-background border-b">
                <div className="flex-1 px-4 py-3 flex items-center justify-between">
                    <span className="text-xs font-medium text-muted-foreground"></span>
                    <span className="text-sm font-medium text-muted-foreground">{getMonthYear()}</span>
                </div>
            </div>

            {/* Desktop header - full timeline */}
            <div className="hidden md:flex sticky top-0 z-20 bg-background border-b min-w-fit">
                {/* Left column - Name header */}
                <div className="w-80 shrink-0 px-4 py-3 border-r bg-background sticky left-0 z-30">
                    <span className="text-xs font-medium text-muted-foreground">Name</span>
                </div>

                {/* Right column - Date headers */}
                <div className="flex">
                    {dates.map((date, index) => (
                        <div
                            key={index}
                            className="shrink-0 px-2 py-3 text-center border-r border-border/50"
                            style={{ width: columnWidth }}
                        >
                            <span
                                className={cn(
                                    "text-xs whitespace-nowrap",
                                    isToday(date)
                                        ? "text-cyan-500 font-semibold"
                                        : "text-muted-foreground"
                                )}
                            >
                                {formatDateHeader(date)}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

