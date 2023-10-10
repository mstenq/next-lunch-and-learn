import { DelayedComponent } from "@/components/DelayedComponent/DelayedComponent";
import { DelayedComponentSkeleton } from "@/components/DelayedComponent/DelayedComponentSkeleton";
import { Suspense } from "react";

export default async function DataLoading() {
  return (
    <div>
      <h1 className="text-2xl">Data Loading</h1>

      <h2 className="text-lg">Slow Block</h2>
      <Suspense fallback={<DelayedComponentSkeleton />}>
        <DelayedComponent delay={5000} />
      </Suspense>

      <h2 className="text-lg">Fast Block</h2>
      <Suspense fallback={<DelayedComponentSkeleton />}>
        <DelayedComponent delay={1000} />
      </Suspense>

      <h2 className="text-lg">Block Rendering For</h2>
      <Suspense fallback={<DelayedComponentSkeleton />}>
        <DelayedComponent delay={2000} />
      </Suspense>
    </div>
  );
}
