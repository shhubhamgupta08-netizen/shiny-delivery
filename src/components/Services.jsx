import React from "react";
import { SERVICES, whatsappLink } from "../data/content";

export default function Services() {
  return (
    <section
      id="services"
      data-testid="services-section"
      className="section-pad bg-white"
    >
      <div className="container-x" id="pricing">
        <div className="text-center max-w-2xl mx-auto mb-14 md:mb-16">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#FFF4DC] border border-[#D4A574]/30 text-[#8B6F3E] text-xs font-semibold uppercase tracking-[0.18em]">
            <i className="fa-solid fa-tags"></i>
            Services & Pricing
          </span>

          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl mt-4 text-[#041C4A]">
            Our <span className="gradient-text">Premium Services</span>
          </h2>

          <p className="mt-4 text-[#4B5A78] text-base md:text-lg">
            Professional laundry solutions delivered to your doorstep.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-5 md:gap-7">
          {SERVICES.map((s, i) => (
            <a
              key={s.name}
              href={whatsappLink(`Hi InstaShiny, I want to book ${s.name}.`)}
              target="_blank"
              rel="noreferrer"
              data-testid={`service-card-${i}`}
              className="group relative flex flex-col bg-white rounded-[20px] overflow-hidden shadow-soft hover:shadow-lift transition-all duration-300 hover:-translate-y-1 border border-[#E2E8F0] hover:border-[#0A5BFF]/40 w-[calc(50%-10px)] sm:w-[calc(50%-14px)] md:w-[300px] lg:w-[340px]"
            >
              <div className="relative aspect-[4/3] md:h-56 overflow-hidden rounded-t-3xl">
                <img
                  src={s.image}
                  alt={s.name}
                  loading="lazy"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#041C4A]/35 via-transparent to-transparent"></div>

                <span className="absolute bottom-3 right-3 bg-white/95 backdrop-blur-sm rounded-full px-3 py-1 font-display text-sm md:text-base text-[#041C4A] shadow-md">
                  {s.price}
                </span>
              </div>

              <div className="p-4 md:p-5 flex-1 flex flex-col">
                <h3 className="font-display text-base md:text-lg text-[#041C4A]">
                  {s.name}
                </h3>

                <p className="text-xs md:text-sm text-[#4B5A78] mt-1 leading-relaxed">
                  {s.desc}
                </p>

                <div className="mt-3 pt-3 border-t border-[#E2E8F0] flex items-center justify-between">
                  <span className="text-xs font-semibold text-[#0A5BFF] group-hover:translate-x-1 transition-transform inline-flex items-center gap-1.5">
                    Book now
                    <i className="fa-solid fa-arrow-right text-[10px]"></i>
                  </span>

                  <span className="text-[10px] text-[#4B5A78] uppercase tracking-wider hidden md:block">
                    Free pickup
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
        
        <div className="mt-16 pt-10 border-t border-gray-200">
          <p className="text-center text-sm tracking-[0.2em] text-[#6B7280] font-semibold">
             CERTIFIED & RECOGNIZED
          </p>

          <div className="flex flex-wrap justify-center gap-8 md:gap-10 mt-6 text-[#4B5A78]">

            <span className="flex items-center gap-2 font-semibold text-sm md:text-base">
              <i className="fa-solid fa-award text-[#D4A574] text-base"></i>
              ISO 9001
            </span>

            <span className="flex items-center gap-2 font-semibold text-sm md:text-base">
              <i className="fa-solid fa-shield-halved text-[#D4A574] text-base"></i>
                MSME Registered
            </span>

            <span className="flex items-center gap-2 font-semibold text-sm md:text-base">
              <i className="fa-solid fa-flag text-[#D4A574] text-base"></i>
               Make in India
            </span>

            <span className="flex items-center gap-2 font-semibold text-sm md:text-base">
             <i className="fa-solid fa-rocket text-[#D4A574] text-base"></i>
              Startup India
            </span>

            <span className="flex items-center gap-2 font-semibold text-sm md:text-base">
              <i className="fa-solid fa-star text-[#D4A574] text-base"></i>
              Google Verified
            </span>

          </div>
       </div>
      </div>
    </section>
  );
}
