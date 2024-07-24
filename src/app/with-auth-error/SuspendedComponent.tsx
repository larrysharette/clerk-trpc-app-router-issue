"use client";

import { api } from "@/trpc/react";
import { Suspense, useEffect } from "react";

export default function Component() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SuspendedComponent />
    </Suspense>
  );
}

function SuspendedComponent() {
  const [data, { isError, error, errorUpdateCount }] =
    api.post.hello.useSuspenseQuery({
      text: "Suspended Component",
    });

  console.log({ isError, error, errorUpdateCount });

  useEffect(() => {
    if (isError) {
      alert("Error");
    }
  }, [isError]);

  return (
    <div className="flex h-full w-full items-center justify-center">
      <div className="text-center">
        <h1 className="text-2xl font-bold">{data.greeting}</h1>
      </div>
    </div>
  );
}
