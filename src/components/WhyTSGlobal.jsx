import React from 'react';
import { WHY_US_PILLARS } from '../data/academyData';

export default function WhyTSGlobal() {
  return (
    <section id="why-us" className="bg-slate-50 py-20 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12 pb-6 border-b border-slate-200 max-w-3xl">
          <span className="font-mono text-xs font-bold text-orangeCTA-600 uppercase tracking-widest block mb-2">
            ACADEMIC PHILOSOPHY & ADVANTAGE
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-3">
            Why TS Global Academy
          </h2>
          <p className="font-sans text-base text-slate-600">
            Built from the ground up to address the disconnect between traditional academic theory and modern industrial engineering needs.
          </p>
        </div>

        {/* 3 Numbered Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {WHY_US_PILLARS.map((pillar) => (
            <div
              key={pillar.number}
              className="bg-white border border-slate-200 p-8 rounded-2xl shadow-sm hover:shadow-md hover:border-slate-300 transition-all flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                {/* Numbered Marker in IBM Plex Mono */}
                <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                  <span className="font-mono text-4xl font-extrabold text-orangeCTA-500">
                    {pillar.number}
                  </span>
                  <span className="w-3 h-3 bg-brandBlue-600 rounded-full" />
                </div>

                {/* Title */}
                <h3 className="font-heading text-xl font-bold text-slate-900 leading-snug">
                  {pillar.title}
                </h3>

                {/* Description */}
                <p className="font-sans text-sm text-slate-600 leading-relaxed">
                  {pillar.description}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <span className="font-mono text-[11px] text-slate-400 font-medium uppercase tracking-wider block">
                  Pillar {pillar.number} Standard
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
