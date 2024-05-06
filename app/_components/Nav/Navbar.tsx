// Auth.
import { auth } from "@/auth";

// Logo.
import Logo from "@/public/assets/Logo.png";

// Mantine.
import { NavLink } from "@mantine/core";

// Components.
import Image from "next/image";
import SigninButton from "./SigninButton";
import UserIcon from "./UserIcon";
import ProfileDropdown from "./ProfileDropdown";

// Fonts.
import { montserrat_alt } from "@/styles/fonts";

export default async function Navbar() {
  // User Session.
  const session = await auth();

  return (
    <header id="header" className="p-5">
      <nav className="flex grow justify-between items-center">
        <a href="/">
          <div className={`${montserrat_alt.className} flex text-5xl text-dark-purple font-extrabold`}>WATCH  <Image src={Logo} width={45} quality={100} alt="watchog logo" className="ml-1 mr-1"/>  G</div>
        </a>
       

        <div className="flex gap-12 text-dark-purple font-medium">
          <div className="flex">
            <NavLink classNames={{label: "!text-lg"}} label="EXPLORE" href="/explore"/>
            <NavLink classNames={{label: "!text-lg"}} label="FEED" href="/feed" />
            <NavLink classNames={{label: "!text-lg"}} label="SOCIAL" href="/social" />
          </div>

          <SigninButton isLoggedIn={!!session?.user} />

          <ProfileDropdown username={session?.user?.name}>
            <UserIcon
              isLoggedIn={!!session?.user}
              avatar={session?.user?.image}
            />
          </ProfileDropdown>
        </div>
      </nav>
    </header>
  );
}
