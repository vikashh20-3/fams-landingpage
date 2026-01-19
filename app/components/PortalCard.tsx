"use client";

import Image from "next/image";

interface PortalCardProps {
  title: string;
  url: string;
  subdomain: string;
  image: string;
  description: string;
  features: string[];
}

export default function PortalCard({ title, url, subdomain, image, description, features }: PortalCardProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--card)] text-[var(--card-foreground)] shadow-md transition-all duration-500 hover:shadow-2xl hover:border-[var(--primary)] hover-lift"
    >
      {/* Image Section */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-[var(--muted)]">
        <Image
          src={image}
          alt={`${title} Preview`}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--primary)] via-[var(--primary)]/50 to-transparent opacity-0 transition-all duration-500 group-hover:opacity-100 flex flex-col items-center justify-end pb-6">
          <span className="text-white font-bold text-lg px-6 py-3 rounded-full border-2 border-white/40 bg-white/20 backdrop-blur-md transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 flex items-center gap-2">
            Launch Portal
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </span>
        </div>

        {/* Live indicator */}
        <div className="absolute top-4 right-4 flex items-center gap-1.5 px-3 py-1.5 bg-white/90 backdrop-blur-sm rounded-full text-xs font-semibold text-green-600 shadow-lg">
          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
          Live
        </div>
      </div>

      {/* Content Section */}
      <div className="flex flex-col gap-3 p-6 flex-grow">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-bold text-lg leading-tight text-[var(--foreground)] group-hover:text-[var(--primary)] transition-colors duration-300">
            {title}
          </h3>
        </div>

        <p className="text-sm text-[var(--foreground)]/80 leading-relaxed">
          {description}
        </p>

        {/* Features */}
        <div className="flex flex-wrap gap-2 mt-auto pt-4">
          {features.map((feature, idx) => (
            <span
              key={idx}
              className="text-xs font-medium px-2.5 py-1 bg-[var(--primary)]/5 text-[var(--primary)] rounded-full"
            >
              {feature}
            </span>
          ))}
        </div>

        {/* Subdomain */}
        <div className="pt-4 mt-2 border-t border-[var(--border)]">
          <p className="text-xs text-[var(--muted-foreground)] flex items-center gap-2">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
            </svg>
            {subdomain}
          </p>
        </div>
      </div>
    </a>
  );
}
