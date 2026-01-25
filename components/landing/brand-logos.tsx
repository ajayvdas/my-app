"use client";

import React from "react";

export default function BrandLogos() {
    const brands = [
        { name: "afterpay", display: "afterpay>" },
        { name: "monday", display: "monday.com" },
        { name: "asana", display: "asana" },
        { name: "hubspot", display: "HubSpot" },
        { name: "feedhive", display: "🐝 FeedHive" },
        { name: "tresorit", display: "tresorit" },
        { name: "zendesk", display: "zendesk" },
    ];

    return (
        <section className="py-12 px-6 border-b border-gray-100">
            <div className="max-w-5xl mx-auto">
                <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 opacity-60">
                    {brands.map((brand) => (
                        <div key={brand.name} className="text-gray-400 font-medium text-sm">
                            {brand.display}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
