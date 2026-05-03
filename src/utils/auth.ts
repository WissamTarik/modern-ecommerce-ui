"use server"
import { getServerSession } from "next-auth";
import { nextAuthConfig } from "@/components/next-auth/nextAuth.config";

export async function getAuthHeaders() {
  // getServerSession is the most reliable way to get the session on the server
  const session = await getServerSession(nextAuthConfig);
  const token = session?.user?.token;

  if (token) {
    return {
      "token": token,
      "Content-Type": "application/json",
    };
  }

  return { "Content-Type": "application/json" };
}