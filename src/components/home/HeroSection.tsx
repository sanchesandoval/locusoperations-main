import { Link } from "react-router-dom";

import { BlurFade } from "@/components/magicui/blur-fade";
import { AnimatedGradientText } from "@/components/magicui/animated-gradient-text";
import { DotPattern } from "@/components/magicui/dot-pattern";
import { Marquee } from "@/components/magicui/marquee";

// Logo imports — ordered by category and ICP relevance
// CRM / Sales
import hubspotLogo from "@/assets/logos/hubspot-new.png";
import salesforceLogo from "@/assets/logos/salesforce-new.png";
import pipedriveLogo from "@/assets/logos/pipedrive.png";
import highlevelLogo from "@/assets/logos/highlevel.png";
// Sales Intelligence & Prospecting
import apolloLogo from "@/assets/logos/apolloio.avif";
import clayLogo from "@/assets/logos/clay.webp";
// Outreach Automation
import instantlyLogo from "@/assets/logos/InstantlyAI.png";
// Marketing Automation
import customerioLogo from "@/assets/logos/customerio.svg";
// Customer Success
import gainsightLogo from "@/assets/logos/Gainsight.png";
import vitallyLogo from "@/assets/logos/vitally.png";
// Scheduling
import calendlyLogo from "@/assets/logos/calendly.png";
// Communication
import slackLogo from "@/assets/logos/slack.png";
import twilioLogo from "@/assets/logos/twilio.png";
// Automation / Integration
import zapierLogo from "@/assets/logos/zapier.png";
import makeLogo from "@/assets/logos/make.png";
import n8nLogo from "@/assets/logos/n8n.svg";

const integrationLogos = [
  // CRM / Sales
  { name: "HubSpot", src: hubspotLogo },
  { name: "Salesforce", src: salesforceLogo, large: true },
  { name: "Pipedrive", src: pipedriveLogo },
  { name: "HighLevel", src: highlevelLogo, large: true },
  // Sales Intelligence & Prospecting
  { name: "Apollo.io", src: apolloLogo },
  { name: "Clay", src: clayLogo },
  // Outreach Automation
  { name: "Instantly", src: instantlyLogo },
  // Marketing Automation
  { name: "Customer.io", src: customerioLogo, large: true },
  // Customer Success
  { name: "Gainsight", src: gainsightLogo, large: true },
  { name: "Vitally", src: vitallyLogo },
  // Scheduling
  { name: "Calendly", src: calendlyLogo, large: true },
  // Communication
  { name: "Slack", src: slackLogo, large: true },
  { name: "Twilio", src: twilioLogo, large: true },
  // Automation / Integration
  { name: "Zapier", src: zapierLogo },
  { name: "Make", src: makeLogo },
  { name: "n8n", src: n8nLogo, large: true },
];
const HeroSection = () => {
  return <section className="relative min-h-[100svh] pt-24 sm:pt-28 md:pt-32 lg:pt-28 pb-16 sm:pb-20 md:pb-24 lg:pb-10 overflow-x-hidden px-4 sm:px-6 flex items-center">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-primary/5 blur-[100px]" />
        <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-brand-accent/5 blur-[80px]" />
        <DotPattern className="opacity-80 [mask-image:radial-gradient(720px_circle_at_center,white,transparent)]" />
      </div>

      <div className="container-main relative z-10">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto space-y-6 sm:space-y-8">
          <div className="space-y-4 sm:space-y-5 md:space-y-6">
            <BlurFade delay={0.1}>
              <div className="flex justify-center">
                <span className="inline-flex items-center px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-card/80 border border-border text-xs sm:text-sm text-foreground">For Fast-Moving B2B Companies</span>
              </div>
            </BlurFade>

            <BlurFade delay={0.2}>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] text-balance text-center">
                Are you ready to know exactly where your{" "}
                <AnimatedGradientText>revenue is leaking?</AnimatedGradientText>
              </h1>
            </BlurFade>

            <BlurFade delay={0.3}>
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-balance text-center">
                Most B2B companies know the playbook. They just can't execute it because the systems aren't there. We audit exactly where the gaps are, build the fix inside your existing stack, and prove what changed.
              </p>
            </BlurFade>
          </div>

          {/* CTAs */}
          <BlurFade delay={0.4}>
            <div className="flex flex-col gap-3 items-center w-full sm:w-auto">
              <Link to="/book-call" className="btn-primary text-sm px-6 py-3 text-center">
                Book a Free Consultation
              </Link>
              <Link
                to="/diagnostic"
                className="text-primary hover:text-primary/80 text-sm font-medium inline-flex items-center justify-center gap-1 transition-colors"
              >
                Take the Revenue Leak Diagnostic →
              </Link>
            </div>
          </BlurFade>


        </div>

        {/* Logo Marquee */}
        <BlurFade delay={0.6}>
          <div className="mt-10 sm:mt-14 md:mt-16 lg:mt-24 mb-8 sm:mb-12 md:mb-16 lg:mb-0 text-center">
            <p className="text-sm sm:text-sm md:text-base text-muted-foreground mb-4 sm:mb-5 md:mb-6 lg:mb-6">
              Integrates with your existing stack
            </p>
            
            <div className="relative overflow-hidden">
              <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-20 lg:w-20 bg-gradient-to-r from-background to-transparent z-10" />
              <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-20 lg:w-20 bg-gradient-to-l from-background to-transparent z-10" />

              <Marquee reverse pauseOnHover className="[--duration:52s]">
                {integrationLogos.map((logo, index) => <div key={index} className="flex-shrink-0 px-5 sm:px-7 md:px-8 lg:px-8 py-3 sm:py-4 lg:py-4 flex items-center justify-center">
                    <img src={logo.src} alt={logo.name} className={`${logo.large ? "h-[34px] sm:h-[38px]" : "h-7 sm:h-8"} w-auto max-w-[100px] sm:max-w-[120px] object-contain grayscale invert opacity-60 hover:grayscale-0 hover:invert-0 hover:opacity-100 transition-all duration-300`} />
                  </div>)}
              </Marquee>
            </div>
          </div>
        </BlurFade>
      </div>
    </section>;
};


export default HeroSection;