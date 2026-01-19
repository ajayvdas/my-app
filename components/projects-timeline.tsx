'use client'

import React from 'react'
import TimelineControls from './timeline-controls'
import { TimelineGrid, mockProjects } from './timeline'

export default function ProjectsTimeline() {
    return (
        <div className="flex flex-col h-full min-w-0">
            <TimelineControls />
            <div className="flex-1 overflow-hidden">
                <TimelineGrid
                    projects={mockProjects}
                    timelineStart={new Date(2026, 0, 13)} // Mon Jan 13, 2026
                    columnCount={21} // 3 weeks
                    columnWidth={110}
                />
            </div>
        </div>
    )
}