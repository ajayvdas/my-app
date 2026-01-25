"use client"

import { BarChart3, TrendingUp, TrendingDown, Users, Target, Clock, CheckCircle2, ArrowUpRight, ArrowDownRight } from "lucide-react"
import { Progress } from "@/components/ui/progress"

const stats = [
    {
        title: "Projects Completed",
        value: "24",
        change: "+12%",
        trend: "up",
        icon: CheckCircle2,
        color: "from-green-500 to-emerald-600",
    },
    {
        title: "Team Velocity",
        value: "87%",
        change: "+5%",
        trend: "up",
        icon: TrendingUp,
        color: "from-blue-500 to-cyan-600",
    },
    {
        title: "On-Time Delivery",
        value: "92%",
        change: "-2%",
        trend: "down",
        icon: Clock,
        color: "from-orange-500 to-amber-600",
    },
    {
        title: "Client Satisfaction",
        value: "4.8",
        change: "+0.3",
        trend: "up",
        icon: Target,
        color: "from-purple-500 to-pink-600",
    },
]

const teamPerformance = [
    { name: "Sarah Johnson", role: "Lead Developer", tasks: 45, completed: 42, efficiency: 93 },
    { name: "Mike Chen", role: "UI Designer", tasks: 38, completed: 35, efficiency: 92 },
    { name: "Emily Davis", role: "Project Manager", tasks: 52, completed: 48, efficiency: 92 },
    { name: "Alex Thompson", role: "Backend Developer", tasks: 41, completed: 36, efficiency: 88 },
    { name: "Rachel Green", role: "QA Engineer", tasks: 35, completed: 33, efficiency: 94 },
]

const projectMetrics = [
    { name: "AI Learning Platform", progress: 78, status: "On Track", budget: 85 },
    { name: "Fintech Mobile App", progress: 92, status: "Ahead", budget: 72 },
    { name: "E-commerce Admin", progress: 45, status: "At Risk", budget: 95 },
    { name: "Healthcare Dashboard", progress: 60, status: "On Track", budget: 80 },
]

export default function PerformanceContent() {
    return (
        <div className="flex flex-1 flex-col m-2 border rounded-lg min-w-0 overflow-hidden">
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b bg-gradient-to-r from-cyan-500/5 to-blue-500/5">
                <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 text-white">
                        <BarChart3 className="size-6" />
                    </div>
                    <div>
                        <h1 className="text-2xl font-bold">Performance</h1>
                        <p className="text-muted-foreground text-sm">Last 30 days overview</p>
                    </div>
                </div>
            </div>

            <div className="flex-1 overflow-y-auto p-6">
                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                    {stats.map((stat) => (
                        <div key={stat.title} className="border rounded-xl p-5 hover:shadow-lg transition-all duration-300">
                            <div className="flex items-center justify-between mb-4">
                                <div className={`p-2 rounded-lg bg-gradient-to-br ${stat.color} text-white`}>
                                    <stat.icon className="size-5" />
                                </div>
                                <div className={`flex items-center gap-1 text-sm font-medium ${stat.trend === "up" ? "text-green-500" : "text-red-500"
                                    }`}>
                                    {stat.trend === "up" ? (
                                        <ArrowUpRight className="size-4" />
                                    ) : (
                                        <ArrowDownRight className="size-4" />
                                    )}
                                    {stat.change}
                                </div>
                            </div>
                            <p className="text-3xl font-bold mb-1">{stat.value}</p>
                            <p className="text-sm text-muted-foreground">{stat.title}</p>
                        </div>
                    ))}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Team Performance */}
                    <div className="border rounded-xl p-5">
                        <div className="flex items-center gap-2 mb-5">
                            <Users className="size-5 text-muted-foreground" />
                            <h2 className="font-semibold text-lg">Team Performance</h2>
                        </div>
                        <div className="space-y-4">
                            {teamPerformance.map((member) => (
                                <div key={member.name} className="flex items-center gap-4">
                                    <div className="flex-1 min-w-0">
                                        <div className="flex items-center justify-between mb-1">
                                            <div>
                                                <span className="font-medium">{member.name}</span>
                                                <span className="text-sm text-muted-foreground ml-2">{member.role}</span>
                                            </div>
                                            <span className="text-sm font-medium">{member.efficiency}%</span>
                                        </div>
                                        <Progress value={member.efficiency} className="h-2" />
                                        <p className="text-xs text-muted-foreground mt-1">
                                            {member.completed}/{member.tasks} tasks completed
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Project Metrics */}
                    <div className="border rounded-xl p-5">
                        <div className="flex items-center gap-2 mb-5">
                            <Target className="size-5 text-muted-foreground" />
                            <h2 className="font-semibold text-lg">Project Metrics</h2>
                        </div>
                        <div className="space-y-4">
                            {projectMetrics.map((project) => (
                                <div key={project.name} className="border rounded-lg p-4">
                                    <div className="flex items-center justify-between mb-3">
                                        <span className="font-medium">{project.name}</span>
                                        <span className={`text-xs px-2 py-1 rounded-full ${project.status === "On Track" ? "bg-green-500/10 text-green-500" :
                                                project.status === "Ahead" ? "bg-blue-500/10 text-blue-500" :
                                                    "bg-red-500/10 text-red-500"
                                            }`}>
                                            {project.status}
                                        </span>
                                    </div>
                                    <div className="space-y-2">
                                        <div className="flex items-center justify-between text-sm">
                                            <span className="text-muted-foreground">Progress</span>
                                            <span>{project.progress}%</span>
                                        </div>
                                        <Progress value={project.progress} className="h-2" />
                                        <div className="flex items-center justify-between text-sm">
                                            <span className="text-muted-foreground">Budget Used</span>
                                            <span>{project.budget}%</span>
                                        </div>
                                        <Progress value={project.budget} className="h-2" />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
