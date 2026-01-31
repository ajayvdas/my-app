export function EmptyTaskContent() {
    return (
        <div className="flex flex-1 flex-col min-h-0 bg-background mx-2 my-2 border border-border rounded-lg min-w-0">
            <div className="flex items-center justify-between px-4 py-4 border-b border-border/70">
                <div className="space-y-1">
                    <h1 className="text-lg font-semibold tracking-tight">Tasks</h1>
                    <p className="text-xs text-muted-foreground">No tasks available yet.</p>
                </div>
            </div>
        </div>
    )
}