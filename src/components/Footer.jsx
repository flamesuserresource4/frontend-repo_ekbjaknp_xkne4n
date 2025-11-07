import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-slate-200">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="text-xl font-semibold text-white">Wonder Wink</h3>
            <p className="mt-2 text-sm text-slate-400">
              Biomass pellet manufacturing for reliable, renewable heat.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-300">Contact</h4>
            <ul className="mt-3 space-y-2 text-sm">
              <li className="flex items-center gap-2"><Mail size={16} /> hello@wonderwink.bio</li>
              <li className="flex items-center gap-2"><Phone size={16} /> +1 (555) 012-3456</li>
              <li className="flex items-center gap-2"><MapPin size={16} /> Green Energy Park, Springfield</li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-300">Specifications</h4>
            <ul className="mt-3 space-y-2 text-sm text-slate-400">
              <li>Diameter: 6–8 mm</li>
              <li>Moisture: ≤10%</li>
              <li>Ash: ≤2%</li>
              <li>Calorific Value: ~18 MJ/kg</li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-300">Follow</h4>
            <p className="mt-3 text-sm text-slate-400">Join our mission for a low-carbon future.</p>
            <a href="#" className="mt-3 inline-block rounded-lg bg-emerald-500 px-4 py-2 font-medium text-slate-900 hover:bg-emerald-400">Get a quote</a>
          </div>
        </div>
        <div className="mt-10 border-t border-white/10 pt-6 text-xs text-slate-500">© {new Date().getFullYear()} Wonder Wink. All rights reserved.</div>
      </div>
    </footer>
  );
};

export default Footer;
