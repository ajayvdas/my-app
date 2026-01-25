"use client"

import { useState } from "react"
import ProjectsActionBar from "@/components/projects-action-bar"
import ProjectsHeader from "@/components/projects-header"
import ProjectsList from "@/components/projects-list"
import ProjectsBoard from "@/components/projects-board"
import ProjectsTimeline from "@/components/projects-timeline"
import { ViewType } from "@/lib/types/project-view-types"

export default function ProjectsPage() {
    const [view, setView] = useState<ViewType>("list")

    return (
        <div className="flex flex-1 flex-col m-2 border rounded-lg min-w-0 overflow-x-hidden">
            <ProjectsHeader />
            <ProjectsActionBar view={view} setView={setView} />
            {view === "list" && <ProjectsList />}
            {view === "board" && <ProjectsBoard />}
            {view === "timeline" && <ProjectsTimeline />}
        </div>
    )
}
