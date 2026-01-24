"use client"

import { Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"

interface QuickLinkItemProps {
    icon: React.ReactNode
    name: string
    size: string
}

export function QuickLinkItem({ icon, name, size }: QuickLinkItemProps) {
    return (
        <div className="flex items-center justify-between group">
            <div className="flex items-center gap-3">
                {icon}
                <div>
                    <div className="text-sm">{name}</div>
                    <div className="text-xs text-muted-foreground">{size}</div>
                </div>
            </div>
            <Tooltip>
                <TooltipTrigger asChild>
                    <Button
                        variant="ghost"
                        size="icon-sm"
                        className="h-6 w-6 opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                        <Download className="h-4 w-4" />
                    </Button>
                </TooltipTrigger>
                <TooltipContent>Download file</TooltipContent>
            </Tooltip>
        </div>
    )
}
