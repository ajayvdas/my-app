"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ProjectTimeline } from "./project-timeline"
import type { TimelineRowProps } from "@/lib/types/project"

interface ProjectOverviewProps {
    description: string
    inScope: string[]
    outOfScope: string[]
    expectedOutcomes: string[]
    keyFeatures: {
        p0: string[]
        p1: string[]
        p2: string[]
    }
    timelineTasks: TimelineRowProps[]
}

export function ProjectOverview({
    description,
    inScope,
    outOfScope,
    expectedOutcomes,
    keyFeatures,
    timelineTasks
}: ProjectOverviewProps) {
    return (
        <div className="space-y-8">
            {/* Description */}
            <p className="text-sm text-muted-foreground leading-relaxed">
                {description}
            </p>

            {/* In Scope / Out of Scope */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card className="py-4 shadow-none">
                    <CardHeader className="pb-2 pt-0">
                        <CardTitle className="text-sm font-semibold">In scope</CardTitle>
                    </CardHeader>
                    <CardContent className="pt-0">
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            {inScope.map((item, index) => (
                                <li key={index} className="flex items-start gap-2">
                                    <span className="mt-1">•</span>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </CardContent>
                </Card>
                <Card className="py-4 shadow-none">
                    <CardHeader className="pb-2 pt-0">
                        <CardTitle className="text-sm font-semibold">Out of scope:</CardTitle>
                    </CardHeader>
                    <CardContent className="pt-0">
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            {outOfScope.map((item, index) => (
                                <li key={index} className="flex items-start gap-2">
                                    <span className="mt-1">•</span>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </CardContent>
                </Card>
            </div>

            {/* Expected Outcomes */}
            <Card className="py-4 shadow-none">
                <CardHeader className="pb-2 pt-0">
                    <CardTitle className="text-sm font-semibold">Expected Outcomes</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                    <ul className="space-y-2 text-sm text-muted-foreground">
                        {expectedOutcomes.map((item, index) => (
                            <li key={index} className="flex items-start gap-2">
                                <span className="mt-1">•</span>
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </CardContent>
            </Card>

            {/* Key Features */}
            <Card className="py-4 shadow-none">
                <CardHeader className="pb-2 pt-0">
                    <CardTitle className="text-sm font-semibold">Key features</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div>
                            <h4 className="text-sm font-semibold mb-3">P0:</h4>
                            <ul className="space-y-2 text-sm text-muted-foreground">
                                {keyFeatures.p0.map((feature, index) => (
                                    <li key={index} className="flex items-start gap-2">
                                        <span className="mt-1">•</span>
                                        <Button variant="link" className="p-0 h-auto text-primary text-left">
                                            {feature}
                                        </Button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-sm font-semibold mb-3">P1:</h4>
                            <ul className="space-y-2 text-sm text-muted-foreground">
                                {keyFeatures.p1.map((feature, index) => (
                                    <li key={index} className="flex items-start gap-2">
                                        <span className="mt-1">•</span>
                                        <Button variant="link" className="p-0 h-auto text-primary text-left">
                                            {feature}
                                        </Button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-sm font-semibold mb-3">P2:</h4>
                            <ul className="space-y-2 text-sm text-muted-foreground">
                                {keyFeatures.p2.map((feature, index) => (
                                    <li key={index} className="flex items-start gap-2">
                                        <span className="mt-1">•</span>
                                        <Button variant="link" className="p-0 h-auto text-primary text-left">
                                            {feature}
                                        </Button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Expected Timeline */}
            <ProjectTimeline
                month="December"
                year={2025}
                startDate={22}
                tasks={timelineTasks}
                todayColumn={5}
            />
        </div>
    )
}
