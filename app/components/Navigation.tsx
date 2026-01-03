"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function Navigation() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { label: "Home", href: "#" },
        { label: "Capabilities", href: "#capabilities" },
        { label: "Portals", href: "#portals" },
        { label: "Preview", href: "#showcase" },
    ];

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
                ? "bg-white/95 backdrop-blur-lg shadow-lg py-3"
                : "bg-transparent py-5"
                }`}
        >
            <div className="container mx-auto px-6">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <a href="#" className="flex items-center gap-3 group">
                        <Image
                            src="/images/fams-logo.png"
                            alt="FAMS Logo"
                            width={120}
                            height={40}
                            className={`h-8 w-auto transition-all duration-300 group-hover:scale-105 ${scrolled ? "" : ""
                                }`}
                        />
                    </a>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                className={`text-sm font-medium transition-all duration-300 hover:-translate-y-0.5 ${scrolled
                                    ? "text-[var(--muted-foreground)] hover:text-[var(--primary)]"
                                    : "text-white/80 hover:text-white"
                                    }`}
                            >
                                {link.label}
                            </a>
                        ))}
                        <a
                            href="https://famsds.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 hover:scale-105 ${scrolled
                                ? "bg-[var(--primary)] text-white hover:bg-[var(--primary)]/90"
                                : "bg-white text-[var(--primary)] hover:bg-white/90"
                                }`}
                        >
                            Visit FAMSDS.com
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className={`md:hidden p-2 rounded-lg transition-colors ${scrolled ? "text-[var(--primary)]" : "text-white"
                            }`}
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            {mobileMenuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>

                {/* Mobile Menu */}
                {mobileMenuOpen && (
                    <div className="md:hidden mt-4 pb-4 border-t border-white/10">
                        <div className="flex flex-col gap-4 pt-4">
                            {navLinks.map((link) => (
                                <a
                                    key={link.label}
                                    href={link.href}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className={`text-sm font-medium ${scrolled ? "text-[var(--foreground)]" : "text-white"
                                        }`}
                                >
                                    {link.label}
                                </a>
                            ))}
                            <a
                                href="https://famsds.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-5 py-2.5 rounded-full text-sm font-semibold bg-[var(--primary)] text-white text-center"
                            >
                                Visit FAMSDS.com
                            </a>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}
