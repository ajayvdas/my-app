"use client"

import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarInput,
    SidebarMenu,
    SidebarMenuBadge,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarSeparator,
} from "@/components/ui/sidebar"
import {
    Inbox,
    CheckSquare,
    Folder,
    Users,
    BarChart3,
    Settings,
    FileText,
    HelpCircle,
    ChevronDown,
    Search,
    Command,
} from "lucide-react"
import { ProgressCircle } from "./progress-circle"
import { useNavigation, NavigationItem } from "@/lib/contexts/navigation-context"

// Mock data
const workspaceData = {
    name: "Workspace",
    plan: "Pro plan",
    logo: "a",
}

const navigationItems = [
    { name: "Inbox", icon: Inbox, badge: 24 },
    { name: "My task", icon: CheckSquare },
    { name: "Projects", icon: Folder, isActive: true },
    { name: "Clients", icon: Users },
    { name: "Performance", icon: BarChart3 },
]

const activeProjects = [
    { name: "AI Learning Platform", color: "#f97316", progress: 54 }, // orange-500
    { name: "Fintech Mobile App", color: "#3b82f6", progress: 78 }, // blue-500
    { name: "E-commerce Admin", color: "#a855f7", progress: 32 }, // purple-500
]

const footerItems = [
    { name: "Settings", icon: Settings },
    { name: "Templates", icon: FileText },
    { name: "Help", icon: HelpCircle },
]

const userData = {
    name: "Ajay V Das",
    email: "ajayvdas2@gmail.com",
    avatar: "/placeholder-avatar.jpg",
}


export default function AppSidebar() {
    const { activeNavigation, setActiveNavigation } = useNavigation()

    return (
        <Sidebar>
            <SidebarHeader>
                {/* Workspace Header */}
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton size="lg" className="w-full">
                            <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-blue-600 text-white font-semibold">
                                {workspaceData.logo}
                            </div>
                            <div className="flex flex-col gap-0.5 leading-none flex-1">
                                <span className="font-semibold">{workspaceData.name}</span>
                                <span className="text-xs text-muted-foreground">
                                    {workspaceData.plan}
                                </span>
                            </div>
                            <ChevronDown className="ml-auto size-4" />
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>

                {/* Search */}
                <div className="relative">
                    <Search className="absolute left-2 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
                    <SidebarInput
                        placeholder="Search"
                        className="pl-8 pr-8"
                    />
                    <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-0.5 text-xs text-muted-foreground border rounded px-1">
                        <Command className="size-3" />
                        <span>K</span>
                    </div>
                </div>
            </SidebarHeader>

            <SidebarContent>
                {/* Main Navigation */}
                <SidebarGroup>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {navigationItems.map((item) => (
                                <SidebarMenuItem key={item.name}>
                                    <SidebarMenuButton
                                        isActive={activeNavigation === item.name}
                                        tooltip={item.name}
                                        onClick={() => setActiveNavigation(item.name as NavigationItem)}
                                    >
                                        <item.icon className="size-4" />
                                        <span>{item.name}</span>
                                        {item.badge && (
                                            <SidebarMenuBadge>{item.badge}</SidebarMenuBadge>
                                        )}
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>

                {/* Active Projects */}
                <SidebarGroup>
                    <SidebarGroupLabel>Active Projects</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {activeProjects.map((project) => (
                                <SidebarMenuItem key={project.name}>
                                    <SidebarMenuButton tooltip={project.name}>
                                        <ProgressCircle progress={project.progress} color={project.color} size={18} strokeWidth={2} />
                                        <span>{project.name}</span>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>

            <SidebarFooter>
                {/* Footer Items */}
                <SidebarMenu>
                    {footerItems.map((item) => (
                        <SidebarMenuItem key={item.name}>
                            <SidebarMenuButton tooltip={item.name}>
                                <item.icon className="size-4" />
                                <span>{item.name}</span>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                    ))}
                </SidebarMenu>

                <SidebarSeparator />

                {/* User Profile */}
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton size="lg" className="w-full">
                            <div className="flex aspect-square size-8 items-center justify-center rounded-full bg-gradient-to-br from-blue-400 to-purple-500 text-white font-semibold text-sm">
                                JD
                            </div>
                            <div className="flex flex-col gap-0.5 leading-none flex-1">
                                <span className="font-semibold text-sm">{userData.name}</span>
                                <span className="text-xs text-muted-foreground">
                                    {userData.email}
                                </span>
                            </div>
                            <ChevronDown className="ml-auto size-4" />
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarFooter>
        </Sidebar>
    )
}