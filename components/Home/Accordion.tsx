import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  
  export function AccordionDemo() {
    return (
      <Accordion
        type="single"
        collapsible
        className="max-w-xl mx-auto"
        defaultValue="item-1"
      >
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-lg">How do I book a stay?</AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-base text-gray-400">
            <p>
                Browse stays by location or type and hit “Book Now” — it's that simple!
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger className="text-lg">Can I cancel or modify my booking?</AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-base text-gray-400">
            <p>
                Yes, most stays have flexible cancellation policies. Check the stay page before booking.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger className="text-lg">How do I join as a volunteer?</AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-base text-gray-400">
            <p>
            Go to the “Community” page, click “Join as Volunteer,” and fill out your details.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger className="text-lg">Is it safe to book through this platform?</AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-base text-gray-400">
            <p>
            All our stays are verified by real travelers and rated for safety, hygiene, and experience.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-5">
          <AccordionTrigger className="text-lg">Can I list my own guesthouse or homestay?</AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-base text-gray-400">
            <p>
                Absolutely! Just go to “Host a Stay” and we’ll guide you through.
            </p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      
    )
  }
  