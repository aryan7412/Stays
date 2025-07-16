import StayCard from "@/components/Stay"

const page = () => {
    return (
        <>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center mt-10">
                Confused About Where to Stay?
            </h2>
            <p className="mb-16 text-center">“Whether you're a backpacker, a nature lover, or a soul seeker — we’ve got <br /> something just for you.”</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                <StayCard
                    imageSrc="/images/hostel.png"
                    heading="Hostels"
                    description="“Shared dorms or private rooms with a lively social vibe — perfect for backpackers and solo travellers.”"
                    buttonText="Book a Hostel Stay"
                    buttonLink="/booking"
                />
                <StayCard
                    imageSrc="/images/dormitory.jpg"
                    heading="Dormitories"
                    description="“Basic, affordable beds in large shared halls — ideal for quick rest during transit or short stays.”"
                    buttonText="Book a Dormitory Stay"
                    buttonLink="/booking"
                />
                <StayCard
                    imageSrc="/images/capsule.png"
                    heading="Capsule Hotels"
                    description="“Modern sleeping pods that blend privacy, comfort, and compact space — a minimalist’s dream.”"
                    buttonText="Book a Capsule Stay"
                    buttonLink="/booking"
                />
                <StayCard
                    imageSrc="/images/homestay.png"
                    heading="Homestays"
                    description="“Stay with locals, enjoy home-cooked meals, and experience real cultural hospitality.”"
                    buttonText="Book a Homestay"
                    buttonLink="/booking"
                />
                <StayCard
                    imageSrc="/images/campsite.png"
                    heading="Campsites"
                    description="“Sleep under the stars or in the trees — perfect for adventurers and nature seekers.”"
                    buttonText="Book a Nature Stay"
                    buttonLink="/booking"
                />
                <StayCard
                    imageSrc="/images/ecostay.png"
                    heading="Eco Stays"
                    description="“Reconnect with nature in rustic mud homes or working farms focused on sustainable living.”"
                    buttonText="Book an Eco Stay"
                    buttonLink="/booking"
                />
                <StayCard
                    imageSrc="/images/boathouse.png"
                    heading="Boathouses"
                    description="“Float through tranquil waters in Kerala or Kashmir — a stay that moves with the scenery.”"
                    buttonText="Book a Boathouse Stay"
                    buttonLink="/booking"
                />
                <StayCard
                    imageSrc="/images/ashram.png"
                    heading="Ashrams"
                    description="“Find inner peace through yoga, meditation, and spiritual learning in serene surroundings.”"
                    buttonText="Book a Ashram Stay"
                    buttonLink="/booking"
                />
                <StayCard
                    imageSrc="/images/community.png"
                    heading="Community Stay"
                    description="“Live, work, and grow with fellow travellers — shared stays with purpose and collaboration.”"
                    buttonText="Join a Community Stay"
                    buttonLink="/booking"
                />
            </div>
        </>
    )
}

export default page