import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar"
import AppSidebar from "@/components/app-sidebar"
import ProjectDetailPage from "@/components/projects/project-detail-page"

export default function Page() {
    return (
        <SidebarProvider>
            <AppSidebar />
            <SidebarInset>
                <ProjectDetailPage />
            </SidebarInset>
        </SidebarProvider>
    )
}