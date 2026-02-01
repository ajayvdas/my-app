"use client";

import { useState, useRef } from "react";
import { Client, ClientStatus } from "@/lib/types/client-type";
import { getClientLinkedProjects, getClientSharedFiles } from "@/lib/data/client-data";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetFooter,
    SheetTitle,
    SheetDescription,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
    Building2,
    Factory,
    MapPin,
    Globe,
    FolderOpen,
    Plus,
    ChevronUp,
    ChevronLeft,
    ChevronRight,
    Download,
    FileText,
    Figma,
} from "lucide-react";

// ============================================================================
// Helper Components
// ============================================================================

function AvatarInitials({ name, className }: { name: string; className?: string }) {
    const initials = name
        .split(" ")
        .map((word) => word[0])
        .join("")
        .toUpperCase()
        .slice(0, 2);

    const colors = [
        "bg-slate-100 text-slate-600",
        "bg-blue-100 text-blue-600",
        "bg-emerald-100 text-emerald-600",
        "bg-amber-100 text-amber-600",
        "bg-rose-100 text-rose-600",
        "bg-purple-100 text-purple-600",
        "bg-cyan-100 text-cyan-600",
        "bg-orange-100 text-orange-600",
    ];

    const colorIndex = name.split("").reduce((acc, char) => acc + char.charCodeAt(0), 0) % colors.length;

    return (
        <div
            className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium ${colors[colorIndex]} ${className || ""}`}
        >
            {initials}
        </div>
    );
}

function StatusBadge({ status }: { status: ClientStatus }) {
    const statusConfig = {
        active: {
            label: "Active",
            bgColor: "bg-emerald-100",
            textColor: "text-emerald-700",
            dotColor: "bg-emerald-500",
        },
        prospect: {
            label: "Prospect",
            bgColor: "bg-amber-100",
            textColor: "text-amber-700",
            dotColor: "bg-amber-500",
        },
        on_hold: {
            label: "On Hold",
            bgColor: "bg-orange-100",
            textColor: "text-orange-700",
            dotColor: "bg-orange-500",
        },
        archived: {
            label: "Archived",
            bgColor: "bg-gray-100",
            textColor: "text-gray-600",
            dotColor: "bg-gray-400",
        },
    };

    const config = statusConfig[status];

    return (
        <div className={`flex items-center gap-1.5 px-2 py-1 rounded-full ${config.bgColor}`}>
            <span className={`w-1.5 h-1.5 rounded-full ${config.dotColor}`} />
            <span className={`text-xs font-medium ${config.textColor}`}>{config.label}</span>
        </div>
    );
}

function InfoCard({ icon: Icon, label, value }: { icon: React.ElementType; label: string; value: string }) {
    return (
        <div className="flex flex-col items-center text-center p-3 min-w-0">
            <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center mb-2">
                <Icon className="w-4 h-4 text-muted-foreground" />
            </div>
            <span className="text-xs text-muted-foreground mb-0.5">{label}</span>
            <span className="text-xs font-medium text-foreground truncate max-w-full">{value}</span>
        </div>
    );
}

function ProjectCard({ name, status, priority }: { name: string; status: string; priority: string }) {
    const statusLabels: Record<string, string> = {
        active: "Active",
        planned: "Planned",
        on_hold: "On Hold",
        completed: "Completed",
    };

    const priorityLabels: Record<string, string> = {
        high: "High priority",
        medium: "Medium priority",
        low: "Low priority",
    };

    return (
        <div className="flex-shrink-0 w-44 border rounded-lg p-3 bg-background hover:bg-muted/50 transition-colors">
            <div className="w-8 h-8 rounded bg-muted flex items-center justify-center mb-2">
                <FolderOpen className="w-4 h-4 text-muted-foreground" />
            </div>
            <div className="font-medium text-xs text-foreground truncate mb-1">{name}</div>
            <div className="text-xs text-muted-foreground">
                {statusLabels[status]} · {priorityLabels[priority]}
            </div>
        </div>
    );
}

function FileIcon({ type }: { type: string }) {
    const iconConfig: Record<string, { bg: string; icon: React.ElementType }> = {
        pdf: { bg: "bg-red-100", icon: FileText },
        figma: { bg: "bg-purple-100", icon: Figma },
        document: { bg: "bg-blue-100", icon: FileText },
        image: { bg: "bg-green-100", icon: FileText },
        video: { bg: "bg-orange-100", icon: FileText },
        other: { bg: "bg-gray-100", icon: FileText },
    };

    const config = iconConfig[type] || iconConfig.other;
    const IconComponent = config.icon;

    return (
        <div className={`w-9 h-9 rounded-lg ${config.bg} flex items-center justify-center`}>
            <IconComponent className="w-4 h-4 text-muted-foreground" />
        </div>
    );
}

function FileCard({ name, type, size }: { name: string; type: string; size: string }) {
    return (
        <div className="flex items-center justify-between p-3 border rounded-lg bg-background hover:bg-muted/50 transition-colors">
            <div className="flex items-center gap-3 min-w-0">
                <FileIcon type={type} />
                <div className="min-w-0">
                    <div className="text-xs font-medium text-foreground truncate">{name}</div>
                    <div className="text-xs text-muted-foreground">{size}</div>
                </div>
            </div>
            <Button variant="ghost" size="icon" className="h-8 w-8 flex-shrink-0">
                <Download className="w-4 h-4" />
            </Button>
        </div>
    );
}

// ============================================================================
// Main Section Components
// ============================================================================

interface QuickViewSheetHeaderProps {
    client: Client;
}

function QuickViewSheetHeader({ client }: QuickViewSheetHeaderProps) {
    return (
        <SheetHeader className="px-6 pt-6 pb-4 border-b">
            <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3 min-w-0">
                    <AvatarInitials name={client.primaryContactName} />
                    <div className="min-w-0">
                        <SheetTitle className="text-base font-semibold truncate">
                            {client.primaryContactName}
                        </SheetTitle>
                        <SheetDescription className="text-xs truncate">
                            {client.primaryContactEmail}
                        </SheetDescription>
                    </div>
                </div>
                <div className="flex items-center gap-2 flex-shrink-0">
                    <Select defaultValue="stage">
                        <SelectTrigger className="h-8 w-[80px] text-xs">
                            <SelectValue placeholder="Stage" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="stage">Stage</SelectItem>
                            <SelectItem value="lead">Lead</SelectItem>
                            <SelectItem value="qualified">Qualified</SelectItem>
                            <SelectItem value="negotiation">Negotiation</SelectItem>
                        </SelectContent>
                    </Select>
                    <StatusBadge status={client.status} />
                </div>
            </div>
        </SheetHeader>
    );
}

interface QuickViewSheetBodyProps {
    client: Client;
}

function QuickViewSheetBody({ client }: QuickViewSheetBodyProps) {
    const [notesOpen, setNotesOpen] = useState(true);
    const [filesOpen, setFilesOpen] = useState(true);
    const projectsContainerRef = useRef<HTMLDivElement>(null);

    const linkedProjects = getClientLinkedProjects(client.id);
    const sharedFiles = getClientSharedFiles(client.id);

    const scrollProjects = (direction: "left" | "right") => {
        if (projectsContainerRef.current) {
            const scrollAmount = 180;
            projectsContainerRef.current.scrollBy({
                left: direction === "left" ? -scrollAmount : scrollAmount,
                behavior: "smooth",
            });
        }
    };

    return (
        <div className="flex-1 overflow-y-auto">
            {/* Info cards */}
            <div className="grid grid-cols-2 sm:grid-cols-4 border-b">
                <InfoCard icon={Building2} label="Company" value={client.name} />
                <InfoCard icon={Factory} label="Industry" value={client.industry} />
                <InfoCard icon={MapPin} label="Location" value={client.location} />
                <InfoCard icon={Globe} label="Website" value={client.website} />
            </div>

            {/* Linked projects */}
            <div className="border-b">
                <div className="flex items-center justify-between px-6 pt-4 pb-2">
                    <h3 className="text-sm font-medium text-foreground">Linked projects</h3>
                    <span className="text-xs text-muted-foreground">{linkedProjects.length} linked</span>
                </div>
                <div className="relative px-6 pb-4">
                    {linkedProjects.length > 2 && (
                        <>
                            <button
                                onClick={() => scrollProjects("left")}
                                className="absolute left-1 top-1/2 -translate-y-1/2 z-10 w-6 h-6 rounded-full bg-background border shadow-sm flex items-center justify-center hover:bg-muted"
                            >
                                <ChevronLeft className="w-4 h-4" />
                            </button>
                            <button
                                onClick={() => scrollProjects("right")}
                                className="absolute right-1 top-1/2 -translate-y-1/2 z-10 w-6 h-6 rounded-full bg-background border shadow-sm flex items-center justify-center hover:bg-muted"
                            >
                                <ChevronRight className="w-4 h-4" />
                            </button>
                        </>
                    )}
                    <div
                        ref={projectsContainerRef}
                        className="flex gap-3 overflow-x-auto scrollbar-hide pb-1"
                        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                    >
                        {linkedProjects.map((project) => (
                            <ProjectCard
                                key={project.id}
                                name={project.name}
                                status={project.status}
                                priority={project.priority}
                            />
                        ))}
                    </div>
                </div>
                <div className="px-6 pb-4">
                    <Button variant="outline" className="w-full h-9 text-xs">
                        <Plus className="w-4 h-4 mr-2" />
                        Add Project
                    </Button>
                </div>
            </div>

            {/* Notes section */}
            <Collapsible open={notesOpen} onOpenChange={setNotesOpen} className="border-b">
                <CollapsibleTrigger className="flex items-center justify-between w-full px-6 py-4 hover:bg-muted/50">
                    <h3 className="text-sm font-medium text-foreground">Notes</h3>
                    <ChevronUp className={`w-4 h-4 text-muted-foreground transition-transform ${notesOpen ? "" : "rotate-180"}`} />
                </CollapsibleTrigger>
                <CollapsibleContent className="px-6 pb-4">
                    <p className="text-xs text-muted-foreground leading-relaxed">
                        {client.notes || "No notes available for this client."}
                    </p>
                </CollapsibleContent>
            </Collapsible>

            {/* Shared files section */}
            <Collapsible open={filesOpen} onOpenChange={setFilesOpen}>
                <CollapsibleTrigger className="flex items-center justify-between w-full px-6 py-4 hover:bg-muted/50">
                    <h3 className="text-sm font-medium text-foreground">Shared file</h3>
                    <ChevronUp className={`w-4 h-4 text-muted-foreground transition-transform ${filesOpen ? "" : "rotate-180"}`} />
                </CollapsibleTrigger>
                <CollapsibleContent className="px-6 pb-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {sharedFiles.map((file) => (
                            <FileCard
                                key={file.id}
                                name={file.name}
                                type={file.type}
                                size={file.size}
                            />
                        ))}
                    </div>
                </CollapsibleContent>
            </Collapsible>
        </div>
    );
}

interface QuickViewSheetFooterProps {
    onClose: () => void;
}

function QuickViewSheetFooter({ onClose }: QuickViewSheetFooterProps) {
    return (
        <SheetFooter className="px-6 py-4 border-t flex-row justify-between gap-3">
            <Button variant="outline" onClick={onClose} className="flex-1 cursor-pointer">
                Cancel
            </Button>
            <Button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white cursor-pointer">
                Edit client
            </Button>
        </SheetFooter>
    );
}

// ============================================================================
// Main Component
// ============================================================================

export interface ClientQuickViewSheetProps {
    client: Client;
    open: boolean;
    onOpenChange: (open: boolean) => void;
}

export function ClientQuickViewSheet({ client, open, onOpenChange }: ClientQuickViewSheetProps) {
    return (
        <Sheet open={open} onOpenChange={onOpenChange}>
            <SheetContent
                side="right"
                className="w-full sm:max-w-[450px] p-0 flex flex-col overflow-hidden"
            >
                <QuickViewSheetHeader client={client} />
                <QuickViewSheetBody client={client} />
                <QuickViewSheetFooter onClose={() => onOpenChange(false)} />
            </SheetContent>
        </Sheet>
    );
}
