"use client"

import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"

interface StayCardProps {
  imageSrc: string
  heading: string
  description: string
  buttonText: string
  buttonLink: string
}

export default function StayCard({
  imageSrc,
  heading,
  description,
  buttonText,
  buttonLink,
}: StayCardProps) {
  return (
    <Card className="bg-[#1D2347] text-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 max-w-sm w-full overflow-hidden">
      <CardContent className="p-0">
        <div className="flex justify-center">
          <div className="relative h-52 w-72">
            <Image
              src={imageSrc}
              alt={heading}
              fill
              className="object-cover rounded-2xl"
            />
          </div>
        </div>

        <div className="p-5 flex flex-col justify-between h-[calc(100%-12rem)]">
          <h3 className="text-2xl font-bold text-center">{heading}</h3>
          <p className="text-sm text-gray-300 mt-2 mb-4 text-center">{description}</p>
          <Link
            href={buttonLink}
            className="mt-auto text-center bg-[#8D8DDA] hover:bg-[#8D8DDA]/90 text-white py-2 px-4 rounded-full text-sm transition"
          >
            {buttonText}
          </Link>
        </div>
      </CardContent>
    </Card>
  )
}
