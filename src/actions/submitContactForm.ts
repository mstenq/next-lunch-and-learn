"use server";

import { redirect } from "next/navigation";
import { cookies } from "next/headers";

export const submitContactForm = (formData: FormData) => {
  const name = String(formData.get("name"));
  cookies().set("name", name);
  redirect("/thank-you");
};
