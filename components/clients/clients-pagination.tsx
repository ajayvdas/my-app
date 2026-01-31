"use client";

import { Button } from "@/components/ui/button";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import {
    ChevronLeft,
    ChevronRight,
    ChevronsLeft,
    ChevronsRight,
} from "lucide-react";

export interface ClientsPaginationProps {
    currentPage: number;
    totalPages: number;
    rowsPerPage: number;
    onPageChange: (page: number) => void;
    onRowsPerPageChange: (rows: number) => void;
}

export function ClientsPagination({
    currentPage,
    totalPages,
    rowsPerPage,
    onPageChange,
    onRowsPerPageChange,
}: ClientsPaginationProps) {
    return (
        <div className="flex items-center justify-between px-4 py-3 border-t">
            <div className="text-xs text-muted-foreground">
                Page {currentPage} of {totalPages || 1}
            </div>

            <div className="flex items-center gap-2">
                <div className="flex items-center gap-1">
                    <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8"
                        onClick={() => onPageChange(1)}
                        disabled={currentPage === 1}
                    >
                        <ChevronsLeft className="h-4 w-4" />
                    </Button>
                    <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8"
                        onClick={() => onPageChange(Math.max(1, currentPage - 1))}
                        disabled={currentPage === 1}
                    >
                        <ChevronLeft className="h-4 w-4" />
                    </Button>
                </div>

                <div className="flex items-center gap-1">
                    {Array.from({ length: Math.min(3, totalPages) }, (_, i) => {
                        let pageNum: number;
                        if (totalPages <= 3) {
                            pageNum = i + 1;
                        } else if (currentPage === 1) {
                            pageNum = i + 1;
                        } else if (currentPage === totalPages) {
                            pageNum = totalPages - 2 + i;
                        } else {
                            pageNum = currentPage - 1 + i;
                        }

                        if (pageNum < 1 || pageNum > totalPages) return null;

                        return (
                            <Button
                                key={pageNum}
                                variant={currentPage === pageNum ? "outline" : "ghost"}
                                size="icon"
                                className={`h-8 w-8 text-xs ${currentPage === pageNum ? "border" : ""}`}
                                onClick={() => onPageChange(pageNum)}
                            >
                                {pageNum}
                            </Button>
                        );
                    })}
                </div>

                <div className="flex items-center gap-1">
                    <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8"
                        onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
                        disabled={currentPage === totalPages || totalPages === 0}
                    >
                        <ChevronRight className="h-4 w-4" />
                    </Button>
                    <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8"
                        onClick={() => onPageChange(totalPages)}
                        disabled={currentPage === totalPages || totalPages === 0}
                    >
                        <ChevronsRight className="h-4 w-4" />
                    </Button>
                </div>

                <span className="text-xs text-muted-foreground ml-2">Rows per page</span>
                <Select
                    value={String(rowsPerPage)}
                    onValueChange={(value) => onRowsPerPageChange(Number(value))}
                >
                    <SelectTrigger className="h-8 w-16">
                        <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="10">10</SelectItem>
                        <SelectItem value="20">20</SelectItem>
                        <SelectItem value="50">50</SelectItem>
                    </SelectContent>
                </Select>
            </div>
        </div>
    );
}
