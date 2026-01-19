// Timeline data types

export type TaskStatus = "done" | "in-progress" | "todo"
export type TaskPriority = "low" | "medium" | "high"

export interface Task {
  id: string
  name: string
  assignee: string
  status: TaskStatus
  priority: TaskPriority
  startDate: string
  endDate: string
}

export interface Project {
  id: string
  name: string
  startDate: string
  endDate: string
  tasks: Task[]
}

// Helper function to parse date strings (DD/MM format)
export function parseDate(dateStr: string): Date {
  const [day, month] = dateStr.split('/').map(Number)
  const year = 2026 // Current year context
  return new Date(year, month - 1, day)
}

// Format date to display format
export function formatDateRange(startDate: string, endDate: string): string {
  return `${startDate} - ${endDate}`
}

// Get date column header format (Mon 15, Tue 16, etc.)
export function formatDateHeader(date: Date): string {
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
  return `${days[date.getDay()]} ${date.getDate()}`
}

// Generate array of dates for the timeline
export function generateDateRange(startDate: Date, days: number): Date[] {
  const dates: Date[] = []
  for (let i = 0; i < days; i++) {
    const date = new Date(startDate)
    date.setDate(startDate.getDate() + i)
    dates.push(date)
  }
  return dates
}

// Calculate project completion percentage
export function calculateProjectCompletion(tasks: Task[]): number {
  if (tasks.length === 0) return 0
  const doneTasks = tasks.filter(task => task.status === 'done').length
  return Math.round((doneTasks / tasks.length) * 100)
}

// Calculate bar position based on dates
export function calculateBarPosition(
  startDate: string,
  endDate: string,
  timelineStart: Date,
  columnWidth: number
): { left: number; width: number } {
  const start = parseDate(startDate)
  const end = parseDate(endDate)
  
  const startOffset = Math.floor((start.getTime() - timelineStart.getTime()) / (1000 * 60 * 60 * 24))
  const duration = Math.floor((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24)) + 1
  
  return {
    left: startOffset * columnWidth,
    width: duration * columnWidth
  }
}
