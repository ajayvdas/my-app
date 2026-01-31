"use client";

import {
    Table,
    TableBody,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Checkbox } from "@/components/ui/checkbox";
import { ArrowUpDown } from "lucide-react";
import { Client } from "@/lib/types/client-type";
import { ClientRow } from "./client-row";

export interface ClientsTableProps {
    clients: Client[];
    selectedClients: Set<string>;
    isAllSelected: boolean;
    sortOrder: "asc" | "desc";
    onSelectAll: (checked: boolean) => void;
    onSelectClient: (clientId: string, checked: boolean) => void;
    onToggleSort: () => void;
}

export function ClientsTable({
    clients,
    selectedClients,
    isAllSelected,
    sortOrder,
    onSelectAll,
    onSelectClient,
    onToggleSort,
}: ClientsTableProps) {
    return (
        <Table>
            <TableHeader>
                <TableRow className="hover:bg-transparent border-b">
                    <TableHead className="w-12">
                        <Checkbox
                            checked={isAllSelected}
                            onCheckedChange={onSelectAll}
                            className="border-gray-300"
                        />
                    </TableHead>
                    <TableHead className="min-w-[200px]">
                        <button
                            onClick={onToggleSort}
                            className="flex items-center gap-1 text-muted-foreground hover:text-foreground text-xs font-medium uppercase tracking-wide"
                        >
                            Client
                            <ArrowUpDown className="h-3 w-3" />
                        </button>
                    </TableHead>
                    <TableHead className="min-w-[180px]">
                        <span className="text-muted-foreground text-xs font-medium uppercase tracking-wide">
                            Company
                        </span>
                    </TableHead>
                    <TableHead className="min-w-[120px]">
                        <span className="text-muted-foreground text-xs font-medium uppercase tracking-wide">
                            Industry
                        </span>
                    </TableHead>
                    <TableHead className="min-w-[100px]">
                        <span className="text-muted-foreground text-xs font-medium uppercase tracking-wide">
                            Status
                        </span>
                    </TableHead>
                    <TableHead className="min-w-[160px]">
                        <button className="flex items-center gap-1 text-muted-foreground hover:text-foreground text-xs font-medium uppercase tracking-wide">
                            Projects
                            <ArrowUpDown className="h-3 w-3" />
                        </button>
                    </TableHead>
                    <TableHead className="w-10" />
                </TableRow>
            </TableHeader>
            <TableBody>
                {clients.map((client) => (
                    <ClientRow
                        key={client.id}
                        client={client}
                        isSelected={selectedClients.has(client.id)}
                        onSelect={(checked) => onSelectClient(client.id, checked)}
                    />
                ))}
            </TableBody>
        </Table>
    );
}
