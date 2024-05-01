// Auth.
import { signIn } from "@/auth";

// Mantine.
import { Button } from "@mantine/core";

// Props.
interface Props {
  isLoggedIn: boolean;
}

export default function SigninButton({ isLoggedIn }: Props) {
  if (isLoggedIn) return <></>

  return (
    <form
      action={async () => {
        "use server";
        await signIn("google", { redirectTo: '/explore' });
      }}
    >
      <Button type="submit" className="!bg-dark-purple !text-text-secondary !rounded-lg">LOGIN</Button>
    </form>
  );
}
