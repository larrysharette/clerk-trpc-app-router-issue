import Link from "next/link";

import { HydrateClient } from "@/trpc/server";
import { SignedIn, SignedOut, SignUpButton } from "@clerk/nextjs";

export default async function Home() {
  return (
    <HydrateClient>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
          <h1 className="text-5xl font-extrabold tracking-tight sm:text-[5rem]">
            Create <span className="text-[hsl(280,100%,70%)]">T3</span> App
          </h1>
          <SignedOut>
            <SignUpButton />
          </SignedOut>
          <SignedIn>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8">
              <Link
                className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 hover:bg-white/20"
                href="/with-auth-error"
                target="_blank"
              >
                <h3 className="text-2xl font-bold">Page with Issue</h3>
              </Link>
              <Link
                className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 hover:bg-white/20"
                href="/without-auth-error"
                target="_blank"
              >
                <h3 className="text-2xl font-bold">Page without issue</h3>
              </Link>
            </div>
          </SignedIn>
        </div>
      </main>
    </HydrateClient>
  );
}
