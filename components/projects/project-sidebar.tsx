"use client"

import { Clock, Calendar, RefreshCw, Signal, Tag, Users, FileText } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Progress } from "@/components/ui/progress"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"
import { QuickLinkItem } from "./quick-link-item"

interface SidebarProps {
    estimate: string
    dueDate: string
    daysRemaining: number
    progress: number
    status: 'active' | 'inactive' | 'completed'
    group: string | null
    priority: 'high' | 'medium' | 'low'
    label: string
    pic?: {
        name: string
        avatar?: string
        initials: string
    }
    support?: {
        initials: string
    }
}

const statusConfig = {
    active: { label: 'Active', className: 'bg-green-100 text-green-700 border-green-200 hover:bg-green-100' },
    inactive: { label: 'Inactive', className: 'bg-gray-100 text-gray-700 border-gray-200 hover:bg-gray-100' },
    completed: { label: 'Completed', className: 'bg-blue-100 text-blue-700 border-blue-200 hover:bg-blue-100' }
}

const priorityConfig = {
    high: { label: 'High', className: 'text-orange-500' },
    medium: { label: 'Medium', className: 'text-yellow-500' },
    low: { label: 'Low', className: 'text-green-500' }
}

export function ProjectSidebar({
    estimate,
    dueDate,
    daysRemaining,
    progress,
    status,
    group,
    priority,
    label,
    pic,
    support
}: SidebarProps) {
    return (
        <aside className="w-80 shrink-0 border-l p-4 overflow-y-auto bg-card">
            {/* Time Section */}
            <Card className="mb-4 py-4 shadow-none border-0">
                <CardHeader className="pb-3 pt-0">
                    <CardTitle className="text-sm font-semibold">Time</CardTitle>
                </CardHeader>
                <CardContent className="pt-0 space-y-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Clock className="h-4 w-4" />
                            <span>Estimate</span>
                        </div>
                        <span className="text-sm font-medium text-primary">{estimate}</span>
                    </div>
                    <Separator />
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Calendar className="h-4 w-4" />
                            <span>Due Date</span>
                        </div>
                        <span className="text-sm font-medium">{dueDate}</span>
                    </div>
                    <Separator />
                    <div>
                        <div className="flex items-center justify-between mb-2">
                            <span className="text-sm text-muted-foreground">Days remaining</span>
                            <span className="text-sm font-medium text-primary">{daysRemaining} Days to go</span>
                        </div>
                        <Progress value={progress} className="h-2" />
                    </div>
                </CardContent>
            </Card>

            <Separator className="my-4" />

            {/* Backlog Section */}
            <Card className="mb-4 py-4 shadow-none border-0">
                <CardHeader className="pb-3 pt-0">
                    <CardTitle className="text-sm font-semibold">Backlog</CardTitle>
                </CardHeader>
                <CardContent className="pt-0 space-y-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <RefreshCw className="h-4 w-4" />
                            <span>Status</span>
                        </div>
                        <Badge className={statusConfig[status].className}>
                            {statusConfig[status].label}
                        </Badge>
                    </div>
                    <Separator />
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Users className="h-4 w-4" />
                            <span>Group</span>
                        </div>
                        <span className="text-sm">{group || 'None'}</span>
                    </div>
                    <Separator />
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-sm">
                            <Signal className="h-4 w-4 text-muted-foreground" />
                            <span className={priorityConfig[priority].className}>Priority</span>
                        </div>
                        <span className="text-sm font-medium">{priorityConfig[priority].label}</span>
                    </div>
                    <Separator />
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Tag className="h-4 w-4" />
                            <span>Label</span>
                        </div>
                        <Badge className="bg-blue-100 text-blue-700 border-blue-200 hover:bg-blue-100">
                            {label}
                        </Badge>
                    </div>
                    <Separator />
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Users className="h-4 w-4" />
                            <span>PIC</span>
                        </div>
                        {pic ? (
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <Avatar className="h-6 w-6 cursor-pointer">
                                        {pic.avatar && <AvatarImage src={pic.avatar} />}
                                        <AvatarFallback>{pic.initials}</AvatarFallback>
                                    </Avatar>
                                </TooltipTrigger>
                                <TooltipContent>{pic.name}</TooltipContent>
                            </Tooltip>
                        ) : (
                            <span className="text-sm text-muted-foreground">-</span>
                        )}
                    </div>
                    <Separator />
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Users className="h-4 w-4" />
                            <span>Support</span>
                        </div>
                        {support ? (
                            <Avatar className="h-6 w-6">
                                <AvatarFallback className="text-xs">{support.initials}</AvatarFallback>
                            </Avatar>
                        ) : (
                            <span className="text-sm text-muted-foreground">-</span>
                        )}
                    </div>
                </CardContent>
            </Card>

            <Separator className="my-4" />

            {/* Quick Links Section */}
            <Card className="py-4 shadow-none border-0">
                <CardHeader className="pb-3 pt-0">
                    <CardTitle className="text-sm font-semibold">Quick links</CardTitle>
                </CardHeader>
                <CardContent className="pt-0 space-y-3">
                    <QuickLinkItem
                        icon={<FileText className="h-5 w-5 text-red-500" />}
                        name="Proposal.pdf"
                        size="13.0 MB"
                    />
                    <Separator />
                    <QuickLinkItem
                        icon={
                            <div className="h-5 w-5 bg-muted rounded flex items-center justify-center">
                                <FileText className="h-3 w-3 text-muted-foreground" />
                            </div>
                        }
                        name="Wireframe Layout.zip"
                        size="13.0 MB"
                    />
                    <Separator />
                    <QuickLinkItem
                        icon={
                            <div className="h-5 w-5 bg-purple-600 rounded flex items-center justify-center">
                                <span className="text-white text-xs font-bold">F</span>
                            </div>
                        }
                        name="Design system.fig"
                        size="13.0 MB"
                    />
                </CardContent>
            </Card>
        </aside>
    )
}
