import React from "react";
// import {
//     Accordion,
//     AccordionContent,
//     AccordionItem,
//     AccordionTrigger,
// } from "../components/ui/accordion";
import { FAQS } from "../data/content";

export default function FAQ() {
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

                <div className="space-y-4">
  {FAQS.map((f, i) => (
    <div
      key={i}
      className="bg-white border border-gray-200 rounded-xl p-4"
    >
      <h3 className="font-semibold text-lg">{f.question}</h3>
      <p className="text-gray-600 mt-2">{f.answer}</p>
    </div>
  ))}
</div>
            </div>
        </section>
    );
}
