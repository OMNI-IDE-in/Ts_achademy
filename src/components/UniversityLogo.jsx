import React from 'react';

/**
 * Official TS Global Academy University Crest & Wordmark Logo
 * Utilizes the official heraldic crest image (ts-logo.png) with Harvard/Oxford style serif typography.
 *
 * @param {Object} props
 * @param {'sm' | 'md' | 'lg' | 'xl'} [props.size='md'] - Scaled dimensions for different layouts
 * @param {'dark' | 'light'} [props.variant='light'] - Color scheme for light/dark headers
 * @param {boolean} [props.showWordmark=true] - Whether to render the wordmark alongside the crest
 * @param {string} [props.className=''] - Additional wrapper styling classes
 */
export default function UniversityLogo({
  size = 'md',
  variant = 'light',
  showWordmark = true,
  className = '',
}) {
  // Dimension mapping for the official crest image
  const imageSizes = {
    sm: 'w-8 h-8 sm:w-9 sm:h-9',
    md: 'w-10 h-10 sm:w-12 sm:h-12',
    lg: 'w-14 h-14 sm:w-16 sm:h-16',
    xl: 'w-20 h-20 sm:w-24 sm:h-24',
  };

  // Typography sizing
  const wordmarkSizes = {
    sm: {
      title: 'text-sm sm:text-base font-extrabold',
      sub: 'text-[10px] font-semibold',
    },
    md: {
      title: 'text-[15px] sm:text-lg md:text-xl font-extrabold',
      sub: 'text-[10px] sm:text-xs font-semibold',
    },
    lg: {
      title: 'text-xl sm:text-2xl font-extrabold',
      sub: 'text-xs sm:text-sm font-semibold',
    },
    xl: {
      title: 'text-2xl sm:text-3xl font-extrabold',
      sub: 'text-sm font-semibold',
    },
  };

  const currentImageSize = imageSizes[size] || imageSizes.md;
  const currentWordmark = wordmarkSizes[size] || wordmarkSizes.md;

  // Colors based on variant (light theme default: solid bold navy/black text)
  const titleColor = variant === 'dark' ? 'text-white' : 'text-[#090E1A]';
  const subColor = variant === 'dark' ? 'text-slate-200' : 'text-slate-700';

  return (
    <div className={`inline-flex items-center gap-2.5 sm:gap-3 group select-none ${className}`}>
      {/* ========================================================
          OFFICIAL UNIVERSITY CREST SEAL (ts-logo.png)
      ======================================================== */}
      <div className={`${currentImageSize} relative shrink-0 flex items-center justify-center`}>
        <img
          src="/ts-global-academy-official-logo.png"
          alt="TS Global Academy - International Institute of Applied Sciences Official University Crest"
          title="TS Global Academy Official Logo"
          className="w-full h-full object-contain filter drop-shadow-sm group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* ========================================================
          INSTITUTIONAL WORDMARK & MOTTO
      ======================================================== */}
      {showWordmark && (
        <div className="flex flex-col justify-center leading-tight min-w-0">
          <span
            className={`font-heading font-extrabold tracking-tight ${currentWordmark.title} ${titleColor} group-hover:text-[#1E3A8A] transition-colors drop-shadow-[0_0.5px_0.5px_rgba(0,0,0,0.1)] whitespace-nowrap`}
          >
            TS GLOBAL ACADEMY
          </span>
          <span
            className={`font-sans font-semibold tracking-wider uppercase ${currentWordmark.sub} ${subColor} block mt-0.5 whitespace-nowrap`}
          >
            Institute of Applied Sciences
          </span>
        </div>
      )}
    </div>
  );
}
