import { DelayedComponent } from "@/components/DelayedComponent/DelayedComponent";
import { PropsWithChildren } from "react";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <div>
      Waterfall Layout
      <div className="flex gap-4">
        <DelayedComponent delay={1000} />
        {children}
      </div>
    </div>
  );
}
