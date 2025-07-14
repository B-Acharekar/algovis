'use client';

import LinkedListVisualizer from '@/components/linkedlist/Visualizer';
import { ListOrdered } from 'lucide-react';
import { motion } from 'framer-motion';

export default function LinkedListPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-950 transition-colors">
      <div className="max-w-5xl mx-auto px-4 py-16">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center justify-center gap-2 text-purple-700 dark:text-purple-400">
            <ListOrdered className="w-8 h-8" />
            <h1 className="text-4xl font-bold tracking-tight">Linked List Visualizer</h1>
          </div>
          <p className="mt-2 text-gray-600 dark:text-gray-300 max-w-xl mx-auto">
            Visualize how nodes connect, insert, delete, and search within a singly linked list. Great for learning pointer logic!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <LinkedListVisualizer />
        </motion.div>
      </div>
    </main>
  );
}
