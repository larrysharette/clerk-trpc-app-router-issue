import { SignUp } from "@clerk/nextjs";

export default function JoinPage() {
  return (
    <div className="mx-auto w-fit py-16">
      <SignUp signInUrl="/sign-in" />
    </div>
  );
}
