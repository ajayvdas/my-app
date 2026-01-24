"use client"

import Link from "next/link"
import { ChevronRight, Link2, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { ThemeToggle } from "../theme-toggle"

interface ProjectHeaderProps {
    projectTitle: string
}

export function ProjectHeader({ projectTitle }: ProjectHeaderProps) {
    return (
        <header className="flex items-center justify-between px-6 py-3 border-b">
            <nav className="flex items-center gap-2 text-sm">
                <SidebarTrigger className="h-8 w-8 rounded-lg hover:bg-accent text-muted-foreground" />
                <Button variant="link" className="text-muted-foreground px-1 h-auto py-0" asChild>
                    <Link href="/">Projects</Link>
                </Button>
                <ChevronRight className="h-4 w-4 text-muted-foreground" />
                <span className="font-medium">{projectTitle}</span>
            </nav>
            <div className="flex items-center gap-1">
                <Tooltip>
                    <TooltipTrigger asChild>
                        <ThemeToggle />
                    </TooltipTrigger>
                    <TooltipContent>Toggle theme</TooltipContent>
                </Tooltip>
                <Tooltip>
                    <TooltipTrigger asChild>
                        <Button variant="ghost" size="icon-sm">
                            <Link2 className="h-4 w-4 rotate-135" />
                        </Button>
                    </TooltipTrigger>
                    <TooltipContent>Copy link</TooltipContent>
                </Tooltip>
                <Tooltip>
                    <TooltipTrigger asChild>
                        <Button variant="ghost" size="icon-sm">
                            <Trash2 className="h-4 w-4" />
                        </Button>
                    </TooltipTrigger>
                    <TooltipContent>Delete project</TooltipContent>
                </Tooltip>
            </div>
        </header>
    )
}
