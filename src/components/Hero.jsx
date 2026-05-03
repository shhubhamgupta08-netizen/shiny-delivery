import React, { useEffect, useRef, useState } from "react";
import BookingCard from "./BookingCard";
import {
  DEFAULT_HERO_VIDEO,
  HERO_FALLBACK_IMAGE
} from "../data/content";

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
  };

  return (
    <section
      id="home"
      data-testid="hero-section"
    className="relative min-h-[75vh] md:min-h-[85vh] w-full overflow-hidden flex items-start justify-center pt-6 md:pt-12"
    >
      {videoUrl && (
        <video
          key={videoUrl}
          className="absolute inset-0 w-full h-full object-cover z-0"
          autoPlay
          loop
          muted
          playsInline
          poster={HERO_FALLBACK_IMAGE}
        >
          <source
  src={
    window.innerWidth < 768
      ? "/src/Assets/hero-mobile.mp4"
      : "/src/Assets/hero-desktop.mp4"
  }
  type="video/mp4"
/>
        </video>
      )}

      <div
        className="absolute inset-0 z-10 bg-cover bg-center"
        style={{
          backgroundImage: `url(${HERO_FALLBACK_IMAGE})`
        }}
      />

      <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#041C4A]/90 via-[#041C4A]/70 to-[#041C4A]/30"></div>

      <div className="relative z-20 container-x w-full px-6 md:px-10 lg:px-16 pt-20 pb-20">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 text-white">
            <span className="inline-flex items-center gap-2 bg-white/10 border border-white/20 px-4 py-2 rounded-full text-sm">
              <span className="w-2 h-2 rounded-full bg-[#5B9BFF]"></span>
              Now serving all of Gurugram
            </span>

            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              Laundry Picked Up
              <br />
              in Minutes.
              <br />
              <span className="text-[#FFD86B]">
                Delivered Fresh in ASAP.
              </span>
            </h1>

            <p className="mt-6 text-base md:text-lg text-white/85 max-w-xl">
              Premium laundry care with instant pickup, live tracking and same-day delivery.
            </p>

            <div className="mt-6 flex flex-wrap gap-4 items-center">
  <a
    href="#how"
    className="px-6 py-3 rounded-full bg-white text-[#0B2A6B] font-semibold shadow-md"
  >
    See How It Works
  </a>

  <a
    href="#services"
    className="px-6 py-3 rounded-full bg-white/15 backdrop-blur-md border border-white/30 text-white font-semibold shadow-md"
  >
    View Pricing
  </a>
</div>

            <div className="mt-8 flex flex-wrap gap-4 text-sm">
              <span>⭐ 4.9/5 Rating</span>
              <span>✓ Free Pickup</span>
              <span>✓ Same Day Delivery</span>
            </div>
          </div>

          <div className="lg:col-span-5">
            <BookingCard />
          </div>
        </div>
      </div>

      <button
        onClick={() => setAdminOpen(!adminOpen)}
        className="absolute top-24 right-6 z-30 w-10 h-10 rounded-full bg-white/20 text-white"
      >
        🎥
      </button>

      {adminOpen && (
        <div className="absolute top-36 right-6 z-30 w-[320px] bg-white rounded-xl p-5 shadow-xl">
          <form onSubmit={handleUrl} className="space-y-3">
            <input
              name="url"
              type="url"
              placeholder="Paste video URL"
              className="w-full border p-3 rounded-lg"
            />
            <button type="submit" className="btn-primary w-full">
              Save URL
            </button>
          </form>

          <input
            ref={fileRef}
            type="file"
            accept="video/*"
            onChange={handleFile}
            className="hidden"
          />

          <button
            onClick={() => fileRef.current?.click()}
            className="btn-secondary w-full mt-3"
          >
            Upload Video
          </button>
        </div>
      )}
    </section>
  );
}
