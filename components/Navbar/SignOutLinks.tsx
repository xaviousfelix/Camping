// rafce
"use client";
import { SignOutButton } from "@clerk/nextjs";
import { toast } from "sonner"
import { Button } from "../ui/button";

const SignOutLinks = () => {
  return (
    <SignOutButton redirectUrl="/">
      <Button className="w-full text-left"
      variant="outline"
      onClick={() =>
        toast("Logout Successfully!!", {
          action: {
            label: "Undo",
            onClick: () => console.log("Undo"),
          },
        })
      }>
        Logout
      </Button>
    </SignOutButton>
  );
};
export default SignOutLinks;
