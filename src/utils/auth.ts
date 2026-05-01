import { nextAuthConfig } from "@/components/next-auth/nextAuth.config";
import { getServerSession } from "next-auth";
import { getSession } from "next-auth/react";

export async function getAuthHeaders() {
  let session;
  
  if (typeof window === "undefined") {
    session = await getServerSession(nextAuthConfig);
  } else {
    session = await getSession();
  }

  const token = session?.user?.token;

  return token ? { "token": token } : {}; 
}