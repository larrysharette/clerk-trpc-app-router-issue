import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <div className="mx-auto w-fit py-16">
      <SignIn signUpUrl="/join" />
    </div>
  );
}
