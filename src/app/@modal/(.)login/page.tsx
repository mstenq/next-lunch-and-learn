import Login from "@/app/login/page";
import {Modal} from "@/components/modal";

export default function LoginModal() {
  return (
    <Modal>
      <div className="md:w-[600px]">
        <Login />
      </div>
    </Modal>
  )
}
