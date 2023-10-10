import { DelayedComponent } from "@/components/DelayedComponent/DelayedComponent";
import { PropsWithChildren } from "react";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <div>
      Waterfall Layout 2
      <div className="flex gap-4">
        <DelayedComponent delay={3000} />
        {children}
      </div>
    </div>
  );
}
