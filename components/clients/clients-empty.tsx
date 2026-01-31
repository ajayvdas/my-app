import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

export function ClientsEmpty() {
    return (
        <div className="m-4 rounded-lg bg-muted/20 border border-border">
            <div className="flex flex-col items-center justify-center py-12 px-4">
                <h3 className="text-xs font-semibold text-foreground mb-1">No clients found</h3>
                <p className="text-xs text-muted-foreground mb-4">
                    Try adjusting your search or add a new client.
                </p>
                <Button className="bg-blue-600 hover:bg-blue-700 text-white text-xs h-8 px-3">
                    <Plus className="h-3.5 w-3.5 mr-1" />
                    New client
                </Button>
            </div>
        </div>
    );
}
