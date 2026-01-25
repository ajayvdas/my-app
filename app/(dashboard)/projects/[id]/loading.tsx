import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
    return (
        <div className="flex flex-1 flex-col bg-background mx-2 my-2 border border-border rounded-lg min-w-0 overflow-auto">
            <div className="p-6">
                <div className="flex items-center gap-2">
                    <Skeleton className="h-4 w-16" />
                    <Skeleton className="h-4 w-48" />
                </div>
                <div className="mt-6 flex items-center gap-3 flex-wrap">
                    <Skeleton className="h-8 w-[280px]" />
                    <Skeleton className="h-6 w-16 rounded-full" />
                    <Skeleton className="h-6 w-28 rounded-full" />
                    <Skeleton className="ml-auto h-5 w-5" />
                </div>

                <div className="mt-4 flex items-center gap-4 flex-wrap text-sm">
                    <Skeleton className="h-4 w-10" />
                    <Skeleton className="h-4 w-12" />
                    <Skeleton className="h-4 w-16" />
                    <Skeleton className="h-4 w-24" />
                    <Skeleton className="h-4 w-28" />
                </div>

                <div className="mt-6 flex items-center gap-6 border-b border-border pb-2">
                    <Skeleton className="h-5 w-16" />
                    <Skeleton className="h-5 w-20" />
                    <Skeleton className="h-5 w-12" />
                    <Skeleton className="h-5 w-12" />
                    <Skeleton className="h-5 w-20" />
                </div>

                <div className="mt-6">
                    <Skeleton className="h-4 w-full max-w-[700px]" />
                    <Skeleton className="mt-2 h-4 w-full max-w-[600px]" />
                </div>

                <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-[1fr_280px]">
                    <div className="space-y-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="space-y-3">
                                <Skeleton className="h-5 w-20" />
                                <div className="space-y-2 pl-4">
                                    <Skeleton className="h-4 w-full max-w-[240px]" />
                                    <Skeleton className="h-4 w-full max-w-[280px]" />
                                    <Skeleton className="h-4 w-full max-w-[200px]" />
                                    <Skeleton className="h-4 w-full max-w-[220px]" />
                                </div>
                            </div>

                            <div className="space-y-3">
                                <Skeleton className="h-5 w-24" />
                                <div className="space-y-2 pl-4">
                                    <Skeleton className="h-4 w-full max-w-[180px]" />
                                    <Skeleton className="h-4 w-full max-w-[200px]" />
                                    <Skeleton className="h-4 w-full max-w-[220px]" />
                                </div>
                            </div>
                        </div>

                        <div className="space-y-3">
                            <Skeleton className="h-5 w-36" />
                            <div className="space-y-2 pl-4">
                                <Skeleton className="h-4 w-full max-w-[300px]" />
                                <Skeleton className="h-4 w-full max-w-[340px]" />
                                <Skeleton className="h-4 w-full max-w-[280px]" />
                                <Skeleton className="h-4 w-full max-w-[320px]" />
                            </div>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <div className="space-y-4">
                            <Skeleton className="h-5 w-12" />
                            <div className="space-y-3">
                                <div className="flex items-center justify-between">
                                    <Skeleton className="h-4 w-16" />
                                    <Skeleton className="h-4 w-20" />
                                </div>
                                <div className="flex items-center justify-between">
                                    <Skeleton className="h-4 w-16" />
                                    <Skeleton className="h-4 w-24" />
                                </div>
                                <div className="flex items-center justify-between">
                                    <Skeleton className="h-4 w-28" />
                                    <Skeleton className="h-4 w-20" />
                                </div>
                                <Skeleton className="h-2 w-full rounded-full" />
                            </div>
                        </div>

                        <div className="space-y-4">
                            <Skeleton className="h-5 w-16" />
                            <div className="space-y-3">
                                <div className="flex items-center justify-between">
                                    <Skeleton className="h-4 w-14" />
                                    <Skeleton className="h-6 w-16 rounded-full" />
                                </div>
                                <div className="flex items-center justify-between">
                                    <Skeleton className="h-4 w-14" />
                                    <Skeleton className="h-4 w-12" />
                                </div>
                                <div className="flex items-center justify-between">
                                    <Skeleton className="h-4 w-14" />
                                    <Skeleton className="h-4 w-10" />
                                </div>
                                <div className="flex items-center justify-between">
                                    <Skeleton className="h-4 w-12" />
                                    <Skeleton className="h-6 w-16 rounded-full" />
                                </div>
                                <div className="flex items-center justify-between">
                                    <Skeleton className="h-4 w-10" />
                                    <Skeleton className="h-8 w-8 rounded-full" />
                                </div>
                                <div className="flex items-center justify-between">
                                    <Skeleton className="h-4 w-16" />
                                    <Skeleton className="h-6 w-6 rounded-full" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
