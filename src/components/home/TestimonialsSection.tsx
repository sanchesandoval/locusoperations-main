import { Link } from "react-router-dom";
import { StarIcon } from "@/components/icons/BrandIcons";

// Logo imports
import aestheticsproLogo from "@/assets/logos/aestheticspro.png";
import boulevardLogo from "@/assets/logos/boulevard.webp";
import hubspotLogo from "@/assets/logos/hubspot.png";
import mangomintLogo from "@/assets/logos/mangomint.png";
import salesforceLogo from "@/assets/logos/salesforce.png";
import slackLogo from "@/assets/logos/slack.png";
import vagaroLogo from "@/assets/logos/vagaro.webp";
import zenotiLogo from "@/assets/logos/zenoti.png";

const testimonials = [
  {
    quote: "Locus improved how we handle patient bookings and follow-ups. Our AI receptionist captures calls 24/7, and automated reminders cut no-shows by 60%.",
    name: "Victor Martinez",
    title: "Owner, Vibe Aesthetics",
    badge: "60% Fewer No-Shows",
  },
  {
    quote: "I was extremely skeptical about AI handling our clientele. Our average client spends $3,500-$8,000 annually. I wasn't going to risk that relationship with a robot. Then I experienced the system firsthand. The AI complements our front desk team perfectly, managing the repetitive tasks while our staff focuses on in-person interactions.",
    name: "Dr. Emily Thompson",
    title: "Medical Director, Radiance Med Spa",
    badge: "40% More Bookings",
  },
  {
    quote: "Their ad creatives paired with AI helped us scale from 20 or so weekly clients to over 40 , all while maintaining that personal touch our clients love.",
    name: "Ariana",
    title: "Founder, Serenity Wellness Clinic",
    badge: "2x Client Growth",
  },
];

const integrationLogos = [
  { name: "AestheticsPro", src: aestheticsproLogo },
  { name: "Vagaro", src: vagaroLogo },
  { name: "Zenoti", src: zenotiLogo },
  { name: "Boulevard", src: boulevardLogo },
  { name: "Mangomint", src: mangomintLogo },
  { name: "HubSpot", src: hubspotLogo },
  { name: "Salesforce", src: salesforceLogo },
  { name: "Slack", src: slackLogo },
];

const TestimonialsSection = () => {
  return (
    <section className="section-spacing relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-1/2 right-0 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px] translate-x-1/2 -translate-y-1/2" />

      <div className="container-main relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-primary font-medium mb-4">Results</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Trusted by Growing Clinics
          </h2>
        </div>

        {/* Testimonial cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="card-premium p-6 lg:p-8 flex flex-col"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} className="w-4 h-4 text-primary" />
                ))}
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
            </div>
          ))}
        </div>

        {/* Integration logos */}
        <div className="text-center">
          <p className="text-sm text-muted-foreground mb-8">Seamless Integration Ecosystem</p>
          
          <div className="relative overflow-hidden">
            {/* Fade edges */}
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10" />

            {/* Scrolling logos */}
            <div className="flex animate-scroll-left">
              {[...integrationLogos, ...integrationLogos].map((logo, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 px-8 py-4 flex items-center justify-center"
                >
                  <img 
                    src={logo.src} 
                    alt={logo.name} 
                    className="h-8 w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <Link to="/start-leak-finder" className="btn-primary text-base px-8 py-4">
            Start Leak Finder
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
