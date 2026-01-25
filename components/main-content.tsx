'use client'
import { useState } from "react";
import ProjectsActionBar from "./projects-action-bar";
import ProjectsHeader from "./projects-header";
import ProjectsList from "./projects-list";
import ProjectsBoard from "./projects-board";
import ProjectsTimeline from "./projects-timeline";
import { ViewType } from "@/lib/types/project-view-types";
import { useNavigation } from "@/lib/contexts/navigation-context";
import InboxContent from "./content/inbox-content";
import MyTaskContent from "./content/my-task-content";
import ClientsContent from "./content/clients-content";
import PerformanceContent from "./content/performance-content";
import { MyTaskHeader } from "./my-task-header";
import { TaskActionBar } from "./task-action-bar";

export default function MainContent() {
    const [view, setView] = useState<ViewType>("list")
    const { activeNavigation } = useNavigation()

    // Render content based on active navigation
    if (activeNavigation === "Inbox") {
        return <InboxContent />
    }

    if (activeNavigation === "My task") {
        return (
            <div className="flex flex-1 flex-col m-2 border rounded-lg min-w-0 overflow-x-hidden">
                <MyTaskHeader />
                <TaskActionBar />
                <MyTaskContent />
            </div>
        )
    }

    if (activeNavigation === "Clients") {
        return <ClientsContent />
    }

    if (activeNavigation === "Performance") {
        return <PerformanceContent />
    }

    // Default: Projects
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