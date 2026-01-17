import { Link, Plus } from "lucide-react";
import { SidebarTrigger } from "./ui/sidebar";

export default function ProjectsHeader() {
    return (
        <header className="flex items-center justify-between p-2 border-b">
            <div className="flex items-center gap-2">
                <SidebarTrigger className="h-8 w-8 rounded-lg hover:bg-accent text-muted-foreground" />
                <p className="text-base font-medium text-foreground">Projects</p>
            </div>
            <div className="flex items-center gap-2">
                <Link className="h-4 w-4" />
                <span className="flex items-center text-base font-medium text-foreground">
                    <Plus className="h-4 w-4" size={16} />
                    <p className="ml-2">Add Project</p>
                </span>
            </div>
        </header>
    )
}