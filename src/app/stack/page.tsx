'use client';

import StackVisualizer from '@/components/stack/StackVisualizer';
import { Package } from 'lucide-react';
import { motion } from 'framer-motion';

export default function StackPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-950 transition-colors">
      <div className="max-w-5xl mx-auto px-4 py-16">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10 px-2"
        >
          <div className="inline-flex items-center justify-center gap-2 text-blue-700 dark:text-blue-400">
            <Package className="w-7 h-7 sm:w-8 sm:h-8" />
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">Stack Visualizer</h1>
          </div>
          <p className="mt-2 text-gray-600 dark:text-gray-300 max-w-xl mx-auto text-sm sm:text-base">
            Understand LIFO (Last In, First Out) behavior with interactive stack operations like push, pop, and peek.
          </p>
        </motion.div>


        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <StackVisualizer />
        </motion.div>
      </div>
    </main>
  );
}
