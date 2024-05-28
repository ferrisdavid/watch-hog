// Components
import Image from "next/image";

// Utils.
import { formatPosterUrl } from "../Trending/utils/movieFormatter";

// Props.
interface Props {
  provider: string;
  providerLogo: string;
}

export default function QuickExplorePill({ provider, providerLogo }: Props) {
  return (
    <div className="flex min-w-[85px] min-h-[85px] items-center justify-center grow transition-all hover:cursor-pointer hover:z-10 hover:scale-105">
      <Image
        className="w-[100%] rounded-md border border-card-border/20 shadow-sm"
        src={formatPosterUrl(providerLogo, "original")}
        alt={`${provider}-logo`}
        width={85}
        height={85}
        quality={100}
      />
    </div>
  );
}
