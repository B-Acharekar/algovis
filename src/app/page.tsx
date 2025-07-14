'use client';

import Link from 'next/link';
import {
  BookOpen,
  FileVideo,
  Package,
  Share2,
  ListTree,
  ArrowRight,
  Sparkles,
} from 'lucide-react';
import { motion } from 'framer-motion';

const resources = [
  {
    href: '/stack',
    title: 'Stack',
    desc: 'Push, Pop, Peek & Reset operations',
    icon: <Package className="w-6 h-6 text-blue-600 dark:text-blue-300" />,
    color: 'blue',
  },
  {
    href: '/queue',
    title: 'Queue',
    desc: 'Enqueue, Dequeue & Peek in action',
    icon: <Share2 className="w-6 h-6 text-green-600 dark:text-green-300" />,
    color: 'green',
  },
  {
    href: '/linked-list',
    title: 'Linked List',
    desc: 'Insert, Delete, Search & Reset',
    icon: <ListTree className="w-6 h-6 text-purple-600 dark:text-purple-300" />,
    color: 'purple',
  },
  {
    href: '/notes',
    title: 'DSA Notes',
    desc: 'Structured notes with code examples',
    icon: <BookOpen className="w-6 h-6 text-yellow-600 dark:text-yellow-300" />,
    color: 'yellow',
  },
  {
    href: '/videos',
    title: 'YouTube Resources',
    desc: 'Curated DSA tutorials and animations',
    icon: <FileVideo className="w-6 h-6 text-red-600 dark:text-red-300" />,
    color: 'red',
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-950 transition-colors">
      {/* Hero */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center px-4 py-20"
      >
        <div className="inline-flex items-center gap-2 justify-center text-purple-700 dark:text-purple-400 mb-4">
          <Sparkles className="w-8 h-8" />
          <h1 className="text-5xl font-extrabold tracking-tight">AlgoVis</h1>
        </div>
        <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
          A beautifully animated visualizer for core data structures like Stack, Queue, Linked List —
          with premium notes & YouTube videos. Free. Fast. Intuitive.
        </p>
      </motion.section>

      {/* Grid */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-4 pb-20">
        {resources.map((item, idx) => (
          <motion.div
            key={item.href}
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: idx * 0.1, duration: 0.4 }}
            viewport={{ once: true }}
          >
            <Link
              href={item.href}
              className="group block p-6 rounded-xl shadow-sm bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 hover:shadow-md transition-all"
            >
              <div className="flex items-center gap-3 mb-3">
                {item.icon}
                <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                  {item.title}
                </h2>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-300">{item.desc}</p>
              <ArrowRight className="mt-4 w-4 h-4 text-gray-500 dark:text-gray-300 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        ))}

        {/* Coming Soon */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: resources.length * 0.1, duration: 0.4 }}
          viewport={{ once: true }}
          className="flex flex-col items-start justify-center p-6 rounded-xl border border-dashed border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300"
        >
          <h3 className="text-lg font-semibold mb-1">More Coming Soon</h3>
          <p className="text-sm">
            Trees, Graphs, Sorting Visualizers & Advanced DSA modules are on the way.
          </p>
        </motion.div>
      </section>
    </main>
  );
}
