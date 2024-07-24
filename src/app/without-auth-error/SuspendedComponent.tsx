"use client";

import { api } from "@/trpc/react";
import { Suspense } from "@suspensive/react";

export default function Component() {
  return (
    <Suspense clientOnly fallback={<div>Loading...</div>}>
      <SuspendedComponent />
    </Suspense>
  );
}

function SuspendedComponent() {
  const [data] = api.post.hello.useSuspenseQuery({
    text: "Suspended Component",
  });

  return (
    <div className="flex h-full w-full items-center justify-center">
      <div className="text-center">
        <h1 className="text-2xl font-bold">{data.greeting}</h1>
      </div>
    </div>
  );
}
