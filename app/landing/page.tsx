"use client";

import React from "react";
import LandingHeader from "@/components/landing/landing-header";
import HeroSection from "@/components/landing/hero-section";
import BrandLogos from "@/components/landing/brand-logos";
import ExperienceSection from "@/components/landing/experience-section";
import ElevateSection from "@/components/landing/elevate-section";
import TestimonialsSection from "@/components/landing/testimonials-section";
import FaqSection from "@/components/landing/faq-section";
import CtaSection from "@/components/landing/cta-section";
import LandingFooter from "@/components/landing/landing-footer";

export default function LandingPage() {
    return (
        <div className="min-h-screen bg-white">
            <LandingHeader />
            <main>
                <HeroSection />
                <BrandLogos />
                <ExperienceSection />
                <ElevateSection />
                <TestimonialsSection />
                <FaqSection />
                <CtaSection />
            </main>
            <LandingFooter />
        </div>
    );
}
