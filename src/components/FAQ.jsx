[5:23 pm, 02/05/2026] Instashiny: import React from "react";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "../components/ui/accordion";
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

                <div className="lg:col-span-8">
                    <Accordion
                        type="single"
                        collapsible
                        defaultValue="item-0"
                        className="space-y-4"
                    >
                        {FAQS.map((f, i) => (
                            <AccordionItem
                                key={i}
                                value={item-${i}}
                                className="bg-white border border-gray-200 rounded-2xl px-6"
                            >
                                <AccordionTrigger className="text-left font-semibold text-lg text-[#041C4A] py-6">
                                    {f.question}
                                </AccordionTrigger>

                                <AccordionContent className="text-[#4B5A78] pb-6 text-base leading-7">
                                    {f.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </div>
        </section>
    );
}
[5:45 pm, 02/05/2026] Instashiny: className="bg-white border border-gray-100 rounded-2xl px-6 shadow-sm hover:shadow-md transition-all duration-300"
[5:59 pm, 02/05/2026] Instashiny: import React from "react";
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

                <div className="lg:col-span-8 space-y-5">
                    {FAQS.map((f, i) => (
                        <div
                            key={i}
                            className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300"
                        >
                            <h3 className="font-display font-semibold text-xl text-[#041C4A] leading-snug">
                                {f.question}
                            </h3>

                            <p className="text-[#4B5A78] mt-3 text-base leading-7">
                                {f.answer}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
