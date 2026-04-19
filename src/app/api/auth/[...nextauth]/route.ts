import { nextAuthConfig } from "@/components/next-auth/nextAuth.config";
import NextAuth from "next-auth";

const nextHandlers=NextAuth(nextAuthConfig)

export  {nextHandlers as GET, nextHandlers as POST}