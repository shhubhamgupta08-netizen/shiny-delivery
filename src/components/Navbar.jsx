import React, { useEffect, useState } from "react";
import { whatsappLink } from "../data/content";

const NAV_LINKS = [
    { label: "Home", href: "#home" },
    { label: "Services", href: "#services" },
    { label: "How It Works", href: "#how" },
    { label: "Pricing", href: "#pricing" },
    { label: "Offers", href: "#offers" },
    { label: "Contact", href: "#contact" },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40);
        onScroll();
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <header
            data-testid="main-navbar"
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                scrolled
                    ? "glass-nav border-b border-[#E2E8F0]"
                    : "glass-nav-transparent"
            }`}
        >
            <div className="container-x flex items-center justify-between px-4 md:px-10 py-4 min-h-[96px]">
                <a
  href="#home"
  data-testid="navbar-logo"
  className="flex items-center gap-5"
>
  <img
    src="/logo.png"
    alt="InstaShiny"
    className="h-17 md:h-19 w-auto object-contain"
  />

  <div className="hidden sm:block leading-tight">
    <h1 className="text-lg font-bold text-[#041C4A]">
      InstaShiny
    </h1>
    <p className="text-xs text-gray-500">
      Premium Laundry Care
    </p>
  </div>
</a>

                <nav className="hidden lg:flex items-center gap-8">
                    {NAV_LINKS.map((l) => (
                        <a
                            key={l.label}
                            href={l.href}
                            data-testid={`nav-link-${l.label.toLowerCase().replace(/ /g, "-")}`}
                            className={`text-sm font-medium transition-colors ${
                                scrolled
                                    ? "text-[#041C4A]/80 hover:text-[#0A5BFF]"
                                    : "text-white/90 hover:text-white"
                            }`}
                        >
                            {l.label}
                        </a>
                    ))}
                </nav>

                <div className="hidden md:flex items-center gap-3">
                    <a
                        href="#track"
                        data-testid="navbar-track-order-btn"
                        className={`text-sm font-semibold px-4 py-2 rounded-full transition-all ${
                            scrolled
                                ? "text-[#041C4A] hover:bg-[#F7FAFF]"
                                : "text-white hover:bg-white/10"
                        }`}
                    >
                        <i className="fa-solid fa-location-crosshairs mr-2"></i>
                        Track Order
                    </a>
                    <a
                        href={whatsappLink()}
                        target="_blank"
                        rel="noreferrer"
                        data-testid="navbar-book-pickup-btn"
                        className={`text-sm font-semibold rounded-full px-6 py-3 inline-flex items-center gap-2 transition-all shadow-lg ${
                            scrolled
                                ? "text-[#041C4A] hover:scale-105"
                                : "bg-[#0A5BFF] text-white hover:bg-[#004CE6]"
                        }`}
                        style={
                            scrolled
                                ? {
                                      background:
                                          "linear-gradient(135deg, #FFD86B, #D4A574)",
                                      boxShadow:
                                          "0 4px 14px rgba(212, 165, 116, 0.4)",
                                  }
                                : undefined
                        }
                    >
                        Book Pickup
                        <i className="fa-solid fa-arrow-right text-xs"></i>
                    </a>
                </div>

                <button
                    data-testid="navbar-mobile-toggle"
                    className="lg:hidden w-10 h-10 flex items-center justify-center rounded-full"
                    style={{
                        background: scrolled
                            ? "rgba(10,91,255,0.1)"
                            : "rgba(255,255,255,0.15)",
                        color: scrolled ? "#0A5BFF" : "#fff",
                    }}
                    onClick={() => setOpen(!open)}
                    aria-label="Toggle menu"
                >
                    <i className={`fa-solid ${open ? "fa-xmark" : "fa-bars"}`}></i>
                </button>
            </div>

            {open && (
                <div
                    data-testid="mobile-menu"
                    className="lg:hidden bg-white border-t border-[#E2E8F0] px-6 py-6 space-y-4 shadow-lg"
                >
                    {NAV_LINKS.map((l) => (
                        <a
                            key={l.label}
                            href={l.href}
                            onClick={() => setOpen(false)}
                            className="block text-[#041C4A] font-medium py-2"
                            data-testid={`mobile-nav-${l.label.toLowerCase().replace(/ /g, "-")}`}
                        >
                            {l.label}
                        </a>
                    ))}
                    <div className="flex gap-3 pt-2">
                        <a
                            href={whatsappLink("Hi InstaShiny, I'd like to track my order. My order ID is: ")}
                            target="_blank"
                            rel="noreferrer"
                            className="btn-secondary flex-1 justify-center"
                            data-testid="mobile-track-btn"
                        >
                            Track Order
                        </a>
                        <a
                            href={whatsappLink()}
                            target="_blank"
                            rel="noreferrer"
                            className="btn-primary flex-1 justify-center"
                            data-testid="mobile-book-btn"
                        >
                            Book Pickup
                        </a>
                    </div>
                </div>
            )}
        </header>
    );
}
