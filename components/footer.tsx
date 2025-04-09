import Link from "next/link"
import Image from "next/image"
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-club-gold bg-club-black text-white">
      <div className="container py-8 md:py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/joga%20logo.jpg-O2aQJS6gJJpZGwMCdnJxGJ3OjwNlzT.jpeg"
                alt="Joga Bonito FC Logo"
                width={40}
                height={48}
                className="h-12 w-auto"
              />
              <span className="text-xl font-bold">Joga Bonito FC</span>
            </Link>
            <p className="mt-4 text-sm text-white/70">
              Founded in 2024, Joga Bonito FC has been dedicated to the beautiful game for generations, inspiring fans
              with our unique style of play.
            </p>
            <div className="mt-4 flex gap-4">
              <Link href="#" className="text-white/70 hover:text-club-gold">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-white/70 hover:text-club-gold">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-white/70 hover:text-club-gold">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-white/70 hover:text-club-gold">
                <Youtube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </Link>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-club-gold">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/team" className="text-sm text-white/70 hover:text-club-gold hover:underline">
                  Team
                </Link>
              </li>
              <li>
                <Link href="/fixtures" className="text-sm text-white/70 hover:text-club-gold hover:underline">
                  Fixtures & Results
                </Link>
              </li>
              <li>
                <Link href="/tickets" className="text-sm text-white/70 hover:text-club-gold hover:underline">
                  Tickets
                </Link>
              </li>
              <li>
                <Link href="/membership" className="text-sm text-white/70 hover:text-club-gold hover:underline">
                  Membership
                </Link>
              </li>
              <li>
                <Link href="/shop" className="text-sm text-white/70 hover:text-club-gold hover:underline">
                  Club Shop
                </Link>
              </li>
              <li>
                <Link href="/news" className="text-sm text-white/70 hover:text-club-gold hover:underline">
                  News
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-club-gold">Media</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/media/highlights" className="text-sm text-white/70 hover:text-club-gold hover:underline">
                  Match Highlights
                </Link>
              </li>
              <li>
                <Link href="/media/interviews" className="text-sm text-white/70 hover:text-club-gold hover:underline">
                  Interviews
                </Link>
              </li>
              <li>
                <Link href="/media/photos" className="text-sm text-white/70 hover:text-club-gold hover:underline">
                  Photo Gallery
                </Link>
              </li>
              <li>
                <Link href="/media/promotional" className="text-sm text-white/70 hover:text-club-gold hover:underline">
                  Promotional Videos
                </Link>
              </li>
              <li>
                <Link href="/media/press" className="text-sm text-white/70 hover:text-club-gold hover:underline">
                  Press Releases
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-club-gold">Contact Us</h3>
            <ul className="mt-4 space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 text-club-red" />
                <span className="text-sm text-white/70">
                  Joga Bonito Stadium, 123 Football Avenue, Sportsville, SP 12345
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-club-red" />
                <span className="text-sm text-white/70">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-club-red" />
                <span className="text-sm text-white/70">info@jogabonitofc.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-club-gold/30 py-6">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-center text-sm text-white/70">
            &copy; {new Date().getFullYear()} Joga Bonito FC. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="/privacy" className="text-sm text-white/70 hover:text-club-gold hover:underline">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-sm text-white/70 hover:text-club-gold hover:underline">
              Terms of Service
            </Link>
            <Link href="/cookies" className="text-sm text-white/70 hover:text-club-gold hover:underline">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
