import React from "react";
import { METRICS, TESTIMONIALS } from "../data/content";

function TestimonialCard({ t, accent }) {
    return (
        <div
            className="shrink-0 w-[340px] md:w-[400px] bg-white rounded-[20px] p-6 md:p-7 mx-3 shadow-xl border border-white/50 hover:-translate-y-1 transition-all"
            style={{ borderTop: `3px solid ${accent}` }}
        >
            <div className="flex items-center justify-between mb-3">
                <div className="flex text-[#FFB400]">
                    {[...Array(t.rating || 5)].map((_, i) => (
                        <i key={i} className="fa-solid fa-star text-sm"></i>
                    ))}
                </div>
                <i
                    className="fa-solid fa-quote-right text-lg"
                    style={{ color: accent, opacity: 0.25 }}
                ></i>
            </div>
            <p
                className="text-sm md:text-base leading-relaxed mb-5"
                style={{ color: "#041C4A" }}
            >
                &ldquo;{t.quote}&rdquo;
            </p>
            <div className="flex items-center gap-3 pt-4 border-t border-[#E2E8F0]">
                <img
                    src={t.img}
                    alt={t.name}
                    className="w-10 h-10 rounded-full object-cover"
                />
                <div className="flex-1 min-w-0">
                    <p
                        className="font-display text-sm"
                        style={{ color: "#041C4A" }}
                    >
                        {t.name}
                    </p>
                    <p className="text-xs text-[#4B5A78]">{t.role}</p>
                </div>
                <span className="text-[10px] font-bold text-[#0A5BFF] bg-[#F7FAFF] px-2 py-1 rounded-full whitespace-nowrap">
                    <i className="fa-solid fa-circle-check mr-1"></i>
                    Verified
                </span>
            </div>
        </div>
    );
}

export default function TrustStrip() {
    const accents = ["#0A5BFF", "#D4A574", "#5B9BFF", "#FFD86B", "#0A5BFF", "#D4A574"];
    const row1 = TESTIMONIALS.slice(0, 3);
    const row2 = TESTIMONIALS.slice(3, 6);

    return (
        <section
            data-testid="trust-strip"
            className="relative py-20 md:py-28 overflow-hidden"
            style={{
                background:
                    "linear-gradient(135deg, #041C4A 0%, #072266 45%, #0A5BFF 100%)",
            }}
        >
            <div
                className="absolute inset-0 opacity-[0.06]"
                style={{
                    backgroundImage:
                        "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
                    backgroundSize: "32px 32px",
                }}
            ></div>
            <div className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-[#5B9BFF]/20 blur-3xl"></div>
            <div className="absolute -bottom-40 -right-20 w-[500px] h-[500px] rounded-full bg-[#FFD86B]/15 blur-3xl"></div>

            <div className="relative z-10">
                <div className="container-x px-6 md:px-10 lg:px-16 mb-12">
                    <div className="text-center md:text-left">
                        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FFD86B]/15 border border-[#FFD86B]/30 text-[#FFE9A8] text-xs font-semibold uppercase tracking-[0.18em]">
                            <i className="fa-solid fa-award"></i>
                            Trusted By Gurugram
                        </span>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-6 mt-10">
                        {METRICS.map((m, i) => (
                            <div
                                key={i}
                                data-testid={`metric-${i}`}
                                className="relative bg-white/[0.07] backdrop-blur-sm border border-white/15 rounded-2xl p-5 md:p-6 hover:bg-white/[0.11] hover:border-[#FFD86B]/40 transition-all"
                            >
                                <div
                                    className="font-display mb-1.5 flex items-baseline gap-2"
                                    style={{ color: "#FFFFFF" }}
                                >
                                    <span className="text-3xl md:text-4xl lg:text-5xl leading-none">
                                        {m.value}
                                    </span>
                                    {m.icon && (
                                        <i className="fa-solid fa-star text-[#FFD86B] text-lg"></i>
                                    )}
                                </div>
                                <p
                                    className="text-[10px] md:text-xs uppercase tracking-wider font-semibold"
                                    style={{ color: "rgba(255,255,255,0.72)" }}
                                >
                                    {m.label}
                                </p>
                            </div>
                        ))}
                    </div>

                    <div className="text-center mt-16 mb-10">
                        <h3
                            className="font-display text-2xl md:text-3xl lg:text-4xl"
                            style={{ color: "#FFFFFF" }}
                        >
                            Loved by{" "}
                            <span style={{ color: "#FFD86B" }}>
                                1,000+ families
                            </span>{" "}
                            across Gurugram
                        </h3>
                        <p className="text-white/70 mt-2 text-sm md:text-base">
                            Real reviews from real customers.
                        </p>
                    </div>
                </div>

                {/* Floating testimonial marquee — two rows, opposite directions */}
                <div
                    data-testid="testimonials-marquee"
                    className="space-y-5 overflow-hidden relative"
                    style={{
                        maskImage:
                            "linear-gradient(90deg, transparent, black 8%, black 92%, transparent)",
                        WebkitMaskImage:
                            "linear-gradient(90deg, transparent, black 8%, black 92%, transparent)",
                    }}
                >
                    <div className="flex marquee-track-slow">
                        {[...row1, ...row1, ...row1].map((t, i) => (
                            <TestimonialCard
                                key={`r1-${i}`}
                                t={t}
                                accent={accents[i % accents.length]}
                            />
                        ))}
                    </div>
                    <div className="flex marquee-track-reverse">
                        {[...row2, ...row2, ...row2].map((t, i) => (
                            <TestimonialCard
                                key={`r2-${i}`}
                                t={t}
                                accent={accents[(i + 3) % accents.length]}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
