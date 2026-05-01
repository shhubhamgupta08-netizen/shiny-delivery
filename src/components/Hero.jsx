import React, { useEffect, useRef, useState } from "react";
import BookingCard from "./BookingCard";
import { DEFAULT_HERO_VIDEO, HERO_FALLBACK_IMAGE, TRUST_LOGOS } from "../data/content";

export default function Hero() {
    const [videoUrl, setVideoUrl] = useState(DEFAULT_HERO_VIDEO);
    const [adminOpen, setAdminOpen] = useState(false);
    const fileRef = useRef(null);

    useEffect(() => {
        const stored = localStorage.getItem("instashiny_hero_video");
        if (stored) setVideoUrl(stored);
    }, []);

    const handleUrl = (e) => {
        e.preventDefault();
        const url = e.target.elements.url.value.trim();
        if (url) {
            localStorage.setItem("instashiny_hero_video", url);
            setVideoUrl(url);
            setAdminOpen(false);
        }
    };

    const handleFile = (e) => {
        const file = e.target.files?.[0];
        if (!file) return;
        const blobUrl = URL.createObjectURL(file);
        setVideoUrl(blobUrl);
        // Note: blob URLs are session-scoped; for persistent replacement use a hosted URL.
    };

    return (
        <section
            id="home"
            data-testid="hero-section"
            className="relative min-h-screen w-full overflow-hidden flex items-center justify-center"
        >
            {/* Video background — only renders if a videoUrl exists */}
            {videoUrl && (
                <video
                    key={videoUrl}
                    data-testid="hero-bg-video"
                    className="absolute inset-0 w-full h-full object-cover z-0"
                    autoPlay
                    loop
                    muted
                    playsInline
                    poster={HERO_FALLBACK_IMAGE}
                >
                    <source src={videoUrl} type="video/mp4" />
                </video>
            )}

            {/* Fallback brand image — covers full hero when no video */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: `url(${HERO_FALLBACK_IMAGE})`,
                    backgroundColor: "#E9F1FF",
                }}
                aria-hidden="true"
            ></div>

            {/* Overlay — horizontal gradient: dark on left (for text), lighter on right (shows brand image) */}
            <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#041C4A]/92 via-[#041C4A]/70 to-[#041C4A]/25"></div>
            <div className="absolute inset-0 z-10 bg-gradient-to-b from-[#041C4A]/30 via-transparent to-[#041C4A]/60"></div>

            {/* Content */}
            <div className="relative z-20 container-x w-full px-6 md:px-10 lg:px-16 pt-32 pb-32 md:pt-36 md:pb-40">
                <div className="grid lg:grid-cols-12 gap-10 items-center">
                    <div className="lg:col-span-7 text-white animate-fade-up">
                        <span
                            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white text-xs md:text-sm font-semibold px-4 py-2 rounded-full"
                            data-testid="hero-badge"
                        >
                            <span className="w-2 h-2 rounded-full bg-[#5B9BFF] animate-pulse"></span>
                            Now serving all of Gurugram · 7 AM–11 PM
                        </span>
                        <h1 className="font-display mt-6 text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-[1.05] tracking-tight">
                            <span className="text-white">
                                Laundry Picked Up
                            </span>
                            <br />
                            <span className="text-white">in Minutes.</span>
                            <br />
                            <span className="gradient-text">
                                Delivered Fresh in Hours.
                            </span>
                        </h1>
                        <p className="mt-6 text-base md:text-lg text-white/85 max-w-xl leading-relaxed">
                            Premium laundry care with instant pickup, live
                            tracking and same-day delivery — all from your
                            phone. Built for the city that doesn't wait.
                        </p>

                        <div className="mt-8 flex flex-wrap gap-3">
                            <a
                                href="#how"
                                className="btn-primary"
                                data-testid="hero-primary-cta"
                            >
                                See How It Works
                                <i className="fa-solid fa-arrow-right text-xs"></i>
                            </a>
                            <a
                                href="#services"
                                className="btn-ghost-light"
                                data-testid="hero-secondary-cta"
                            >
                                <i className="fa-solid fa-tag mr-2"></i>
                                View Pricing
                            </a>
                        </div>

                        {/* Social proof bar */}
                        <div
                            className="mt-10 flex flex-wrap items-center gap-6 text-white/95"
                            data-testid="hero-social-proof"
                        >
                            <div className="flex items-center gap-2">
                                <div className="flex text-[#FFD43B]">
                                    {[...Array(5)].map((_, i) => (
                                        <i
                                            key={i}
                                            className="fa-solid fa-star text-sm"
                                        ></i>
                                    ))}
                                </div>
                                <span className="text-sm font-semibold">
                                    4.9 Google Rating
                                </span>
                            </div>
                            <div className="h-5 w-px bg-white/30"></div>
                            <div className="flex items-center gap-2 text-sm">
                                <i className="fa-solid fa-users"></i>
                                <span className="font-semibold">
                                    1,000+ customers served
                                </span>
                            </div>
                            <div className="h-5 w-px bg-white/30 hidden sm:block"></div>
                            <div className="flex items-center gap-2 text-sm">
                                <i className="fa-solid fa-clock"></i>
                                <span className="font-semibold">
                                    30-min average pickup
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-5 flex justify-center lg:justify-end">
                        <BookingCard />
                    </div>
                </div>
            </div>

            {/* Trusted strip */}
            <div className="absolute bottom-0 left-0 right-0 z-20 border-t border-white/15 bg-[#041C4A]/35 backdrop-blur-md py-4 overflow-hidden">
                <div className="flex gap-12 marquee-track whitespace-nowrap text-white/70 text-xs md:text-sm font-semibold uppercase tracking-[0.18em]">
                    {[...TRUST_LOGOS, ...TRUST_LOGOS].map((t, i) => (
                        <span
                            key={i}
                            className="flex items-center gap-2 shrink-0"
                        >
                            <i className="fa-solid fa-circle-check text-[#5B9BFF]"></i>
                            {t}
                        </span>
                    ))}
                </div>
            </div>

            {/* Admin toggle (subtle) */}
            <button
                onClick={() => setAdminOpen(!adminOpen)}
                data-testid="admin-video-toggle"
                className="absolute top-24 right-6 z-30 w-9 h-9 rounded-full bg-white/15 backdrop-blur border border-white/30 text-white/80 hover:text-white hover:bg-white/25 transition-all flex items-center justify-center"
                aria-label="Replace hero video"
                title="Replace hero video"
            >
                <i className="fa-solid fa-video text-xs"></i>
            </button>

            {adminOpen && (
                <div
                    data-testid="admin-video-panel"
                    className="absolute top-36 right-6 z-30 w-[320px] bg-white rounded-2xl p-5 shadow-2xl"
                >
                    <p className="font-display text-base text-[#041C4A] mb-1">
                        Replace Hero Video
                    </p>
                    <p className="text-xs text-[#4B5A78] mb-4">
                        Paste a hosted MP4 URL or upload a local file. Hosted
                        URLs persist; uploads last for this session.
                    </p>
                    <form onSubmit={handleUrl} className="space-y-3">
                        <input
                            name="url"
                            type="url"
                            placeholder="https://yourcdn.com/brand.mp4"
                            className="is-input"
                            data-testid="admin-video-url-input"
                        />
                        <button
                            type="submit"
                            className="btn-primary w-full justify-center text-sm"
                            data-testid="admin-video-save-btn"
                        >
                            Save URL
                        </button>
                    </form>
                    <div className="my-3 text-center text-xs text-[#4B5A78]">
                        — or —
                    </div>
                    <input
                        ref={fileRef}
                        type="file"
                        accept="video/*"
                        onChange={handleFile}
                        className="hidden"
                        data-testid="admin-video-file-input"
                    />
                    <button
                        onClick={() => fileRef.current?.click()}
                        className="btn-secondary w-full justify-center text-sm"
                        data-testid="admin-video-upload-btn"
                    >
                        <i className="fa-solid fa-upload mr-1"></i>
                        Upload local file
                    </button>
                </div>
            )}
        </section>
    );
}
