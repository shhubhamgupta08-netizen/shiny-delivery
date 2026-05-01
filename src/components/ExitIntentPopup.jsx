import React, { useEffect, useState } from "react";
import { whatsappLink } from "../data/content";

const STORAGE_KEY = "instashiny_exit_intent_shown";

export default function ExitIntentPopup() {
    const [open, setOpen] = useState(false);
    const [copied, setCopied] = useState(false);

    useEffect(() => {
        if (sessionStorage.getItem(STORAGE_KEY)) return;

        let armed = false;
        const armTimer = setTimeout(() => {
            armed = true;
        }, 8000); // arm after 8s on page

        const onMouseLeave = (e) => {
            if (!armed) return;
            if (e.clientY <= 0 && !sessionStorage.getItem(STORAGE_KEY)) {
                setOpen(true);
                sessionStorage.setItem(STORAGE_KEY, "1");
            }
        };

        const mobileFallback = setTimeout(() => {
            if (!sessionStorage.getItem(STORAGE_KEY) && window.innerWidth < 768) {
                setOpen(true);
                sessionStorage.setItem(STORAGE_KEY, "1");
            }
        }, 35000);

        document.addEventListener("mouseleave", onMouseLeave);
        return () => {
            document.removeEventListener("mouseleave", onMouseLeave);
            clearTimeout(armTimer);
            clearTimeout(mobileFallback);
        };
    }, []);

    const handleCopy = () => {
        navigator.clipboard?.writeText("HELLO10");
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    if (!open) return null;

    return (
        <div
            data-testid="exit-intent-overlay"
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-[#041C4A]/75 backdrop-blur-sm animate-fade-up"
            onClick={() => setOpen(false)}
            style={{ animationDuration: "0.3s" }}
        >
            <div
                data-testid="exit-intent-modal"
                onClick={(e) => e.stopPropagation()}
                className="relative w-full max-w-md bg-white rounded-[28px] overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.4)]"
            >
                <button
                    onClick={() => setOpen(false)}
                    data-testid="exit-intent-close"
                    aria-label="Close"
                    className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-[#F7FAFF] hover:bg-[#E2E8F0] flex items-center justify-center text-[#041C4A] transition-all"
                >
                    <i className="fa-solid fa-xmark text-sm"></i>
                </button>

                {/* Premium banner header */}
                <div
                    className="relative p-8 pt-10 pb-6 text-center overflow-hidden"
                    style={{
                        background:
                            "linear-gradient(135deg, #041C4A 0%, #0A5BFF 100%)",
                    }}
                >
                    <div className="absolute -top-20 -right-20 w-48 h-48 rounded-full bg-[#FFD86B]/25 blur-3xl"></div>
                    <div className="absolute -bottom-16 -left-16 w-48 h-48 rounded-full bg-[#5B9BFF]/30 blur-3xl"></div>

                    <div className="relative">
                        <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#FFD86B]/20 border border-[#FFD86B]/40 text-[#FFE9A8] text-[10px] font-bold uppercase tracking-[0.2em]">
                            <i className="fa-solid fa-gift"></i>
                            Wait! Don't leave yet
                        </span>
                        <h3
                            className="font-display text-3xl md:text-4xl mt-4"
                            style={{ color: "#FFFFFF" }}
                        >
                            Your{" "}
                            <span style={{ color: "#FFD86B" }}>10% OFF</span>
                            <br />
                            is still here.
                        </h3>
                        <p className="mt-3 text-sm text-white/80 max-w-xs mx-auto">
                            Get a cleaner wardrobe for 10% less — first order
                            only.
                        </p>
                    </div>
                </div>

                {/* Code + CTA */}
                <div className="p-7 pt-6">
                    <p className="text-center text-xs font-semibold uppercase tracking-wider text-[#4B5A78]">
                        Your Code
                    </p>
                    <button
                        onClick={handleCopy}
                        data-testid="exit-intent-copy-code"
                        className="mt-2 w-full border-2 border-dashed border-[#0A5BFF]/30 bg-[#F7FAFF] hover:bg-[#E9F1FF] rounded-2xl py-4 flex items-center justify-center gap-3 transition-all group"
                    >
                        <span
                            className="font-display text-3xl tracking-[0.2em]"
                            style={{ color: "#041C4A" }}
                        >
                            HELLO10
                        </span>
                        <span className="text-[#0A5BFF]">
                            <i
                                className={`fa-solid ${
                                    copied ? "fa-check" : "fa-copy"
                                } text-lg`}
                            ></i>
                        </span>
                    </button>
                    <p className="text-center text-xs text-[#4B5A78] mt-2">
                        {copied ? "✓ Copied to clipboard" : "Click to copy"}
                    </p>

                    <a
                        href={whatsappLink(
                            "Hi InstaShiny, I want to redeem HELLO10 and book my first pickup.",
                        )}
                        target="_blank"
                        rel="noreferrer"
                        data-testid="exit-intent-book-btn"
                        className="mt-5 btn-primary w-full justify-center text-base"
                    >
                        Redeem &amp; Book on WhatsApp
                        <i className="fa-solid fa-arrow-right text-xs"></i>
                    </a>

                    <div className="mt-5 flex items-center justify-center gap-5 text-xs text-[#4B5A78]">
                        <span className="flex items-center gap-1.5">
                            <i className="fa-solid fa-truck-fast text-[#0A5BFF]"></i>
                            Free pickup
                        </span>
                        <span className="flex items-center gap-1.5">
                            <i className="fa-solid fa-shield-halved text-[#0A5BFF]"></i>
                            Min. order ₹299
                        </span>
                        <span className="flex items-center gap-1.5">
                            <i className="fa-solid fa-clock text-[#0A5BFF]"></i>
                            Same-day
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}
