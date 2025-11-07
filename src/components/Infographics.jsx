import React from 'react';
import { Leaf, Factory, Flame, Gauge, Recycle } from 'lucide-react';

const metrics = [
  {
    label: 'CO₂e saved vs coal',
    value: '1.6 t/ton',
    icon: Leaf,
    color: 'from-emerald-400 to-teal-500',
  },
  {
    label: 'Combustion efficiency',
    value: '92%',
    icon: Flame,
    color: 'from-orange-400 to-rose-500',
  },
  {
    label: 'Industrial clients',
    value: '120+',
    icon: Factory,
    color: 'from-sky-400 to-indigo-500',
  },
  {
    label: 'Process uptime',
    value: '99.2%',
    icon: Gauge,
    color: 'from-violet-400 to-fuchsia-500',
  },
];

const Infographics = () => {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Impact & Performance at a Glance
          </h2>
          <p className="mt-3 text-slate-600">Key figures that highlight the value of Wonder Wink pellets.</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map(({ label, value, icon: Icon, color }) => (
            <div key={label} className="relative overflow-hidden rounded-2xl p-6 ring-1 ring-slate-200">
              <div className={`absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gradient-to-br ${color} opacity-30 blur-3xl`} />
              <div className="relative z-10">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-slate-900 ring-1 ring-slate-200">
                  <Icon />
                </div>
                <p className="mt-4 text-sm text-slate-500">{label}</p>
                <p className="text-3xl font-bold text-slate-900">{value}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          <div className="rounded-2xl bg-gradient-to-br from-emerald-50 to-teal-50 p-6 ring-1 ring-emerald-200/50">
            <h3 className="text-lg font-semibold text-emerald-900">Circular by Design</h3>
            <p className="mt-2 text-sm text-emerald-800">
              We prioritize agricultural waste streams, turning residues into clean energy and minimizing landfill.
            </p>
            <div className="mt-4 flex items-center gap-3 text-emerald-800">
              <Recycle />
              <span>ISO 17225 compliant pellets</span>
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden ring-1 ring-slate-200">
            <img
              src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=2069&auto=format&fit=crop"
              alt="Sacks of biomass pellets"
              className="h-56 w-full object-cover"
            />
            <div className="p-6">
              <h3 className="text-lg font-semibold text-slate-900">Consistent output, batch after batch</h3>
              <p className="mt-2 text-sm text-slate-600">
                Automated screening and inline testing ensure low ash content and uniform size distribution.
              </p>
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden ring-1 ring-slate-200">
            <img
              src="https://images.unsplash.com/photo-1580894894513-54129f63a2b1?q=80&w=2069&auto=format&fit=crop"
              alt="Industrial boiler using pellets"
              className="h-56 w-full object-cover"
            />
            <div className="p-6">
              <h3 className="text-lg font-semibold text-slate-900">Ready for industrial heat</h3>
              <p className="mt-2 text-sm text-slate-600">Ideal for boilers, gasifiers, and CHP systems across sectors.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Infographics;
