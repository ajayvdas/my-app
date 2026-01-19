import React from 'react'
import { Button } from './ui/button'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select'
import { ChevronLeft, ChevronRight, ZoomIn, ZoomOut } from 'lucide-react'

export default function TimelineControls() {
    return (
        <div className="flex items-center justify-between px-4 py-2 border-b bg-background">

            <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                <ChevronLeft className="h-4 w-4" />
            </Button>

            <div className="flex items-center gap-2">
                <div className="flex items-center gap-1">
                    <span className="text-sm font-medium">
                        January 2024
                    </span>
                    <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                        <ChevronLeft className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="sm" className="h-8 px-3 text-sm outline-none border-none shadow-none rounded-full">
                        Today
                    </Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                        <ChevronRight className="h-4 w-4" />
                    </Button>
                </div>
                <Select defaultValue="week">
                    <SelectTrigger className="h-8 w-[100px] text-sm font-medium rounded-full outline-none border-none hover:bg-accent hover:text-accent-foreground">
                        <SelectValue className='text-sm font-medium gap-1' />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="day">Day</SelectItem>
                        <SelectItem value="week">Week</SelectItem>
                        <SelectItem value="month">Month</SelectItem>
                        <SelectItem value="quarter">Quarter</SelectItem>
                        <SelectItem value="year">Year</SelectItem>
                    </SelectContent>
                </Select>

                <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                    <ZoomOut className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                    <ZoomIn className="h-4 w-4" />
                </Button>
            </div>
        </div>
    )
}
