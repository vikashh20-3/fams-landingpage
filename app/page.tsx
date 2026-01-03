import PortalCard from "./components/PortalCard";
import PortalShowcase from "./components/PortalShowcase";
import Navigation from "./components/Navigation";
import BackToTop from "./components/BackToTop";

const portals = [
  {
    title: "Data Intelligence",
    url: "https://konkan.famsds.com/dashboard",
    subdomain: "konkan.famsds.com",
    image: "/images/data-intelligence.png",
    description: "Comprehensive data analytics platform providing real-time insights, predictive modeling, and actionable intelligence for water and climate data management.",
    features: ["Real-time Analytics", "Predictive Models", "Data Visualization"],
  },
  {
    title: "CREAS Nexus Intelligence",
    url: "https://creas-nexus.famsds.com",
    subdomain: "creas-nexus.famsds.com",
    image: "/images/creas-nexus.png",
    description: "Interconnected systems intelligence hub connecting water, climate, agriculture, and energy data streams for holistic decision-making.",
    features: ["Cross-sector Analysis", "System Integration", "Nexus Modeling"],
  },
  {
    title: "Flood Intelligence",
    url: "https://flood.famsds.com",
    subdomain: "flood.famsds.com",
    image: "/images/flood-intelligence.png",
    description: "Advanced flood monitoring and early warning system with real-time alerts, risk mapping, and evacuation planning tools.",
    features: ["Early Warning System", "Risk Mapping", "Real-time Monitoring"],
  },
  {
    title: "Water Utility Intelligence",
    url: "https://waterutility.famsds.com",
    subdomain: "waterutility.famsds.com",
    image: "/images/water-utility.png",
    description: "Smart water utility management platform for optimizing distribution networks, reducing losses, and ensuring supply reliability.",
    features: ["Network Optimization", "Loss Reduction", "Demand Forecasting"],
  },
  {
    title: "ACT Water Intelligence",
    url: "https://act-water.famsds.com",
    subdomain: "act-water.famsds.com",
    image: "/images/act-water.png",
    description: "Specialized water governance and compliance platform for regulatory monitoring, policy analysis, and sustainable water management.",
    features: ["Compliance Tracking", "Policy Analysis", "Governance Tools"],
  },
  {
    title: "Agriculture Market Intelligence",
    url: "https://ami.famsds.com",
    subdomain: "ami.famsds.com",
    image: "/images/agri-market.png",
    description: "Comprehensive agricultural market analytics providing crop yield predictions, price forecasting, and supply chain insights.",
    features: ["Yield Predictions", "Price Forecasting", "Market Trends"],
  },
  {
    title: "Energy Intelligence",
    url: "https://energy.famsds.com",
    subdomain: "energy.famsds.com",
    image: "/images/energy.png",
    description: "Renewable energy optimization platform for power grid management, solar/wind forecasting, and energy efficiency analytics.",
    features: ["Grid Management", "Renewable Forecasting", "Efficiency Analytics"],
  },
  {
    title: "FAMS Academy",
    url: "https://academy.famsds.com",
    subdomain: "academy.famsds.com",
    image: "/images/fams-academy.png",
    description: "E-learning platform offering courses, certifications, and training programs on water, climate, agriculture, and energy systems.",
    features: ["Online Courses", "Certifications", "Expert Training"],
  },
];

