import React from "react";
import { whatsappLink } from "../data/content";

export default function WhatsAppButton() {
    return (
        <a
            href={whatsappLink()}
            target="_blank"
            rel="noreferrer"
            data-testid="floating-whatsapp-btn"
            aria-label="Chat with InstaShiny on WhatsApp"
            className="fixed bottom-6 right-6 z-50 group"
        >
            <span className="absolute inset-0 rounded-full bg-[#25D366] animate-pulse-ring"></span>
            <span className="relative flex items-center gap-3 bg-[#25D366] hover:bg-[#1eb558] text-white pl-3 pr-5 py-3 rounded-full shadow-2xl transition-all hover:scale-105">
                <span className="w-10 h-10 rounded-full bg-white/15 flex items-center justify-center">
                    <i className="fa-brands fa-whatsapp text-2xl"></i>
                </span>
                <span className="hidden sm:flex flex-col">
                    <span className="text-[10px] uppercase tracking-wider opacity-90 leading-none">
                        Chat with us
                    </span>
                    <span className="font-display text-sm leading-tight">
                        Book on WhatsApp
                    </span>
                </span>
            </span>
        </a>
    );
}
