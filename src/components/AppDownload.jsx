import React from "react";
import { BRAND } from "../data/content";

export default function AppDownload() {
    return (
        <section
            data-testid="app-download-section"
            className="section-pad bg-[#F7FAFF]"
        >
            <div className="container-x">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    <div>
                        <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#0A5BFF]">
                            Get The App
                        </span>
                        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl mt-3 text-[#041C4A] leading-tight">
                            Your laundry, <br />
                            <span className="gradient-text">
                                in your pocket.
                            </span>
                        </h2>
                        <p className="mt-5 text-[#4B5A78] text-base md:text-lg max-w-lg">
                            Real-time tracking, one-tap reorders, payment in
                            two clicks. Available on iOS &amp; Android.
                        </p>

                        <div className="mt-8 flex flex-wrap items-center gap-4">
                            <a
                                href={BRAND.appStore}
                                data-testid="appstore-btn"
                                className="flex items-center gap-3 bg-[#041C4A] text-white px-6 py-3.5 rounded-2xl hover:bg-[#031538] transition-all"
                            >
                                <i className="fa-brands fa-apple text-3xl"></i>
                                <div className="text-left">
                                    <div className="text-[10px] uppercase tracking-wider opacity-75">
                                        Coming soon on
                                    </div>
                                    <div className="font-display text-base">
                                        App Store
                                    </div>
                                </div>
                            </a>
                            <a
                                href={BRAND.playStore}
                                data-testid="playstore-btn"
                                className="flex items-center gap-3 bg-[#041C4A] text-white px-6 py-3.5 rounded-2xl hover:bg-[#031538] transition-all"
                            >
                                <i className="fa-brands fa-google-play text-2xl"></i>
                                <div className="text-left">
                                    <div className="text-[10px] uppercase tracking-wider opacity-75">
                                        Coming soon on
                                    </div>
                                    <div className="font-display text-base">
                                        Google Play
                                    </div>
                                </div>
                            </a>
                        </div>

                        <div className="mt-10 flex items-center gap-6">
                            <div
                                className="bg-white p-3 rounded-2xl shadow-soft"
                                data-testid="qr-code"
                            >
                                <svg
                                    viewBox="0 0 100 100"
                                    width="100"
                                    height="100"
                                    aria-label="App download QR code"
                                >
                                    <rect width="100" height="100" fill="white" />
                                    {/* Simulated QR — purely decorative */}
                                    {Array.from({ length: 144 }).map((_, i) => {
                                        const x = (i % 12) * 8 + 2;
                                        const y = Math.floor(i / 12) * 8 + 2;
                                        const filled = (i * 73 + 17) % 5 < 2;
                                        return filled ? (
                                            <rect
                                                key={i}
                                                x={x}
                                                y={y}
                                                width="6"
                                                height="6"
                                                fill="#041C4A"
                                            />
                                        ) : null;
                                    })}
                                    <rect x="2" y="2" width="22" height="22" fill="none" stroke="#041C4A" strokeWidth="4" />
                                    <rect x="76" y="2" width="22" height="22" fill="none" stroke="#041C4A" strokeWidth="4" />
                                    <rect x="2" y="76" width="22" height="22" fill="none" stroke="#041C4A" strokeWidth="4" />
                                </svg>
                            </div>
                            <div>
                                <p className="font-display text-base text-[#041C4A]">
                                    Scan to download
                                </p>
                                <p className="text-sm text-[#4B5A78] mt-1">
                                    Point your camera here.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="relative flex justify-center">
                        <div className="phone-tilt relative">
                            <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#0A5BFF]/20 to-transparent blur-3xl"></div>
                            <div className="relative w-[280px] md:w-[320px] aspect-[9/19] bg-[#041C4A] rounded-[44px] p-3 shadow-2xl border-[6px] border-[#031538]">
                                <div className="w-full h-full bg-gradient-to-b from-[#0A5BFF] via-[#0747C7] to-[#041C4A] rounded-[36px] overflow-hidden relative">
                                    {/* Notch */}
                                    <div className="absolute top-3 left-1/2 -translate-x-1/2 w-24 h-6 bg-[#031538] rounded-full"></div>

                                    {/* App UI */}
                                    <div className="pt-14 px-5 text-white">
                                        <p className="text-xs opacity-75">
                                            Good evening, Aarti
                                        </p>
                                        <h4 className="font-display text-2xl mt-1">
                                            Schedule a pickup ✨
                                        </h4>

                                        <div className="mt-5 bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/15">
                                            <div className="flex items-center gap-3 mb-3">
                                                <i className="fa-solid fa-bolt text-[#FFD43B]"></i>
                                                <span className="text-sm font-semibold">
                                                    Pickup in 30 min
                                                </span>
                                            </div>
                                            <div className="flex items-center gap-3">
                                                <i className="fa-solid fa-location-dot text-[#5B9BFF]"></i>
                                                <span className="text-xs opacity-90">
                                                    DLF Phase 2
                                                </span>
                                            </div>
                                        </div>

                                        <div className="mt-4 grid grid-cols-2 gap-2.5">
                                            {[
                                                ["fa-shirt", "Wash & Fold"],
                                                ["fa-iron", "Wash & Iron"],
                                                ["fa-suitcase", "Dry Clean"],
                                                ["fa-fire", "Steam Iron"],
                                                ["fa-shoe-prints", "Shoes"],
                                            ].map(([ic, lab]) => (
                                                <div
                                                    key={lab}
                                                    className="bg-white/10 rounded-xl p-2.5 text-center text-[10px]"
                                                >
                                                    <i
                                                        className={`fa-solid ${ic} text-base mb-1 block`}
                                                    ></i>
                                                    {lab}
                                                </div>
                                            ))}
                                            <div className="bg-[#FFD86B]/20 border border-[#FFD86B]/40 rounded-xl p-2.5 text-center text-[10px] text-[#FFE9A8]">
                                                <i className="fa-solid fa-plus text-base mb-1 block"></i>
                                                More
                                            </div>
                                        </div>

                                        <button className="mt-5 w-full bg-white text-[#041C4A] font-semibold py-3 rounded-full text-sm">
                                            Book Pickup
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
