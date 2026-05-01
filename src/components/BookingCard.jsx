import React, { useState } from "react";
import { whatsappLink } from "../data/content";

export default function BookingCard() {
    const [pickup, setPickup] = useState("today");
    const [time, setTime] = useState("11:00 AM – 12:00 PM");
    const [address, setAddress] = useState("");

    const handleBook = (e) => {
        e.preventDefault();
        const text = `Hi InstaShiny, I want to book a laundry pickup.\n\nPickup: ${
            pickup === "today" ? "Today" : "Schedule"
        } (${time})\nAddress: ${address || "—"}\nService: Wash & Fold`;
        window.open(
            `https://wa.me/917065450490?text=${encodeURIComponent(text)}`,
            "_blank",
        );
    };

    return (
        <form
            onSubmit={handleBook}
            data-testid="hero-booking-card"
            className="glass-card rounded-[20px] p-6 md:p-7 w-full max-w-md shadow-2xl"
        >
            <div className="flex items-center justify-between mb-5">
                <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[#0A5BFF]">
                        Instant Booking
                    </p>
                    <h3 className="font-display text-xl text-[#041C4A] mt-1">
                        Schedule Pickup
                    </h3>
                </div>
                <span className="bg-green-50 text-green-700 text-xs font-semibold px-3 py-1.5 rounded-full flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                    Open Now
                </span>
            </div>

            <div className="space-y-3">
                <div>
                    <label className="text-xs font-semibold text-[#4B5A78] uppercase tracking-wider">
                        Pickup
                    </label>
                    <div className="grid grid-cols-2 gap-2 mt-1.5">
                        <button
                            type="button"
                            onClick={() => setPickup("today")}
                            data-testid="booking-pickup-today"
                            className={`py-2.5 rounded-xl text-sm font-semibold transition-all ${
                                pickup === "today"
                                    ? "bg-[#0A5BFF] text-white shadow-md"
                                    : "bg-[#F7FAFF] text-[#041C4A] border border-[#E2E8F0]"
                            }`}
                        >
                            Today
                        </button>
                        <button
                            type="button"
                            onClick={() => setPickup("schedule")}
                            data-testid="booking-pickup-schedule"
                            className={`py-2.5 rounded-xl text-sm font-semibold transition-all ${
                                pickup === "schedule"
                                    ? "bg-[#0A5BFF] text-white shadow-md"
                                    : "bg-[#F7FAFF] text-[#041C4A] border border-[#E2E8F0]"
                            }`}
                        >
                            Schedule
                        </button>
                    </div>
                </div>

                <div>
                    <label className="text-xs font-semibold text-[#4B5A78] uppercase tracking-wider">
                        Time Slot
                    </label>
                    <select
                        className="is-input mt-1.5"
                        value={time}
                        onChange={(e) => setTime(e.target.value)}
                        data-testid="booking-time-select"
                    >
                        <option>11:00 AM – 12:00 PM</option>
                        <option>1:00 PM – 2:00 PM</option>
                        <option>4:00 PM – 5:00 PM</option>
                        <option>7:00 PM – 8:00 PM</option>
                    </select>
                </div>

                <div>
                    <label className="text-xs font-semibold text-[#4B5A78] uppercase tracking-wider">
                        Where
                    </label>
                    <input
                        type="text"
                        placeholder="Enter your address in Gurugram"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        className="is-input mt-1.5"
                        data-testid="booking-address-input"
                    />
                </div>

                <button
                    type="submit"
                    data-testid="booking-submit-btn"
                    className="btn-primary w-full justify-center mt-2"
                >
                    Book Pickup
                    <i className="fa-solid fa-arrow-right text-xs"></i>
                </button>

                <p className="text-xs text-[#4B5A78] text-center pt-1">
                    <i className="fa-solid fa-shield-halved text-[#0A5BFF] mr-1"></i>
                    Free pickup &amp; delivery · No hidden charges
                </p>
            </div>
        </form>
    );
}
