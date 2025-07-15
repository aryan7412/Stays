"use client"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/Theme/Toggle"
import Link from "next/link"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

const staysList = [
  "Hostels",
  "Dormitory",
  "Capsule Hotels",
  "Homestays",
  "Campsites",
  "Eco Stays",
  "Boathouses",
  "Ashrams",
  "Community Stay",
]

const communityList = ["Review Your Stay", "Community Stay"]

const Navbar = () => {
  return (
    <div className="w-full max-w-6xl mx-auto px-6 py-4 flex items-center justify-between bg-background text-foreground shadow-md z-50">
      {/* Logo */}
      <Link
        href="/">
        <div className="text-xl font-bold pText">DORMSYNC</div>
      </Link>

      {/* Center Navigation */}
      {/* Center Navigation */}
      <div className="flex gap-6 sText">
        {/* Stays Dropdown */}
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-transparent text-white text-lg font-normal px-0 hover:underline hover:bg-transparent focus:bg-transparent">
                stays
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="w-[250px] p-0 m-0">
                  {staysList.map((item) => (
                    <li key={item} className="list-none p-0 m-0">
                      <NavigationMenuLink asChild>
                        <Link
                          href="#"
                          className="text-sm p-0 m-0 no-underline hover:underline hover:bg-transparent focus:bg-transparent"
                        >
                          {item}
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Community Dropdown */}
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-transparent text-white text-lg font-normal px-0 hover:underline hover:bg-transparent focus:bg-transparent">
                community
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="w-[200px] p-0 m-0">
                  {communityList.map((item) => (
                    <li key={item} className="list-none p-0 m-0">
                      <NavigationMenuLink asChild>
                        <Link
                          href="#"
                          className="text-sm p-0 m-0 no-underline hover:underline hover:bg-transparent focus:bg-transparent"
                        >
                          {item}
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>


      {/* Right Side */}
      <div className="flex items-center gap-4">
        <ModeToggle />
        <Button variant="outline" className="border border-primary text-white hover:bg-[#1D2347]">
          Become a Host
        </Button>
        <Link href="/signup">
          <Button className="bg-[#8D8DDA] text-white hover:bg-[#8D8DDA]/90">SignUp
          </Button>
        </Link>
        <Link href="/signin">
          <Button variant="outline" className="border border-primary text-white hover:bg-[#1D2347]">
            SignIn
          </Button>
        </Link>
      </div>
    </div>
  )
}

export default Navbar
