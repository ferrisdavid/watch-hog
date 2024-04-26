import { auth } from "@/auth";

// Mantine.
import { NavLink } from "@mantine/core";

// Components.
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
        <div className={`${montserrat_alt.className} text-4xl text-dark-purple font-extrabold`}>WATCHOG</div>

        <div className="flex gap-12 text-dark-purple font-medium">
          <div className="flex">
            <NavLink label="EXPLORE" />
            <NavLink label="FEED" />
            <NavLink label="SOCIAL" />
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
