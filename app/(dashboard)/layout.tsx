import { Suspense } from "react"
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar"
import AppSidebar from "@/components/app-sidebar"
import { Skeleton } from "@/components/ui/skeleton"

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <SidebarProvider>
            <AppSidebar />
            <SidebarInset>
                <Suspense fallback={<Skeleton className="h-4 w-62.5" />}>
                    {children}
                </Suspense>
            </SidebarInset>
        </SidebarProvider>
    )
}
