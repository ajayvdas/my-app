"use client"

import { Signal, Globe, Clock, RefreshCw } from "lucide-react"
import { Separator } from "@/components/ui/separator"

interface ProjectMetadataProps {
    id: string
    priority: 'high' | 'medium' | 'low'
    location: string
    sprint: string
    lastSync: string
}

const priorityColors = {
    high: 'text-orange-500',
    medium: 'text-yellow-500',
    low: 'text-green-500'
}

export function ProjectMetadata({ id, priority, location, sprint, lastSync }: ProjectMetadataProps) {
    return (
        <div className="flex items-center gap-6 text-sm text-muted-foreground mb-6 flex-wrap">
            <div className="flex items-center gap-1.5">
                <span className="text-muted-foreground text-xs">ID:</span>
                <span className="text-primary font-medium text-xs">#{id}</span>
            </div>
            <Separator orientation="vertical" className="h-4" />
            <div className="flex items-center gap-1.5">
                <Signal className="h-4 w-4" />
                <span className={`${priorityColors[priority]} font-medium capitalize text-xs`}>{priority}</span>
            </div>
            <Separator orientation="vertical" className="h-4" />
            <div className="flex items-center gap-1.5">
                <Globe className="h-4 w-4" />
                <span className="text-xs font-medium text-foreground">{location}</span>
            </div>
            <Separator orientation="vertical" className="h-4" />
            <div className="flex items-center gap-1.5">
                <Clock className="h-4 w-4" />
                <span className="text-xs">Sprints:</span>
                <span className="font-medium text-foreground text-xs">{sprint}</span>
            </div>
            <Separator orientation="vertical" className="h-4" />
            <div className="flex items-center gap-1.5">
                <RefreshCw className="h-4 w-4" />
                <span className="text-xs">Last sync:</span>
                <span className="font-medium text-foreground text-xs">{lastSync}</span>
            </div>
        </div>
    )
}
