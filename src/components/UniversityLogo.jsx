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
      title: 'text-sm sm:text-base',
      sub: 'text-[10px]',
    },
    md: {
      title: 'text-base sm:text-lg',
      sub: 'text-[10px] sm:text-[11px]',
    },
    lg: {
      title: 'text-xl sm:text-2xl',
      sub: 'text-xs sm:text-sm',
    },
    xl: {
      title: 'text-2xl sm:text-3xl',
      sub: 'text-sm',
    },
  };

  const currentImageSize = imageSizes[size] || imageSizes.md;
  const currentWordmark = wordmarkSizes[size] || wordmarkSizes.md;

  // Colors based on variant (light theme default: navy text)
  const titleColor = variant === 'dark' ? 'text-white' : 'text-[#0F172A]';
  const subColor = variant === 'dark' ? 'text-slate-300' : 'text-slate-600';

  return (
    <div className={`inline-flex items-center gap-3 group select-none ${className}`}>
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
        <div className="flex flex-col justify-center leading-tight">
          <span
            className={`font-heading font-bold tracking-tight ${currentWordmark.title} ${titleColor} group-hover:text-[#1E3A8A] transition-colors`}
          >
            TS GLOBAL ACADEMY
          </span>
          <span
            className={`font-sans font-medium tracking-wide ${currentWordmark.sub} ${subColor} block mt-0.5`}
          >
            Institute of Applied Sciences
          </span>
        </div>
      )}
    </div>
  );
}
