import Image from "next/image"

interface TestimonialCardProps {
  imageSrc: string
  name: string
  stayDetails: string
  review: string
}

export default function TestimonialCard({
  imageSrc,
  name,
  stayDetails,
  review,
}: TestimonialCardProps) {
  return (
    <div className="bg-[#1D2347] rounded-2xl p-6 text-white max-w-xs w-full transform transition-all duration-300 ease-in-out hover:-translate-y-2 hover:scale-105 hover:shadow-[#8D8DDA]/50">
      {/* Avatar */}
      <div className="flex justify-center -mt-16 mb-4">
        <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-[#030A1F] bg-white">
          <Image
            src={imageSrc}
            alt={name}
            width={80}
            height={80}
            className="object-cover"
          />
        </div>
      </div>

      {/* Text */}
      <div className="text-center">
        <h3 className="font-semibold text-lg">{name}</h3>
        <p className="text-sm text-gray-200 mb-4">{stayDetails}</p>
        <p className="text-sm text-gray-400 leading-relaxed">“{review}”</p>
      </div>
    </div>
  )
}

