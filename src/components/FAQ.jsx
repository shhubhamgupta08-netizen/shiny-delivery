import React, { useState } from "react";
import { FAQS } from "../data/content";

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState(null);

    return (
        <section
            id="faq"
            data-testid="faq-section"
            className="section-pad bg-[#F7FAFF]"
        >
            <div className="container-x grid lg:grid-cols-12 gap-12">
                <div className="lg:col-span-4">
                    <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#0A5BFF]">
                        FAQ
                    </span>

                    <h2 className="font-display text-3xl md:text-4xl lg:text-5xl mt-3 text-[#041C4A] leading-tight">
                        Questions, <br />
                        <span className="gradient-text">answered.</span>
                    </h2>

                    <p className="mt-5 text-[#4B5A78] max-w-sm">
                        Can&apos;t find what you&apos;re looking for? Our team replies in
                        minutes on WhatsApp.
                    </p>
                </div>

                <div className="lg:col-span-8 space-y-4">
                    {FAQS.map((f, i) => (
                        <div
                            key={i}
                            className="bg-white border border-gray-200 rounded-2xl p-5 cursor-pointer shadow-sm"
                            onClick={() =>
                                setOpenIndex(openIndex === i ? null : i)
                            }
                        >
                            <div className="flex justify-between items-center">
                                <h3 className="font-semibold text-lg md:text-xl text-[#041C4A]">
                                    {f.question}
                                </h3>

                                <span className="text-2xl font-light text-[#041C4A]">
                                    {openIndex === i ? "−" : "+"}
                                </span>
                            </div>

                            {openIndex === i && (
                                <p className="text-[#4B5A78] mt-4 leading-relaxed">
                                    {f.answer}
                                </p>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
