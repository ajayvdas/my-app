import { Suspense } from "react"
import AppSidebar from "@/components/app-sidebar"
// import { ProjectsContent } from "@/components/projects-content"
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar"
import { Skeleton } from "@/components/ui/skeleton"

export default function Home() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <Suspense fallback={<Skeleton className="h-4 w-62.5" />}>
          {/* <ProjectsContent /> */}
        </Suspense>
      </SidebarInset>
    </SidebarProvider>
  )
}