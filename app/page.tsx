import SearchBar from "@/components/Home/SearchBar";
import ContentSection from "@/components/Home/Content";
import { AccordionDemo } from "@/components/Home/Accordion";
import TestimonialsSection from "@/components/Home/Testimonail/Testimonial"

export default function Home() {
  return (
    <div>
      <SearchBar />
      <div className="max-w-5xl mx-auto">
        <ContentSection
          heading="Tired of Last-Minute Stay Struggles?"
          paragraph="Ever been stuck looking for a clean, safe, and affordable place to stay while traveling?Whether you're backpacking through cities or exploring remote regions — finding reliable accommodation can be stressful.No reviews, overbooked hostels, overpriced hotels, and zero availability near transit points — we know the pain."
          imageSrc="/BackpackerConfused-removebg-preview.png"
          className="ml-10"
          reverse={true}
        />

        <ContentSection
          heading="Plan Smarter. Travel Better."
          paragraph="We bring you the finest handpicked stays — from hostels to homestays — so you never have to worry where you’ll sleep next.Book in advance or find spontaneous stays on the go. We make your travel smooth, affordable, and unforgettable — every step of the way."
          buttonText="Book Your Stay"
          buttonLink="/booking"
          imageSrc="/TravellersWeBackyou-removebg-preview.png"
          reverse={false}
        />
        <ContentSection
          heading="A Stay for Every Kind of Traveller"
          paragraph="From social hostels and peaceful homestays to boathouses and treehouses — whatever your vibe, we’ve got a stay for you."
          buttonText="Explore All Stays"
          buttonLink="/stays"
          imageSrc="/Homestay.png"
          reverse={true}
          className="ml-10"
        />
        <ContentSection
          heading="We’re More Than Just a Booking Platform — We’re a Community"
          paragraph="Join us as a volunteer to help expand our stay network. Have a place? List your stay and let traveler's find your cozy spot. Become a local guide or reviewer to help others discover hidden gems. Every stay you share or review you write helps someone feel at home on the road."
          buttonText="Review Your Stay"
          buttonLink="/reviewstay"
          imageSrc="/Community.png"
          reverse={false}
        />
      </div>
      <TestimonialsSection />
      <h1 className="text-4xl font-bold ml-[32rem] mb-10 mt-14">You Might Be Wondering...</h1>
      <AccordionDemo />
    </div>
  );
}
