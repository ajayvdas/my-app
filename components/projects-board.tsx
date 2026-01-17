'use client'

import React, { useState } from 'react'
import { Card, CardHeader, CardTitle, CardContent, CardAction } from './ui/card'
import { Button } from './ui/button'
import { Plus, MoreHorizontal } from 'lucide-react'
import ProjectItemCard from './project-item-card'
import { Badge } from './ui/badge'
import { Tooltip, TooltipContent, TooltipTrigger } from './ui/tooltip'
import { Separator } from './ui/separator'

// Mock data organized by status
const mockProjectsByStatus = {
    Backlog: [
        {
            id: "1",
            title: "Internal CRM System",
            client: "Acme Corp Internal",
            type: "New",
            duration: "",
            status: "Backlog" as const,
            date: "Feb 20",
            priority: "Low" as const,
            progress: 0,
            completedTasks: 0,
            totalTasks: 4,
            avatar: "https://i.pravatar.cc/150?img=1",
            avatarFallback: "AC",
        },
    ],
    Planned: [
        {
            id: "2",
            title: "Marketing Site Refresh",
            client: "Acme Marketing",
            type: "Phase 1",
            duration: "2 weeks",
            status: "Planned" as const,
            date: "Feb 3",
            priority: "Medium" as const,
            progress: 10,
            completedTasks: 0,
            totalTasks: 3,
            avatar: "https://i.pravatar.cc/150?img=2",
            avatarFallback: "AM",
        },
        {
            id: "3",
            title: "Design System Cleanup",
            client: "Acme Corp Internal",
            type: "Refactor",
            duration: "1 week",
            status: "Planned" as const,
            date: "Feb 5",
            priority: "Low" as const,
            progress: 0,
            completedTasks: 0,
            totalTasks: 4,
            avatar: "https://i.pravatar.cc/150?img=3",
            avatarFallback: "AC",
        },
    ],
    Active: [
        {
            id: "4",
            title: "Fintech Mobile App Redesign",
            client: "Acme Bank",
            type: "MVP",
            duration: "2 weeks",
            status: "Active" as const,
            date: "Feb 12",
            priority: "High" as const,
            progress: 35,
            completedTasks: 1,
            totalTasks: 4,
            avatar: "https://i.pravatar.cc/150?img=4",
            avatarFallback: "AB",
        },
        {
            id: "5",
            title: "Internal PM System",
            client: "Acme Corp Internal",
            type: "Improvement",
            duration: "",
            status: "Active" as const,
            date: "Feb 9",
            priority: "Medium" as const,
            progress: 20,
            completedTasks: 1,
            totalTasks: 6,
            avatar: "https://i.pravatar.cc/150?img=5",
            avatarFallback: "AC",
        },
        {
            id: "6",
            title: "AI Learning Platform",
            client: "Acme Learning",
            type: "Revamp",
            duration: "3 weeks",
            status: "Active" as const,
            date: "Feb 13",
            priority: "Urgent" as const,
            progress: 0,
            completedTasks: 0,
            totalTasks: 0,
            avatar: "https://i.pravatar.cc/150?img=6",
            avatarFallback: "AL",
        },
    ],
    Completed: [
        {
            id: "7",
            title: "Ecommerce website",
            client: "Acme Retail",
            type: "Audit",
            duration: "1 week",
            status: "Completed" as const,
            date: "Jan 16",
            priority: "Medium" as const,
            progress: 100,
            completedTasks: 5,
            totalTasks: 5,
            avatar: "https://i.pravatar.cc/150?img=7",
            avatarFallback: "AR",
        },
        {
            id: "8",
            title: "Onboarding Flow A/B Test",
            client: "Acme SaaS",
            type: "Experiment",
            duration: "1 week",
            status: "Completed" as const,
            date: "Jan 13",
            priority: "High" as const,
            progress: 100,
            completedTasks: 3,
            totalTasks: 3,
            avatar: "https://i.pravatar.cc/150?img=8",
            avatarFallback: "AS",
        },
        {
            id: "9",
            title: "Support Center Revamp",
            client: "Acme Helpdesk",
            type: "Revamp",
            duration: "2 weeks",
            status: "Completed" as const,
            date: "Jan 11",
            priority: "Medium" as const,
            progress: 100,
            completedTasks: 0,
            totalTasks: 0,
            avatar: "https://i.pravatar.cc/150?img=9",
            avatarFallback: "AH",
        },
    ],
}

