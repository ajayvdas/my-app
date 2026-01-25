"use client"

import { createContext, useContext, useState, ReactNode } from "react"

export type NavigationItem = "Inbox" | "My task" | "Projects" | "Clients" | "Performance"

interface NavigationContextType {
    activeNavigation: NavigationItem
    setActiveNavigation: (item: NavigationItem) => void
}

const NavigationContext = createContext<NavigationContextType | undefined>(undefined)

export function NavigationProvider({ children }: { children: ReactNode }) {
    const [activeNavigation, setActiveNavigation] = useState<NavigationItem>("Projects")

    return (
        <NavigationContext.Provider value={{ activeNavigation, setActiveNavigation }}>
            {children}
        </NavigationContext.Provider>
    )
}

export function useNavigation() {
    const context = useContext(NavigationContext)
    if (context === undefined) {
        throw new Error("useNavigation must be used within a NavigationProvider")
    }
    return context
}
