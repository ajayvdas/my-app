import { Project } from './timeline-types'

export const mockProjects: Project[] = [
  {
    id: "1",
    name: "Fintech Mobile App Redesign",
    startDate: "19/1",
    endDate: "12/2",
    tasks: [
      {
        id: "1-1",
        name: "Discovery & IA",
        assignee: "JD",
        status: "done",
        priority: "high",
        startDate: "19/1",
        endDate: "26/1"
      },
      {
        id: "1-2",
        name: "Wireframe layout",
        assignee: "JD",
        status: "in-progress",
        priority: "medium",
        startDate: "20/1",
        endDate: "28/1"
      },
      {
        id: "1-3",
        name: "UI kit & visual design",
        assignee: "HP",
        status: "todo",
        priority: "high",
        startDate: "27/1",
        endDate: "5/2"
      },
      {
        id: "1-4",
        name: "Prototype & handoff",
        assignee: "HP",
        status: "todo",
        priority: "medium",
        startDate: "5/2",
        endDate: "12/2"
      }
    ]
  },
  {
    id: "2",
    name: "Internal PM System",
    startDate: "19/1",
    endDate: "9/2",
    tasks: [
      {
        id: "2-1",
        name: "Define MVP scope",
        assignee: "PM",
        status: "done",
        priority: "high",
        startDate: "19/1",
        endDate: "21/1"
      },
      {
        id: "2-2",
        name: "Database schema",
        assignee: "BE",
        status: "in-progress",
        priority: "high",
        startDate: "20/1",
        endDate: "25/1"
      },
      {
        id: "2-3",
        name: "API endpoints",
        assignee: "BE",
        status: "todo",
        priority: "medium",
        startDate: "25/1",
        endDate: "2/2"
      },
      {
        id: "2-4",
        name: "Roles & permissions",
        assignee: "BE",
        status: "todo",
        priority: "low",
        startDate: "2/2",
        endDate: "6/2"
      },
      {
        id: "2-5",
        name: "Frontend integration",
        assignee: "FE",
        status: "todo",
        priority: "medium",
        startDate: "5/2",
        endDate: "9/2"
      },
      {
        id: "2-6",
        name: "Testing & QA",
        assignee: "QA",
        status: "todo",
        priority: "high",
        startDate: "7/2",
        endDate: "9/2"
      }
    ]
  },
  {
    id: "3",
    name: "AI Learning Platform",
    startDate: "22/1",
    endDate: "28/1",
    tasks: [
      {
        id: "3-1",
        name: "Research & planning",
        assignee: "PM",
        status: "in-progress",
        priority: "medium",
        startDate: "22/1",
        endDate: "24/1"
      },
      {
        id: "3-2",
        name: "Tech stack selection",
        assignee: "BE",
        status: "todo",
        priority: "high",
        startDate: "24/1",
        endDate: "26/1"
      },
      {
        id: "3-3",
        name: "Initial setup",
        assignee: "FE",
        status: "todo",
        priority: "low",
        startDate: "26/1",
        endDate: "28/1"
      }
    ]
  },
  {
    id: "4",
    name: "Internal CRM System",
    startDate: "20/1",
    endDate: "30/1",
    tasks: [
      {
        id: "4-1",
        name: "Requirements gathering",
        assignee: "PM",
        status: "done",
        priority: "high",
        startDate: "20/1",
        endDate: "22/1"
      },
      {
        id: "4-2",
        name: "System architecture",
        assignee: "BE",
        status: "in-progress",
        priority: "high",
        startDate: "22/1",
        endDate: "26/1"
      },
      {
        id: "4-3",
        name: "UI mockups",
        assignee: "FE",
        status: "todo",
        priority: "medium",
        startDate: "25/1",
        endDate: "28/1"
      },
      {
        id: "4-4",
        name: "Development kickoff",
        assignee: "BE",
        status: "todo",
        priority: "low",
        startDate: "28/1",
        endDate: "30/1"
      }
    ]
  },
  {
    id: "5",
    name: "Ecommerce website",
    startDate: "15/1",
    endDate: "18/1",
    tasks: [
      {
        id: "5-1",
        name: "Product catalog setup",
        assignee: "FE",
        status: "done",
        priority: "high",
        startDate: "15/1",
        endDate: "16/1"
      },
      {
        id: "5-2",
        name: "Payment integration",
        assignee: "BE",
        status: "done",
        priority: "high",
        startDate: "16/1",
        endDate: "17/1"
      },
      {
        id: "5-3",
        name: "Checkout flow",
        assignee: "FE",
        status: "done",
        priority: "medium",
        startDate: "17/1",
        endDate: "17/1"
      },
      {
        id: "5-4",
        name: "Launch prep",
        assignee: "PM",
        status: "done",
        priority: "medium",
        startDate: "17/1",
        endDate: "18/1"
      },
      {
        id: "5-5",
        name: "Go live",
        assignee: "PM",
        status: "done",
        priority: "high",
        startDate: "18/1",
        endDate: "18/1"
      }
    ]
  },
  {
    id: "6",
    name: "Marketing Site Refresh",
    startDate: "21/1",
    endDate: "3/2",
    tasks: [
      {
        id: "6-1",
        name: "Content audit",
        assignee: "PM",
        status: "in-progress",
        priority: "low",
        startDate: "21/1",
        endDate: "23/1"
      },
      {
        id: "6-2",
        name: "Design updates",
        assignee: "FE",
        status: "todo",
        priority: "medium",
        startDate: "23/1",
        endDate: "28/1"
      },
      {
        id: "6-3",
        name: "SEO optimization",
        assignee: "PM",
        status: "todo",
        priority: "high",
        startDate: "28/1",
        endDate: "3/2"
      }
    ]
  },
  {
    id: "7",
    name: "Design System Cleanup",
    startDate: "22/1",
    endDate: "31/1",
    tasks: [
      {
        id: "7-1",
        name: "Component inventory",
        assignee: "FE",
        status: "in-progress",
        priority: "medium",
        startDate: "22/1",
        endDate: "24/1"
      },
      {
        id: "7-2",
        name: "Token standardization",
        assignee: "FE",
        status: "todo",
        priority: "high",
        startDate: "24/1",
        endDate: "27/1"
      },
      {
        id: "7-3",
        name: "Documentation",
        assignee: "FE",
        status: "todo",
        priority: "low",
        startDate: "27/1",
        endDate: "29/1"
      },
      {
        id: "7-4",
        name: "Migration guide",
        assignee: "FE",
        status: "todo",
        priority: "low",
        startDate: "29/1",
        endDate: "31/1"
      }
    ]
  },
  {
    id: "8",
    name: "Onboarding Flow A/B Test",
    startDate: "23/1",
    endDate: "30/1",
    tasks: [
      {
        id: "8-1",
        name: "Hypothesis definition",
        assignee: "PM",
        status: "done",
        priority: "medium",
        startDate: "23/1",
        endDate: "24/1"
      },
      {
        id: "8-2",
        name: "Variant design",
        assignee: "FE",
        status: "in-progress",
        priority: "high",
        startDate: "24/1",
        endDate: "27/1"
      },
      {
        id: "8-3",
        name: "Test implementation",
        assignee: "FE",
        status: "todo",
        priority: "medium",
        startDate: "27/1",
        endDate: "30/1"
      }
    ]
  },
  {
    id: "9",
    name: "Support Center Revamp",
    startDate: "24/1",
    endDate: "5/2",
    tasks: [
      {
        id: "9-1",
        name: "Article restructuring",
        assignee: "PM",
        status: "in-progress",
        priority: "low",
        startDate: "24/1",
        endDate: "28/1"
      },
      {
        id: "9-2",
        name: "Search improvements",
        assignee: "BE",
        status: "todo",
        priority: "high",
        startDate: "28/1",
        endDate: "1/2"
      },
      {
        id: "9-3",
        name: "Chat integration",
        assignee: "FE",
        status: "todo",
        priority: "medium",
        startDate: "1/2",
        endDate: "3/2"
      },
      {
        id: "9-4",
        name: "Testing",
        assignee: "QA",
        status: "todo",
        priority: "high",
        startDate: "3/2",
        endDate: "5/2"
      }
    ]
  },
  {
    id: "10",
    name: "Billing Dashboard Polish",
    startDate: "15/1",
    endDate: "18/1",
    tasks: [
      {
        id: "10-1",
        name: "Invoice redesign",
        assignee: "FE",
        status: "done",
        priority: "medium",
        startDate: "15/1",
        endDate: "17/1"
      },
      {
        id: "10-2",
        name: "Export functionality",
        assignee: "BE",
        status: "done",
        priority: "low",
        startDate: "17/1",
        endDate: "18/1"
      }
    ]
  }
]
