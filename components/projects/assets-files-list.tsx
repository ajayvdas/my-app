"use client"

import { useState, useMemo } from "react"

import { Plus, Search, MoreHorizontal, FileText, Pencil, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

// File type icons as SVG components
const PdfIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6 2C4.9 2 4 2.9 4 4V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V8L14 2H6Z" fill="#FFEBEE" stroke="#E53935" strokeWidth="0.5" />
        <path d="M14 2V8H20" fill="#FFCDD2" />
        <path d="M14 2L20 8H14V2Z" fill="#FFCDD2" stroke="#E53935" strokeWidth="0.5" />
        <text x="12" y="17" textAnchor="middle" fontSize="5" fill="#E53935" fontWeight="bold">PDF</text>
    </svg>
)

const ZipIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6 2C4.9 2 4 2.9 4 4V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V8L14 2H6Z" fill="#F5F5F5" stroke="#9E9E9E" strokeWidth="0.5" />
        <path d="M14 2V8H20" fill="#E0E0E0" />
        <path d="M14 2L20 8H14V2Z" fill="#E0E0E0" stroke="#9E9E9E" strokeWidth="0.5" />
        <rect x="10" y="4" width="2" height="1.5" fill="#616161" />
        <rect x="12" y="5.5" width="2" height="1.5" fill="#616161" />
        <rect x="10" y="7" width="2" height="1.5" fill="#616161" />
        <rect x="12" y="8.5" width="2" height="1.5" fill="#616161" />
        <rect x="10" y="10" width="2" height="1.5" fill="#616161" />
        <rect x="12" y="11.5" width="2" height="1.5" fill="#616161" />
        <rect x="10" y="13" width="4" height="3" rx="0.5" fill="#616161" />
    </svg>
)

const FigmaIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6 2C4.9 2 4 2.9 4 4V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V8L14 2H6Z" fill="#F3E5F5" stroke="#9C27B0" strokeWidth="0.5" />
        <path d="M14 2V8H20" fill="#E1BEE7" />
        <path d="M14 2L20 8H14V2Z" fill="#E1BEE7" stroke="#9C27B0" strokeWidth="0.5" />
        {/* Figma-like icon in center */}
        <circle cx="10" cy="12" r="1.5" fill="#F24E1E" />
        <circle cx="10" cy="15" r="1.5" fill="#0ACF83" />
        <circle cx="13" cy="12" r="1.5" fill="#A259FF" />
        <circle cx="13" cy="15" r="1.5" fill="#1ABCFE" />
        <circle cx="10" cy="9" r="1.5" fill="#FF7262" />
        <circle cx="13" cy="9" r="1.5" fill="#F24E1E" />
    </svg>
)

// Icon component that renders the appropriate file icon
const FileIcon = ({ type }: { type: "pdf" | "zip" | "figma" }) => {
    switch (type) {
        case "pdf":
            return <PdfIcon />
        case "zip":
            return <ZipIcon />
        case "figma":
            return <FigmaIcon />
        default:
            return <FileText className="w-6 h-6 text-muted-foreground" />
    }
}

// Mock data for recent files
const recentFiles = [
    {
        id: 1,
        name: "Proposal.pdf",
        size: "13.0 MB",
        type: "pdf" as const
    },
    {
        id: 2,
        name: "Wireframe Layout.zip",
        size: "13.0 MB",
        type: "zip" as const
    },
    {
        id: 3,
        name: "Design system.fig",
        size: "13.0 MB",
        type: "figma" as const
    },
    {
        id: 4,
        name: "UI Kit.fig",
        size: "13.0 MB",
        type: "figma" as const
    },
    {
        id: 5,
        name: "Asset.pdf",
        size: "13.0 MB",
        type: "pdf" as const
    },
    {
        id: 6,
        name: "Asset.pdf",
        size: "13.0 MB",
        type: "pdf" as const
    }
]

// Mock data for all files
const allFiles = [
    {
        id: 1,
        name: "Proposal.pdf",
        size: "13.0 MB",
        type: "pdf" as const,
        addedBy: "jason duong",
        addedDate: "18 Sep"
    },
    {
        id: 2,
        name: "Wireframe Layout.zip",
        size: "13.0 MB",
        type: "zip" as const,
        addedBy: "jason duong",
        addedDate: "18 Sep"
    },
    {
        id: 3,
        name: "Design system.fig",
        size: "13.0 MB",
        type: "figma" as const,
        addedBy: "jason duong",
        addedDate: "18 Sep"
    },
    {
        id: 4,
        name: "UI Kit.fig",
        size: "13.0 MB",
        type: "figma" as const,
        addedBy: "jason duong",
        addedDate: "18 Sep"
    },
    {
        id: 5,
        name: "Asset.pdf",
        size: "13.0 MB",
        type: "pdf" as const,
        addedBy: "jason duong",
        addedDate: "18 Sep"
    },
    {
        id: 6,
        name: "Asset.pdf",
        size: "13.0 MB",
        type: "pdf" as const,
        addedBy: "jason duong",
        addedDate: "18 Sep"
    }
]

