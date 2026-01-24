"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface ScopeItem {
    text: string
    links?: { text: string; href?: string }[]
}

interface ScopeCardProps {
    title: string
    items: ScopeItem[]
}

export function ScopeCard({ title, items }: ScopeCardProps) {
    return (
        <Card className="py-4 shadow-none">
            <CardHeader className="pb-2 pt-0">
                <CardTitle className="text-sm font-semibold">{title}</CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
                <ul className="space-y-2 text-sm text-muted-foreground">
                    {items.map((item, index) => (
                        <li key={index} className="flex items-start gap-2">
                            <span className="mt-1">•</span>
                            <span>
                                {item.links ? (
                                    <>
                                        {item.text.split('{{LINK}}').map((part, i) => (
                                            <span key={i}>
                                                {part}
                                                {item.links && item.links[i] && (
                                                    <Button
                                                        variant="link"
                                                        className="p-0 h-auto text-primary"
                                                    >
                                                        {item.links[i].text}
                                                    </Button>
                                                )}
                                            </span>
                                        ))}
                                    </>
                                ) : (
                                    item.text
                                )}
                            </span>
                        </li>
                    ))}
                </ul>
            </CardContent>
        </Card>
    )
}
