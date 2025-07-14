'use client';

import { Info } from 'lucide-react';
import { useState } from 'react';

export default function InfoTooltip({ children }: { children: React.ReactNode }) {
  const [show, setShow] = useState(false);

  return (
    <div className="relative inline-block">
      <Info
        className="w-5 h-5 text-blue-600 dark:text-blue-400 cursor-pointer transition hover:scale-110"
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
        aria-label="More Info"
      />
      {show && (
        <div className="absolute z-50 bg-white dark:bg-gray-900 text-gray-900 dark:text-white text-xs sm:text-sm rounded-lg px-4 py-3 w-72 sm:w-80 left-1/2 -translate-x-1/2 mt-2 shadow-xl border border-gray-200 dark:border-gray-700 transition-opacity duration-200">
          {children}
        </div>
      )}
    </div>
  );
}