export function AssetsFilesList() {
    const [searchQuery, setSearchQuery] = useState("")

    const filteredFiles = useMemo(() => {
        if (!searchQuery.trim()) return allFiles

        const query = searchQuery.toLowerCase()
        return allFiles.filter(file =>
            file.name.toLowerCase().includes(query) ||
            file.addedBy.toLowerCase().includes(query)
        )
    }, [searchQuery])

    return (
        <div className="space-y-8">
            {/* Recent Files section */}
            <div>
                <h2 className="text-base font-semibold text-foreground mb-4">Recent Files</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {recentFiles.map((file) => (
                        <Card key={file.id} className="group hover:shadow-md transition-shadow cursor-pointer border border-border bg-card py-0">
                            <CardContent className="p-4">
                                <div className="flex items-center gap-3">
                                    {/* File Icon */}
                                    <div className="w-10 h-10 rounded-lg bg-muted/50 flex items-center justify-center flex-shrink-0">
                                        <FileIcon type={file.type} />
                                    </div>

                                    {/* File Info */}
                                    <div className="flex-1 min-w-0">
                                        <h3 className="font-medium text-sm text-foreground truncate">{file.name}</h3>
                                        <p className="text-xs text-muted-foreground">{file.size}</p>
                                    </div>

                                    {/* More Options */}
                                    <DropdownMenu>
                                        <DropdownMenuTrigger asChild>
                                            <Button variant="ghost" size="icon" className="h-8 w-8 flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity">
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
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>

            {/* All files section */}
            <div>
                <h2 className="text-base font-semibold text-foreground mb-4">All files</h2>

                {/* Search bar and Add File button */}
                <div className="flex items-center justify-between gap-4 mb-4">
                    <div className="relative max-w-sm flex-1">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                        <Input
                            placeholder="Search files"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="pl-9 bg-background border-border h-10"
                        />
                    </div>
                    <Button variant="ghost" className="text-foreground font-medium h-10">
                        <Plus className="w-4 h-4 mr-2" />
                        Add File
                    </Button>
                </div>

                {/* Table */}
                <div className="border border-border rounded-lg overflow-hidden bg-card">
                    <table className="w-full">
                        <thead>
                            <tr className="border-b border-border bg-muted/30">
                                <th className="w-12 px-4 py-3 text-left">
                                    <Checkbox className="border-border" />
                                </th>
                                <th className="text-left px-4 py-3 text-sm font-medium text-muted-foreground">Name</th>
                                <th className="text-left px-4 py-3 text-sm font-medium text-muted-foreground">Added by</th>
                                <th className="text-left px-4 py-3 text-sm font-medium text-muted-foreground">Added date</th>
                                <th className="w-12 px-4 py-3"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredFiles.length === 0 ? (
                                <tr>
                                    <td colSpan={5} className="px-4 py-12 text-center">
                                        <div className="flex flex-col items-center gap-2">
                                            <Search className="w-10 h-10 text-muted-foreground/50" />
                                            <p className="text-sm text-muted-foreground">Could not find files</p>
                                            <p className="text-xs text-muted-foreground/70">Try searching with different keywords</p>
                                        </div>
                                    </td>
                                </tr>
                            ) : (
                                filteredFiles.map((file) => (
                                    <tr
                                        key={file.id}
                                        className="border-b border-border last:border-b-0 hover:bg-muted/30 transition-colors group"
                                    >
                                        <td className="px-4 py-3.5">
                                            <Checkbox className="border-border" />
                                        </td>
                                        <td className="px-4 py-3.5">
                                            <div className="flex items-center gap-3">
                                                <div className="w-8 h-8 rounded flex items-center justify-center flex-shrink-0">
                                                    <FileIcon type={file.type} />
                                                </div>
                                                <div className="min-w-0">
                                                    <span className="text-sm font-medium text-foreground block">{file.name}</span>
                                                    <span className="text-xs text-muted-foreground">{file.size}</span>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-4 py-3.5">
                                            <span className="text-sm text-muted-foreground">{file.addedBy}</span>
                                        </td>
                                        <td className="px-4 py-3.5">
                                            <span className="text-sm text-muted-foreground">{file.addedDate}</span>
                                        </td>
                                        <td className="px-4 py-3.5">
                                            <DropdownMenu>
                                                <DropdownMenuTrigger asChild>
                                                    <Button variant="ghost" size="icon" className="h-8 w-8 opacity-0 group-hover:opacity-100 transition-opacity">
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
