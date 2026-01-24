"use client"

import { Star, Users, Pencil } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"

interface ProjectTitleProps {
    title: string
    isActive?: boolean
    isAssignedToMe?: boolean
}

export function ProjectTitle({ title, isActive = true, isAssignedToMe = true }: ProjectTitleProps) {
    return (
        <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-3 flex-wrap">
                <h1 className="text-xl font-semibold">{title}</h1>
                {isActive && (
                    <Badge className="bg-green-100 text-green-700 border-green-200 hover:bg-green-100">
                        <Star className="h-3 w-3 mr-1" />
                        Active
                    </Badge>
                )}
                {isAssignedToMe && (
                    <Badge className="bg-red-100 text-red-600 border-red-200 hover:bg-red-100">
                        <Users className="h-3 w-3 mr-1" />
                        Assigned to me
                    </Badge>
                )}
            </div>
            <Tooltip>
                <TooltipTrigger asChild>
                    <Button variant="ghost" size="icon-sm" className="h-8 w-8 rounded-lg hover:bg-accent text-muted-foreground">
                        <Pencil className="h-4 w-4" />
                    </Button>
                </TooltipTrigger>
                <TooltipContent>Edit project</TooltipContent>
            </Tooltip>
        </div>
    )
}
