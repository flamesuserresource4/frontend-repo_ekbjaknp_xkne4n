import React from 'react';

const images = [
  'https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=2069&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1605763240000-3bf88fda8097?q=80&w=2069&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1482192505345-5655af888cc4?q=80&w=2069&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1455165814004-1126a7199f9b?q=80&w=2069&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1543528176-61b239494933?q=80&w=2069&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1509927082806-7d435f3e50a3?q=80&w=2069&auto=format&fit=crop',
];

const Gallery = () => {
  return (
    <section id="gallery" className="bg-slate-50 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Inside Our Facilities</h2>
          <p className="mt-3 text-slate-600">A look at operations, from sourcing to finished product.</p>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3">
          {images.map((src, i) => (
            <div key={i} className="group relative overflow-hidden rounded-xl">
              <img src={src} alt="Wonder Wink facility" className="h-44 w-full object-cover sm:h-56 md:h-64" />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
