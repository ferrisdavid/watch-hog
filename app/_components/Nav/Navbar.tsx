import { auth } from "@/auth";

// Mantine.
import { NavLink } from "@mantine/core";

// Components.
import SigninButton from "./SigninButton";

export default async function Navbar() {
  // User Session.
  const session = await auth();

  return (
    <header id="header" className="p-5">
      <nav className="flex grow justify-between items-center">
        <div className="text-xl font-extrabold">WATCHOG</div>
        <div className="flex">
          <NavLink label="EXPLORE" />
          <NavLink label="FEED" />
          <NavLink label="SOCIAL" />
        </div>

        <SigninButton isLoggedIn={!!session?.user} />
      </nav>
    </header>
  );
}
