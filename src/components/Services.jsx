import React from "react";
import { SERVICES, whatsappLink } from "../data/content";

export default function Services() {
    return (
        <section
            id="services"
            data-testid="services-section"
            className="section-pad bg-white"
        >
            <div className="container-x" id="pricing">
                <div className="text-center max-w-2xl mx-auto mb-14 md:mb-16">
                    <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#FFF4DC] border border-[#D4A574]/30 text-[#8B6F3E] text-xs font-semibold uppercase tracking-[0.18em]">
                        <i className="fa-solid fa-tags"></i>
                        Services &amp; Pricing
                    </span>
                    <h2 className="font-display text-3xl md:text-4xl lg:text-5xl mt-4 text-[#041C4A]">
                        Our <span className="gradient-text">Premium Services</span>
                    </h2>
                    <p className="mt-4 text-[#4B5A78] text-base md:text-lg">
                        Professional laundry solutions delivered to your
                        doorstep.
                    </p>
                </div>

                {/* Catalog grid: 2 cols mobile, 3 cols desktop, last row auto-centers */}
                <div className="flex flex-wrap justify-center gap-5 md:gap-7">
                    {SERVICES.map((s, i) => (
                        <a
                            key={s.title}
                            href={whatsappLink(
                                `Hi InstaShiny, I want to book ${s.title}.`,
                            )}
                            target="_blank"
                            rel="noreferrer"
                            data-testid={`service-card-${i}`}
                            className="group relative flex flex-col bg-white rounded-[20px] overflow-hidden shadow-soft hover:shadow-lift transition-all duration-300 hover:-translate-y-1 border border-[#E2E8F0] hover:border-[#0A5BFF]/40 w-[calc(50%-10px)] sm:w-[calc(50%-14px)] md:w-[300px] lg:w-[340px]"
                        >
                            <div className="relative aspect-[4/3] overflow-hidden bg-[#F7FAFF]">
                                <img
                                    <img
  src={s.image}
  alt={s.name}
  loading="lazy"
  className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500"
/>
                                    loading="lazy"
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#041C4A]/35 via-transparent to-transparent"></div>

                                {s.tag && (
                                    <span
                                        className="absolute top-3 left-3 text-[10px] md:text-xs font-bold px-2.5 py-1 rounded-full shadow-lg"
                                        style={{
                                            background:
                                                s.tag === "Premium"
                                                    ? "linear-gradient(135deg, #D4A574, #FFD86B)"
                                                    : "#0A5BFF",
                                            color:
                                                s.tag === "Premium"
                                                    ? "#041C4A"
                                                    : "white",
                                        }}
                                    >
                                        {s.tag === "Premium" && (
                                            <i className="fa-solid fa-crown mr-1"></i>
                                        )}
                                        {s.tag}
                                    </span>
                                )}

                                {/* Price chip */}
                                <span className="absolute bottom-3 right-3 bg-white/95 backdrop-blur-sm rounded-full px-3 py-1 font-display text-sm md:text-base text-[#041C4A] shadow-md">
                                    {s.price}
                                    <span className="text-[#4B5A78] text-xs font-medium ml-0.5">
                                        {s.unit}
                                    </span>
                                </span>
                            </div>

                            <div className="p-4 md:p-5 flex-1 flex flex-col">
                                <h3 className="font-display text-base md:text-lg text-[#041C4A]">
                                    {s.title}
                                </h3>
                                <p className="text-xs md:text-sm text-[#4B5A78] mt-1 leading-relaxed">
                                    {s.subtitle}
                                </p>

                                <div className="mt-3 pt-3 border-t border-[#E2E8F0] flex items-center justify-between">
                                    <span className="text-xs font-semibold text-[#0A5BFF] group-hover:translate-x-1 transition-transform inline-flex items-center gap-1.5">
                                        Book now
                                        <i className="fa-solid fa-arrow-right text-[10px]"></i>
                                    </span>
                                    <span className="text-[10px] text-[#4B5A78] uppercase tracking-wider hidden md:block">
                                        Free pickup
                                    </span>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>

                {/* Certifications strip */}
                <div className="mt-16 pt-10 border-t border-[#E2E8F0]">
                    <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-[#4B5A78] mb-6">
                        Certified &amp; Recognized
                    </p>
                    <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10 text-[#4B5A78]">
                        {[
                            ["fa-award", "ISO 9001"],
                            ["fa-shield-halved", "MSME Registered"],
                            ["fa-flag", "Make in India"],
                            ["fa-rocket", "Startup India"],
                            ["fa-star", "Google Verified"],
                        ].map(([ic, label]) => (
                            <div
                                key={label}
                                className="flex items-center gap-2 text-sm font-semibold"
                            >
                                <i className={`fa-solid ${ic} text-[#D4A574]`}></i>
                                {label}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
