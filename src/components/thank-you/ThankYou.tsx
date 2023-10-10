import { getUserName } from "@/actions/getUserName";
import { Modal } from "@/components/modal";

export default function ThankYou() {
  const name = getUserName();
  return <div className="md:w-[600px]">Hello {name}</div>;
}
