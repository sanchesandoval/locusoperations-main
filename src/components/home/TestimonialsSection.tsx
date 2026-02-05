import { StarIcon } from "@/components/icons/BrandIcons";
import { BlurFade } from "@/components/magicui/blur-fade";
import { Marquee } from "@/components/magicui/marquee";
const testimonials = [{
  quote: "Marketing agencies would just sell us leads who'd inquire and just disappear. Now we have a system in place that follows up automatically even after-hours and still gets us new leads.",
  name: "Victor Martinez",
  title: "Owner, Vibe Aesthetics",
  badge: "60% No-Show Reduction"
}, {
  quote: "Honestly, I didn't trust AI to handle my patients but leads were dying between the inquiry and booked stage. I had to take the chance and I can say it was worth it. Nothing slips through anymore. We basically have a front desk person working 24/7.",
  name: "Dr. Emily Thompson",
  title: "Medical Director, Radiance Med Spa",
  badge: "40% Booking Increase"
}, {
  quote: "We were throwing money at ads with no real system behind it. Locus built us an actual pipeline—now leads are taken care of until they book. Went from 20 clients a week to 40.",
  name: "Ariana",
  title: "Founder, Serenity Wellness Clinic",
  badge: "2x Weekly Appointments"
}];
const TestimonialCard = ({
  testimonial
}: {
  testimonial: typeof testimonials[0];
}) => <div className="card-premium p-6 lg:p-8 flex flex-col w-[350px] shrink-0">
    {/* Stars */}
    <div className="flex gap-1 mb-4">
      {[...Array(5)].map((_, i) => <StarIcon key={i} className="w-4 h-4 text-primary" />)}
    </div>

    {/* Quote */}
    <blockquote className="text-foreground/90 text-sm leading-relaxed flex-1 mb-6">
      "{testimonial.quote}"
    </blockquote>

    {/* Author */}
    <div className="flex flex-col-reverse lg:flex-row lg:items-center lg:justify-between gap-3 pt-4 border-t border-border/50">
      <div>
        <p className="font-semibold text-foreground">{testimonial.name}</p>
        <p className="text-xs text-muted-foreground">{testimonial.title}</p>
      </div>
      <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium w-fit">
        {testimonial.badge}
      </span>
    </div>
  </div>;
const TestimonialsSection = () => {
  return <section id="testimonials" className="section-spacing relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-1/2 right-0 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px] translate-x-1/2 -translate-y-1/2" />

      <div className="container-main relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <BlurFade delay={0.1}>
            <p className="text-primary font-medium mb-4">Results</p>
          </BlurFade>
          <BlurFade delay={0.15}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              ​Results from Clinics Running Locus
    
            </h2>
          </BlurFade>
          <BlurFade delay={0.2}>
            <p className="text-lg text-muted-foreground">
              Infrastructure success stories from clinics running the Locus OS.
            </p>
          </BlurFade>
        </div>

        {/* Testimonial marquee */}
        <BlurFade delay={0.2}>
          <div className="relative mb-20">
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10" />
            
            <Marquee pauseOnHover className="[--duration:30s]">
              {testimonials.map((testimonial, index) => <TestimonialCard key={index} testimonial={testimonial} />)}
            </Marquee>
          </div>
        </BlurFade>

      </div>
    </section>;
};
export default TestimonialsSection;