"use client"

import { Inbox, Mail, MailOpen, Clock, Star, Archive, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const inboxItems = [
    {
        id: 1,
        sender: "Sarah Johnson",
        subject: "Project Update - AI Learning Platform",
        preview: "Hi team, I wanted to share the latest progress on the AI Learning Platform...",
        time: "2 min ago",
        isUnread: true,
        isStarred: true,
    },
    {
        id: 2,
        sender: "Mike Chen",
        subject: "Design Review Meeting",
        preview: "Let's schedule a design review for the new dashboard components...",
        time: "15 min ago",
        isUnread: true,
        isStarred: false,
    },
    {
        id: 3,
        sender: "Emily Davis",
        subject: "Q4 Budget Approval",
        preview: "The budget for Q4 has been reviewed and approved. Please find attached...",
        time: "1 hour ago",
        isUnread: false,
        isStarred: true,
    },
    {
        id: 4,
        sender: "Alex Thompson",
        subject: "Client Feedback - Fintech App",
        preview: "We received feedback from the client regarding the mobile app interface...",
        time: "3 hours ago",
        isUnread: false,
        isStarred: false,
    },
    {
        id: 5,
        sender: "Rachel Green",
        subject: "Team Standup Notes",
        preview: "Here are the notes from today's standup meeting. Key action items include...",
        time: "Yesterday",
        isUnread: false,
        isStarred: false,
    },
]

export default function InboxContent() {
    return (
        <div className="flex flex-1 flex-col m-2 border rounded-lg min-w-0 overflow-hidden">
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b bg-gradient-to-r from-blue-500/5 to-purple-500/5">
                <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 text-white">
                        <Inbox className="size-6" />
                    </div>
                    <div>
                        <h1 className="text-2xl font-bold">Inbox</h1>
                        <p className="text-muted-foreground text-sm">24 unread messages</p>
                    </div>
                </div>
                <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                        <Archive className="size-4 mr-2" />
                        Archive All
                    </Button>
                    <Button variant="outline" size="sm">
                        <Trash2 className="size-4 mr-2" />
                        Clear
                    </Button>
                </div>
            </div>

            {/* Filter Tabs */}
            <div className="flex items-center gap-4 px-6 py-3 border-b">
                <Button variant="ghost" size="sm" className="text-primary">
                    All
                    <Badge className="ml-2 bg-primary/10 text-primary hover:bg-primary/10">24</Badge>
                </Button>
                <Button variant="ghost" size="sm">
                    Unread
                    <Badge className="ml-2" variant="secondary">5</Badge>
                </Button>
                <Button variant="ghost" size="sm">
                    Starred
                    <Badge className="ml-2" variant="secondary">3</Badge>
                </Button>
            </div>

            {/* Messages List */}
            <div className="flex-1 overflow-y-auto">
                {inboxItems.map((item) => (
                    <div
                        key={item.id}
                        className={`flex items-start gap-4 p-4 border-b hover:bg-muted/50 transition-colors cursor-pointer ${item.isUnread ? "bg-blue-500/5" : ""
                            }`}
                    >
                        <div className="pt-1">
                            {item.isUnread ? (
                                <Mail className="size-5 text-blue-500" />
                            ) : (
                                <MailOpen className="size-5 text-muted-foreground" />
                            )}
                        </div>
                        <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between mb-1">
                                <span className={`font-medium ${item.isUnread ? "text-foreground" : "text-muted-foreground"}`}>
                                    {item.sender}
                                </span>
                                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                    <Clock className="size-3" />
                                    {item.time}
                                </div>
                            </div>
                            <p className={`text-sm mb-1 ${item.isUnread ? "font-medium" : "text-muted-foreground"}`}>
                                {item.subject}
                            </p>
                            <p className="text-sm text-muted-foreground truncate">{item.preview}</p>
                        </div>
                        <Button
                            variant="ghost"
                            size="icon"
                            className={`shrink-0 ${item.isStarred ? "text-yellow-500" : "text-muted-foreground"}`}
                        >
                            <Star className={`size-4 ${item.isStarred ? "fill-yellow-500" : ""}`} />
                        </Button>
                    </div>
                ))}
            </div>
        </div>
    )
}
