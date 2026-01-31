import ClientsContent from "@/components/clients/clients-content"
import { ClientsHeader } from "@/components/clients/clients-header"

export default function ClientsPage() {
    return (
        <div className="flex flex-1 flex-col m-2 border rounded-lg min-w-0 overflow-x-hidden">
            <ClientsHeader />
            <ClientsContent />
        </div>
    )
}
