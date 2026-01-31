"use client";

import { Tabs, TabsList, TabsTrigger } from "../ui/tabs";
import { Input } from "../ui/input";
import { Search } from "lucide-react";
import { ClientStatus } from "@/lib/types/client-type";

interface ClientsActionBarProps {
    activeFilter: "all" | ClientStatus;
    onFilterChange: (filter: "all" | ClientStatus) => void;
    searchQuery: string;
    onSearchChange: (query: string) => void;
}

export function ClientsActionBar({
    activeFilter,
    onFilterChange,
    searchQuery,
    onSearchChange,
}: ClientsActionBarProps) {
    return (
        <div className="flex items-center justify-between px-4 py-3 border-b">
            <Tabs
                value={activeFilter}
                onValueChange={(value) => onFilterChange(value as "all" | ClientStatus)}
            >
                <TabsList className="inline-flex bg-muted rounded-full px-1 py-0.5 text-xs border border-border/50 h-8">
                    {[
                        { id: "all" as const, label: "All" },
                        { id: "active" as const, label: "Active" },
                        { id: "prospect" as const, label: "Prospect" },
                        { id: "on_hold" as const, label: "On hold" },
                        { id: "archived" as const, label: "Archived" },
                    ].map((tab) => (
                        <TabsTrigger
                            key={tab.id}
                            value={tab.id}
                            className="h-6 px-3 rounded-full text-xs font-medium data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm"
                        >
                            {tab.label}
                        </TabsTrigger>
                    ))}
                </TabsList>
            </Tabs>

            <div className="flex-1 max-w-xs ml-auto relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                    value={searchQuery}
                    onChange={(e) => onSearchChange(e.target.value)}
                    placeholder="Search clients or contacts"
                    className="h-9 rounded-lg bg-muted/50 text-sm placeholder:text-muted-foreground focus-visible:ring-1 focus-visible:ring-primary/20 border-border border shadow-none pl-9"
                />
            </div>
        </div>
    );
}