type StatusType = 'Backlog' | 'Planned' | 'Active' | 'Completed'

interface ColumnConfig {
    id: StatusType
    title: string
    count: number
}

interface BoardColumnProps {
    column: ColumnConfig
    projects: typeof mockProjectsByStatus[StatusType]
}

function BoardColumn({ column, projects }: BoardColumnProps) {
    return (
        <div className='flex-shrink-0 w-[280px] flex flex-col max-h-full'>
            <Card className='flex flex-col h-full bg-muted/40 border-border/50 shadow-sm'>
                {/* Column Header */}
                <CardHeader className='pb-3'>
                    <div className='flex items-center justify-between'>
                        <div className='flex items-center gap-2'>
                            <CardTitle className='text-sm font-medium text-muted-foreground'>
                                {column.title}
                            </CardTitle>
                            <Badge
                                variant="secondary"
                                className='rounded-full h-5 min-w-5 px-2 text-xs font-normal'
                            >
                                {column.count}
                            </Badge>
                        </div>
                        <CardAction>
                            <div className='flex items-center gap-0.5'>
                                <Tooltip>
                                    <TooltipTrigger asChild>
                                        <Button
                                            variant="ghost"
                                            size="icon"
                                            className='h-7 w-7 hover:bg-muted'
                                        >
                                            <Plus className='h-4 w-4' />
                                            <span className='sr-only'>Add project</span>
                                        </Button>
                                    </TooltipTrigger>
                                    <TooltipContent side="bottom">
                                        <p>Add project</p>
                                    </TooltipContent>
                                </Tooltip>

                                <Tooltip>
                                    <TooltipTrigger asChild>
                                        <Button
                                            variant="ghost"
                                            size="icon"
                                            className='h-7 w-7 hover:bg-muted'
                                        >
                                            <MoreHorizontal className='h-4 w-4' />
                                            <span className='sr-only'>More options</span>
                                        </Button>
                                    </TooltipTrigger>
                                    <TooltipContent side="bottom">
                                        <p>More options</p>
                                    </TooltipContent>
                                </Tooltip>
                            </div>
                        </CardAction>
                    </div>
                </CardHeader>

                <Separator className='mx-6' />

                {/* Column Content */}
                <CardContent className='flex-1 overflow-y-auto pt-4 space-y-3'>
                    {projects.map((project) => (
                        <ProjectItemCard key={project.id} {...project} />
                    ))}

                    {/* Add Project Button */}
                    <Button
                        variant="ghost"
                        className='w-full justify-start text-muted-foreground hover:text-foreground hover:bg-muted/60 transition-colors'
                        size="sm"
                    >
                        <Plus className='h-4 w-4 mr-2' />
                        Add project
                    </Button>
                </CardContent>
            </Card>
        </div>
    )
}

export default function ProjectsBoard() {
    const [projectsByStatus] = useState(mockProjectsByStatus)

    const columns: ColumnConfig[] = [
        { id: 'Backlog', title: 'Backlog', count: projectsByStatus.Backlog.length },
        { id: 'Planned', title: 'Planned', count: projectsByStatus.Planned.length },
        { id: 'Active', title: 'Active', count: projectsByStatus.Active.length },
        { id: 'Completed', title: 'Completed', count: projectsByStatus.Completed.length },
    ]

    return (
        <div className='w-full h-full p-4 flex gap-4 overflow-x-auto'>
            {columns.map((column) => (
                <BoardColumn
                    key={column.id}
                    column={column}
                    projects={projectsByStatus[column.id]}
                />
            ))}
        </div>
    )
}