import { Menu, Zap } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";
import AuthButtons from "../AuthButtons/AuthButtons";
import { getServerSession } from "next-auth";
import { nextAuthConfig } from "@/components/next-auth/nextAuth.config";
import NavbarCartBtn from "../NavbarCartBtn/NavbarCartBtn";

const Navbar = async({ className }: { className?: string }) => {
  const session=await getServerSession(nextAuthConfig)
  
  return (
    <section className={cn("sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur py-3", className)}>
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between">
          <div className="flex items-center gap-8">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group">
              <div className="bg-primary p-1.5 rounded-lg transition-transform group-hover:rotate-12">
                <Zap className="size-5 text-primary-foreground fill-current" />
              </div>
              <span className="text-xl font-bold tracking-tight text-primary">Fresh cart</span>
            </Link>

            {/* Desktop Links */}
            <div className="hidden lg:flex">
              <NavigationMenu>
                <NavigationMenuList className="gap-2">
                  <NavigationMenuItem>
                    <Link href="/" className="px-4 py-2 text-sm font-medium hover:text-primary transition-colors">
                      Home
                    </Link>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <Link href="/wishlist" className="px-4 py-2 text-sm font-medium hover:text-primary transition-colors">
                      Wishlist
                    </Link>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {/* Cart Icon */}
            {session&&<NavbarCartBtn/>}

            {/* Auth Buttons (Desktop) */}
            <div className="hidden sm:block">
              <AuthButtons />
            </div>

            {/* Mobile Menu Trigger */}
            <div className="lg:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline" size="icon" className="border-primary/20">
                    <Menu className="size-5 text-primary" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right">
                  <SheetHeader>
                    <SheetTitle className="text-left text-primary font-bold border-b pb-4">Menu</SheetTitle>
                  </SheetHeader>
                  <div className="flex flex-col gap-4 mt-8">
                    <Link href="/" className="text-lg font-semibold hover:text-primary px-2 transition-colors">All Products</Link>
                    
                    {/* Auth Buttons (Mobile) */}
                    <div className="pt-4 border-t px-2 ">
                       <AuthButtons />
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </nav>
      </div>
    </section>
  );
};

export { Navbar };