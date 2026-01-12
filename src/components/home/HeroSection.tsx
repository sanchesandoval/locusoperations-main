import { Link } from "react-router-dom";
import { ClockSpeedIcon, CalendarSlotIcon, RefreshLoopIcon, ShieldIcon } from "@/components/icons/BrandIcons";
import { BlurFade } from "@/components/magicui/blur-fade";
import { AnimatedGradientText } from "@/components/magicui/animated-gradient-text";
import { DotPattern } from "@/components/magicui/dot-pattern";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-primary/5 blur-[100px]" />
        <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-brand-accent/5 blur-[80px]" />
        <DotPattern className="opacity-80 [mask-image:radial-gradient(720px_circle_at_center,white,transparent)]" />
      </div>

      <div className="container-main relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Copy */}
          <div className="space-y-8">
            <div className="space-y-6">
              <BlurFade delay={0.1}>
                <div className="flex justify-center lg:justify-start">
                  <span className="inline-flex items-center px-3 py-1.5 rounded-full bg-card/80 border border-border text-xs text-foreground">
                    Engineered for Longevity & Medical Wellness Clinics
                  </span>
                </div>
              </BlurFade>
              
              <BlurFade delay={0.2}>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] text-balance text-center lg:text-left">
                  Stop Paying for Leads{" "}
                  <AnimatedGradientText>That Never Book.</AnimatedGradientText>
                </h1>
              </BlurFade>
              
              <BlurFade delay={0.3}>
                <p className="text-lg lg:text-xl text-muted-foreground max-w-lg text-balance text-center lg:text-left mx-auto lg:mx-0">
                  Locus turns ad spend into booked appointments with a conversion engine that responds, follows up, and reactivates leads automatically.
                </p>
              </BlurFade>
            </div>

            {/* CTAs */}
            <BlurFade delay={0.4}>
              <div className="flex flex-col sm:flex-row gap-4 items-center lg:items-start justify-center lg:justify-start">
                <Link
                  to="/leak-finder"
                  className="btn-primary text-base px-8 py-4"
                >
                  Start Leak Finder
                </Link>
                <Link
                  to="/book-call"
                  className="btn-secondary text-base px-8 py-4"
                >
                  Book a Call
                </Link>
              </div>
            </BlurFade>

            {/* Trust chips */}
            <BlurFade delay={0.5}>
              <div className="flex flex-wrap gap-3 pt-4 justify-center lg:justify-start">
                <div className="trust-chip">
                  <ClockSpeedIcon className="w-4 h-4 text-primary" />
                  <span>Speed-to-lead under 60 seconds</span>
                </div>
                <div className="trust-chip">
                  <ShieldIcon className="w-4 h-4 text-primary" />
                  <span>After-hours coverage</span>
                </div>
                <div className="trust-chip">
                  <CalendarSlotIcon className="w-4 h-4 text-primary" />
                  <span>No-show reduction</span>
                </div>
                <div className="trust-chip">
                  <RefreshLoopIcon className="w-4 h-4 text-primary" />
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
      </div>
    </section>
  );
};

// Custom pipeline visualization
const PipelineVisual = () => {
  return (
    <div className="relative w-full max-w-md aspect-square">
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
        <div className="absolute inset-4 animate-orbit" style={{ animationDuration: "15s", animationDirection: "reverse" }}>
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
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="flex items-center gap-3 animate-fade-up"
            style={{ animationDelay: `${i * 0.1}s` }}
          >
            <div className="w-2.5 h-2.5 rounded-full bg-muted-foreground/50" />
            <div className="w-16 h-1 rounded-full bg-muted-foreground/30" />
          </div>
        ))}
        <p className="text-xs text-muted-foreground mt-3">Leads</p>
      </div>

      {/* Right: Booked (organized) */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 space-y-2">
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className="flex items-center gap-2 px-3 py-2 rounded-full bg-brand-dark/80 border border-primary/20 animate-fade-up"
            style={{ animationDelay: `${0.5 + i * 0.1}s` }}
          >
            <div className="w-3 h-3 rounded-full bg-primary" />
            <div className="w-14 h-1.5 rounded-full bg-primary/40" />
          </div>
        ))}
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
        <path
          d="M 40 200 Q 120 180 200 200 Q 280 220 360 200"
          stroke="url(#flowGradient)"
          strokeWidth="2"
          fill="none"
          strokeDasharray="8 4"
          className="animate-pulse-slow"
        />
      </svg>
    </div>
  );
};

export default HeroSection;
