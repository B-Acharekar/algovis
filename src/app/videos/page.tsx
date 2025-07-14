'use client';

import { ExternalLink, Video, Loader2 } from 'lucide-react';
import { motion } from 'framer-motion';

type VideoItem = {
  title: string;
  url: string;
  embedId: string;
  channel: string;
};

const videos: VideoItem[] = [
  {
    title: 'Stack Data Structure – Visual Algo',
    url: 'https://www.youtube.com/watch?v=i4YZl2cQmZ8',
    embedId: 'i4YZl2cQmZ8',
    channel: 'Visual Algo',
  },
  {
    title: 'Queue Data Structure – mycodeschool',
    url: 'https://www.youtube.com/watch?v=okr-XE8yTO8',
    embedId: 'okr-XE8yTO8',
    channel: 'mycodeschool',
  },
  {
    title: 'Stack Animation Explained – Visual How',
    url: 'https://www.youtube.com/watch?v=-qsKQVpGPKs',
    embedId: '-qsKQVpGPKs',
    channel: 'Visual How',
  },
  {
    title: 'Linked List Crash Course – freeCodeCamp',
    url: 'https://www.youtube.com/watch?v=Hj_rA0dhr2I',
    embedId: 'Hj_rA0dhr2I',
    channel: 'freeCodeCamp.org',
  },
];

export default function YouTubePage() {
  return (
    <main className="min-h-screen px-4 py-16 bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-950 transition-colors text-gray-800 dark:text-gray-100">

      {/* Header */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-14"
      >
        <div className="inline-flex items-center justify-center gap-3 text-red-700 dark:text-red-400 text-5xl font-bold mb-4">
          <Video className="w-10 h-10" />
          Master DSA with Videos
        </div>
        <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
          Premium-grade, handpicked visual resources to help you understand core data structures faster and better — absolutely free.
        </p>
      </motion.section>

      {/* Video Grid */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-2">
        {videos.map((video, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
            viewport={{ once: true }}
            className="rounded-xl overflow-hidden shadow-lg dark:shadow-md bg-white dark:bg-gray-800 hover:scale-[1.01] transition-all border border-gray-200 dark:border-gray-700"
          >
            <div className="aspect-video">
              <iframe
                src={`https://www.youtube.com/embed/${video.embedId}`}
                title={video.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
            <div className="p-5">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">{video.title}</h2>
              <p className="text-sm text-gray-600 dark:text-gray-300">{video.channel}</p>
              <a
                href={video.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center gap-1 text-sm text-red-600 dark:text-red-300 hover:underline"
              >
                Watch on YouTube <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        ))}

        {/* Coming Soon */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: videos.length * 0.1 }}
          viewport={{ once: true }}
          className="flex items-center justify-center text-center p-6 rounded-xl border border-dashed border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400"
        >
          <div>
            <Loader2 className="w-7 h-7 animate-spin mb-3 mx-auto text-red-400" />
            <h3 className="text-xl font-semibold mb-1">More Videos Coming Soon</h3>
            <p className="text-sm">
              Visuals for Trees, Graphs, Hashing and more are being curated. Stay tuned!
            </p>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
