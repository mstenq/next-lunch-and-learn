import { submitContactForm } from "@/actions/submitContactForm";
import { DelayedComponent } from "@/components/DelayedComponent/DelayedComponent";
import { Deferred } from "next/dist/server/image-optimizer";

export default async function Todos() {
  return (
    <main className="">
      <h1 className="text-xl">Form</h1>
      <p>No JS required</p>
      {/* <DelayedComponent delay={1000} /> */}

      <form
        action={submitContactForm}
        className="flex flex-col gap-4 max-w-[300px]"
      >
        <input type="text" name="name" placeholder="Name" />
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </main>
  );
}
