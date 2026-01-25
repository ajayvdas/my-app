import { Suspense } from "react"
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar"
import AppSidebar from "@/components/app-sidebar"
import MainContent from "@/components/main-content"
import { Skeleton } from "@/components/ui/skeleton"
import { NavigationProvider } from "@/lib/contexts/navigation-context"

export default function Home() {
  return (
    <NavigationProvider>
      <SidebarProvider>
        <AppSidebar />
        <SidebarInset>
          <Suspense fallback={<Skeleton className="h-4 w-62.5" />}>
            <MainContent />
          </Suspense>
        </SidebarInset>
      </SidebarProvider>
    </NavigationProvider>
  )
}