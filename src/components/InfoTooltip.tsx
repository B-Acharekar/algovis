'use client';

import { Info, X } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

export default function InfoTooltip({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const tooltipRef = useRef<HTMLDivElement | null>(null);

  // Close tooltip when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (tooltipRef.current && !tooltipRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative inline-block" ref={tooltipRef}>
      <button
        onClick={() => setOpen(!open)}
        aria-label="Info"
        className="p-1 text-blue-600 dark:text-blue-400 hover:scale-110 transition"
      >
        <Info className="w-5 h-5" />
      </button>

      {open && (
        <div className="absolute z-50 left-1/2 -translate-x-1/2 mt-2 w-[90vw] max-w-xs sm:max-w-sm bg-white dark:bg-gray-900 text-gray-900 dark:text-white text-sm rounded-lg px-4 py-3 shadow-xl border border-gray-200 dark:border-gray-700">
          {children}
          <button
            onClick={() => setOpen(false)}
            className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 dark:hover:text-white transition"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      )}
    </div>
  );
}
