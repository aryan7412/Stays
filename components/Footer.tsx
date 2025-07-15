"use client"
import { Button } from "@/components/ui/button"

export default function Footer() {
  return (
    <footer className="bg-[#030A1F] text-white px-6 py-10 max-w-6xl mx-auto">
      <div className="max-w-7xl mx-auto flex flex-col gap-8">
        {/* Logo + Line */}
        <div className="flex items-center justify-between">
          <div className="text-xl font-bold pText">DORMSYNC</div>
          <div className="flex-grow h-px bg-white ml-4 opacity-40" />
        </div>

        {/* Footer Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-gray-300 ml-36">
          {/* Links */}
          <div>
            <h3 className="font-semibold text-white mb-2 text-md">Links</h3>
            <ul className="space-y-2 text-sm">
              <li>About Us</li>
              <li>Volunteer with Us</li>
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-white mb-2">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li>Email</li>
              <li>Phone Number</li>
              <li>WhatsApp</li>
            </ul>
          </div>

          {/* Social Icons */}
          <div>
            <h3 className="font-semibold text-white mb-2">Social Icons</h3>
            <ul className="space-y-2 text-sm">
              <li>Instagram</li>
              <li>X</li>
              <li>YouTube</li>
              <li>LinkedIn</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="flex flex-col items-start md:items-start">
            <h3 className="font-semibold text-white mb-3 ml-[0.2rem]">Let’s Connect</h3>
            <Button className="bg-[#1D2347] text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-[#1D2347]/80">
              Your Stay, Their Story
            </Button>
          </div>
        </div>
      </div>
    </footer>
  )
}
