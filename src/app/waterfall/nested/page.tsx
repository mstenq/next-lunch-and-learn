import { DelayedComponent } from "@/components/DelayedComponent/DelayedComponent";

export default function Page() {
  return (
    <div>
      Waterfall Page 2
      <DelayedComponent delay={6000} />
    </div>
  );
}
