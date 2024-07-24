import Component from "./SuspendedComponent";

export default function WithAuthError() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center">
      <h1 className="text-6xl font-bold">With Auth Error</h1>
      <h2 className="text-2xl font-bold">
        Using <code>react</code>&apos;s Suspense
      </h2>
      <Component />
    </div>
  );
}
