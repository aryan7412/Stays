"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { FcGoogle } from "react-icons/fc"
import { GrApple } from "react-icons/gr";
import { MobileOtpDialog } from "@/components/SignIn/MobileOtpDialog"

export default function LoginGlass() {
  return (
    <>
      <h1 className="text-4xl font-semibold text-center mt-12 mb-14">
        The World Didn’t Stop Spinning. Let’s Find Your <br />
        <span className="text-pColor font-bold">Next Stop.</span>
      </h1>
      <p className="text-center text-sm mt-2 text-gray-300">
        Don’t have an account?{" "}
        <span className="underline cursor-pointer text-white hover:text-pColor transition">
          <Link
          href="/signup">Sign Up</Link>
        </span>
      </p>

      <div className="min-h-screen bg-[#030A1F] flex items-start justify-center px-4 pt-4 pb-10 relative overflow-hidden">
        {/* Background Character Image */}
        <div className="hidden md:block absolute right-60 bottom-[17rem] z-10">
          <Image
            src="/TravellerMen.png"
            alt="Illustration"
            width={300}
            height={370}
            className="object-contain"
          />
        </div>

        {/* Glassmorphic Card */}
        <div className="w-full max-w-md z-20 bg-white/10 backdrop-blur-lg rounded-2xl px-8 py-10 text-white shadow-xl border border-white/20">
          {/* Email */}
          <Input
            type="email"
            placeholder="Enter Your Email Address"
            className="mb-4 bg-[#1D2347] border-none placeholder:text-gray-400 text-sm text-white"
          />

          {/* Password */}
          <Input
            type="password"
            placeholder="Enter Your Password"
            className="mb-4 bg-[#1D2347] border-none placeholder:text-gray-400 text-sm text-white"
          />

          {/* Remember Me & Forgot */}
          <div className="flex justify-between items-center text-xs mb-6">
            <label className="flex items-center gap-1">
              <input type="radio" className="accent-white" />
              Remember Me
            </label>
            <span className="text-gray-300 hover:text-pColor cursor-pointer transition hover:underline">
              Forgot Your Password?
            </span>
          </div>

          {/* Sign In Button */}
          <Button className="w-full bg-[#1D2347] text-white text-sm hover:bg-[#1D2347]/90 mb-4 hover:border hover: border-white/30">
            SIGN IN
          </Button>

          {/* OR */}
          <div className="text-center text-sm text-gray-400 mb-4">OR</div>

          {/* Social Logins */}
          <div className="space-y-3">
            <Button className="w-full bg-white text-black text-sm hover:bg-white/90 flex items-center justify-center gap-2">
              <FcGoogle className="text-lg" />
              Sign In Using Google
            </Button>

            <Button className="w-full bg-black text-white text-sm hover:bg-black/50 flex items-center justify-center gap-2">
              <GrApple className="text-lg" />
              Sign In Using Apple
            </Button>
            <MobileOtpDialog />
          </div>
        </div>
      </div>
    </>
  )
}
