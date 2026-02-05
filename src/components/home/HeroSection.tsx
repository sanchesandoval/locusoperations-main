import { Link } from "react-router-dom";
import { ClockSpeedIcon, CalendarSlotIcon, RefreshLoopIcon, ShieldIcon } from "@/components/icons/BrandIcons";
import { BlurFade } from "@/components/magicui/blur-fade";
import { AnimatedGradientText } from "@/components/magicui/animated-gradient-text";
import { DotPattern } from "@/components/magicui/dot-pattern";
import { Marquee } from "@/components/magicui/marquee";

// Logo imports
import aestheticsproLogo from "@/assets/logos/aestheticspro.png";
import boulevardLogo from "@/assets/logos/boulevard.webp";
import mangomintLogo from "@/assets/logos/mangomint.png";
import slackLogo from "@/assets/logos/slack.png";
import whatsappLogo from "@/assets/logos/whatsapp.png";
import janeappLogo from "@/assets/logos/janeapp.png";
import patientnowLogo from "@/assets/logos/patientnow.png";
import simplepracticeLogo from "@/assets/logos/simplepractice.png";
import zapierLogo from "@/assets/logos/zapier.png";
import n8nLogo from "@/assets/logos/n8n.svg";
import vagaroLogo from "@/assets/logos/vagaro.webp";
import zenotiLogo from "@/assets/logos/zenoti.png";
const integrationLogos = [{
  name: "AestheticsPro",
  src: aestheticsproLogo,
  scale: 1.3
}, {
  name: "Vagaro",
  src: vagaroLogo,
  scale: 1.3
}, {
  name: "Zenoti",
  src: zenotiLogo
}, {
  name: "Boulevard",
  src: boulevardLogo,
  scale: 1.3
}, {
  name: "Mangomint",
  src: mangomintLogo,
  scale: 1.3
}, {
  name: "Jane",
  src: janeappLogo
}, {
  name: "PatientNow",
  src: patientnowLogo
}, {
  name: "SimplePractice",
  src: simplepracticeLogo,
  scale: 1.3
}, {
  name: "Slack",
  src: slackLogo,
  scale: 1.3
}, {
  name: "WhatsApp",
  src: whatsappLogo,
  scale: 1.3
}, {
  name: "Zapier",
  src: zapierLogo
}, {
  name: "n8n",
  src: n8nLogo
}];
const HeroSection = () => {
  return <section className="relative min-h-[100svh] pt-28 sm:pt-32 md:pt-36 lg:pt-28 pb-16 sm:pb-20 md:pb-24 lg:pb-10 overflow-x-hidden px-4 sm:px-6 lg:flex lg:items-center">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-primary/5 blur-[100px]" />
        <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-brand-accent/5 blur-[80px]" />
        <DotPattern className="opacity-80 [mask-image:radial-gradient(720px_circle_at_center,white,transparent)]" />
      </div>

      <div className="container-main relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-10 lg:gap-16 items-center">
          {/* Left: Copy */}
          <div className="space-y-6 sm:space-y-8 md:space-y-10 lg:space-y-8">
            <div className="space-y-4 sm:space-y-5 md:space-y-6 lg:space-y-6">
              <BlurFade delay={0.1}>
                <div className="flex justify-center lg:justify-start">
                  <span className="inline-flex items-center px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-card/80 border border-border text-xs sm:text-sm md:text-sm text-foreground text-center">Engineered for Functional Medicine & Wellness Clinics</span>
                </div>
              </BlurFade>
              
              <BlurFade delay={0.2}>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold leading-[1.1] text-balance text-center lg:text-left">
                  Stop Paying for Leads That{" "}
                  <AnimatedGradientText>Never Book.</AnimatedGradientText>
                </h1>
              </BlurFade>
              
              <BlurFade delay={0.3}>
                <p className="text-base sm:text-lg md:text-xl lg:text-lg xl:text-xl text-muted-foreground max-w-sm sm:max-w-lg md:max-w-xl lg:max-w-lg text-balance text-center lg:text-left mx-auto lg:mx-0">Locus installs an AI front desk that responds in under 60 seconds, follows up via call/SMS/email, and books qualified appointments 24/7— so you stop bleeding revenue on slow response times and inconsistent follow-up.</p>
              </BlurFade>
            </div>

            {/* CTAs */}
            <BlurFade delay={0.4}>
              <div className="flex flex-col gap-3 items-center lg:items-start">
                <Link to="/book-call" className="btn-primary text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4">
                  Book a Call
                </Link>
                <Link to="/system-demo" className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors">
                  Or watch the 5-minute system walkthrough →
                </Link>
              </div>
            </BlurFade>

            {/* Trust chips */}
            <BlurFade delay={0.5}>
              <div className="flex flex-wrap gap-2 sm:gap-3 md:gap-3 pt-2 sm:pt-3 md:pt-4 lg:pt-4 justify-center lg:justify-start">
                <div className="trust-chip text-xs sm:text-sm md:text-sm lg:text-sm px-2.5 sm:px-3 md:px-3 lg:px-3 py-1 sm:py-1.5 md:py-1.5 lg:py-1.5">
                  <ClockSpeedIcon className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 lg:w-4 lg:h-4 text-primary" />
                  <span>Speed-to-lead under 60s</span>
                </div>
                <div className="trust-chip text-xs sm:text-sm md:text-sm lg:text-sm px-2.5 sm:px-3 md:px-3 lg:px-3 py-1 sm:py-1.5 md:py-1.5 lg:py-1.5">
                  <ShieldIcon className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 lg:w-4 lg:h-4 text-primary" />
                  <span>After-hours coverage</span>
                </div>
                <div className="trust-chip text-xs sm:text-sm md:text-sm lg:text-sm px-2.5 sm:px-3 md:px-3 lg:px-3 py-1 sm:py-1.5 md:py-1.5 lg:py-1.5">
                  <CalendarSlotIcon className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 lg:w-4 lg:h-4 text-primary" />
                  <span>No-show reduction</span>
                </div>
                <div className="trust-chip text-xs sm:text-sm md:text-sm lg:text-sm px-2.5 sm:px-3 md:px-3 lg:px-3 py-1 sm:py-1.5 md:py-1.5 lg:py-1.5">
                  <RefreshLoopIcon className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 lg:w-4 lg:h-4 text-primary" />
                  <span>Reactivation campaigns</span>
                </div>
              </div>
            </BlurFade>
          </div>

          {/* Right: Pipeline Visual */}
          <BlurFade delay={0.4} className="relative lg:h-[500px] hidden lg:flex items-center justify-center">
            <PipelineVisual />
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

              <Marquee reverse pauseOnHover className="[--duration:25s]">
                {integrationLogos.map((logo, index) => <div key={index} className="flex-shrink-0 px-5 sm:px-7 md:px-8 lg:px-8 py-3 sm:py-4 lg:py-4 flex items-center justify-center">
                    <img src={logo.src} alt={logo.name} className="w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300" style={{ height: `${(logo.scale || 1) * 32}px` }} />
                  </div>)}
              </Marquee>
            </div>
          </div>
        </BlurFade>
      </div>
    </section>;
};

