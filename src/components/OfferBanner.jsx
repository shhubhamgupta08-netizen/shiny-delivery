import React from "react";
import { whatsappLink } from "../data/content";

export default function OfferBanner() {
    return (
        <section
            id="offers"
            data-testid="offer-banner"
            className="section-pad bg-white"
        >
            <div className="container-x">
                <div className="relative overflow-hidden rounded-[28px] p-10 md:p-16 bg-gradient-to-br from-[#0A5BFF] via-[#0747C7] to-[#041C4A] text-white">
                    {/* Decorative shapes */}
                    <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-white/10 blur-2xl"></div>
                    <div className="absolute -bottom-24 -left-10 w-72 h-72 rounded-full bg-[#5B9BFF]/30 blur-3xl"></div>

                    <div className="relative grid md:grid-cols-2 gap-8 items-center">
                        <div>
                            <span className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/20 text-white text-xs font-semibold px-4 py-2 rounded-full mb-5">
                                <i className="fa-solid fa-gift"></i>
                                Limited Time Offer
                            </span>
                            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05]">
                                <span className="text-[#FFD43B]">10% OFF</span>
                                <br />
                                your first order.
                            </h2>
                            <p className="mt-4 text-white/85 text-base md:text-lg max-w-md">
                                Welcome bonus for new customers in Gurugram.
                                Apply at checkout. Minimum order ₹299.
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row md:flex-col items-start gap-5">
                            <div className="bg-white text-[#041C4A] rounded-2xl p-5 w-full max-w-xs shadow-2xl">
                                <p className="text-xs uppercase tracking-wider text-[#4B5A78] font-semibold">
                                    Use code
                                </p>
                                <div className="flex items-center justify-between mt-2">
                                    <span className="font-display text-3xl tracking-wider">
                                        HELLO10
                                    </span>
                                    <button
                                        onClick={() => navigator.clipboard?.writeText("HELLO10")}
                                        data-testid="copy-code-btn"
                                        className="text-[#0A5BFF] hover:text-[#004CE6]"
                                        aria-label="Copy code"
                                    >
                                        <i className="fa-solid fa-copy"></i>
                                    </button>
                                </div>
                                <div className="border-t border-dashed border-[#E2E8F0] my-4"></div>
                                <p className="text-xs text-[#4B5A78]">
                                    Valid for 7 days from signup. Single use.
                                </p>
                            </div>

                            <a
                                href={whatsappLink(
                                    "Hi InstaShiny, I want to redeem HELLO10 and book my first pickup.",
                                )}
                                target="_blank"
                                rel="noreferrer"
                                data-testid="offer-book-now-btn"
                                className="inline-flex items-center justify-center gap-2 bg-white text-[#0A5BFF] font-semibold px-7 py-4 rounded-full hover:bg-[#FFD43B] hover:text-[#041C4A] transition-all shadow-xl"
                            >
                                Book Now
                                <i className="fa-solid fa-arrow-right text-xs"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
