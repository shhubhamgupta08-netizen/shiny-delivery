import React, { useState } from "react";
import { BRAND } from "../data/content";

const QUICK_LINKS = [
    ["Home", "#home"],
    ["Services", "#services"],
    ["Pricing", "#pricing"],
    ["Contact", "#contact"],
];

const COMPANY_LINKS = [
    ["About Us", "#"],
    ["FAQs", "#faq"],
    ["Privacy Policy", "#"],
    ["Terms & Conditions", "#"],
];

function Column({ title, children, defaultOpen = false }) {
    const [open, setOpen] = useState(defaultOpen);
    return (
        <div className="border-b border-white/10 md:border-0">
            <button
                type="button"
                onClick={() => setOpen(!open)}
                className="w-full flex items-center justify-between py-4 md:py-0 md:cursor-default"
                data-testid={`footer-accordion-${title.toLowerCase().replace(/ /g, "-")}`}
            >
                <h4 className="font-display text-sm uppercase tracking-[0.18em] text-white">
                    {title}
                </h4>
                <i
                    className={`fa-solid fa-chevron-down text-xs text-white/60 md:hidden transition-transform duration-300 ${
                        open ? "rotate-180" : ""
                    }`}
                ></i>
            </button>
            <div
                className={`overflow-hidden transition-all duration-300 md:!h-auto md:!opacity-100 md:block ${
                    open ? "max-h-96 opacity-100 pb-5" : "max-h-0 opacity-0 md:max-h-none md:opacity-100"
                } md:mt-5 md:pb-0`}
            >
                {children}
            </div>
        </div>
    );
}

