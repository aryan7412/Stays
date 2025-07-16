"use client"

import Image from "next/image"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { FcGoogle } from "react-icons/fc"
import { GrApple } from "react-icons/gr"
import Link from "next/link"

export default function SignUpGlass() {
  return (
    <div>
      {/* Heading */}
      <h1 className="text-4xl font-semibold text-center mt-12 mb-14">
        Your Journey Begins With A Single Click. <br />
        <span className="text-pColor font-bold">Let’s Go.</span>
      </h1>

      {/* Redirect */}
      <p className="text-center text-sm mt-2 text-gray-300">
        Already have an account?{" "}
        <Link
          href="/signin"
          className="underline cursor-pointer text-white hover:text-pColor transition"
        >
          Sign In
        </Link>
      </p>

      {/* Layout */}
      <div className=" bg-[#030A1F] flex items-start justify-center px-4 pt-4 pb-10 relative overflow-hidden">
        {/* Left-side Image */}
        <div className="hidden md:block absolute left-64 bottom-[1rem] z-10">
          <Image
            src="/FemaleTraveller.png" // replace with your image
            alt="SignUp Illustration"
            width={280}
            height={400}
            className="object-contain"
          />
        </div>

        {/* Glass Card */}
        <div className="w-full max-w-md bg-white/10 backdrop-blur-lg rounded-2xl px-8 py-10 shadow-xl border border-white/20 z-20">
          <div className="flex flex-col space-y-4">
            {/* Input Fields */}
            <Input
              type="text"
              placeholder="Enter Your Full Name"
              className="bg-[#1D2347] border-none placeholder:text-gray-400 text-sm text-white"
            />
            <Input
              type="email"
              placeholder="Enter Your Email Address"
              className="bg-[#1D2347] border-none placeholder:text-gray-400 text-sm text-white"
            />
            <div className="flex">
              <div className="px-3 py-2 text-white text-sm bg-input/30 rounded-md mr-1">
                +91
              </div>
              <Input
                type="tel"
                placeholder="Enter Your Mobile Number"
                className="bg-[#1D2347] border-none placeholder:text-gray-400 text-sm text-white"
              />
            </div>
            <Input
              type="date"
              placeholder="Enter Your Date of Birth"
              className="bg-[#1D2347] border-none placeholder:text-gray-400 text-sm text-white"
            />
            <Input
              type="password"
              placeholder="Enter Your Password"
              className="bg-[#1D2347] border-none placeholder:text-gray-400 text-sm text-white"
            />
            <Input
              type="password"
              placeholder="Confirm Your Password"
              className="bg-[#1D2347] border-none placeholder:text-gray-400 text-sm text-white"
            />

            {/* OR */}
            <div className="text-center text-sm text-gray-400">OR</div>

            {/* Social Buttons */}
            <Button className="w-full bg-white text-black text-sm hover:bg-white/90 flex items-center justify-center gap-2 rounded-full">
              <FcGoogle className="text-lg" />
              Sign Up Using Google
            </Button>

            <Button className="w-full bg-black text-white text-sm hover:bg-black/70 flex items-center justify-center gap-2 rounded-full">
              <GrApple className="text-lg" />
              Sign Up Using Apple
            </Button>

            {/* Submit */}
            <Button className="w-full bg-[#1D2347] text-white text-sm hover:bg-[#1D2347]/90 hover:border hover:border-white/30 mt-2 rounded-full">
              SIGN UP
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
