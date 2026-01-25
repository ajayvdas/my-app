"use client"

import { MyTaskHeader } from "@/components/my-task-header"
import { TaskActionBar } from "@/components/task-action-bar"
import MyTaskContent from "@/components/content/my-task-content"

export default function TasksPage() {
    return (
        <div className="flex flex-1 flex-col m-2 border rounded-lg min-w-0 overflow-x-hidden">
            <MyTaskHeader />
            <TaskActionBar />
            <MyTaskContent />
        </div>
    )
}
