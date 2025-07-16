"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { FaPhotoVideo } from "react-icons/fa"
import { X, ChevronDown } from "lucide-react"
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import { motion } from "framer-motion"

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
export default function AddStayGlass() {
    //Amenties Manage
    const [amenity, setAmenity] = useState("")
    const [amenities, setAmenities] = useState<string[]>([])
    const handleAdd = () => {
        if (amenity.trim() && !amenities.includes(amenity.trim())) {
            setAmenities([...amenities, amenity.trim()])
            setAmenity("")
        }
    }
    const handleRemove = (item: string) => {
        setAmenities(amenities.filter((a) => a !== item))
    }

    //CheckIn Chekout Time
    const [open, setOpen] = useState(false)
    const [checkIn, setCheckIn] = useState("")
    const [checkOut, setCheckOut] = useState("")

    //Co-host
    const [showInputs, setShowInputs] = useState(false)
    const [coHosts, setCoHosts] = useState<{ name: string; contact: string }[]>([])
    const [name, setName] = useState("")
    const [contact, setContact] = useState("")
    const handleAddCoHost = () => {
        if (name && contact) {
            setCoHosts([...coHosts, { name, contact }])
            setName("")
            setContact("")
            setShowInputs(false)
        }
    }

    //Payment info
    const [paymentMethod, setPaymentMethod] = useState("")

    //Address
    const [expanded, setExpanded] = useState(false)
    const [location, setLocation] = useState({
        state: "",
        city: "",
        district: "",
        pin: "",
        landmark: "",
        address: "",
    })

    return (
        <div>
            {/* Heading */}
            <h1 className="text-4xl font-bold text-center mt-12 mb-4">
                Add Your Stay – Reach Thousands Of <span className="text-pColor font-bold">Traveler’s</span>
            </h1>
            <p className="text-center text-gray-300 mb-10 px-4">
                Share your stay with the world. Whether it's a hostel, homestay, dormitory, or unique local spot — list it <br /> here to start receiving bookings and growing your business.
            </p>

            {/* Layout */}
            <div className="bg-[#030A1F] flex items-start justify-center px-4 pt-4 pb-16 relative overflow-hidden">
                {/* Optional Illustration */}

                {/* Glass Card */}
                <div className="w-full max-w-2xl bg-white/10 backdrop-blur-lg rounded-2xl px-8 py-10 shadow-xl border border-white/20 z-20 text-white">
                    <div className="flex flex-col gap-4">
                        {/* name of the stay */}
                        <Input placeholder="What’s the name of the stay ?" className="bg-[#1D2347] border-none placeholder:text-gray-400 text-sm" />

                        <Input
                            placeholder="Your Full Name (Host)"
                            className="bg-[#1D2347] border-none text-sm placeholder:text-gray-400 text-white"
                        />
                        <div className="flex">
                            <div className="px-3 py-2 text-white text-sm bg-input/30 rounded-md mr-1">
                                +91
                            </div>
                            <Input
                                type="tel"
                                placeholder="Your Contact Number"
                                className="bg-[#1D2347] border-none text-sm placeholder:text-gray-400 text-white"
                            />
                        </div>

                        <div>
                            <Label className="flex items-center gap-2 text-sm mb-2">
                                <FaPhotoVideo /> Upload your Photo
                            </Label>
                            <div className="relative group h-24 w-24 bg-[#1D2347] rounded-lg flex items-center justify-center text-gray-400 text-xs cursor-pointer overflow-hidden">
                                <span className="z-10 group-hover:opacity-0 transition-opacity duration-300">Photo</span>

                                {/* Hover overlay */}
                                <div className="absolute inset-0 bg-black/50 text-white text-xs flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                                    Upload +
                                </div>
                            </div>
                        </div>
                        {/* Type of Stay */}
                        <Select>
                            <SelectTrigger className="bg-[#1D2347] text-sm text-white border-none">
                                <SelectValue placeholder="Select the type of stay (e.g., Hostel, Zostel, Dormitory)" />
                            </SelectTrigger>
                            <SelectContent>
                                {staysList.map((stay) => (
                                    <SelectItem key={stay} value={stay.toLowerCase().replace(/\s+/g, "-")}>
                                        {stay}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                        {/* Stay Price */}
                        <div className="flex">
                            <div className="px-3 py-2 text-white text-sm bg-input/30 rounded-md mr-1">
                                ₹
                            </div>
                            <Input placeholder="How much did your stay cost (per night or per person)?" className="bg-[#1D2347] border-none text-sm placeholder:text-gray-400" />
                        </div>

                        {/* Amenities */}
                        <div className="flex gap-2">
                            <Input
                                placeholder="Add an amenity (e.g., WiFi, Kitchen)"
                                className="bg-[#1D2347] border border-white/10 text-white text-sm placeholder:text-gray-400"
                                value={amenity}
                                onChange={(e) => setAmenity(e.target.value)}
                                onKeyDown={(e) => e.key === "Enter" && handleAdd()}
                            />
                            <button
                                type="button"
                                onClick={handleAdd}
                                className="px-4 py-2 bg-[#1D2347] text-white text-sm rounded-md hover:bg-[#1D2347]/80"
                            >
                                Add
                            </button>
                        </div>

                        <div className="flex flex-wrap gap-2">
                            {amenities.map((item, i) => (
                                <div
                                    key={item}
                                    className="flex items-center bg-[#1D2347] border border-white/10 text-white px-3 py-1 rounded-full text-sm"
                                >
                                    {item}
                                    <X
                                        className="ml-2 w-4 h-4 cursor-pointer hover:text-red-400"
                                        onClick={() => handleRemove(item)}
                                    />
                                </div>
                            ))}
                        </div>

                        {/* CheckIn & CheckOut */}
                        <div className="bg-[#262b3e]/60 text-gray-400 rounded-md border border-white/10">
                            <div
                                className="flex justify-between items-center p-3 cursor-pointer"
                                onClick={() => setOpen(!open)}
                            >
                                <span className="text-sm">
                                    {checkIn && checkOut
                                        ? `${checkIn} Check-in / ${checkOut} Check-out`
                                        : "What is the Check-in / Check-out time of your Stay?"}
                                </span>
                                <ChevronDown
                                    className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`}
                                />
                            </div>

                            {open && (
                                <div className="p-3 pt-0 space-y-2">
                                    <div className="flex gap-3">
                                        <div className="flex-1">
                                            <label className="block text-xs mb-1 text-gray-400">Check-in Time</label>
                                            <Input
                                                type="time"
                                                value={checkIn}
                                                onChange={(e) => setCheckIn(e.target.value)}
                                                className="bg-[#1D2347] border border-white/10 text-white text-sm"
                                            />
                                        </div>
                                        <div className="flex-1">
                                            <label className="block text-xs mb-1 text-gray-400">Check-out Time</label>
                                            <Input
                                                type="time"
                                                value={checkOut}
                                                onChange={(e) => setCheckOut(e.target.value)}
                                                className="bg-[#1D2347] border border-white/10 text-white text-sm"
                                            />
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>

                        <div className="space-y-4">
                            {/* Trigger Input */}
                            <Input
                                placeholder="Where is this stay located?"
                                className="bg-[#1D2347] border-none text-sm placeholder:text-gray-400 text-white"
                                onFocus={() => setExpanded(true)}
                                readOnly
                            />

                            {/* Expanded Details */}
                            {expanded && (
                                <motion.div
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: "auto" }}
                                    transition={{ duration: 0.3 }}
                                    className="space-y-3"
                                >
                                    {/* First Row: State & City */}
                                    <div className="flex gap-3">
                                        <Input
                                            placeholder="State"
                                            value={location.state}
                                            onChange={(e) => setLocation({ ...location, state: e.target.value })}
                                            className="bg-[#1D2347] border-none text-sm placeholder:text-gray-400 text-white w-1/2"
                                        />
                                        <Input
                                            placeholder="City"
                                            value={location.city}
                                            onChange={(e) => setLocation({ ...location, city: e.target.value })}
                                            className="bg-[#1D2347] border-none text-sm placeholder:text-gray-400 text-white w-1/2"
                                        />
                                    </div>

                                    {/* Second Row: District & PIN */}
                                    <div className="flex gap-3">
                                        <Input
                                            placeholder="District"
                                            value={location.district}
                                            onChange={(e) => setLocation({ ...location, district: e.target.value })}
                                            className="bg-[#1D2347] border-none text-sm placeholder:text-gray-400 text-white w-1/2"
                                        />
                                        <Input
                                            placeholder="PIN Code"
                                            value={location.pin}
                                            onChange={(e) => setLocation({ ...location, pin: e.target.value })}
                                            className="bg-[#1D2347] border-none text-sm placeholder:text-gray-400 text-white w-1/2"
                                            maxLength={6}
                                        />
                                    </div>

                                    <Input
                                        placeholder="Landmark (optional)"
                                        value={location.landmark}
                                        onChange={(e) => setLocation({ ...location, landmark: e.target.value })}
                                        className="bg-[#1D2347] border-none text-sm placeholder:text-gray-400 text-white"
                                    />
                                    <Input
                                        placeholder="Full Address (e.g. Street, Building, etc.)"
                                        value={location.address}
                                        onChange={(e) => setLocation({ ...location, address: e.target.value })}
                                        className="bg-[#1D2347] border-none text-sm placeholder:text-gray-400 text-white"
                                    />
                                </motion.div>
                            )}
                        </div>
                        <Input placeholder="How many rooms are available in your stay?" className="bg-[#1D2347] border-none text-sm placeholder:text-gray-400" />
                        <Input placeholder="How many beds are there in each room?" className="bg-[#1D2347] border-none text-sm placeholder:text-gray-400" />

                        {/* Upload section */}
                        <div>
                            <Label className="flex items-center gap-2 text-sm mb-2">
                                <FaPhotoVideo /> Upload Photos from your stay
                            </Label>
                            <div className="grid grid-cols-5 gap-2">
                                {Array(5).fill(0).map((_, i) => (
                                    <div key={i} className="relative group h-24 w-24 bg-[#1D2347] rounded-lg flex items-center justify-center text-gray-400 text-xs cursor-pointer overflow-hidden">
                                        <span
                                            key={i}
                                            className="z-10 group-hover:opacity-0 transition-opacity duration-300">Photo</span>

                                        {/* Hover overlay */}
                                        <div className="absolute inset-0 bg-black/50 text-white text-xs flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                                            Upload +
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <Textarea placeholder="Tell us about your place, what makes it special, nearby landmarks, etc." className="bg-[#1D2347] text-sm text-white border-none placeholder:text-gray-400" />

                        <Textarea placeholder="Mention any rules guests should be aware of" className="bg-[#1D2347] border-none text-sm placeholder:text-gray-400" />

                        <div className="space-y-4">
                            {/* Co-host Selector */}
                            <Select
                                onValueChange={(val) => {
                                    setShowInputs(val === "cohost")
                                }}
                            >
                                <SelectTrigger className="bg-[#1D2347] text-sm text-white border-none">
                                    <SelectValue placeholder="Any Co-Host" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="none">None</SelectItem>
                                    <SelectItem value="cohost">Add Co-host</SelectItem>
                                </SelectContent>
                            </Select>

                            {/* Inputs if 'Add Co-host' selected */}
                            {showInputs && (
                                <div className="space-y-3">
                                    <Input
                                        type="text"
                                        placeholder="Co-Host Full Name"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        className="bg-[#1D2347] border border-white/10 text-white text-sm placeholder:text-gray-400"
                                    />
                                    <Input
                                        type="tel"
                                        placeholder="Co-Host Contact Number"
                                        value={contact}
                                        onChange={(e) => setContact(e.target.value)}
                                        className="bg-[#1D2347] border border-white/10 text-white text-sm placeholder:text-gray-400"
                                    />
                                    <Button
                                        className="w-[12rem] bg-[#1D2347] text-white text-sm hover:bg-[#1D2347]/90 hover:border hover:border-white/30 rounded-full mx-auto"
                                        onClick={handleAddCoHost}
                                    >
                                        Save Co-host
                                    </Button>
                                </div>
                            )}

                            {/* Display Added Co-hosts */}
                            {coHosts.length > 0 && (
                                <div className="space-y-2">
                                    <h4 className="text-white text-sm font-medium">Added Co-hosts:</h4>
                                    {coHosts.map((host, idx) => (
                                        <div
                                            key={`${host.name}-${host.contact}-${idx}`}
                                            className="border border-white/10 p-3 rounded-md text-white text-sm flex justify-between items-center"
                                        >
                                            <span>{host.name} ({host.contact})</span>
                                            <button
                                                className="text-xs text-red-400 hover:underline"
                                                onClick={() =>
                                                    setCoHosts(coHosts.filter((_, i) => i !== idx))
                                                }
                                            >
                                                Remove
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>


                        <div className="space-y-4">
                            {/* Payment Method Selector */}
                            <Select onValueChange={(value) => setPaymentMethod(value)}>
                                <SelectTrigger className="bg-[#1D2347] text-sm text-white border-none">
                                    <SelectValue placeholder="Payment method preferences" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="upi">UPI</SelectItem>
                                    <SelectItem value="bank">Bank Transfer</SelectItem>
                                </SelectContent>
                            </Select>

                            {/* Conditional Inputs */}
                            {paymentMethod === "upi" && (
                                <Input
                                    placeholder="Enter your UPI ID"
                                    className="bg-[#1D2347] border-none text-sm placeholder:text-gray-400 text-white"
                                />
                            )}

                            {paymentMethod === "bank" && (
                                <div className="space-y-3">
                                    <Input
                                        placeholder="Account Number"
                                        className="bg-[#1D2347] border-none text-sm placeholder:text-gray-400 text-white"
                                    />
                                    <Input
                                        placeholder="IFSC Code"
                                        className="bg-[#1D2347] border-none text-sm placeholder:text-gray-400 text-white"
                                    />
                                    <Input
                                        placeholder="Account Holder Name"
                                        className="bg-[#1D2347] border-none text-sm placeholder:text-gray-400 text-white"
                                    />
                                </div>
                            )}
                        </div>

                        {/* Checkbox */}
                        <div className="space-y-2 text-xs text-gray-300">
                            <div className="flex items-start gap-2">
                                <Checkbox id="terms" />
                                <label htmlFor="terms" className="leading-snug">
                                    I agree to the <span className="underline hover:cursor-pointer hover:text-blue-300">terms & conditions.</span>
                                </label>
                            </div>
                            <div className="flex items-start gap-2">
                                <Checkbox id="permission" />
                                <label htmlFor="permission" className="leading-snug">
                                    I confirm this is my property or I have permission to list it.
                                </label>
                            </div>
                            <div className="flex items-start gap-2">
                                <Checkbox id="verify" />
                                <Tooltip>
                                    <TooltipTrigger asChild>
                                        <label htmlFor="verify" className="leading-snug">
                                            I understand my stay will be verified before going live.
                                        </label>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                        <p>We will notify you in 1-3 business days</p>
                                    </TooltipContent>
                                </Tooltip>
                            </div>
                        </div>

                        {/* Submit */}
                        <Button className=" w-[12rem] bg-[#1D2347] text-white text-sm hover:bg-[#1D2347]/90 hover:border hover:border-white/30 mt-4 rounded-full mx-auto">
                            SUBMIT MY STAY
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}