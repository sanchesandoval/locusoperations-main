import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import locusLogo from "@/assets/locus-logo.png";

const ClientLogin = () => {
  const [videoEnded, setVideoEnded] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleVideoEnd = () => {
    setVideoEnded(true);
  };

  const handleVideoError = () => {
    setVideoError(true);
    setVideoEnded(true);
  };

  const showLoginContent = videoEnded || videoError;

  // Replace this with your actual GHL white-labeled login URL
  const ghlLoginUrl = "https://your-ghl-login-url.com";

  const handleLogin = () => {
    window.location.href = ghlLoginUrl;
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-black">
      {/* Video Background */}
      <AnimatePresence>
        {!showLoginContent && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="absolute inset-0 z-10"
          >
            <video
              ref={videoRef}
              autoPlay
              muted
              playsInline
              onEnded={handleVideoEnd}
              onError={handleVideoError}
              className="h-full w-full object-cover"
            >
              <source src="/videos/locus-intro.mp4" type="video/mp4" />
            </video>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Login Content */}
      <AnimatePresence>
        {showLoginContent && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="absolute inset-0 z-20 flex items-center justify-center"
          >
            {/* Ambient glow effect */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand/10 rounded-full blur-[150px] opacity-50" />
            </div>

            {/* Login Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
              className="relative z-10 w-full max-w-md mx-4"
            >
              <div className="relative bg-black/60 backdrop-blur-xl border border-white/10 rounded-2xl p-8 sm:p-10 shadow-2xl">
                {/* Subtle glow border */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-brand/20 via-transparent to-transparent opacity-50 pointer-events-none" />
                
                <div className="relative space-y-8">
                  {/* Logo */}
                  <div className="flex justify-center">
                    <img 
                      src={locusLogo} 
                      alt="Locus" 
                      className="h-10 sm:h-12 w-auto"
                    />
                  </div>

                  {/* Heading */}
                  <div className="text-center space-y-2">
                    <h1 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                      Client Portal
                    </h1>
                    <p className="text-sm sm:text-base text-white/60">
                      Access your dashboard and analytics
                    </p>
                  </div>

                  {/* Login Button */}
                  <motion.button
                    onClick={handleLogin}
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-4 px-6 bg-gradient-to-r from-brand to-brand-light text-white font-semibold rounded-xl shadow-lg shadow-brand/25 hover:shadow-xl hover:shadow-brand/30 transition-all duration-300"
                  >
                    Access Portal
                  </motion.button>

                  {/* Support Link */}
                  <p className="text-center text-sm text-white/40">
                    Need help?{" "}
                    <a 
                      href="mailto:support@locusgrowth.com" 
                      className="text-brand hover:text-brand-light transition-colors underline underline-offset-2"
                    >
                      Contact Support
                    </a>
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ClientLogin;
