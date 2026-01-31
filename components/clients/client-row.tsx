"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { TableCell, TableRow } from "@/components/ui/table";
import { FolderOpen, MoreVertical } from "lucide-react";
import { Client, ClientStatus } from "@/lib/types/client-type";
import { getClientProjects } from "@/lib/data/client-data";


function StatusBadge({ status }: { status: ClientStatus }) {
    const statusConfig = {
        active: {
            label: "Active",
            dotColor: "bg-emerald-500",
            textColor: "text-emerald-600",
        },
        prospect: {
            label: "Prospect",
            dotColor: "bg-amber-500",
            textColor: "text-amber-600",
        },
        on_hold: {
            label: "On Hold",
            dotColor: "bg-orange-500",
            textColor: "text-orange-600",
        },
        archived: {
            label: "Archived",
            dotColor: "bg-gray-400",
            textColor: "text-gray-500",
        },
    };

    const config = statusConfig[status];

    return (
        <div className="flex items-center gap-1.5">
            <span className={`w-2 h-2 rounded-full ${config.dotColor}`} />
            <span className={`text-xs ${config.textColor}`}>{config.label}</span>
        </div>
    );
}

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
            className={`w-7 h-7 rounded-full flex items-center justify-center text-[10px] font-medium ${colors[colorIndex]} ${className || ""}`}
        >
            {initials}
        </div>
    );
}

function ProjectCounts({ clientId }: { clientId: string }) {
    const projects = getClientProjects(clientId);

    return (
        <div className="flex items-center gap-4">
            <div className="flex items-center gap-1 text-emerald-600">
                <FolderOpen className="w-3.5 h-3.5" />
                <span className="text-xs">{projects.active}</span>
            </div>
            <div className="flex items-center gap-1 text-amber-600">
                <FolderOpen className="w-3.5 h-3.5" />
                <span className="text-xs">{projects.onHold}</span>
            </div>
            <div className="flex items-center gap-1 text-gray-400">
                <FolderOpen className="w-3.5 h-3.5" />
                <span className="text-xs">{projects.completed}</span>
            </div>
        </div>
    );
}

export interface ClientRowProps {
    client: Client;
    isSelected: boolean;
    onSelect: (checked: boolean) => void;
}

export function ClientRow({ client, isSelected, onSelect }: ClientRowProps) {
    return (
        <TableRow className="hover:bg-muted/50">
            <TableCell className="w-12">
                <Checkbox
                    checked={isSelected}
                    onCheckedChange={onSelect}
                    className="border-gray-300"
                />
            </TableCell>
            <TableCell>
                <div className="flex items-center gap-2">
                    <AvatarInitials name={client.primaryContactName} />
                    <div className="min-w-0">
                        <div className="font-medium text-xs text-foreground">
                            {client.primaryContactName}
                        </div>
                        <div className="text-xs text-muted-foreground truncate">
                            {client.primaryContactEmail}
                        </div>
                    </div>
                </div>
            </TableCell>
            <TableCell>
                <div className="min-w-0">
                    <div className="font-medium text-xs text-foreground">{client.name}</div>
                    <div className="text-xs text-muted-foreground">{client.location}</div>
                </div>
            </TableCell>
            <TableCell>
                <span className="text-xs text-muted-foreground">{client.industry}</span>
            </TableCell>
            <TableCell>
                <StatusBadge status={client.status} />
            </TableCell>
            <TableCell>
                <ProjectCounts clientId={client.id} />
            </TableCell>
            <TableCell className="w-10">
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground">
                            <MoreVertical className="h-4 w-4" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-40">
                        <DropdownMenuItem className="text-xs cursor-pointer">
                            Quick view
                        </DropdownMenuItem>
                        <DropdownMenuItem className="text-xs cursor-pointer">
                            Edit client
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="text-xs cursor-pointer">
                            View full page
                        </DropdownMenuItem>
                        <DropdownMenuItem variant="destructive" className="text-xs cursor-pointer">
                            Archive
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </TableCell>
        </TableRow>
    );
}
