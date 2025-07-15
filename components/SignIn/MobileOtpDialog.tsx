"use client"

import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogCancel,
  AlertDialogAction,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useState, useEffect } from "react"
import { IoPhonePortraitOutline } from "react-icons/io5"
import { FaArrowLeft } from "react-icons/fa"

export function MobileOtpDialog() {
  const [step, setStep] = useState<"mobile" | "otp">("mobile")
  const [mobile, setMobile] = useState("")
  const [otp, setOtp] = useState("")
  const [resendTimer, setResendTimer] = useState(30)

  const handleGetOtp = () => {
    if (mobile.length === 10) {
      setStep("otp")
      setResendTimer(30)
    }
  }

  useEffect(() => {
    let interval: NodeJS.Timeout
    if (step === "otp" && resendTimer > 0) {
      interval = setInterval(() => {
        setResendTimer((prev) => prev - 1)
      }, 1000)
    }
    return () => clearInterval(interval)
  }, [step, resendTimer])

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button className="w-full bg-[#32394D]/40 text-white text-sm hover:bg-[#32394D]/60 flex items-center justify-center gap-2">
          <IoPhonePortraitOutline className="text-lg" />
          Sign In Using Mobile Number
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent className="bg-[#030A1F] text-white border border-white/10 rounded-xl max-w-md w-full">
        {step === "mobile" ? (
          <>
            <AlertDialogHeader>
              <AlertDialogTitle className="text-lg text-white">
                Enter mobile number
              </AlertDialogTitle>
              <AlertDialogDescription className="text-gray-400 text-sm">
                By proceeding, you confirm that you are above 18 years of age
                and agree to our{" "}
                <span className="font-semibold underline cursor-pointer">Privacy Policy</span> &{" "}
                <span className="font-semibold underline cursor-pointer">Terms of Use</span>.
              </AlertDialogDescription>
            </AlertDialogHeader>

            <div className="flex gap-2 my-6">
              <div className="w-[70px] border border-white/20 rounded-md flex items-center justify-center text-sm">
                +91
              </div>
              <Input
                type="tel"
                placeholder="Enter mobile number"
                className="flex-1 bg-transparent border border-white/20 text-white placeholder:text-white/40"
                maxLength={10}
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
              />
            </div>

            <AlertDialogFooter>
              <AlertDialogCancel className="text-white">Cancel</AlertDialogCancel>
              <Button
                className="bg-[#8D8DDA] text-white hover:bg-[#8D8DDA]/90"
                onClick={handleGetOtp}
              >
                Get OTP
              </Button>
            </AlertDialogFooter>
          </>
        ) : (
          <>
            {/* Arrow Top Left */}
            <button
              className="absolute top-4 left-4 text-white"
              onClick={() => {
                setStep("mobile")
                setOtp("")
              }}
            >
              <FaArrowLeft className="text-lg" />
            </button>

            <AlertDialogHeader>
              <AlertDialogTitle className="text-lg text-white mt-7">
                Enter OTP sent to +91{mobile}
              </AlertDialogTitle>
              <AlertDialogDescription className="text-gray-400 text-sm mt-2">
                Resend OTP in{" "}
                <span className="font-bold">
                  {`00:${resendTimer < 10 ? `0${resendTimer}` : resendTimer}`}
                </span>
              </AlertDialogDescription>
            </AlertDialogHeader>

            <div className="flex justify-center py-4">
              <InputOTP maxLength={6} value={otp} onChange={(val) => setOtp(val)}>
                <InputOTPGroup>
                  {[...Array(6)].map((_, i) => (
                    <InputOTPSlot key={i} index={i} />
                  ))}
                </InputOTPGroup>
              </InputOTP>
            </div>

            <AlertDialogFooter>
              <AlertDialogCancel className="text-white">Cancel</AlertDialogCancel>
              <AlertDialogAction className="bg-pColor text-white hover:bg-pColor/90 border border-white/30">
                Verify
              </AlertDialogAction>
            </AlertDialogFooter>
          </>
        )}
      </AlertDialogContent>
    </AlertDialog>
  )
}
