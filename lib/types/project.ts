// Project Detail Types

export interface Project {
    id: string
    title: string
    status: 'active' | 'inactive' | 'completed'
    priority: 'high' | 'medium' | 'low'
    location: string
    sprint: string
    lastSync: string
    description: string
    estimate: string
    dueDate: string
    daysRemaining: number
    progress: number
    group: string | null
    label: string
    pic: TeamMember | null
    support: TeamMember | null
}

export interface TeamMember {
    id: string
    name: string
    initials: string
    avatar?: string
}

export interface ScopeItem {
    text: string
    links?: { text: string; href: string }[]
}

export interface KeyFeature {
    text: string
    href?: string
}

export interface KeyFeatureGroup {
    priority: 'P0' | 'P1' | 'P2'
    features: KeyFeature[]
}

export interface TimelineTask {
    id: string
    name: string
    label: string
    color: string
    startCol: number
    span: number
}

export interface QuickLink {
    id: string
    name: string
    size: string
    type: 'pdf' | 'zip' | 'figma' | 'other'
    icon?: React.ReactNode
}

export interface TimelineRowProps {
    name: string
    taskLabel: string
    taskColor: string
    startCol: number
    span: number
}

export interface QuickLinkItemProps {
    icon: React.ReactNode
    name: string
    size: string
}
