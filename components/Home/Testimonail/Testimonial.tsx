import TestimonialCard from "@/components/Home/Testimonail/index"

export default function TestimonialsSection() {
  const testimonials = [
    {
      imageSrc: "/avatar.jpg",
      name: "Ravi, Backpacker",
      stayDetails: "Stayed: Alleppey Boathouse, Kerala",
      review:
        "I found a last-minute boathouse stay in Kerala through this platform — it was peaceful, scenic, and completely hassle-free. Watching the sunset from the deck was unforgettable!",
    },
    {
      imageSrc: "/avatar.jpg",
      name: "Nisha, Digital Nomad",
      stayDetails: "Stayed: EarthNest Mud House, Tirthan Valley",
      review:
        "I volunteered at a mud-house eco stay in Himachal, and it completely changed my view of travel. I learned local farming techniques, met amazing people, and lived sustainably for two weeks.",
    },
    {
      imageSrc: "/avatar.jpg",
      name: "Ankit & Priya, Couple Travellers",
      stayDetails: "Stayed: PinePod Treehouse, Himachal Pradesh",
      review:
        "We booked a hidden treehouse in Jibhi for our anniversary — waking up to the sound of birds and sipping chai on a wooden balcony felt magical. This platform made planning so smooth!",
    },
  ]

  return (
    <section className="py-20 bg-[#030A1F] px-6 text-white text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-20">
        Hear It From Our Travellers
      </h2>
      <div className="flex flex-col md:flex-row justify-center items-center gap-8 flex-wrap">
        {testimonials.map((t, i) => (
          <TestimonialCard
            key={i}
            imageSrc={t.imageSrc}
            name={t.name}
            stayDetails={t.stayDetails}
            review={t.review}
          />
        ))}
      </div>
    </section>
  )
}
