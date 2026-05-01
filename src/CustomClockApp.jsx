//import React from "react";
import './index.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "sonner";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import HowItWorks from "./components/HowItWorks";
import Services from "./components/Services";
import TrustStrip from "./components/TrustStrip";
import AppDownload from "./components/AppDownload";
import OfferBanner from "./components/OfferBanner";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import ExitIntentPopup from "./components/ExitIntentPopup";

function Landing() {
    return (
        <div className="App" data-testid="instashiny-landing">
            <Navbar />
            <Hero />
            <Features />
            <HowItWorks />
            <Services />
            <TrustStrip />
            <AppDownload />
            <OfferBanner />
            <FAQ />
            <Footer />
            <ExitIntentPopup />
            <Toaster position="top-center" richColors />
        </div>
    );
}

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="*" element={<Landing />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
