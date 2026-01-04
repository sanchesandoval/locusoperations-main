// Custom SVG brand icons for Locus - minimal, consistent style

export const OrbIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="16" cy="16" r="6" fill="currentColor" opacity="0.9" />
    <circle cx="16" cy="16" r="10" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
    <circle cx="16" cy="16" r="14" stroke="currentColor" strokeWidth="1" opacity="0.2" />
  </svg>
);

export const OrbitLinesIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="16" cy="16" rx="14" ry="6" stroke="currentColor" strokeWidth="1.5" opacity="0.3" />
    <ellipse cx="16" cy="16" rx="14" ry="6" stroke="currentColor" strokeWidth="1.5" opacity="0.3" transform="rotate(60 16 16)" />
    <ellipse cx="16" cy="16" rx="14" ry="6" stroke="currentColor" strokeWidth="1.5" opacity="0.3" transform="rotate(120 16 16)" />
    <circle cx="16" cy="16" r="3" fill="currentColor" />
  </svg>
);

export const LeadSignalIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="8" cy="16" r="3" fill="currentColor" />
    <path d="M14 16C14 13 16 11 19 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
    <path d="M14 16C14 19 16 21 19 21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
    <path d="M19 16C19 12 22 9 26 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.3" />
    <path d="M19 16C19 20 22 23 26 23" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.3" />
  </svg>
);

export const PipelineNodesIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="6" cy="16" r="3" fill="currentColor" opacity="0.4" />
    <circle cx="16" cy="16" r="3" fill="currentColor" opacity="0.7" />
    <circle cx="26" cy="16" r="3" fill="currentColor" />
    <path d="M9 16H13" stroke="currentColor" strokeWidth="1.5" opacity="0.5" />
    <path d="M19 16H23" stroke="currentColor" strokeWidth="1.5" opacity="0.7" />
  </svg>
);

export const CalendarSlotIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="4" y="6" width="24" height="22" rx="3" stroke="currentColor" strokeWidth="1.5" />
    <path d="M4 12H28" stroke="currentColor" strokeWidth="1.5" />
    <rect x="8" y="16" width="4" height="4" rx="1" fill="currentColor" opacity="0.3" />
    <rect x="14" y="16" width="4" height="4" rx="1" fill="currentColor" />
    <rect x="20" y="16" width="4" height="4" rx="1" fill="currentColor" opacity="0.3" />
    <path d="M10 4V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M22 4V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

export const ShieldIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16 4L4 8V16C4 22.627 9.373 28 16 28C22.627 28 28 22.627 28 16V8L16 4Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    <path d="M12 16L15 19L21 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const ClockSpeedIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="16" cy="16" r="12" stroke="currentColor" strokeWidth="1.5" />
    <path d="M16 8V16L20 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M26 6L28 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M6 6L4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

export const RefreshLoopIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 16C4 9.373 9.373 4 16 4C20.418 4 24.255 6.387 26.354 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M28 16C28 22.627 22.627 28 16 28C11.582 28 7.745 25.613 5.646 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M26 4V10H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M6 28V22H12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const LeakDropIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Target circle */}
    <circle cx="16" cy="16" r="10" stroke="currentColor" strokeWidth="1.5" opacity="0.3" />
    <circle cx="16" cy="16" r="5" stroke="currentColor" strokeWidth="1.5" opacity="0.5" />
    {/* Arrows missing the target */}
    <path d="M4 8L8 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M4 8L6 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
    <path d="M4 8L2 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
    <path d="M28 24L24 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M28 24L26 27" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
    <path d="M28 24L30 26" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
  </svg>
);

export const CheckCircleIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" opacity="0.3" />
    <path d="M8 12L11 15L16 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const StarIcon = ({ className = "w-5 h-5", filled = true }: { className?: string; filled?: boolean }) => (
  <svg className={className} viewBox="0 0 20 20" fill={filled ? "currentColor" : "none"} xmlns="http://www.w3.org/2000/svg">
    <path d="M10 2L12.09 7.26L18 7.64L13.45 11.14L14.82 17L10 14.27L5.18 17L6.55 11.14L2 7.64L7.91 7.26L10 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
  </svg>
);
