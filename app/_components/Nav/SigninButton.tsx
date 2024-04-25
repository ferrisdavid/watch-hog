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
        await signIn("google");
      }}
    >
      <Button type="submit" className="bg-bg-primary text-text-secondary">Sign In</Button>
    </form>
  );
}
