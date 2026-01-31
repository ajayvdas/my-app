"use client";

import { useState, useMemo } from "react";
import { clients } from "@/lib/data/client-data";
import { ClientStatus } from "@/lib/types/client-type";
import { ClientsActionBar } from "./clients-action-bar";
import { ClientsTable } from "./clients-table";
import { ClientsEmpty } from "./clients-empty";
import { ClientsPagination } from "./clients-pagination";

export default function ClientsContent() {
    const [activeFilter, setActiveFilter] = useState<"all" | ClientStatus>("all");
    const [searchQuery, setSearchQuery] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [selectedClients, setSelectedClients] = useState<Set<string>>(new Set());
    const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");

    // Filter and search clients
    const filteredClients = useMemo(() => {
        let result = clients;

        // Apply status filter
        if (activeFilter !== "all") {
            result = result.filter((client) => client.status === activeFilter);
        }

        // Apply search filter
        if (searchQuery.trim()) {
            const query = searchQuery.toLowerCase();
            result = result.filter(
                (client) =>
                    client.name.toLowerCase().includes(query) ||
                    client.primaryContactName.toLowerCase().includes(query) ||
                    client.primaryContactEmail.toLowerCase().includes(query) ||
                    client.industry.toLowerCase().includes(query)
            );
        }

        // Apply sorting (by contact name)
        result = [...result].sort((a, b) => {
            const comparison = a.primaryContactName.localeCompare(b.primaryContactName);
            return sortOrder === "asc" ? comparison : -comparison;
        });

        return result;
    }, [activeFilter, searchQuery, sortOrder]);

    // Pagination
    const totalPages = Math.ceil(filteredClients.length / rowsPerPage);
    const paginatedClients = useMemo(() => {
        const startIndex = (currentPage - 1) * rowsPerPage;
        return filteredClients.slice(startIndex, startIndex + rowsPerPage);
    }, [filteredClients, currentPage, rowsPerPage]);

    // Reset to page 1 when filter or search changes
    const handleFilterChange = (filter: "all" | ClientStatus) => {
        setActiveFilter(filter);
        setCurrentPage(1);
    };

    const handleSearchChange = (query: string) => {
        setSearchQuery(query);
        setCurrentPage(1);
    };

    const handleSelectAll = (checked: boolean) => {
        if (checked) {
            setSelectedClients(new Set(paginatedClients.map((c) => c.id)));
        } else {
            setSelectedClients(new Set());
        }
    };

    const handleSelectClient = (clientId: string, checked: boolean) => {
        const newSelected = new Set(selectedClients);
        if (checked) {
            newSelected.add(clientId);
        } else {
            newSelected.delete(clientId);
        }
        setSelectedClients(newSelected);
    };

    const isAllSelected =
        paginatedClients.length > 0 && paginatedClients.every((c) => selectedClients.has(c.id));

    const toggleSortOrder = () => {
        setSortOrder((prev) => (prev === "asc" ? "desc" : "asc"));
    };

    const handleRowsPerPageChange = (rows: number) => {
        setRowsPerPage(rows);
        setCurrentPage(1);
    };

    return (
        <div className="flex flex-1 flex-col overflow-hidden">
            <ClientsActionBar
                activeFilter={activeFilter}
                onFilterChange={handleFilterChange}
                searchQuery={searchQuery}
                onSearchChange={handleSearchChange}
            />

            <div className="flex-1 overflow-auto">
                <ClientsTable
                    clients={paginatedClients}
                    selectedClients={selectedClients}
                    isAllSelected={isAllSelected}
                    sortOrder={sortOrder}
                    onSelectAll={handleSelectAll}
                    onSelectClient={handleSelectClient}
                    onToggleSort={toggleSortOrder}
                />

                {paginatedClients.length === 0 && <ClientsEmpty />}
            </div>

            <ClientsPagination
                currentPage={currentPage}
                totalPages={totalPages}
                rowsPerPage={rowsPerPage}
                onPageChange={setCurrentPage}
                onRowsPerPageChange={handleRowsPerPageChange}
            />
        </div>
    );
}
