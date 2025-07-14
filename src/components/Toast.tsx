'use client';

import { motion } from 'framer-motion';
import { AlertCircle } from 'lucide-react';

export default function Toast({ message }: { message: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 50 }}
      transition={{ duration: 0.3 }}
      className="flex items-center gap-3 bg-white dark:bg-gray-900 text-gray-900 dark:text-white px-5 py-3 rounded-md shadow-xl border border-gray-200 dark:border-gray-700 max-w-xs sm:max-w-sm"
    >
      <AlertCircle className="w-5 h-5 text-red-500 dark:text-red-400" />
      <span className="text-sm font-medium">{message}</span>
    </motion.div>
  );
}
