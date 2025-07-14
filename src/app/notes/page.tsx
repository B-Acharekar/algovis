'use client';

import { FileDown, BookText, Loader2 } from 'lucide-react';
import { motion } from 'framer-motion';

const notes = [
  {
    title: 'Stacks, Queues & Linked Lists – Purdue University',
    url: 'https://www.cs.purdue.edu/homes/ayg/CS251/slides/chap3.pdf',
    description: '35-page PDF with intuitive diagrams and operations breakdown.',
    tag: 'Foundational',
  },
  {
    title: 'Linked List Lecture Notes – CMU',
    url: 'https://www.cs.cmu.edu/~15122/handouts/lectures/10-linkedlist.pdf',
    description: 'Short, sharp explanation with C code for push, pop, and traverse.',
    tag: 'Linked List',
  },
];

export default function NotesPage() {
  return (
    <main className="min-h-screen px-4 py-16 bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-950 transition-colors text-gray-800 dark:text-gray-100">
      
      {/* Header */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-14"
      >
        <div className="inline-flex items-center justify-center gap-3 text-purple-700 dark:text-purple-300 text-5xl font-bold mb-4">
          <BookText className="w-10 h-10" />
          DSA Notes
        </div>
        <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
          Free, structured, and high-quality PDFs to help you learn key Data Structures with ease.
        </p>
      </motion.section>

      {/* Notes Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {notes.map((note, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
            viewport={{ once: true }}
            className="group bg-purple-50 dark:bg-purple-800 rounded-xl p-6 shadow-md hover:shadow-lg transition-all border border-purple-100 dark:border-purple-700"
          >
            <div className="mb-2">
              <span className="inline-block text-xs bg-purple-200 dark:bg-purple-700 text-purple-800 dark:text-purple-200 px-2 py-1 rounded">
                {note.tag}
              </span>
            </div>
            <h2 className="text-xl font-semibold text-purple-900 dark:text-purple-100">
              {note.title}
            </h2>
            <p className="text-sm text-purple-700 dark:text-purple-300 mt-1">{note.description}</p>
            <a
              href={note.url}
              target="_blank"
              rel="noopener noreferrer"
              download
              className="mt-4 inline-flex items-center gap-2 text-white bg-purple-600 hover:bg-purple-700 dark:bg-purple-500 dark:hover:bg-purple-600 px-4 py-2 rounded-md text-sm font-medium transition"
            >
              <FileDown className="w-4 h-4" /> Download PDF
            </a>
          </motion.div>
        ))}

        {/* Coming Soon Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: notes.length * 0.1 }}
          viewport={{ once: true }}
          className="flex flex-col justify-center items-center p-6 text-center rounded-xl bg-gray-100 dark:bg-gray-800 border border-dashed border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-400"
        >
          <Loader2 className="w-8 h-8 animate-spin text-purple-400 mb-3" />
          <h3 className="text-xl font-semibold mb-2">More Notes Coming Soon</h3>
          <p className="text-sm">
            Handwritten sheets, cheatbooks, and topic-wise DSA PDFs are in progress. Stay tuned!
          </p>
        </motion.div>
      </section>
    </main>
  );
}