export default function Footer() {
    return (
        <footer
            id="contact"
            data-testid="footer"
            className="relative text-white overflow-hidden"
            style={{
                background:
                    "linear-gradient(180deg, #03111f 0%, #04192d 45%, #03111f 100%)",
            }}
        >
            {/* Soft blue glow layers */}
            <div className="absolute -top-40 left-1/4 w-[560px] h-[560px] rounded-full bg-[#007BFF]/15 blur-[120px] pointer-events-none"></div>
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-[#0A2540]/70 blur-[140px] pointer-events-none"></div>

            {/* Large faded watermark — premium glow shimmer */}
            <div
                aria-hidden="true"
                className="absolute inset-x-0 bottom-[-30px] md:bottom-[-50px] flex justify-center pointer-events-none select-none z-0 overflow-hidden"
            >
                <span
                    className="footer-watermark font-display text-[18vw] md:text-[16vw] lg:text-[14rem] leading-none whitespace-nowrap"
                    style={{
                        letterSpacing: "-0.04em",
                        fontWeight: 800,
                    }}
                >
                    InstaShiny
                </span>
            </div>

            {/* Clean top separator */}
            <div className="relative h-px bg-gradient-to-r from-transparent via-[#007BFF]/40 to-transparent"></div>

            <div className="relative z-10 container-x px-6 md:px-10 lg:px-16 pt-16 md:pt-20 pb-10">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10">
                    {/* Brand */}
                    <div className="md:col-span-4 lg:col-span-5">
                        <img
                            src="/logo1.png"
                            alt="InstaShiny"
                            className="h-16 md:h-20 w-auto"
                            data-testid="footer-logo"
                        />
                        <p className="mt-5 text-sm font-semibold uppercase tracking-[0.22em] text-[#5B9BFF]">
                            Pickup In Minutes, Delivered In Hours
                        </p>
                        <p className="mt-3 text-sm md:text-base text-white/70 leading-relaxed max-w-md">
                            Premium laundry care with free pickup &amp; delivery in Gurugram.
                        </p>
                        <div className="mt-7 flex items-center gap-3">
                            {[
                                ["fa-instagram", BRAND.instagram, "instagram", "hover:bg-gradient-to-br hover:from-[#E1306C] hover:to-[#F77737]"],
                                ["fa-facebook-f", BRAND.facebook, "facebook", "hover:bg-[#1877F2]"],
                                ["fa-whatsapp", `https://wa.me/${BRAND.phoneDigits}`, "whatsapp", "hover:bg-[#25D366]"],
                            ].map(([icon, href, name, hover]) => (
                                <a
                                    key={name}
                                    href={href}
                                    target="_blank"
                                    rel="noreferrer"
                                    aria-label={name}
                                    data-testid={`footer-social-${name}`}
                                    className={`w-11 h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/80 hover:text-white hover:scale-110 hover:border-transparent transition-all duration-300 ${hover}`}
                                >
                                    <i className={`fa-brands ${icon}`}></i>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="md:col-span-2 lg:col-span-2">
                        <Column title="Quick Links">
                            <ul className="space-y-3">
                                {QUICK_LINKS.map(([label, href]) => (
                                    <li key={label}>
                                        <a
                                            href={href}
                                            className="group inline-flex items-center gap-2 text-sm text-white/65 hover:text-white transition-colors"
                                        >
                                            <span className="w-0 group-hover:w-3 h-px bg-[#007BFF] transition-all duration-300"></span>
                                            {label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </Column>
                    </div>

                    {/* Company */}
                    <div className="md:col-span-2 lg:col-span-2">
                        <Column title="Company">
                            <ul className="space-y-3">
                                {COMPANY_LINKS.map(([label, href]) => (
                                    <li key={label}>
                                        <a
                                            href={href}
                                            className="group inline-flex items-center gap-2 text-sm text-white/65 hover:text-white transition-colors"
                                        >
                                            <span className="w-0 group-hover:w-3 h-px bg-[#007BFF] transition-all duration-300"></span>
                                            {label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </Column>
                    </div>

                    {/* Contact */}
                    <div className="md:col-span-4 lg:col-span-3">
                        <Column title="Contact">
                            <ul className="space-y-4">
                                <li>
                                    <a
                                        href={`tel:${BRAND.phoneDigits}`}
                                        data-testid="footer-phone"
                                        className="group flex items-start gap-3 text-sm text-white/75 hover:text-white transition-colors"
                                    >
                                        <span className="mt-0.5 w-9 h-9 rounded-xl bg-[#007BFF]/10 border border-[#007BFF]/25 text-[#5B9BFF] flex items-center justify-center shrink-0 group-hover:bg-[#007BFF]/20 transition-all">
                                            <i className="fa-solid fa-phone text-xs"></i>
                                        </span>
                                        <span>
                                            <span className="block text-[10px] uppercase tracking-wider text-white/40 mb-0.5">Phone</span>
                                            +91 7065450490
                                        </span>
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href={`mailto:${BRAND.email}`}
                                        data-testid="footer-email"
                                        className="group flex items-start gap-3 text-sm text-white/75 hover:text-white transition-colors break-all"
                                    >
                                        <span className="mt-0.5 w-9 h-9 rounded-xl bg-[#007BFF]/10 border border-[#007BFF]/25 text-[#5B9BFF] flex items-center justify-center shrink-0 group-hover:bg-[#007BFF]/20 transition-all">
                                            <i className="fa-solid fa-envelope text-xs"></i>
                                        </span>
                                        <span>
                                            <span className="block text-[10px] uppercase tracking-wider text-white/40 mb-0.5">Email</span>
                                            instashinyofficial@gmail.com
                                        </span>
                                    </a>
                                </li>
                                <li>
                                    <div className="flex items-start gap-3 text-sm text-white/75">
                                        <span className="mt-0.5 w-9 h-9 rounded-xl bg-[#007BFF]/10 border border-[#007BFF]/25 text-[#5B9BFF] flex items-center justify-center shrink-0">
                                            <i className="fa-solid fa-location-dot text-xs"></i>
                                        </span>
                                        <span>
                                            <span className="block text-[10px] uppercase tracking-wider text-white/40 mb-0.5">Address</span>
                                            Gurugram, Haryana 122001, India
                                        </span>
                                    </div>
                                </li>
                                <li>
                                    <div className="flex items-start gap-3 text-sm text-white/75">
                                        <span className="mt-0.5 w-9 h-9 rounded-xl bg-[#007BFF]/10 border border-[#007BFF]/25 text-[#5B9BFF] flex items-center justify-center shrink-0">
                                            <i className="fa-solid fa-clock text-xs"></i>
                                        </span>
                                        <span>
                                            <span className="block text-[10px] uppercase tracking-wider text-white/40 mb-0.5">Business Hours</span>
                                            Mon–Sun, 8:00 AM – 9:00 PM
                                        </span>
                                    </div>
                                </li>
                            </ul>
                        </Column>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs md:text-sm text-white/45">
                    <p data-testid="footer-copyright">
                        © 2026 InstaShiny. All rights reserved.
                    </p>
                    <p className="flex items-center gap-2">
                        Designed for seamless laundry experience
                        <span className="text-[#5B9BFF]">✦</span>
                    </p>
                </div>
            </div>
        </footer>
    );
}
