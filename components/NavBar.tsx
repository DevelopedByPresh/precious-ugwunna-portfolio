"use client";
import Link from "next/link";
import { useState, useCallback, useEffect } from "react";
import logo from "Assets/imgbin_computer-icons-ice-cube-png.png";
import Image from "next/image";

export default function NavBar() {
  const [navbar, setNavbar] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Memoized toggle function
  const toggleNavbar = useCallback(() => {
    setNavbar((prev) => !prev);
  }, []);

  const navItems = [
    {
      href: "https://drive.google.com/file/d/1vY7QCSYMphci2YNrXbfocydDgf7QMyMQ/view?usp=sharing",
      label: "Resume",
      external: true,
    },
    { href: "#about", label: "About" },
    { href: "#experience", label: "Experience" },
    { href: "#skills", label: "Tech Stack" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <nav
      className={`w-full fixed z-40 top-6 transition-all duration-300 font-programme
      ${
        scrolled
          ? "bg-slate-800/90 backdrop-blur-sm shadow-lg mt-0"
          : "bg-slate-800"
      }
      ${navbar ? "h-screen md:h-auto" : ""}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link
            href="/"
            className="flex-shrink-0 transition-transform hover:scale-105"
          >
            <Image
              src={logo}
              alt="logo ice"
              className="invert w-8 h-8 md:w-10 md:h-10"
              width={40}
              height={40}
              priority
            />
          </Link>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={toggleNavbar}
              className="inline-flex items-center justify-center p-2 rounded-md 
              text-white hover:bg-slate-700 transition-colors duration-200"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {navbar ? (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>

          {/* Desktop menu */}
          <div className="hidden lg:flex lg:items-center lg:space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                target={item.external ? "_blank" : undefined}
                className="text-white hover:text-gray-300 px-3 py-2 text-sm font-medium
                hover:underline underline-offset-4 transition-all duration-200"
                onClick={toggleNavbar}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`lg:hidden transition-all duration-300 ease-in-out
          ${
            navbar
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-full hidden"
          }`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                target={item.external ? "_blank" : undefined}
                className="text-white hover:bg-slate-700 block px-3 py-2 rounded-md text-base
                font-medium transition-all duration-200"
                onClick={toggleNavbar}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
