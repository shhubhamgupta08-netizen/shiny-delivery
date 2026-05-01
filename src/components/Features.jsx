import React from "react";
import { FEATURES } from "../data/content";

export default function Features() {
    return (
        <section
            id="features"
            data-testid="features-section"
            className="section-pad bg-white relative overflow-hidden"
        >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-6xl h-80 bg-gradient-to-b from-[#EEF4FF] to-transparent -z-0 rounded-b-[40%]"></div>

            <div className="container-x relative z-10">
                <div className="max-w-2xl mb-16">
                    <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#FFF4DC] border border-[#D4A574]/30 text-[#8B6F3E] text-xs font-semibold uppercase tracking-[0.18em]">
                        <i className="fa-solid fa-sparkles"></i>
                        Why InstaShiny
                    </span>
                    <h2 className="font-display text-3xl md:text-4xl lg:text-5xl mt-4 text-[#041C4A]">
                        Built like a startup. <br />
                        <span className="gradient-text">
                            Treats your clothes like couture.
                        </span>
                    </h2>
                    <p className="mt-4 text-[#4B5A78] text-base md:text-lg">
                        Fast where it matters. Careful where it counts.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {FEATURES.map((f, i) => (
                        <div
                            key={f.title}
                            data-testid={`feature-card-${i}`}
                            className="group relative bg-white rounded-[20px] p-7 border border-[#E2E8F0] hover:border-[#0A5BFF]/40 shadow-soft hover:shadow-lift transition-all duration-300 hover:-translate-y-1 overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 w-28 h-28 bg-gradient-to-br from-[#0A5BFF]/5 to-transparent rounded-full blur-2xl -translate-y-6 translate-x-6 group-hover:from-[#0A5BFF]/15 transition-all"></div>

                            <div className="relative">
                                <div className="relative w-14 h-14 mb-6">
                                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#0A5BFF] to-[#003BB3] group-hover:scale-110 transition-transform"></div>
                                    <div className="absolute -inset-1 rounded-2xl border border-[#D4A574]/40 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                    <div className="relative w-full h-full flex items-center justify-center">
                                        <i
                                            className={`fa-solid ${f.icon} text-white text-xl`}
                                        ></i>
                                    </div>
                                </div>
                                <span className="absolute top-0 right-0 font-display text-2xl text-[#0A5BFF]/10">
                                    0{i + 1}
                                </span>

                                <h3 className="font-display text-lg md:text-xl text-[#041C4A] mb-2">
                                    {f.title}
                                </h3>
                                <p className="text-sm text-[#4B5A78] leading-relaxed">
                                    {f.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
