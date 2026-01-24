"use client"

import { useState, useMemo } from "react"

import { Plus, Search, MoreHorizontal, FileText, AudioWaveform, Pencil, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { AddNoteModal } from "@/components/projects/add-note-modal"

// Mock data for notes
const recentNotes = [
    {
        id: 1,
        title: "Project review",
        date: "12 Jul",
        icon: "audio"
    },
    {
        id: 2,
        title: "Meeting note",
        date: "18 Sep",
        icon: "file"
    },
    {
        id: 3,
        title: "Client feedback",
        date: "18 Sep",
        icon: "file"
    },
    {
        id: 4,
        title: "Internal brainstorm",
        date: "17 Sep",
        icon: "file"
    },
    {
        id: 5,
        title: "Hero Description",
        date: "17 Sep",
        icon: "file"
    },
    {
        id: 6,
        title: "Trade-off",
        date: "17 Sep",
        icon: "file"
    },
    {
        id: 7,
        title: "Roadmap",
        date: "16 Sep",
        icon: "file"
    },
    {
        id: 8,
        title: "Brainstorm",
        date: "16 Sep",
        icon: "file"
    }
]

const allNotes = [
    {
        id: 1,
        name: "Project review",
        addedBy: "ajay v das",
        addedDate: "12 Jul",
        status: "Completed"
    },
    {
        id: 2,
        name: "Meeting note",
        addedBy: "ajay v das",
        addedDate: "18 Sep",
        status: "Completed"
    },
    {
        id: 3,
        name: "Client feedback",
        addedBy: "ajay v das",
        addedDate: "18 Sep",
        status: "Completed"
    },
    {
        id: 4,
        name: "Internal brainstorm",
        addedBy: "ajay v das",
        addedDate: "17 Sep",
        status: "Completed"
    },
    {
        id: 5,
        name: "Hero Description",
        addedBy: "ajay v das",
        addedDate: "17 Sep",
        status: "Completed"
    },
    {
        id: 6,
        name: "Trade-off",
        addedBy: "ajay v das",
        addedDate: "17 Sep",
        status: "Processing"
    },
    {
        id: 7,
        name: "Roadmap",
        addedBy: "ajay v das",
        addedDate: "16 Sep",
        status: "Completed"
    },
    {
        id: 8,
        name: "Brainstorm",
        addedBy: "ajay v das",
        addedDate: "16 Sep",
        status: "Completed"
    }
]

export function NotesList() {
    const [searchQuery, setSearchQuery] = useState("")

    const filteredNotes = useMemo(() => {
        if (!searchQuery.trim()) return allNotes

        const query = searchQuery.toLowerCase()
        return allNotes.filter(note =>
            note.name.toLowerCase().includes(query) ||
            note.addedBy.toLowerCase().includes(query) ||
            note.status.toLowerCase().includes(query)
        )
    }, [searchQuery])

    return (
        <div className="space-y-8">
            {/* Recent notes section */}
            <div>
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-lg font-semibold text-foreground">Recent notes</h2>
                    <AddNoteModal />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                    {recentNotes.map((note) => (
                        <Card key={note.id} className="group hover:shadow-md transition-shadow cursor-pointer border border-border bg-card py-0">
                            <CardContent className="p-4">
                                <div className="flex items-start justify-between mb-3">
                                    <div className="w-10 h-10 rounded bg-muted flex items-center justify-center">
                                        {note.icon === "audio" ? (
                                            <AudioWaveform className="w-5 h-5 text-muted-foreground" />
                                        ) : (
                                            <FileText className="w-5 h-5 text-muted-foreground" />
                                        )}
                                    </div>
                                    <DropdownMenu>
                                        <DropdownMenuTrigger asChild>
                                            <Button variant="ghost" size="icon" className="h-6 w-6 opacity-0 group-hover:opacity-100 transition-opacity">
                                                <MoreHorizontal className="w-4 h-4 text-muted-foreground" />
                                            </Button>
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent align="end" className="w-32">
                                            <DropdownMenuItem className="cursor-pointer">
                                                <Pencil className="w-4 h-4 mr-2" />
                                                Edit
                                            </DropdownMenuItem>
                                            <DropdownMenuItem className="cursor-pointer text-destructive focus:text-destructive">
                                                <Trash2 className="w-4 h-4 mr-2" />
                                                Delete
                                            </DropdownMenuItem>
                                        </DropdownMenuContent>
                                    </DropdownMenu>
                                </div>
                                <h3 className="font-semibold text-sm text-foreground mb-1.5">{note.title}</h3>
                                <p className="text-xs text-muted-foreground">{note.date}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>

            {/* All notes section */}
            <div>
                <div className="flex items-center justify-between mb-4">
                    <h2 className="text-lg font-semibold text-foreground">All notes</h2>
                    <AddNoteModal />
                </div>

                {/* Search bar */}
                <div className="relative mb-6">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input
                        placeholder="Search"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="pl-9 bg-background border-border h-10"
                    />
                </div>

                {/* Table */}
                <div className="border border-border rounded-lg overflow-hidden bg-card">
                    <table className="w-full">
                        <thead>
                            <tr className="border-b border-border bg-muted/50">
                                <th className="w-12 px-4 py-3">
                                    <Checkbox className="border-border" />
                                </th>
                                <th className="text-left px-4 py-3 text-sm font-medium text-muted-foreground">Name</th>
                                <th className="text-left px-4 py-3 text-sm font-medium text-muted-foreground">Added by</th>
                                <th className="text-left px-4 py-3 text-sm font-medium text-muted-foreground">Added date</th>
                                <th className="text-left px-4 py-3 text-sm font-medium text-muted-foreground">Status</th>
                                <th className="w-12 px-4 py-3"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredNotes.length === 0 ? (
                                <tr>
                                    <td colSpan={6} className="px-4 py-12 text-center">
                                        <div className="flex flex-col items-center gap-2">
                                            <Search className="w-10 h-10 text-muted-foreground/50" />
                                            <p className="text-sm text-muted-foreground">Could not find notes</p>
                                            <p className="text-xs text-muted-foreground/70">Try searching with different keywords</p>
                                        </div>
                                    </td>
                                </tr>
                            ) : (
                                filteredNotes.map((note, index) => (
                                    <tr
                                        key={note.id}
                                        className={`border-b border-border last:border-b-0 hover:bg-muted/30 transition-colors ${index % 2 === 0 ? 'bg-background' : 'bg-muted/10'
                                            }`}
                                    >
                                        <td className="px-4 py-3.5">
                                            <Checkbox className="border-border" />
                                        </td>
                                        <td className="px-4 py-3.5">
                                            <span className="text-sm font-semibold text-foreground">{note.name}</span>
                                        </td>
                                        <td className="px-4 py-3.5">
                                            <span className="text-sm text-muted-foreground">{note.addedBy}</span>
                                        </td>
                                        <td className="px-4 py-3.5">
                                            <span className="text-sm text-muted-foreground">{note.addedDate}</span>
                                        </td>
                                        <td className="px-4 py-3.5">
                                            {note.status === "Completed" ? (
                                                <Badge
                                                    variant="secondary"
                                                    className="bg-green-50 text-green-700 hover:bg-green-50 dark:bg-green-950 dark:text-green-400 font-normal border-0"
                                                >
                                                    Completed
                                                </Badge>
                                            ) : (
                                                <Badge
                                                    variant="secondary"
                                                    className="bg-amber-50 text-amber-700 hover:bg-amber-50 dark:bg-amber-950 dark:text-amber-400 font-normal border-0"
                                                >
                                                    Processing
                                                </Badge>
                                            )}
                                        </td>
                                        <td className="px-4 py-3.5">
                                            <Button variant="ghost" size="icon" className="h-8 w-8">
                                                <MoreHorizontal className="w-4 h-4 text-muted-foreground" />
                                            </Button>
                                        </td>
                                    </tr>
                                )))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
