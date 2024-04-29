// Interfaces.
import { IProvider } from "@/interfaces/providers";

// Props.
interface Props {
    provider: IProvider;
}

export default function QuickExplorePill({ provider }: Props) {
    return (
        <div className="flex items-center justify-center bg-text-secondary grow rounded-md border border-card-border/30 shadow-sm min-h-[32px]">
            {provider}
        </div>
    )
}