const capabilities = [
  {
    icon: "�",
    title: "Data Intelligence",
    description: "Comprehensive data analytics platform providing real-time insights, predictive modeling, and actionable intelligence.",
    features: ["Real-time Analytics", "Predictive Models", "Data Visualization"],
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: "🔗",
    title: "CREAS Nexus",
    description: "Interconnected systems hub connecting water, climate, agriculture, and energy data streams for holistic insights.",
    features: ["Cross-sector Analysis", "System Integration", "Nexus Modeling"],
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: "�",
    title: "Flood Intelligence",
    description: "Advanced flood monitoring and early warning system with real-time alerts and risk mapping.",
    features: ["Early Warning", "Risk Mapping", "Real-time Alerts"],
    gradient: "from-cyan-500 to-blue-600",
  },
  {
    icon: "💧",
    title: "Water Utility",
    description: "Smart water utility management for optimizing distribution networks and reducing losses.",
    features: ["Network Optimization", "Loss Reduction", "Demand Forecasting"],
    gradient: "from-teal-500 to-emerald-500",
  },
  {
    icon: "🏛️",
    title: "ACT Water",
    description: "Water governance and compliance platform for regulatory monitoring and policy analysis.",
    features: ["Compliance Tracking", "Policy Analysis", "Governance Tools"],
    gradient: "from-indigo-500 to-purple-500",
  },
  {
    icon: "🌾",
    title: "Agriculture Market",
    description: "Agricultural market analytics with crop yield predictions, price forecasting, and supply chain insights.",
    features: ["Yield Predictions", "Price Forecasting", "Market Trends"],
    gradient: "from-green-500 to-lime-500",
  },
  {
    icon: "⚡",
    title: "Energy Intelligence",
    description: "Renewable energy optimization for power grid management and energy efficiency analytics.",
    features: ["Grid Management", "Renewable Forecasting", "Efficiency Analytics"],
    gradient: "from-amber-500 to-orange-500",
  },
  {
    icon: "🎓",
    title: "FAMS Academy",
    description: "E-learning platform with courses, certifications, and training on water, climate, agriculture, and energy.",
    features: ["Online Courses", "Certifications", "Expert Training"],
    gradient: "from-rose-500 to-red-500",
  },
];

const dataSources = [
  { name: "Satellite Imagery", description: "High-resolution earth observation" },
  { name: "IoT Sensor Networks", description: "Real-time ground monitoring" },
  { name: "Government Databases", description: "Official meteorological data" },
  { name: "Research Institutions", description: "Scientific research data" },
];

