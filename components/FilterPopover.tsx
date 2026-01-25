"use client"

import { useMemo, useState } from "react";
import { Search, Sparkles, BarChart3, Tag, Users, Filter } from "lucide-react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Checkbox } from "./ui/checkbox";

interface FilterOption {
    id: string;
    label: string;
    count?: number;
    color?: string;
}

interface FilterCategory {
    id: string;
    label: string;
    icon: React.ReactNode;
    count: number;
    options: FilterOption[];
}

const filterCategories: FilterCategory[] = [
    {
        id: "status",
        label: "Status",
        icon: <Sparkles className="h-4 w-4" />,
        count: 10,
        options: [
            { id: "backlog", label: "Backlog", count: 1, color: "bg-teal-500" },
            { id: "planned", label: "Planned", count: 2, color: "bg-teal-500" },
            { id: "active", label: "Active", count: 3, color: "bg-teal-600" },
            { id: "cancelled", label: "Cancelled", count: 0, color: "bg-orange-500" },
            { id: "completed", label: "Completed", count: 4, color: "bg-teal-600" },
        ],
    },
    {
        id: "priority",
        label: "Priority",
        icon: <BarChart3 className="h-4 w-4" />,
        count: 10,
        options: [],
    },
    {
        id: "tags",
        label: "Tags",
        icon: <Tag className="h-4 w-4" />,
        count: 14,
        options: [],
    },
    {
        id: "members",
        label: "Members",
        icon: <Users className="h-4 w-4" />,
        count: 19,
        options: [],
    },
];

export default function FilterPopover() {
    const [selectedCategory, setSelectedCategory] = useState<string>("status");
    const [selectedFilters, setSelectedFilters] = useState<Set<string>>(new Set());
    const [searchQuery, setSearchQuery] = useState("");

    // const currentCategory = filterCategories.find((cat) => cat.id === selectedCategory);
    const currentCategory = useMemo(() => {
        const category = filterCategories.find((cat) => cat.id === selectedCategory);
        if (!category) return undefined;

        const q = searchQuery.trim().toLowerCase();
        if (!q) return category;

        // Return a filtered version of the category with only matching options
        return {
            ...category,
            options: category.options.filter((option) => option.label.toLowerCase().includes(q))
        };
    }, [selectedCategory, searchQuery]);


    const toggleFilter = (filterId: string) => {
        const newSelected = new Set(selectedFilters);
        if (newSelected.has(filterId)) {
            newSelected.delete(filterId);
        } else {
            newSelected.add(filterId);
        }
        setSelectedFilters(newSelected);
    };

    const handleClear = () => {
        setSelectedFilters(new Set());
    };

    const handleApply = () => {
        // Handle apply logic here
        console.log("Applied filters:", Array.from(selectedFilters));
    };

    return (
        <div className="w-[680px] bg-white dark:bg-zinc-900 rounded-lg shadow-lg border border-gray-200 dark:border-zinc-700">
            <div className="flex">
                {/* Left Panel - Filter Categories */}
                <div className="w-60 border-r border-gray-200 dark:border-zinc-700 p-4">
                    {/* Search Input */}
                    <div className="relative mb-4">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 dark:text-zinc-500" />
                        <Input
                            type="text"
                            placeholder="Search..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="pl-9 h-10 bg-white dark:bg-zinc-800 border-gray-200 dark:border-zinc-700 focus-visible:ring-1 focus-visible:ring-gray-300 dark:focus-visible:ring-zinc-600 dark:text-zinc-100 dark:placeholder:text-zinc-500"
                        />
                    </div>

                    {/* Filter Categories */}
                    <div className="space-y-1">
                        {filterCategories.map((category) => (
                            <button
                                key={category.id}
                                onClick={() => setSelectedCategory(category.id)}
                                className={`w-full flex items-center justify-between px-3 py-2.5 rounded-md text-sm transition-colors ${selectedCategory === category.id
                                    ? "bg-gray-100 dark:bg-zinc-800 text-gray-900 dark:text-zinc-100"
                                    : "text-gray-700 dark:text-zinc-400 hover:bg-gray-50 dark:hover:bg-zinc-800"
                                    }`}
                            >
                                <div className="flex items-center gap-2">
                                    {category.icon}
                                    <span className="font-medium">{category.label}</span>
                                </div>
                                <span className="text-gray-500 dark:text-zinc-500 text-xs">{category.count}</span>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Right Panel - Filter Options */}
                <div className="flex-1 p-4">
                    {currentCategory && currentCategory.options.length > 0 ? (
                        <div className="grid grid-cols-2 gap-3">
                            {currentCategory.options.map((option) => (
                                <div
                                    key={option.id}
                                    role="button"
                                    tabIndex={0}
                                    onClick={() => toggleFilter(option.id)}
                                    onKeyDown={(e) => {
                                        if (e.key === 'Enter' || e.key === ' ') {
                                            e.preventDefault();
                                            toggleFilter(option.id);
                                        }
                                    }}
                                    className={`flex items-center justify-between px-4 py-3.5 rounded-lg border transition-all cursor-pointer ${selectedFilters.has(option.id)
                                        ? "border-gray-300 dark:border-zinc-600 bg-gray-50 dark:bg-zinc-800"
                                        : "border-gray-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 hover:border-gray-300 dark:hover:border-zinc-600 hover:bg-gray-50 dark:hover:bg-zinc-800"
                                        }`}
                                >
                                    <div className="flex items-center gap-3">
                                        {/* Color Indicator */}
                                        {option.color && (
                                            <div className={`w-2.5 h-2.5 rounded-full ${option.color}`}></div>
                                        )}

                                        {/* Checkbox */}
                                        <Checkbox
                                            checked={selectedFilters.has(option.id)}
                                            onCheckedChange={() => toggleFilter(option.id)}
                                        />

                                        {/* Label */}
                                        <span className="text-sm font-normal text-gray-900 dark:text-zinc-100">
                                            {option.label}
                                        </span>
                                    </div>

                                    {/* Count */}
                                    {option.count !== undefined && (
                                        <span className="text-sm text-gray-500 dark:text-zinc-500">{option.count}</span>
                                    )}
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="flex items-center justify-center h-48 text-gray-400 dark:text-zinc-500 text-sm">
                            No options available
                        </div>
                    )}

                    {/* Footer Actions */}
                    <div className="flex items-center justify-between mt-6 pt-4 border-t border-gray-200 dark:border-zinc-700">
                        <Button
                            variant="link"
                            onClick={handleClear}
                        // className="text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                        >
                            Clear
                        </Button>
                        <Button
                            onClick={handleApply}
                            className="bg-black dark:bg-white hover:bg-gray-800 dark:hover:bg-gray-200 text-white dark:text-black px-6"
                        >
                            Apply
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
