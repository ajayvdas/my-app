import { redirect } from "next/navigation"

export default function DashboardHome() {
    // Redirect to projects by default
    redirect("/projects")
}
