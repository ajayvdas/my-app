import { Button } from "./ui/button";
import { SidebarTrigger } from "./ui/sidebar";
import { ThemeToggle } from "./theme-toggle";
import { Plus } from "lucide-react";

export function MyTaskHeader() {
    return (
        <header className="flex items-center justify-between p-2 border-b">
            <div className="flex items-center gap-2">
                <SidebarTrigger className="h-8 w-8 rounded-lg hover:bg-accent text-muted-foreground" />
                <p className="text-base font-medium text-foreground">My Tasks</p>
            </div>
            <div className="flex items-center gap-2">
                <ThemeToggle />
                <Button variant="outline" className="flex items-center text-base font-medium text-foreground border-none hover:bg-accent hover:text-foreground hover:border-none">
                    <Plus className="h-4 w-4" size={16} />
                    <p className="ml-2">New Task</p>
                </Button>
            </div>
        </header>
    )
}