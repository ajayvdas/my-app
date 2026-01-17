"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { useTheme } from "@/components/theme-provider"

export function ThemeToggle() {
    const { theme, setTheme } = useTheme()

    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button variant="ghost" size="icon" className="h-8 w-8 rounded-lg hover:bg-accent">
                    <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                    <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                    <span className="sr-only">Toggle theme</span>
                </Button>
            </PopoverTrigger>
            <PopoverContent align="end" className="w-36 p-2">
                <div className="flex flex-col gap-1">
                    <Button
                        variant={theme === "light" ? "secondary" : "ghost"}
                        size="sm"
                        onClick={() => setTheme("light")}
                        className="justify-start"
                    >
                        <Sun className="mr-2 h-4 w-4" />
                        Light
                    </Button>
                    <Button
                        variant={theme === "dark" ? "secondary" : "ghost"}
                        size="sm"
                        onClick={() => setTheme("dark")}
                        className="justify-start"
                    >
                        <Moon className="mr-2 h-4 w-4" />
                        Dark
                    </Button>
                    <Button
                        variant={theme === "system" ? "secondary" : "ghost"}
                        size="sm"
                        onClick={() => setTheme("system")}
                        className="justify-start"
                    >
                        <Sun className="mr-2 h-4 w-4 opacity-50" />
                        System
                    </Button>
                </div>
            </PopoverContent>
        </Popover>
    )
}
