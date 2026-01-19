'use client'

import React from 'react'
import { Project } from './timeline-types'
import TimelineHeader from './timeline-header'
import TimelineProjectRow from './timeline-project-row'
import TodayIndicator from './today-indicator'

interface TimelineGridProps {
    projects: Project[]
    timelineStart?: Date
    columnCount?: number
    columnWidth?: number
}

export default function TimelineGrid({
    projects,
    timelineStart = new Date(2026, 0, 13), // January 13, 2026 (Mon 13)
    columnCount = 21, // 3 weeks of days
    columnWidth = 110
}: TimelineGridProps) {
    return (
        <div className="flex flex-col min-h-0 h-full">
            {/* Scrollable container - only scroll horizontally on desktop */}
            <div className="flex-1 overflow-y-auto overflow-x-hidden md:overflow-x-auto relative">
                {/* Today indicator line - spans full height */}
                <TodayIndicator
                    timelineStart={timelineStart}
                    columnCount={columnCount}
                    columnWidth={columnWidth}
                />

                {/* Timeline header */}
                <TimelineHeader
                    timelineStart={timelineStart}
                    columnCount={columnCount}
                    columnWidth={columnWidth}
                />

                {/* Project rows */}
                <div className="md:min-w-fit">
                    {projects.map((project) => (
                        <TimelineProjectRow
                            key={project.id}
                            project={project}
                            timelineStart={timelineStart}
                            columnWidth={columnWidth}
                            columnCount={columnCount}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}
