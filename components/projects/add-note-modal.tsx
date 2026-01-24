"use client"

import { useState } from "react"
import { Plus, Paperclip, Mic, Upload, Tag } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import {
    Dialog,
    DialogContent,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { VisuallyHidden } from "@radix-ui/react-visually-hidden"

interface AddNoteModalProps {
    trigger?: React.ReactNode
}

export function AddNoteModal({ trigger }: AddNoteModalProps) {
    const [open, setOpen] = useState(false)
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")

    const handleCreateNote = () => {
        // Handle note creation logic here
        console.log("Creating note:", { title, content })
        setOpen(false)
        setTitle("")
        setContent("")
    }

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                {trigger || (
                    <Button variant="ghost" size="sm" className="text-sm font-normal">
                        <Plus className="w-4 h-4 mr-1.5" />
                        Add notes
                    </Button>
                )}
            </DialogTrigger>
            <DialogContent className="sm:max-w-[540px] p-0 gap-0 overflow-hidden">
                <VisuallyHidden>
                    <DialogTitle>Add New Note</DialogTitle>
                </VisuallyHidden>
                {/* Title input */}
                <div className="px-6 pt-6 pb-4">
                    <input
                        type="text"
                        placeholder="Note title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="w-full text-xl font-medium bg-transparent border-none outline-none placeholder:text-muted-foreground/70 text-foreground"
                    />
                </div>

                {/* Content textarea */}
                <div className="px-6 pb-4">
                    <Textarea
                        placeholder="Write the details of this note..."
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        className="min-h-[120px] border-none shadow-none resize-none p-2 text-sm placeholder:text-muted-foreground/60 focus-visible:ring-0"
                    />
                </div>

                {/* Tags section */}
                <div className="px-6 pb-4 flex items-center gap-2 flex-wrap">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-muted/50 rounded-full border border-border">
                        <div className="w-5 h-5 rounded-full bg-blue-600 flex items-center justify-center text-[10px] font-semibold text-white">
                            A
                        </div>
                        <span className="text-sm text-foreground">Ajayvdas</span>
                    </div>
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-muted/50 rounded-full border border-border">
                        <Tag className="w-4 h-4 text-muted-foreground" />
                        <span className="text-sm text-foreground">General note</span>
                    </div>
                </div>

                {/* Footer actions */}
                <div className="px-6 py-4 border-t border-border bg-background flex items-center justify-between">
                    <div className="flex items-center gap-1">
                        <Button variant="ghost" size="icon" className="h-9 w-9 text-muted-foreground hover:text-foreground">
                            <Paperclip className="w-5 h-5" />
                        </Button>
                        <Button variant="ghost" size="icon" className="h-9 w-9 text-muted-foreground hover:text-foreground">
                            <Mic className="w-5 h-5" />
                        </Button>
                    </div>
                    <div className="flex items-center gap-3">
                        <Button variant="outline" className="h-9 text-sm font-medium">
                            <Upload className="w-4 h-4 mr-2" />
                            Upload audio file
                        </Button>
                        <Button
                            onClick={handleCreateNote}
                            className="h-9 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-4"
                        >
                            Create Note
                        </Button>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    )
}
