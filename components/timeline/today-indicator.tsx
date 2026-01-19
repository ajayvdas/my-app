'use client'

import React from 'react'

interface TodayIndicatorProps {
    timelineStart: Date
    columnWidth: number
    columnCount: number
}

export default function TodayIndicator({
    timelineStart,
    columnWidth,
    columnCount
}: TodayIndicatorProps) {
    const today = new Date()

    // Calculate the position of today relative to timeline start
    const todayStart = new Date(today.getFullYear(), today.getMonth(), today.getDate())
    const timelineStartNormalized = new Date(
        timelineStart.getFullYear(),
        timelineStart.getMonth(),
        timelineStart.getDate()
    )

    const dayOffset = Math.floor(
        (todayStart.getTime() - timelineStartNormalized.getTime()) / (1000 * 60 * 60 * 24)
    )

    // Only show indicator if today is within the visible range
    if (dayOffset < 0 || dayOffset >= columnCount) {
        return null
    }

    // Position at the center of the column for today
    const leftPosition = (dayOffset * columnWidth) + (columnWidth / 2)

    return (
        <div
            className="absolute top-0 bottom-0 z-20 pointer-events-none hidden md:block"
            style={{
                left: `calc(320px + ${leftPosition}px)`, // 320px = w-80 (name column width)
            }}
        >
            {/* Vertical line */}
            <div
                className="w-0.5 h-full bg-cyan-500/70"
                style={{
                    boxShadow: '0 0 8px rgba(6, 182, 212, 0.4)'
                }}
            />
        </div>
    )
}
