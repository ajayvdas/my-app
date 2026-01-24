"use client"

import * as React from "react"
import { ChevronDown, ChevronUp } from "lucide-react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Workstream } from "@/lib/types/workstream-types"
import { WorkstreamItem } from "./workstream-item"

// Mock data matching the design
const workstreamsData: Workstream[] = [
    {
        id: "1",
        name: "Processing documents for signing the deal",
        tasks: [
            {
                id: "1-1",
                name: "Processing documents for signing the deal",
                completed: true,
                dueDate: "Today",
                dueDateColor: "default",
                assignee: { name: "John Doe", avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face", initials: "JD" }
            },
            {
                id: "1-2",
                name: "Internal approval & sign-off",
                completed: false,
                dueDate: "Today",
                dueDateColor: "warning",
                assignee: { name: "John Doe", avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face", initials: "JD" }
            },
            {
                id: "1-3",
                name: "Send contract to client",
                completed: false,
                dueDate: "Tomorrow",
                dueDateColor: "warning",
                assignee: { name: "John Doe", avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face", initials: "JD" }
            },
            {
                id: "1-4",
                name: "Track client signature",
                completed: false,
                assignee: { name: "John Doe", avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face", initials: "JD" }
            }
        ]
    },
    {
        id: "2",
        name: "Client onboarding setup",
        tasks: [
            {
                id: "2-1",
                name: "Collect onboarding requirements",
                completed: false,
                dueDate: "This week",
                dueDateColor: "muted",
                assignee: { name: "John Doe", avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face", initials: "JD" }
            },
            {
                id: "2-2",
                name: "Configure sandbox account",
                completed: false,
                assignee: { name: "John Doe", avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face", initials: "JD" }
            },
            {
                id: "2-3",
                name: "Schedule onboarding session",
                completed: false,
                assignee: { name: "John Doe", avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face", initials: "JD" }
            }
        ]
    },
    {
        id: "3",
        name: "Product wireframe & review",
        tasks: [
            {
                id: "3-1",
                name: "Create initial wireframes",
                completed: false,
                assignee: { name: "John Doe", avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face", initials: "JD" }
            },
            {
                id: "3-2",
                name: "Review with stakeholders",
                completed: false,
                assignee: { name: "John Doe", avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face", initials: "JD" }
            }
        ]
    },
    {
        id: "4",
        name: "Demo UI Concept",
        tasks: [
            {
                id: "4-1",
                name: "Design demo UI mockups",
                completed: false,
                assignee: { name: "John Doe", avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face", initials: "JD" }
            }
        ]
    },
    {
        id: "5",
        name: "Feedback and iteration with stakeholders",
        tasks: [
            {
                id: "5-1",
                name: "Collect feedback from stakeholders",
                completed: false,
                assignee: { name: "John Doe", avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face", initials: "JD" }
            }
        ]
    }
]

// Main workstream breakdown component
export function WorkstreamBreakdown() {
    const [isCardCollapsed, setIsCardCollapsed] = React.useState(false)
    // Track which workstreams are open
    const [openWorkstreams, setOpenWorkstreams] = React.useState<Record<string, boolean>>({})

    // Expand all accordions
    const handleExpandAll = () => {
        const allOpen = workstreamsData.reduce((acc, ws) => {
            acc[ws.id] = true
            return acc
        }, {} as Record<string, boolean>)
        setOpenWorkstreams(allOpen)
    }

    // Collapse all accordions
    const handleCollapseAll = () => {
        setOpenWorkstreams({})
    }

    return (
        <Card className="shadow-none border bg-muted/20 py-0 gap-0">
            {/* Header */}
            <CardHeader className="flex flex-row items-center justify-between py-4 px-4">
                <h3 className="text-xs font-semibold uppercase tracking-wider">
                    WORKSTREAM BREAKDOWN
                </h3>
                <div className="flex items-center gap-1">
                    <Button
                        variant="ghost"
                        size="icon"
                        className="size-6"
                        onClick={handleExpandAll}
                    >
                        <ChevronDown className="size-4 text-muted-foreground transition-transform" />
                    </Button>
                    <Button
                        variant="ghost"
                        size="icon"
                        className="size-6"
                        onClick={handleCollapseAll}
                    >
                        <ChevronUp className="size-4 text-muted-foreground" />
                    </Button>
                </div>
            </CardHeader>

            {/* Content */}
            {!isCardCollapsed && (
                <CardContent className="p-4 pt-0 space-y-3">
                    {workstreamsData.map((workstream) => (
                        <WorkstreamItem
                            key={workstream.id}
                            workstream={workstream}
                            isOpen={openWorkstreams[workstream.id] || false}
                            onOpenChange={(open) => {
                                setOpenWorkstreams(prev => ({
                                    ...prev,
                                    [workstream.id]: open
                                }))
                            }}
                        />
                    ))}
                </CardContent>
            )}
        </Card>
    )
}
