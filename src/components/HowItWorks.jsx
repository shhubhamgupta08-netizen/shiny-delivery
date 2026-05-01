import React from "react";
import { STEPS } from "../data/content";

export default function HowItWorks() {
    return (
        <section
            id="how"
            data-testid="how-it-works-section"
            className="section-pad bg-[#F7FAFF] relative overflow-hidden"
        >
            <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-white opacity-60 blur-3xl"></div>

            <div className="container-x relative z-10">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#FFF4DC] border border-[#D4A574]/30 text-[#8B6F3E] text-xs font-semibold uppercase tracking-[0.18em]">
                        <i className="fa-solid fa-route"></i>
                        How It Works
                    </span>
                    <h2 className="font-display text-3xl md:text-4xl lg:text-5xl mt-4 text-[#041C4A]">
                        Four taps. <span className="gradient-text">Zero hassle.</span>
                    </h2>
                    <p className="mt-4 text-[#4B5A78] text-base md:text-lg">
                        From your couch to fresh laundry — usually in under 12 hours.
                    </p>
                </div>

                <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-5">
                    {/* Animated gradient connector */}
                    <div
                        className="hidden lg:block absolute top-10 left-[12%] right-[12%] h-[2px]"
                        style={{
                            background:
                                "linear-gradient(90deg, transparent, #0A5BFF 20%, #D4A574 50%, #0A5BFF 80%, transparent)",
                        }}
                    ></div>

                    {STEPS.map((s, i) => (
                        <div
                            key={s.n}
                            data-testid={`step-card-${i}`}
                            className="relative bg-white rounded-[20px] p-7 shadow-soft hover:shadow-lift transition-all hover:-translate-y-1 border border-[#E2E8F0] hover:border-[#0A5BFF]/30 group"
                        >
                            <div className="relative z-10 w-20 h-20 mb-5 -mt-16 mx-auto lg:mx-0">
                                <div className="absolute inset-0 rounded-full bg-white"></div>
                                <div className="absolute inset-1 rounded-full bg-gradient-to-br from-[#0A5BFF] to-[#003BB3] flex items-center justify-center shadow-lg shadow-[#0A5BFF]/30">
                                    <i
                                        className={`fa-solid ${s.icon} text-white text-2xl`}
                                    ></i>
                                </div>
                                <span className="absolute -top-1 -right-1 w-8 h-8 rounded-full bg-[#FFD86B] border-2 border-white flex items-center justify-center font-display text-xs text-[#041C4A] shadow-md">
                                    {parseInt(s.n, 10)}
                                </span>
                            </div>
                            <h3 className="font-display text-lg md:text-xl text-[#041C4A] mb-2 text-center lg:text-left">
                                {s.title}
                            </h3>
                            <p className="text-sm text-[#4B5A78] leading-relaxed text-center lg:text-left">
                                {s.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
