// Mantine.
import { Avatar } from "@mantine/core";

// Props.
interface Props {
    isLoggedIn: boolean;
    avatar?: string | null;
  }

export default function UserIcon({ isLoggedIn, avatar }: Props){
    if (!isLoggedIn) return <></>

    return (
        <Avatar className="hover:cursor-pointer border-[1px] border-dark-purple/25" src={avatar} imageProps={{ referrerPolicy: "no-referrer" }} size={48} alt="user icon"/>
    )
}