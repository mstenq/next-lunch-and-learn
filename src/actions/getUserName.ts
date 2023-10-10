"use server";

import { cookies } from "next/headers";

export const getUserName = () => {
  return cookies().get("name")?.value ?? "world";
};
