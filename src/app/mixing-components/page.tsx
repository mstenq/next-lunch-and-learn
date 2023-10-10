import { DelayedComponent } from "@/components/DelayedComponent/DelayedComponent";
import { DelayedComponentSkeleton } from "@/components/DelayedComponent/DelayedComponentSkeleton";
import { Counter } from "@/components/counter/Counter";
import { Suspense } from "react";

export default function MixingComponents() {
  return (
    <div>
      <h1 className="text-2xl">Mixing Components</h1>

      <Counter>
        <Suspense fallback={<DelayedComponentSkeleton />}>
          <DelayedComponent highlightBoundary delay={2000}>
            <Counter>
              <Suspense fallback={<DelayedComponentSkeleton />}>
                <DelayedComponent highlightBoundary delay={2000} />
              </Suspense>
            </Counter>
          </DelayedComponent>
        </Suspense>
      </Counter>

      <div className="pt-4 flex gap-4">
        <div className=" flex items-center gap-2">
          <div className="w-4 h-4 rounded bg-red-600"></div>
          <div>Client Component</div>
        </div>
        <div className=" flex items-center gap-2">
          <div className="w-4 h-4 rounded bg-green-600"></div>
          <div>Server Component</div>
        </div>
      </div>
    </div>
  );
}
