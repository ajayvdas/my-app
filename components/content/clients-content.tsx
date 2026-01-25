"use client"

import { Users, Building2, Mail, Phone, Globe, Plus, MoreHorizontal, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

const clients = [
    {
        id: 1,
        name: "TechCorp Industries",
        contact: "John Smith",
        email: "john@techcorp.com",
        phone: "+1 234 567 8900",
        website: "techcorp.com",
        projects: 3,
        status: "active",
        color: "from-blue-500 to-cyan-500",
    },
    {
        id: 2,
        name: "Innovation Labs",
        contact: "Sarah Wilson",
        email: "sarah@innovationlabs.io",
        phone: "+1 234 567 8901",
        website: "innovationlabs.io",
        projects: 2,
        status: "active",
        color: "from-purple-500 to-pink-500",
    },
    {
        id: 3,
        name: "Digital Solutions",
        contact: "Mike Johnson",
        email: "mike@digitalsolutions.com",
        phone: "+1 234 567 8902",
        website: "digitalsolutions.com",
        projects: 1,
        status: "pending",
        color: "from-orange-500 to-red-500",
    },
    {
        id: 4,
        name: "CloudFirst Inc",
        contact: "Emily Davis",
        email: "emily@cloudfirst.com",
        phone: "+1 234 567 8903",
        website: "cloudfirst.com",
        projects: 4,
        status: "active",
        color: "from-green-500 to-emerald-500",
    },
    {
        id: 5,
        name: "StartUp Ventures",
        contact: "Alex Brown",
        email: "alex@startup.vc",
        phone: "+1 234 567 8904",
        website: "startup.vc",
        projects: 1,
        status: "inactive",
        color: "from-gray-500 to-slate-500",
    },
]

const statusStyles = {
    active: "bg-green-500/10 text-green-500 border-green-500/20",
    pending: "bg-yellow-500/10 text-yellow-500 border-yellow-500/20",
    inactive: "bg-gray-500/10 text-gray-500 border-gray-500/20",
}

export default function ClientsContent() {
    return (
        <div className="flex flex-1 flex-col m-2 border rounded-lg min-w-0 overflow-hidden">
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b bg-gradient-to-r from-violet-500/5 to-fuchsia-500/5">
                <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-gradient-to-br from-violet-500 to-fuchsia-600 text-white">
                        <Users className="size-6" />
                    </div>
                    <div>
                        <h1 className="text-2xl font-bold">Clients</h1>
                        <p className="text-muted-foreground text-sm">{clients.length} total clients</p>
                    </div>
                </div>
                <Button className="bg-gradient-to-r from-violet-500 to-fuchsia-600 hover:from-violet-600 hover:to-fuchsia-700">
                    <Plus className="size-4 mr-2" />
                    Add Client
                </Button>
            </div>

            {/* Search and Filter */}
            <div className="flex items-center gap-4 px-6 py-4 border-b">
                <div className="relative flex-1 max-w-sm">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
                    <Input placeholder="Search clients..." className="pl-9" />
                </div>
                <Button variant="outline" size="sm">
                    Active
                    <Badge className="ml-2" variant="secondary">3</Badge>
                </Button>
                <Button variant="ghost" size="sm">
                    Pending
                    <Badge className="ml-2" variant="secondary">1</Badge>
                </Button>
                <Button variant="ghost" size="sm">
                    Inactive
                    <Badge className="ml-2" variant="secondary">1</Badge>
                </Button>
            </div>

            {/* Clients Grid */}
            <div className="flex-1 overflow-y-auto p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {clients.map((client) => (
                        <div
                            key={client.id}
                            className="border rounded-xl p-5 hover:shadow-lg transition-all duration-300 hover:border-primary/20 group"
                        >
                            <div className="flex items-start justify-between mb-4">
                                <div className="flex items-center gap-3">
                                    <Avatar className={`size-12 bg-gradient-to-br ${client.color}`}>
                                        <AvatarFallback className="text-white font-semibold bg-transparent">
                                            {client.name.split(" ").map((n) => n[0]).join("")}
                                        </AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <h3 className="font-semibold">{client.name}</h3>
                                        <p className="text-sm text-muted-foreground">{client.contact}</p>
                                    </div>
                                </div>
                                <Button variant="ghost" size="icon" className="opacity-0 group-hover:opacity-100 transition-opacity">
                                    <MoreHorizontal className="size-4" />
                                </Button>
                            </div>

                            <div className="space-y-2 mb-4">
                                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                    <Mail className="size-4" />
                                    {client.email}
                                </div>
                                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                    <Phone className="size-4" />
                                    {client.phone}
                                </div>
                                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                    <Globe className="size-4" />
                                    {client.website}
                                </div>
                            </div>

                            <div className="flex items-center justify-between pt-4 border-t">
                                <div className="flex items-center gap-2">
                                    <Building2 className="size-4 text-muted-foreground" />
                                    <span className="text-sm">{client.projects} projects</span>
                                </div>
                                <Badge variant="outline" className={statusStyles[client.status as keyof typeof statusStyles]}>
                                    {client.status.charAt(0).toUpperCase() + client.status.slice(1)}
                                </Badge>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
