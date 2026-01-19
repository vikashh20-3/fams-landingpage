"use client"

import { useState } from "react";
import Image from "next/image";

interface Portal {
    title: string;
    url: string;
    subdomain: string;
    image: string;
    description: string;
    features: string[];
}

interface PortalShowcaseProps {
    portals: Portal[];
}

export default function PortalShowcase({ portals }: PortalShowcaseProps) {
    const [activePortal, setActivePortal] = useState(portals[0]);
    const [isLoading, setIsLoading] = useState(true);

    const handlePortalChange = (portal: Portal) => {
        setIsLoading(true);
        setActivePortal(portal);
    };

    return (
        <div className="flex flex-col gap-8">
            {/* Portal Selector Tabs */}
            <div className="flex flex-wrap justify-center gap-3">
                {portals.map((portal) => (
                    <button
                        key={portal.subdomain}
                        onClick={() => handlePortalChange(portal)}
                        className={`px-5 py-3 rounded-xl text-sm font-semibold transition-all duration-300 ${activePortal.subdomain === portal.subdomain
                                ? "bg-[var(--primary)] text-white shadow-lg scale-105"
                                : "bg-white text-[var(--muted-foreground)] hover:bg-[var(--primary)]/10 hover:text-[var(--primary)] border border-[var(--border)]"
                            }`}
                    >
                        {portal.title}
                    </button>
                ))}
            </div>

            {/* Active Portal Info */}
            <div className="text-center animate-fade-in">
                <h3 className="text-2xl font-bold text-[var(--primary)] mb-2">{activePortal.title}</h3>
                <p className="text-[var(--muted-foreground)] max-w-2xl mx-auto">{activePortal.description}</p>
                <div className="flex flex-wrap justify-center gap-2 mt-4">
                    {activePortal.features.map((feature, idx) => (
                        <span
                            key={idx}
                            className="text-xs font-medium px-3 py-1.5 bg-[var(--primary)]/10 text-[var(--primary)] rounded-full"
                        >
                            {feature}
                        </span>
                    ))}
                </div>
            </div>

            {/* Iframe Container */}
            <div className="relative iframe-container bg-white rounded-2xl overflow-hidden shadow-2xl border border-[var(--border)]">
                {/* Browser Chrome */}
                <div className="flex items-center gap-3 px-4 py-3 bg-[var(--secondary)] border-b border-[var(--border)]">
                    <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-400"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                        <div className="w-3 h-3 rounded-full bg-green-400"></div>
                    </div>
                    <div className="flex-1 flex justify-center">
                        <div className="px-4 py-1.5 bg-white rounded-lg text-xs font-mono text-[var(--muted-foreground)] flex items-center gap-2 max-w-md w-full">
                            <svg className="w-3 h-3 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                            </svg>
                            <span className="truncate">{activePortal.url}</span>
                        </div>
                    </div>
                    <a
                        href={activePortal.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3 py-1.5 text-xs font-semibold bg-[var(--primary)] text-white rounded-lg hover:bg-[var(--primary)]/90 transition-colors flex items-center gap-1"
                    >
                        Open
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                    </a>
                </div>

                {/* Loading Overlay */}
                {isLoading && (
                    <div className="absolute inset-0 bg-white/80 backdrop-blur-sm flex items-center justify-center z-20" style={{ top: '48px' }}>
                        <div className="flex flex-col items-center gap-4">
                            <div className="w-12 h-12 border-4 border-[var(--primary)]/20 border-t-[var(--primary)] rounded-full animate-spin"></div>
                            <p className="text-[var(--muted-foreground)] font-medium">Loading {activePortal.title}...</p>
                        </div>
                    </div>
                )}

                {/* Iframe */}
                <div className="relative aspect-video w-full bg-[var(--muted)]">
                    <iframe
                        src={activePortal.url}
                        className="w-full h-full border-0"
                        title={activePortal.title}
                        onLoad={() => setIsLoading(false)}
                        sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
                    />
                </div>

                {/* Fallback Image if iframe doesn't load */}
                <div className="absolute inset-0 pointer-events-none opacity-0 hover:opacity-100 transition-opacity" style={{ top: '48px' }}>
                    {/* This is intentionally empty - iframe handles the content */}
                </div>
            </div>

            {/* Quick Access Grid */}
            <div className="grid grid-cols-4 md:grid-cols-8 gap-4 mt-8">
                {portals.map((portal) => (
                    <button
                        key={portal.subdomain}
                        onClick={() => handlePortalChange(portal)}
                        className={`group relative aspect-square rounded-xl overflow-hidden transition-all duration-300 ${activePortal.subdomain === portal.subdomain
                                ? "ring-4 ring-[var(--primary)] ring-offset-2 scale-105"
                                : "hover:scale-105 opacity-60 hover:opacity-100"
                            }`}
                    >
                        <Image
                            src={portal.image}
                            alt={portal.title}
                            fill
                            className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end justify-center p-2">
                            <span className="text-white text-[10px] font-semibold text-center leading-tight">
                                {portal.title.split(' ')[0]}
                            </span>
                        </div>
                    </button>
                ))}
            </div>
        </div>
    );
}