// Custom pipeline visualization
const PipelineVisual = () => {
  return <div className="relative w-full max-w-md aspect-square">
      {/* Outer glow ring */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-transparent blur-xl animate-pulse-slow" />
      
      {/* Main orb container */}
      <div className="absolute inset-8 rounded-full border border-primary/20 flex items-center justify-center">
        {/* Orbit rings */}
        <div className="absolute inset-0 animate-orbit">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="w-3 h-3 rounded-full bg-primary/40" />
          </div>
        </div>
        <div className="absolute inset-4 animate-orbit" style={{
        animationDuration: "15s",
        animationDirection: "reverse"
      }}>
          <div className="absolute bottom-0 left-1/4">
            <div className="w-2 h-2 rounded-full bg-brand-accent/60" />
          </div>
        </div>
        
        {/* Center orb */}
        <div className="relative w-32 h-32 rounded-full bg-gradient-to-br from-brand-dark to-primary flex items-center justify-center glow-primary">
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-brand-accent flex items-center justify-center">
            <div className="w-8 h-8 rounded-full bg-background/90" />
          </div>
        </div>
      </div>

      {/* Left: Incoming leads (messy) */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 space-y-3">
        {[...Array(5)].map((_, i) => <div key={i} className="flex items-center gap-3 animate-fade-up" style={{
        animationDelay: `${i * 0.1}s`
      }}>
            <div className="w-2.5 h-2.5 rounded-full bg-muted-foreground/50" />
            <div className="w-16 h-1 rounded-full bg-muted-foreground/30" />
          </div>)}
        <p className="text-xs text-muted-foreground mt-3">Leads</p>
      </div>

      {/* Right: Booked (organized) */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 space-y-2">
        {[...Array(4)].map((_, i) => <div key={i} className="flex items-center gap-2 px-3 py-2 rounded-full bg-brand-dark/80 border border-primary/20 animate-fade-up" style={{
        animationDelay: `${0.5 + i * 0.1}s`
      }}>
            <div className="w-3 h-3 rounded-full bg-primary" />
            <div className="w-14 h-1.5 rounded-full bg-primary/40" />
          </div>)}
        <p className="text-xs text-primary mt-3">Booked</p>
      </div>

      {/* Flow lines */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400">
        <defs>
          <linearGradient id="flowGradient" x1="0%" y1="50%" x2="100%" y2="50%">
            <stop offset="0%" stopColor="hsl(240 5% 65%)" stopOpacity="0.2" />
            <stop offset="50%" stopColor="hsl(168 40% 45%)" stopOpacity="0.5" />
            <stop offset="100%" stopColor="hsl(168 40% 45%)" stopOpacity="0.3" />
          </linearGradient>
        </defs>
        <path d="M 40 200 Q 120 180 200 200 Q 280 220 360 200" stroke="url(#flowGradient)" strokeWidth="2" fill="none" strokeDasharray="8 4" className="animate-pulse-slow" />
      </svg>
    </div>;
};
export default HeroSection;