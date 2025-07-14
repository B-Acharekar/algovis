'use client';

import { X, Eye } from 'lucide-react';
import { useEffect, useState } from 'react';

type BannerProps = {
  value: string;
  label?: string; // optional label override (e.g. "Front" for queue, "Top" for stack)
  onClose: () => void;
};

export default function PeekBanner({ value, label = 'Top', onClose }: BannerProps) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setVisible(false);
      onClose();
    }, 3500);
    return () => clearTimeout(timeout);
  }, [onClose]);

  if (!visible) return null;

  return (
    <div className="fixed top-5 left-1/2 -translate-x-1/2 z-50 w-full max-w-md px-4">
      <div className="flex items-center justify-between backdrop-blur-md bg-blue-100/80 dark:bg-blue-900/60 border border-blue-200 dark:border-blue-700 px-4 py-3 rounded-xl shadow-xl transition-all ring-1 ring-inset ring-blue-300 dark:ring-blue-800">
        <div className="flex items-center gap-3">
          <div className="p-1.5 bg-blue-200 dark:bg-blue-800 rounded-full">
            <Eye className="w-5 h-5 text-blue-700 dark:text-blue-300" />
          </div>
          <div className="text-sm sm:text-base font-medium text-blue-900 dark:text-blue-100">
            {label} value (peek): <span className="font-semibold">{value}</span>
          </div>
        </div>
        <button
          onClick={() => {
            setVisible(false);
            onClose();
          }}
          className="text-blue-600 dark:text-blue-300 hover:text-blue-800 dark:hover:text-white transition"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
