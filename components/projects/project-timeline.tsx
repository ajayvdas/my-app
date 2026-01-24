"use client"

import { ChevronLeft, ChevronRight, Calendar, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import type { TimelineRowProps } from "@/lib/types/project"

interface ProjectTimelineProps {
    month: string
    year: number
    startDate: number
    tasks: TimelineRowProps[]
    todayColumn?: number // 1-7, represents which day column is "today"
}

const DAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']

export function ProjectTimeline({ month, year, startDate, tasks, todayColumn }: ProjectTimelineProps) {
    const gridColumns = 7

    return (
        <Card className="py-4 shadow-none">
            <CardHeader className="pb-2 pt-0">
                <CardTitle className="text-sm font-semibold">Expected Timeline</CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
                <div className="border rounded-lg overflow-hidden">
                    {/* Timeline Header */}
                    <div className="flex border-b">
                        <div className="w-52 shrink-0 p-3 border-r bg-card">
                            <span className="text-sm font-medium">Name</span>
                        </div>
                        <div className="flex-1 p-3 flex items-center justify-between">
                            <span className="text-sm">{month} {year}</span>
                            <div className="flex items-center gap-1">
                                <Button variant="ghost" size="icon-sm" className="h-7 w-7">
                                    <ChevronLeft className="h-4 w-4" />
                                </Button>
                                <Button variant="outline" size="sm" className="h-7 px-3">
                                    Today
                                </Button>
                                <Button variant="ghost" size="icon-sm" className="h-7 w-7">
                                    <ChevronRight className="h-4 w-4" />
                                </Button>
                                <Button variant="outline" size="sm" className="h-7 px-3 border-foreground text-foreground">
                                    Week
                                </Button>
                                <Button variant="ghost" size="icon-sm" className="h-7 w-7">
                                    <Calendar className="h-4 w-4" />
                                </Button>
                                <Button variant="ghost" size="icon-sm" className="h-7 w-7">
                                    <Search className="h-4 w-4" />
                                </Button>
                            </div>
                        </div>
                    </div>

                    {/* Timeline Content with Today Indicator */}
                    <div className="relative">
                        {/* Today Indicator Line */}
                        {todayColumn && todayColumn >= 1 && todayColumn <= gridColumns && (
                            <div
                                className="absolute top-0 bottom-0 w-0.5 bg-blue-500 z-10 pointer-events-none"
                                style={{
                                    left: `calc(13rem + ${(todayColumn - 0.5) / gridColumns * 100}% - 1px)`,
                                }}
                            />
                        )}

                        {/* Timeline Days Header */}
                        <div className="flex border-b">
                            <div className="w-52 shrink-0 border-r bg-card"></div>
                            <div className="flex-1 grid grid-cols-7">
                                {DAYS.map((day, index) => (
                                    <div key={day} className="p-2 text-center border-r last:border-r-0">
                                        <div className="text-xs text-muted-foreground">{day}</div>
                                        <div className="text-sm">{startDate + index}</div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Timeline Rows */}
                        {tasks.map((task, index) => (
                            <TimelineRow key={index} {...task} />
                        ))}
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}

function TimelineRow({ name, taskLabel, taskColor, startCol, span }: TimelineRowProps) {
    const gridColumns = 7

    return (
        <div className="flex border-b last:border-b-0">
            <div className="w-52 shrink-0 p-3 border-r bg-card">
                <span className="text-sm">{name}</span>
            </div>
            <div className="flex-1 grid grid-cols-7 relative py-2">
                {Array.from({ length: gridColumns }).map((_, index) => (
                    <div key={index} className="border-r last:border-r-0 h-8"></div>
                ))}
                <div
                    className={`absolute top-1/2 -translate-y-1/2 h-6 ${taskColor} rounded text-xs flex items-center px-2 whitespace-nowrap overflow-hidden`}
                    style={{
                        left: `calc(${(startCol - 1) / gridColumns * 100}% + 4px)`,
                        width: `calc(${span / gridColumns * 100}% - 8px)`,
                    }}
                >
                    <span className="truncate">{taskLabel}</span>
                </div>
            </div>
        </div>
    )
}

export { TimelineRow }
