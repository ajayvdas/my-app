"use client"

import { useState } from "react";
import { List, LayoutDashboard, BarChart3, ChevronDown, Globe, Type, Calendar, User, Plus } from "lucide-react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "./ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Switch } from "./ui/switch";
import { Label } from "./ui/label";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";

export default function ViewPopoverContent() {
    const [showAbsentParent, setShowAbsentParent] = useState(false);
    const [showClosedProjects, setShowClosedProjects] = useState(true);
    const [selectedProperties, setSelectedProperties] = useState(["title", "status", "assignee", "dueDate"]);

    const toggleProperty = (property: string) => {
        if (selectedProperties.includes(property)) {
            setSelectedProperties(selectedProperties.filter(p => p !== property));
        } else {
            setSelectedProperties([...selectedProperties, property]);
        }
    };

    const properties = [
        { id: "title", label: "Title", icon: Type },
        { id: "status", label: "Status", icon: LayoutDashboard },
        { id: "assignee", label: "Assignee", icon: User },
        { id: "dueDate", label: "Due date", icon: Calendar },
    ];

    return (
        <Tabs defaultValue="List" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-4">
                <TabsTrigger value="List" className="flex items-center gap-2">
                    <List className="h-4 w-4" />
                    <span>List</span>
                </TabsTrigger>
                <TabsTrigger value="Board" className="flex items-center gap-2">
                    <LayoutDashboard className="h-4 w-4" />
                    <span>Board</span>
                </TabsTrigger>
                <TabsTrigger value="Timeline" className="flex items-center gap-2">
                    <BarChart3 className="h-4 w-4" />
                    <span>Timeline</span>
                </TabsTrigger>
            </TabsList>

            <TabsContent value="List" className="space-y-4 mt-0">
                {/* Tasks Section */}
                <div className="space-y-3">
                    <h3 className="text-sm font-semibold text-gray-900">Tasks</h3>
                    <div className="flex items-center justify-between">
                        <Label htmlFor="tasks-select" className="text-sm text-gray-700">Tasks</Label>
                        <Select defaultValue="flat">
                            <SelectTrigger id="tasks-select" className="w-32 h-9">
                                <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="flat">Flat</SelectItem>
                                <SelectItem value="nested">Nested</SelectItem>
                                <SelectItem value="grouped">Grouped</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </div>

                {/* Ordering Section */}
                <div className="space-y-3">
                    <h3 className="text-sm font-semibold text-gray-900">Ordering</h3>
                    <div className="flex items-center justify-between">
                        <Label htmlFor="ordering-select" className="text-sm text-gray-700">Ordering</Label>
                        <Select defaultValue="date">
                            <SelectTrigger id="ordering-select" className="w-32 h-9">
                                <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="date">Date</SelectItem>
                                <SelectItem value="name">Name</SelectItem>
                                <SelectItem value="priority">Priority</SelectItem>
                                <SelectItem value="status">Status</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </div>

                {/* Show Options */}
                <div className="space-y-3">
                    <div className="flex items-center justify-between">
                        <Label htmlFor="show-absent" className="text-sm text-gray-700">Show absent parent</Label>
                        <Switch
                            id="show-absent"
                            checked={showAbsentParent}
                            onCheckedChange={setShowAbsentParent}
                        />
                    </div>
                    <div className="flex items-center justify-between">
                        <Label htmlFor="show-closed" className="text-sm text-gray-700">Show closed projects</Label>
                        <Switch
                            id="show-closed"
                            checked={showClosedProjects}
                            onCheckedChange={setShowClosedProjects}
                        />
                    </div>
                </div>

                {/* Group By Section */}
                <div className="space-y-3">
                    <div className="flex items-center justify-between">
                        <Label htmlFor="group-by" className="text-sm text-gray-700">Group by</Label>
                        <Select defaultValue="none">
                            <SelectTrigger id="group-by" className="w-32 h-9">
                                <div className="flex items-center gap-2">
                                    <Globe className="h-4 w-4" />
                                    <SelectValue />
                                </div>
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="none">None</SelectItem>
                                <SelectItem value="status">Status</SelectItem>
                                <SelectItem value="assignee">Assignee</SelectItem>
                                <SelectItem value="priority">Priority</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </div>

                {/* Properties Section */}
                <div className="space-y-3">
                    <h3 className="text-sm font-semibold text-gray-900">Properties</h3>
                    <div className="flex flex-wrap gap-2">
                        {properties.map((property) => {
                            const Icon = property.icon;
                            const isSelected = selectedProperties.includes(property.id);
                            return (
                                <button
                                    key={property.id}
                                    onClick={() => toggleProperty(property.id)}
                                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md border text-sm transition-colors ${isSelected
                                            ? "bg-white border-gray-300 text-gray-900"
                                            : "bg-gray-50 border-gray-200 text-gray-500 hover:bg-gray-100"
                                        }`}
                                >
                                    <Icon className="h-4 w-4" />
                                    <span>{property.label}</span>
                                </button>
                            );
                        })}
                        <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-gray-200 bg-gray-50 text-gray-500 text-sm hover:bg-gray-100 transition-colors">
                            <Plus className="h-4 w-4" />
                        </button>
                    </div>
                </div>

                <Separator className="my-4" />

                {/* Footer Actions */}
                <div className="flex items-center justify-between">
                    <Button variant="link" className="text-blue-600 hover:text-blue-700 p-0 h-auto font-normal">
                        <Globe className="h-4 w-4 mr-1.5" />
                        Set default for everyone
                    </Button>
                    <Button variant="link" className="text-blue-600 hover:text-blue-700 p-0 h-auto font-normal">
                        Reset
                    </Button>
                </div>
            </TabsContent>

            <TabsContent value="Board" className="space-y-4 mt-0">
                <p className="text-sm text-gray-500">Board view settings coming soon...</p>
            </TabsContent>

            <TabsContent value="Timeline" className="space-y-4 mt-0">
                <p className="text-sm text-gray-500">Timeline view settings coming soon...</p>
            </TabsContent>
        </Tabs>
    );
}