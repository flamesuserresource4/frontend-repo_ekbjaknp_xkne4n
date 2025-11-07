import React from 'react';
import { Leaf, Factory, Flame, ChevronRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-slate-950">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1542601098-8fc114e148e7?q=80&w=2070&auto=format&fit=crop"
          alt="Sustainable biomass landscape"
          className="h-full w-full object-cover opacity-40"
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-28 lg:py-36 text-white">
        <div className="flex flex-col-reverse items-center gap-12 lg:flex-row">
          <div className="w-full lg:w-7/12">
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-500/20 px-3 py-1 text-emerald-200 ring-1 ring-emerald-300/30">
              <Leaf size={16} />
              <span className="text-xs font-medium tracking-wide">Renewable • Circular • Clean</span>
            </div>
            <h1 className="mt-5 font-semibold leading-tight text-4xl sm:text-5xl md:text-6xl">
              Wonder Wink
            </h1>
            <p className="mt-4 max-w-2xl text-base/7 sm:text-lg/8 text-slate-200">
              Biomass pellet manufacturing built for a low-carbon future. We convert agricultural
              residues into high-density, high-efficiency fuel that powers industries without
              compromising the planet.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#process"
                className="inline-flex items-center gap-2 rounded-lg bg-emerald-500 px-5 py-3 font-medium text-slate-900 transition hover:bg-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-300"
              >
                Explore our process
                <ChevronRight size={18} />
              </a>
              <a
                href="#gallery"
                className="inline-flex items-center gap-2 rounded-lg bg-white/10 px-5 py-3 font-medium backdrop-blur transition hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/40"
              >
                View facilities
              </a>
            </div>
            <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-3">
              <div className="rounded-xl bg-white/5 p-4 ring-1 ring-white/10">
                <div className="flex items-center gap-3">
                  <Leaf className="text-emerald-400" />
                  <div>
                    <p className="text-sm text-slate-300">Carbon reduction</p>
                    <p className="text-lg font-semibold">>80%</p>
                  </div>
                </div>
              </div>
              <div className="rounded-xl bg-white/5 p-4 ring-1 ring-white/10">
                <div className="flex items-center gap-3">
                  <Factory className="text-emerald-400" />
                  <div>
                    <p className="text-sm text-slate-300">Annual capacity</p>
                    <p className="text-lg font-semibold">50k+ tons</p>
                  </div>
                </div>
              </div>
              <div className="rounded-xl bg-white/5 p-4 ring-1 ring-white/10">
                <div className="flex items-center gap-3">
                  <Flame className="text-emerald-400" />
                  <div>
                    <p className="text-sm text-slate-300">Energy density</p>
                    <p className="text-lg font-semibold">~18 MJ/kg</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-5/12">
            <div className="relative h-72 w-full rounded-2xl bg-gradient-to-br from-emerald-400/20 via-emerald-300/10 to-transparent p-1 ring-1 ring-white/10 sm:h-96">
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-emerald-400/30 blur-3xl" />
              <div className="absolute bottom-0 left-1/2 h-40 w-40 -translate-x-1/2 rounded-full bg-teal-300/30 blur-3xl" />
              <div className="relative z-10 h-full w-full rounded-2xl bg-slate-900/60 p-6 backdrop-blur">
                <h3 className="font-semibold text-xl">Biomass to Pellets</h3>
                <p className="mt-2 text-sm text-slate-300">
                  A clean supply chain from sourcing to densification. Real-time quality control
                  ensures consistent size, low moisture, and high calorific value.
                </p>
                <ul className="mt-4 space-y-3 text-sm">
                  <li className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-emerald-400" /> Sustainable feedstocks
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-emerald-400" /> Clean combustion
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-emerald-400" /> Traceable supply chains
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
