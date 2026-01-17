'use client'
import { useState } from "react";
import ProjectsActionBar from "./projects-action-bar";
import ProjectsHeader from "./projects-header";
import ProjectsList from "./projects-list";
import ProjectsBoard from "./projects-board";
import ProjectsTimeline from "./projects-timeline";

type ViewType = "list" | "board" | "timeline"

export default function MainContent() {
    const [view, setView] = useState<ViewType>("list")
    return (
        <div className="flex flex-1 flex-col m-2 border rounded-lg">
            {/* ProjectsHeader */}
            <ProjectsHeader />
            {/* ProjectsActionBar */}
            <ProjectsActionBar />
            {/* ProjectsList */}
            {view === "list" && <ProjectsList />}
            {view === "board" && <ProjectsBoard />}
            {view === "timeline" && <ProjectsTimeline />}
        </div>
    )
}