import { Button } from "@/components/ui/button";
import { LoginLink, LogoutLink, RegisterLink } from "@kinde-oss/kinde-auth-nextjs/server";

export default function Home() {
  return (
    <main>
      <Button>
        <RegisterLink>Sign up</RegisterLink>
      </Button>
      <Button>
        <LoginLink>Login in</LoginLink>
      </Button>
      <Button>
        <LogoutLink>Logout Link</LogoutLink>
      </Button>
    </main>
  );
}
