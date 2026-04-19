import type { Metadata } from "next";
import { Navbar } from "@components/Navbar/Navbar";
import { Roboto } from 'next/font/google';
import { Footer } from "@components/Footer/Footer";
import { Toaster } from "@/components/ui/sonner"
import "../app/globals.css"
import MySessionProvider from "./_components/MySessionProvider/MySessionProvider";


const roboto=Roboto({
  weight:['400','500','700'],
  subsets:['latin'],
  display:'swap',
  variable:'--font-roboto'
})
export const metadata: Metadata = {
  title: {
    default:"Fresh cart",
    template:"%s | Fresh cart"
  },
description: "Your best e-commerce platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} antialiased`}
      >
        <MySessionProvider>


        <Navbar/>
        {children}
        </MySessionProvider>
        <Toaster
          position="top-center"
          richColors
          closeButton
          toastOptions={{

            style:{
              background:"hsl(var(--background))!",
              color:"hsl(var(--foreground))!",
              border:"1px solid hsl(var(--border))!"
            },
            className:"font-sans"
          }
            
          }
        />
        <Footer/>
      </body>
    </html>
  );
}
