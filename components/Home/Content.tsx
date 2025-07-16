"use client"

import Image from "next/image"
import Link from "next/link"
import React from "react"

interface ContentSectionProps {
  heading: string
  paragraph: string
  buttonText?: string
  buttonLink?: string
  imageSrc?: string
  imageAlt?: string
  reverse?: boolean
  className?: string
}

export default function ContentSection({
  heading,
  paragraph,
  buttonText,
  buttonLink,
  imageSrc,
  imageAlt = "Image",
  reverse = false,
  className = "",
}: ContentSectionProps) {
  return (
    <section
      className={`w-full px-4 py-12 md:py-7 text-white ${className}`}
    >
      <div
        className={`max-w-7xl mx-auto flex flex-col md:flex-row ${
          reverse ? "md:flex-row-reverse" : ""
        } items-center gap-4`}
      >
        {/* Image Section */}
        {imageSrc && (
          <div className="w-full md:w-1/2 flex justify-center">
            <Image
              src={imageSrc}
              alt={imageAlt}
              width={400}
              height={400}
              className="object-contain"
            />
          </div>
        )}

        {/* Text Section */}
        <div className="w-full md:w-1/2">
          <h2 className="text-2xl md:text-4xl font-bold mb-4">{heading}</h2>
          <p className="text-base md:text-lg text-gray-300 mb-6">
            {paragraph}
          </p>
          {buttonText && buttonLink && (
            <Link href={buttonLink}>
              <button className="px-6 py-2 bg-[#8D8DDA] text-white rounded-full text-sm hover:bg-pColor/90 transition">
                {buttonText}
              </button>
            </Link>
          )}
        </div>
      </div>
    </section>
  )
}
