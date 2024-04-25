// Auth.
import { auth } from "@/auth";

// Mantine.
import { Avatar } from "@mantine/core";

// Props.
interface Props {
    isLoggedIn: boolean;
    avatar: string;
  }

export default function UserIcon({ isLoggedIn, avatar }: Props){
    if (!isLoggedIn) return <></>

    return (
        <Avatar src={avatar} alt="user icon"/>
    )
}