const complianceBadges = [
  { name: "TCFD Aligned", color: "from-green-500 to-emerald-600" },
  { name: "ISO 27001", color: "from-blue-500 to-indigo-600" },
  { name: "GDPR Compliant", color: "from-purple-500 to-violet-600" },
  { name: "SOC 2 Type II", color: "from-orange-500 to-red-500" },
];

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col font-sans">
      {/* Navigation */}
      <Navigation />

      {/* Back to Top Button */}
      <BackToTop />

      {/* Hero Section - Full Viewport */}
      <header
        className="relative min-h-screen w-full overflow-hidden text-white flex items-center justify-center hero-pattern pt-20 md:pt-0"
        style={{
          background: 'linear-gradient(-45deg, #002647ff, #003057, #002e5cff, #014175ff)',
          backgroundSize: '400% 400%',
          animation: 'morphGradient 15s ease infinite',
        }}
      >
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-white/5 rounded-full blur-3xl animate-float delay-200"></div>
          <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-white/3 rounded-full blur-2xl animate-float delay-400"></div>

          {/* Orbiting particles */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] animate-spin-slow opacity-20">
            <div className="absolute top-0 left-1/2 w-3 h-3 bg-white rounded-full"></div>
            <div className="absolute bottom-0 left-1/2 w-2 h-2 bg-white rounded-full"></div>
            <div className="absolute top-1/2 left-0 w-4 h-4 bg-white rounded-full"></div>
            <div className="absolute top-1/2 right-0 w-2 h-2 bg-white rounded-full"></div>
          </div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 text-center relative z-10 py-8 md:py-0">
          <div className="animate-fade-in-down">
            <span className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-2.5 mb-6 sm:mb-8 text-xs sm:text-sm font-semibold tracking-wider uppercase bg-white/10 rounded-full backdrop-blur-md border border-white/20 shadow-lg animate-border-glow">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              Predicting Today, Protecting Tomorrow
            </span>
          </div>

          <h1 className="mb-3 sm:mb-4 text-5xl font-black tracking-tight sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl animate-fade-in-up">
            <span className="text-gradient-animated">FAMS</span>
          </h1>

          <h2 className="mb-4 sm:mb-6 text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tight animate-fade-in-up delay-100 text-white animate-text-glow px-4">
            Next-Gen Water-Climate-Agriculture-Energy Security
          </h2>

          <p className="mx-auto max-w-3xl text-base sm:text-xl md:text-2xl text-white/80 leading-relaxed mb-8 sm:mb-12 animate-fade-in-up delay-200 px-4">
            Data Modelling-Driven Decision Support Solutions for a resilient and sustainable future.
          </p>

          {/* Floating Stat Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto mb-8 sm:mb-12 animate-fade-in-up delay-300">
            {[
              { value: "8+", label: "Intelligence Portals", sublabel: "Specialized Platforms" },
              { value: "24/7", label: "Real-time Monitoring", sublabel: "Continuous Updates" },
              { value: "100+", label: "Data Sources", sublabel: "Integrated Systems" },
              { value: "Global", label: "Coverage", sublabel: "Worldwide Reach" },
            ].map((stat, idx) => (
              <div
                key={idx}
                className="group bg-white/10 backdrop-blur-md border border-white/20 rounded-xl sm:rounded-2xl p-3 sm:p-4 hover:bg-white/20 transition-all duration-500 hover:scale-105 hover:shadow-xl"
                style={{ animationDelay: `${idx * 200}ms` }}
              >
                <div className="text-xl sm:text-2xl md:text-3xl font-black text-white mb-1">{stat.value}</div>
                <div className="text-[10px] sm:text-xs md:text-sm text-white/70 font-medium">{stat.label}</div>
                <div className="text-[8px] sm:text-[10px] text-white/50 hidden sm:block">{stat.sublabel}</div>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center animate-fade-in-up delay-400 px-4">
            <a href="#capabilities" className="group btn-glow inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold bg-white text-[var(--primary)] rounded-full hover:bg-white/90 transition-all hover:scale-105 hover:shadow-2xl">
              Explore Platform
              <svg className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a href="#portals" className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold bg-white/10 text-white rounded-full border border-white/30 hover:bg-white/20 transition-all backdrop-blur-sm">
              Intelligence Portals
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-8 h-8 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </header>

      {/* Platform Capabilities Section */}
      <section id="capabilities" className="relative bg-gradient-to-b from-[var(--background)] to-[var(--secondary)] py-24 sm:py-32">
        <div className="container mx-auto px-6">
          <div className="mb-16 text-center">
            <span className="inline-block px-4 py-1.5 mb-4 text-xs font-bold tracking-widest text-[var(--primary)] bg-[var(--primary)]/10 rounded-full uppercase">
              Our Intelligence Suite
            </span>
            <h2 className="text-4xl font-black tracking-tight text-[var(--primary)] sm:text-5xl md:text-6xl mb-4">
              Specialized Portals
            </h2>
            <p className="text-[var(--muted-foreground)] max-w-2xl mx-auto text-lg">
              Explore our comprehensive suite of intelligence platforms designed for water, climate, agriculture, and energy sectors.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {capabilities.map((cap, idx) => (
              <div
                key={idx}
                className="group relative bg-white rounded-2xl p-6 shadow-lg border border-[var(--border)] hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden animate-fade-in-up"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                {/* Subtle hover effect */}
                <div className="absolute inset-0 bg-[var(--primary)]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative z-10">
                  {/* Icon with primary color background */}
                  <div className="w-14 h-14 rounded-xl bg-[var(--primary)]/10 flex items-center justify-center text-2xl mb-4 group-hover:bg-[var(--primary)]/20 group-hover:scale-110 transition-all duration-300">
                    {cap.icon}
                  </div>

                  <h3 className="text-lg font-bold text-[var(--primary)] mb-2">{cap.title}</h3>
                  <p className="text-sm text-[var(--muted-foreground)] mb-4 leading-relaxed line-clamp-2">{cap.description}</p>

                  <div className="flex flex-wrap gap-1.5">
                    {cap.features.map((feature, fIdx) => (
                      <span key={fIdx} className="text-xs px-2 py-1 rounded-full bg-[var(--primary)]/10 text-[var(--primary)] font-medium">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platform by the Numbers */}
      <section className="relative bg-[var(--primary)] py-20 overflow-hidden">
        <div className="absolute inset-0 hero-pattern opacity-30"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-white sm:text-4xl mb-2">Platform by the Numbers</h2>
            <p className="text-white/60">Delivering impact at scale</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            {[
              { value: "8+", label: "Intelligence Portals", icon: "🌐" },
              { value: "500K+", label: "Data Points Daily", icon: "📊" },
              { value: "4", label: "Core Sectors", icon: "🎯" },
              { value: "24/7", label: "Active Monitoring", icon: "⚡" },
            ].map((stat, idx) => (
              <div key={idx} className="group animate-fade-in-up" style={{ animationDelay: `${idx * 100}ms` }}>
                <div className="text-3xl mb-2 group-hover:scale-125 transition-transform">{stat.icon}</div>
                <div className="text-4xl sm:text-5xl font-black mb-2 group-hover:text-[#94c4e8] transition-colors">{stat.value}</div>
                <div className="text-white/70 text-sm uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="bg-[var(--background)] py-24 sm:py-32">
        <div className="container mx-auto px-6">
          <div className="mb-16 text-center">
            <span className="inline-block px-4 py-1.5 mb-4 text-xs font-bold tracking-widest text-[var(--primary)] bg-[var(--primary)]/10 rounded-full uppercase">
              Who We Serve
            </span>
            <h2 className="text-4xl font-black tracking-tight text-[var(--primary)] sm:text-5xl mb-4">
              Built for Your Needs
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Government & Public Sector */}
            <div className="group bg-gradient-to-br from-[var(--primary)] to-[#004a7c] rounded-3xl p-8 text-white shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center text-2xl backdrop-blur-sm">
                  �️
                </div>
                <h3 className="text-2xl font-bold">Government & Public Sector</h3>
              </div>
              <p className="text-white/80 mb-6">Data-driven decision support for policy makers and administrators.</p>
              <ul className="space-y-3">
                {[
                  "Water resource planning & management",
                  "Disaster preparedness & response",
                  "Agricultural policy support",
                  "Infrastructure planning & optimization",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-white/90">
                    <svg className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Enterprise & Industry */}
            <div className="group bg-white rounded-3xl p-8 shadow-xl border border-[var(--border)] hover:shadow-2xl transition-all hover:-translate-y-1">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-[var(--primary)]/10 rounded-2xl flex items-center justify-center text-2xl">
                  🏢
                </div>
                <h3 className="text-2xl font-bold text-[var(--primary)]">Enterprise & Industry</h3>
              </div>
              <p className="text-[var(--muted-foreground)] mb-6">Actionable intelligence for operational excellence.</p>
              <ul className="space-y-3">
                {[
                  "Supply chain optimization",
                  "Resource efficiency analytics",
                  "Sustainability reporting",
                  "Operational risk management",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-[var(--foreground)]">
                    <svg className="w-5 h-5 text-[var(--primary)] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Data Sources & Compliance */}
      <section className="bg-[var(--secondary)] py-24 sm:py-32">
        <div className="container mx-auto px-6">
          <div className="mb-16 text-center">
            <span className="inline-block px-4 py-1.5 mb-4 text-xs font-bold tracking-widest text-[var(--primary)] bg-[var(--primary)]/10 rounded-full uppercase">
              Trust & Transparency
            </span>
            <h2 className="text-4xl font-black tracking-tight text-[var(--primary)] sm:text-5xl mb-4">
              Data Sources & Compliance
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Data Sources */}
            <div>
              <h3 className="text-xl font-bold text-[var(--primary)] mb-6 flex items-center gap-2">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
                </svg>
                Trusted Data Sources
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {dataSources.map((source, idx) => (
                  <div key={idx} className="bg-white rounded-xl p-4 shadow-sm border border-[var(--border)] hover:shadow-md transition-all">
                    <div className="font-semibold text-[var(--foreground)] mb-1">{source.name}</div>
                    <div className="text-xs text-[var(--muted-foreground)]">{source.description}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Compliance */}
            <div>
              <h3 className="text-xl font-bold text-[var(--primary)] mb-6 flex items-center gap-2">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                Compliance & Certifications
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {complianceBadges.map((badge, idx) => (
                  <div key={idx} className={`bg-gradient-to-r ${badge.color} rounded-xl p-4 text-white shadow-lg hover:scale-105 transition-transform`}>
                    <div className="font-bold">{badge.name}</div>
                    <div className="text-xs text-white/70">Certified</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portals Section */}
      <main id="portals" className="flex-grow bg-gradient-to-b from-[var(--background)] to-[var(--secondary)] py-24 sm:py-32">
        <div className="container mx-auto px-6">
          <div className="mb-16 text-center section-divider pb-8">
            <span className="inline-block px-4 py-1.5 mb-4 text-xs font-bold tracking-widest text-[var(--primary)] bg-[var(--primary)]/10 rounded-full uppercase">
              Our Ecosystem
            </span>
            <h2 className="text-4xl font-black tracking-tight text-[var(--primary)] sm:text-5xl md:text-6xl mb-4">
              Intelligence Portals
            </h2>
            <p className="text-[var(--muted-foreground)] max-w-2xl mx-auto text-lg">
              Access our suite of specialized platforms designed for data-driven decision making across water, climate, agriculture, and energy sectors.
            </p>
          </div>

          <div className="grid gap-8 md:gap-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {portals.map((portal, index) => (
              <div
                key={portal.subdomain}
                className="animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <PortalCard
                  title={portal.title}
                  url={portal.url}
                  subdomain={portal.subdomain}
                  image={portal.image}
                  description={portal.description}
                  features={portal.features}
                />
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Live Showcase Section with Iframe */}
      <section id="showcase" className="bg-[var(--secondary)] py-24 sm:py-32">
        <div className="container mx-auto px-6">
          <div className="mb-16 text-center">
            <span className="inline-block px-4 py-1.5 mb-4 text-xs font-bold tracking-widest text-[var(--primary)] bg-[var(--primary)]/10 rounded-full uppercase">
              Live Preview
            </span>
            <h2 className="text-4xl font-black tracking-tight text-[var(--primary)] sm:text-5xl md:text-6xl mb-4">
              Experience Our Portals
            </h2>
            <p className="text-[var(--muted-foreground)] max-w-2xl mx-auto text-lg">
              Get a live preview of our intelligence platforms. Click any portal below to see it in action.
            </p>
          </div>

          <PortalShowcase portals={portals} />
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative bg-[var(--primary)] py-24 sm:py-32 overflow-hidden">
        <div className="absolute inset-0 hero-pattern opacity-50"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/5 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl font-black text-white sm:text-5xl md:text-6xl mb-6 animate-fade-in-up">
            Ready to Transform Your Decision Making?
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto mb-10 animate-fade-in-up delay-100">
            Join organizations worldwide using FAMS Intelligence to make smarter decisions for water, climate, agriculture, and energy security.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up delay-200">
            <a href="https://famsds.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-10 py-5 text-lg font-bold bg-white text-[var(--primary)] rounded-full hover:bg-white/90 transition-all hover:scale-105 shadow-2xl">
              Get Started
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
            <a href="mailto:contact@famsds.com" className="inline-flex items-center justify-center gap-2 px-10 py-5 text-lg font-bold bg-transparent text-white rounded-full border-2 border-white/50 hover:bg-white/10 transition-all">
              Contact Sales
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#001a30] text-white py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="md:col-span-2">
              <h3 className="text-2xl font-black mb-4">FAMS Design Solution Pvt. Ltd</h3>
              <p className="text-white/60 max-w-md leading-relaxed mb-6">
                Empowering organizations with next-generation climate risk intelligence for water, climate, agriculture, and energy security.
              </p>
              {/* Recognition Badges */}
              <div className="flex flex-wrap gap-2">
                <span className="text-xs bg-white/10 px-3 py-1 rounded-full text-white/70">🏆 Climate Fintech Leader 2025</span>
                <span className="text-xs bg-white/10 px-3 py-1 rounded-full text-white/70">⭐ Best Risk Analytics</span>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-white/80">Portals</h4>
              <ul className="space-y-2">
                {portals.slice(0, 4).map((portal) => (
                  <li key={portal.subdomain}>
                    <a href={portal.url} target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-white transition-colors text-sm">
                      {portal.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-white/80">Company</h4>
              <ul className="space-y-2">
                <li><a href="https://famsds.com/about-us" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-white transition-colors text-sm">About Us</a></li>
                <li><a href="https://famsds.com/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-white transition-colors text-sm">Privacy Policy</a></li>
                <li><a href="https://famsds.com/terms-of-service" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-white transition-colors text-sm">Terms of Service</a></li>
                <li><a href="https://famsds.com/contact-us" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-white transition-colors text-sm">Contact</a></li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-white/40">
              © {new Date().getFullYear()} FAMS. All rights reserved.
            </p>
            <div className="flex gap-6">
              {/* X (Twitter) */}
              <a href="https://x.com/fams_ds" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
              </a>
              {/* LinkedIn */}
              <a href="https://www.linkedin.com/company/fams-ds/" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
              </a>
              {/* Instagram */}
              <a href="https://www.instagram.com/fams.ds/" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
              </a>
              {/* Facebook */}
              <a href="https://www.facebook.com/famsdesignsolution/" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
