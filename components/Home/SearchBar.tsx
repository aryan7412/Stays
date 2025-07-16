"use client"

import React, { useState } from "react"
import { Search, Minus, Plus } from "lucide-react"
import { Calendar } from "@/components/ui/calendar"
import { Button } from "@/components/ui/button"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer"
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuTrigger,
    NavigationMenuContent,
    NavigationMenuLink,
    NavigationMenuList,
} from "@/components/ui/navigation-menu"
import Link from "next/link" // Make sure you're using this

const staysList = [
"Hostels",
"Dormitory",
"Capsule Hotels",
"Homestays",
"Campsites",
"Eco Stays",
"Boathouses",
"Ashrams",
"Community Stay"
]

export default function StaticSearchBar() {
    const [checkInDate, setCheckInDate] = useState<Date | undefined>(undefined)
    const [checkOutDate, setCheckOutDate] = useState<Date | undefined>(undefined)
    const [guestCount, setGuestCount] = useState(1)
    const [guestDrawerOpen, setGuestDrawerOpen] = useState(false)
    const [selectedStay, setSelectedStay] = useState("Stay Type")

    return (
        <div className="w-full max-w-4xl mx-auto px-4 py-6 bg-[#0F1433] rounded-full flex items-center justify-between shadow text-white mt-10">
            {/* WHERE */}
            <div className="px-4 flex flex-col justify-center min-w-[120px]">
                <p className="font-semibold text-sm">Where</p>
                <div className="text-sm text-gray-400">Search Destinations</div>
            </div>

            <div className="h-10 w-px bg-white/40" />

            {/* CHECK IN */}
            <div className="px-4 flex flex-col justify-center min-w-[110px]">
                <p className="font-semibold text-sm">Check In</p>
                <Popover>
                    <PopoverTrigger asChild>
                        <div
                            id="checkin"
                            className="text-sm text-gray-400 cursor-pointer"
                        >
                            {checkInDate ? checkInDate.toLocaleDateString() : "Add date"}
                        </div>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto overflow-hidden p-0" align="start">
                        <Calendar
                            mode="single"
                            selected={checkInDate}
                            captionLayout="dropdown"
                            onSelect={(date) => setCheckInDate(date)}
                        />
                    </PopoverContent>
                </Popover>
            </div>

            <div className="h-10 w-px bg-white/40" />

            {/* CHECK OUT */}
            <div className="px-4 flex flex-col justify-center min-w-[110px]">
                <p className="font-semibold text-sm">Check Out</p>
                <Popover>
                    <PopoverTrigger asChild>
                        <div
                            id="checkout"
                            className="text-sm text-gray-400 cursor-pointer"
                        >
                            {checkOutDate ? checkOutDate.toLocaleDateString() : "Add date"}
                        </div>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto overflow-hidden p-0" align="start">
                        <Calendar
                            mode="single"
                            selected={checkOutDate}
                            captionLayout="dropdown"
                            onSelect={(date) => setCheckOutDate(date)}
                        />
                    </PopoverContent>
                </Popover>
            </div>

            <div className="h-10 w-px bg-white/40" />

            {/* WHO */}
            <div className="px-4 flex flex-col justify-center min-w-[100px]">
                <p className="font-semibold text-sm">Who</p>
                <Drawer open={guestDrawerOpen} onOpenChange={setGuestDrawerOpen}>
                    <DrawerTrigger asChild>
                        <div
                            className="text-sm text-gray-400 cursor-pointer"
                            onClick={() => setGuestDrawerOpen(true)}
                        >
                            {guestCount > 1 ? `${guestCount} Guests` : `${guestCount} Guest`}
                        </div>
                    </DrawerTrigger>
                    <DrawerContent>
                        <div className="mx-auto w-full max-w-sm">
                            <DrawerHeader>
                                <DrawerTitle>Select Guests</DrawerTitle>
                                <DrawerDescription>Choose how many guests will be joining.</DrawerDescription>
                            </DrawerHeader>
                            <div className="p-4 pb-0">
                                <div className="flex items-center justify-center space-x-4">
                                    <Button
                                        variant="outline"
                                        size="icon"
                                        className="h-8 w-8 rounded-full"
                                        onClick={() => setGuestCount(Math.max(1, guestCount - 1))}
                                        disabled={guestCount <= 1}
                                    >
                                        <Minus />
                                    </Button>
                                    <div className="text-center">
                                        <div className="text-5xl font-bold tracking-tighter">
                                            {guestCount}
                                        </div>
                                        <div className="text-muted-foreground text-sm">
                                            Guest{guestCount > 1 ? "s" : ""}
                                        </div>
                                    </div>
                                    <Button
                                        variant="outline"
                                        size="icon"
                                        className="h-8 w-8 rounded-full"
                                        onClick={() => setGuestCount(guestCount + 1)}
                                    >
                                        <Plus />
                                    </Button>
                                </div>
                            </div>
                            <DrawerFooter>
                                <Button onClick={() => setGuestDrawerOpen(false)}>Confirm</Button>
                                <DrawerClose asChild>
                                    <Button variant="outline">Cancel</Button>
                                </DrawerClose>
                            </DrawerFooter>
                        </div>
                    </DrawerContent>
                </Drawer>
            </div>

            <div className="h-10 w-px bg-white/40" />

            {/* STAY */}
            <div className="px-4 flex flex-col justify-center min-w-[100px] gap-1">
                <p className="font-semibold text-sm mb-0">Stay</p>
                <NavigationMenu>
                    <NavigationMenuList>
                        <NavigationMenuItem>
                            <NavigationMenuTrigger className="bg-transparent text-gray-400 text-sm font-normal px-0 focus:bg-transparent">
                                {selectedStay}
                            </NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <ul className="w-[200px] p-0 m-0">
                                    {staysList.map((item) => (
                                        <li key={item} className="list-none p-0 m-0">
                                            <NavigationMenuLink asChild>
                                                <Link
                                                    href="#"
                                                    className="text-sm p-0 m-0 no-underline hover:underline hover:bg-transparent focus:bg-transparent"
                                                    onClick={() => setSelectedStay(item)}
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

            {/* SEARCH ICON */}
            <div className="ml-4 w-10 h-10 rounded-full bg-[#1D2347] flex items-center justify-center">
                <Search className="w-5 h-5 text-white" />
            </div>
        </div>
    )
}
