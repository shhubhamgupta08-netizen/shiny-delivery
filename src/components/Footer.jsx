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
      >
        <h4 className="font-semibold text-sm uppercase tracking-[0.18em] text-white">
          {title}
        </h4>

        <i
          className={`fa-solid fa-chevron-down text-xs text-white/60 md:hidden transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        ></i>
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 md:block ${
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
      className="relative text-white overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, #03111f 0%, #04192d 45%, #03111f 100%)",
      }}
    >
      {/* Background glow */}
      <div className="absolute -top-40 left-1/4 w-[560px] h-[560px] rounded-full bg-[#007BFF]/15 blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-[#0A2540]/70 blur-[140px]" />

      <div className="relative z-10 container-x px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <img
              src="/logo.png"
              alt="InstaShiny"
              className="h-14 w-auto"
            />

            <p className="mt-5 text-sm font-semibold uppercase tracking-[0.22em] text-[#5B9BFF]">
              Pickup In Minutes, Delivered In Hours
            </p>

            <p className="mt-3 text-sm text-white/70 leading-relaxed">
              Premium laundry care with free pickup & delivery in Gurugram.
            </p>

            {/* Social icons */}
            <div className="mt-7 flex items-center gap-3">
              {[
                [
                  "fa-instagram",
                  "https://www.instagram.com/instashinyapp?igsh=MTE1czZ4M2k0cHkyOQ==",
                ],
                [
                  "fa-facebook-f",
                  "https://www.facebook.com/share/1E97WYZyRN/",
                ],
                [
                  "fa-whatsapp",
                  `https://wa.me/${BRAND.phoneDigits}`,
                ],
              ].map(([icon, href], index) => (
                <a
                  key={index}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="w-14 h-14 rounded-full border border-white/15 bg-white/5 flex items-center justify-center hover:bg-[#007BFF] transition-all duration-300"
                >
                  <i className={`fa-brands ${icon} text-xl`}></i>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <Column title="Quick Links">
            <ul className="space-y-3">
              {QUICK_LINKS.map(([label, href]) => (
                <li key={label}>
                  <a href={href} className="text-white/70 hover:text-white">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </Column>

          {/* Company */}
          <Column title="Company">
            <ul className="space-y-3">
              {COMPANY_LINKS.map(([label, href]) => (
                <li key={label}>
                  <a href={href} className="text-white/70 hover:text-white">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </Column>

          {/* Contact */}
          <Column title="Contact">
            <ul className="space-y-4 text-white/70 text-sm">
              <li>📞 +91 7065450490</li>
              <li>📧 instashinyofficial@gmail.com</li>
              <li>📍 Gurugram, Haryana 122001</li>
              <li>🕒 Mon–Sun, 8 AM – 9 PM</li>
            </ul>
          </Column>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/50">
          <p>© 2026 InstaShiny. All rights reserved.</p>
          <p>Designed for seamless laundry experience ✦</p>
        </div>
      </div>
    </footer>
  );
}
