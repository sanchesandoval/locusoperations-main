import { useEffect, useRef, useState } from "react"
import { Link } from "react-router-dom"
import { AnimatePresence, motion, MotionConfig } from "motion/react"
import { useTheme } from "next-themes"
import locusLogo from "@/assets/locus-logo-white.png"

export function useScrollY() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return scrollY
}

export function StickyHeader() {
  const scrollY = useScrollY()
  const stickyNavRef = useRef<HTMLElement>(null)
  const { theme } = useTheme()
  const [active, setActive] = useState(false)

  const navLinks = [
    { id: 1, label: "Services", link: "#our-services" },
    { id: 2, label: "Results", link: "#testimonials" },
  ]

  return (
    <header ref={stickyNavRef} className="sticky top-0 z-50 px-10 py-7 xl:px-0">
      <nav className="relative mx-auto flex max-w-2xl items-center justify-between">
        <motion.img
          className="h-10 w-auto"
          src={locusLogo}
          alt="Locus Operations"
          animate={{
            y: scrollY >= 120 ? -50 : 0,
            opacity: scrollY >= 120 ? 0 : 1,
          }}
          transition={{ duration: 0.15 }}
        />

        <ul className="sticky top-4 right-4 left-4 z-[60] hidden items-center justify-center gap-x-5 md:flex">
          <motion.div
            initial={{ x: 0 }}
            animate={{
              boxShadow:
                scrollY >= 120
                  ? theme === "dark"
                    ? "0 0 0 1px rgba(255,255,255,.08), 0 1px 2px -1px rgba(255,255,255,.08), 0 2px 4px rgba(255,255,255,.04)"
                    : "0 0 0 1px rgba(17,24,28,.08), 0 1px 2px -1px rgba(17,24,28,.08), 0 2px 4px rgba(17,24,28,.04)"
                  : "none",
            }}
            transition={{
              ease: "linear",
              duration: 0.05,
              delay: 0.05,
            }}
            className="bg-background flex h-12 w-auto items-center justify-center overflow-hidden rounded-full px-6 py-2.5 transition-all md:p-1.5 md:py-2"
          >
            <nav className="relative h-full items-center justify-between gap-x-3.5 md:flex">
              <ul className="flex h-full flex-col justify-center gap-6 md:flex-row md:justify-start md:gap-0 lg:gap-1">
                {navLinks.map((navItem) => (
                  <li
                    key={navItem.id}
                    className="flex items-center justify-center px-[0.75rem] py-[0.375rem]"
                  >
                    <a href={navItem.link}>{navItem.label}</a>
                  </li>
                ))}
              </ul>
            </nav>
            <motion.div
              initial={{ width: 0 }}
              animate={{
                width: scrollY >= 120 ? "auto" : 0,
              }}
              transition={{
                ease: "linear",
                duration: 0.25,
                delay: 0.05,
              }}
              className="hidden overflow-hidden rounded-full md:block"
            >
              <AnimatePresence>
                {scrollY >= 120 && (
                  <motion.ul
                    initial={{ x: "125%" }}
                    animate={{ x: "0" }}
                    exit={{
                      x: "125%",
                      transition: { ease: "linear", duration: 1 },
                    }}
                    transition={{ ease: "linear", duration: 0.3 }}
                    className="shrink-0 whitespace-nowrap"
                  >
                    <li>
                      <Link
                        to="/book-call"
                        className="bg-primary text-primary-foreground relative inline-flex w-fit items-center justify-center gap-x-1.5 overflow-hidden rounded-full px-3 py-1.5 outline-none"
                      >
                        Book a Free Consultation
                      </Link>
                    </li>
                  </motion.ul>
                )}
              </AnimatePresence>
            </motion.div>
          </motion.div>
        </ul>

        <motion.div
          className="z-[999] hidden items-center gap-x-5 md:flex"
          animate={{
            y: scrollY >= 120 ? -50 : 0,
            opacity: scrollY >= 120 ? 0 : 1,
          }}
          transition={{ duration: 0.15 }}
        >
          <Link to="/book-call" className="btn-primary text-sm px-4 py-2">
            Book a Free Consultation
          </Link>
        </motion.div>

        <MotionConfig transition={{ duration: 0.3, ease: "easeInOut" }}>
          <motion.button
            onClick={() => setActive((prev) => !prev)}
            animate={active ? "open" : "close"}
            className="relative flex h-8 w-8 items-center justify-center rounded-md md:hidden"
          >
            <motion.span
              style={{ left: "50%", top: "35%", x: "-50%", y: "-50%" }}
              className="absolute h-0.5 w-5 bg-black dark:bg-white"
              variants={{
                open: {
                  rotate: ["0deg", "0deg", "45deg"],
                  top: ["35%", "50%", "50%"],
                },
                close: {
                  rotate: ["45deg", "0deg", "0deg"],
                  top: ["50%", "50%", "35%"],
                },
              }}
              transition={{ duration: 0.3 }}
            />
            <motion.span
              style={{ left: "50%", top: "50%", x: "-50%", y: "-50%" }}
              className="absolute h-0.5 w-5 bg-black dark:bg-white"
              variants={{
                open: { opacity: 0 },
                close: { opacity: 1 },
              }}
            />
            <motion.span
              style={{ left: "50%", bottom: "30%", x: "-50%", y: "-50%" }}
              className="absolute h-0.5 w-5 bg-black dark:bg-white"
              variants={{
                open: {
                  rotate: ["0deg", "0deg", "-45deg"],
                  top: ["65%", "50%", "50%"],
                },
                close: {
                  rotate: ["-45deg", "0deg", "0deg"],
                  top: ["50%", "50%", "65%"],
                },
              }}
              transition={{ duration: 0.3 }}
            />
          </motion.button>
        </MotionConfig>

        {/* Mobile menu panel */}
        <AnimatePresence>
          {active && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className="absolute top-full left-0 right-0 mt-2 flex flex-col gap-3 rounded-xl border border-border bg-background p-4 shadow-lg md:hidden"
            >
              {navLinks.map((item) => (
                <a
                  key={item.id}
                  href={item.link}
                  onClick={() => setActive(false)}
                  className="text-muted-foreground hover:text-foreground py-1 transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <Link
                to="/book-call"
                onClick={() => setActive(false)}
                className="btn-primary mt-2 px-4 py-2 text-center text-sm"
              >
                Book a Free Consultation
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  )
}

export function Header() {
  return <StickyHeader />
}
