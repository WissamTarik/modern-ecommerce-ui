import Link from "next/link";
import { Zap, FacebookIcon, Instagram, Twitter, Apple, } from "lucide-react";
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram ,FaTwitter } from "react-icons/fa";


export function Footer() {
  return (
    <footer className="w-full bg-muted/30 border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Brand Section */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="bg-primary p-1.5 rounded-lg">
                <Zap className="size-5 text-primary-foreground fill-current" />
              </div>
              <span className="text-xl font-bold tracking-tight text-primary">
                Fresh cart
              </span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Men's  and woman fashion, musics, and electronics delivered to your doorstep every morning.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="text-primary hover:opacity-80"><FaFacebookF className="size-5" /></Link>
              <Link href="#" className="text-primary hover:opacity-80"><FaInstagram className="size-5" /></Link>
              <Link href="#" className="text-primary hover:opacity-80"><FaTwitter  className="size-5" /></Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-foreground mb-4">Shop</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="#" className="hover:text-primary transition-colors">Groceries</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Bakery</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Fruits & Vegetables</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Dairy & Eggs</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-bold text-foreground mb-4">Support</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="#" className="hover:text-primary transition-colors">Help Center</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Delivery Areas</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Terms of Service</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* App Downloads */}
          <div className="space-y-4">
            <h3 className="font-bold text-foreground mb-4">Experience on Mobile</h3>
            <div className="flex flex-col gap-2">
              <button className="flex items-center justify-center gap-2 bg-foreground text-background px-4 py-2 rounded-lg hover:opacity-90 transition-opacity">
                <Apple className="size-5" />
                <div className="text-left">
                  <div className="text-[10px] uppercase leading-none">Download on</div>
                  <div className="text-sm font-semibold leading-none mt-1">App Store</div>
                </div>
              </button>
              <button className="flex items-center justify-center gap-2 bg-foreground text-background px-4 py-2 rounded-lg hover:opacity-90 transition-opacity">
                <Zap className="size-5" /> {/* Swap with Google Play icon if needed */}
                <div className="text-left">
                  <div className="text-[10px] uppercase leading-none">Get it on</div>
                  <div className="text-sm font-semibold leading-none mt-1">Google Play</div>
                </div>
              </button>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Fresh cart. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
             <img src="https://www.svgrepo.com/show/508713/visa.svg" alt="Visa" className="h-4 grayscale hover:grayscale-0 transition-all" />
             <img src="https://www.svgrepo.com/show/508701/mastercard.svg" alt="Mastercard" className="h-6 grayscale hover:grayscale-0 transition-all" />
          </div>
        </div>
      </div>
    </footer>
  );
}