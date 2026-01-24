// Types for workstream data
export interface Task {
    id: string
    name: string
    completed: boolean
    dueDate?: string
    dueDateColor?: "default" | "warning" | "muted"
    assignee?: {
        name: string
        avatar?: string
        initials: string
    }
}

export interface Workstream {
    id: string
    name: string
    tasks: Task[]
}
