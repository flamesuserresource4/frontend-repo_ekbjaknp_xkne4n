import React from 'react';
import { Recycle, Droplets, Cog, Package } from 'lucide-react';

const steps = [
  {
    icon: Recycle,
    title: 'Sourcing & Pre-processing',
    desc: 'Agricultural residues like rice husk, sawdust, and bagasse are collected, screened, and chipped to uniform size.',
  },
  {
    icon: Droplets,
    title: 'Drying & Conditioning',
    desc: 'Moisture reduced to 8–12% using energy-efficient dryers, ensuring optimal pellet durability and combustion.',
  },
  {
    icon: Cog,
    title: 'Pelletizing & Cooling',
    desc: 'High-pressure extrusion forms dense, uniform pellets. Cooling stabilizes structure and reduces fines.',
  },
  {
    icon: Package,
    title: 'Screening & Packaging',
    desc: 'Final screening removes dust; pellets are bagged or loaded in bulk with full batch traceability.',
  },
];

const Process = () => {
  return (
    <section id="process" className="bg-slate-50 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Our Manufacturing Process</h2>
          <p className="mt-3 text-slate-600">
            From raw biomass to clean-burning pellets — engineered for performance and sustainability.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl bg-white p-6 ring-1 ring-slate-200 transition hover:shadow-lg">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 ring-1 ring-emerald-200">
                <Icon size={22} />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{title}</h3>
              <p className="mt-2 text-sm text-slate-600">{desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-14 grid items-center gap-8 lg:grid-cols-2">
          <div className="aspect-video overflow-hidden rounded-2xl ring-1 ring-slate-200">
            <img
              src="https://images.unsplash.com/photo-1603189880073-31c3f2ada8a9?q=80&w=2069&auto=format&fit=crop"
              alt="Pellet production line"
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-slate-900">Quality you can measure</h3>
            <ul className="mt-4 grid grid-cols-2 gap-4 text-sm sm:text-base">
              <li className="rounded-xl bg-white p-4 ring-1 ring-slate-200">
                <span className="block text-slate-500">Diameter</span>
                <span className="text-lg font-semibold text-slate-900">6–8 mm</span>
              </li>
              <li className="rounded-xl bg-white p-4 ring-1 ring-slate-200">
                <span className="block text-slate-500">Moisture</span>
                <span className="text-lg font-semibold text-slate-900">≤ 10%</span>
              </li>
              <li className="rounded-xl bg-white p-4 ring-1 ring-slate-200">
                <span className="block text-slate-500">Ash</span>
                <span className="text-lg font-semibold text-slate-900">≤ 2%</span>
              </li>
              <li className="rounded-xl bg-white p-4 ring-1 ring-slate-200">
                <span className="block text-slate-500">Bulk density</span>
                <span className="text-lg font-semibold text-slate-900">650–750 kg/m³</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
