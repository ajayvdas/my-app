import { Sparkles, SlidersHorizontal, Filter } from "lucide-react";
import { Button } from "./ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import FilterPopover from "./FilterPopover";
import ViewPopoverContent from "./view-popover-content";

export default function ProjectsActionBar() {
    return (
        <div className="flex items-center justify-between p-2 border-b">
            <Popover>
                <PopoverTrigger asChild>
                    <Button variant="outline" size="sm" className="rounded-full border-none">
                        <Filter className="h-4 w-4" />
                        <span className="ml-2">Filter</span>
                    </Button>
                </PopoverTrigger>
                <PopoverContent align="start" className="w-auto p-0 border-0 shadow-none">
                    <FilterPopover />
                </PopoverContent>
            </Popover>
            <div className="flex items-center gap-2">
                <Popover>
                    <PopoverTrigger asChild>
                        <Button variant="outline" size="sm" className="rounded-full border-none">
                            <SlidersHorizontal className="h-4 w-4" />
                            <span className="ml-2">View</span>
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent align="end" className="w-96 p-4 rounded-xl">
                        <ViewPopoverContent />
                    </PopoverContent>
                </Popover>
                <Button variant="outline" size="sm" className="rounded-full border-none">
                    <Sparkles className="h-4 w-4" />
                    <span className="ml-2">Ask AI</span>
                </Button>
            </div>
        </div>
    )
}