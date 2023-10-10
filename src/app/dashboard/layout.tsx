import { Suspense } from "react";

export default function Layout(props: {
  analytics: React.ReactNode;
  team: React.ReactNode;
}) {
  return (
    <div>
      <h1 className="text-2xl">Parallel Routes</h1>
      <div className="grid grid-cols-2 gap-4 mt-4">
        <Suspense>{props.team}</Suspense>
        <Suspense>{props.analytics}</Suspense>
      </div>
    </div>
  );
}
