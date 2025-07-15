'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ControlPanel from '@/components/queue/ControlPanel';
import PeekBanner from '@/components/TopBanner';
import { useToast } from '../ToastProvider';
import { ArrowRight } from 'lucide-react'; // ← if using lucide icons

export default function QueueVisualizer() {
  const [queue, setQueue] = useState<string[]>([]);
  const [input, setInput] = useState('');
  const { showToast } = useToast();
  const [peeked, setPeeked] = useState<string | null>(null);

  const handleEnqueue = () => {
    if (!input.trim()) return;
    setQueue([...queue, input]);
    setInput('');
  };

  const handleDequeue = () => {
    if (queue.length === 0) return showToast('Queue is empty');
    setQueue((prev) => prev.slice(1));
  };

  const handlePeek = () => {
    if (queue.length === 0) return showToast('Queue is empty');
    setPeeked(queue[0]);
  };

  const handleReset = () => setQueue([]);

  return (
    <div className="flex flex-col items-center">
      {peeked && <PeekBanner value={peeked} label="Front" onClose={() => setPeeked(null)} />}

      <ControlPanel
        input={input}
        onChange={setInput}
        onEnqueue={handleEnqueue}
        onDequeue={handleDequeue}
        onPeek={handlePeek}
        onReset={handleReset}
      />

      {/* Queue Size Badge */}
      <div className="mt-4 text-sm text-gray-600">
        Queue Size: <span className="font-semibold text-green-600">{queue.length}</span>
      </div>

      {/* Queue Items */}
      <div className="mt-4 w-full max-w-6xl px-4 overflow-x-auto">
        <div className="flex items-center gap-4 min-w-[300px]">
          <AnimatePresence mode="popLayout">
            {queue.map((item, index) => (
              <motion.div
                key={item + '-' + index + '-' + queue.length}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="relative bg-green-500 text-white px-6 py-3 rounded-lg shadow font-semibold min-w-[80px] text-center"
              >
                {item}
                {index < queue.length - 1 && (
                  <ArrowRight
                    className="absolute -right-4 top-1/2 transform -translate-y-1/2 text-gray-400"
                    size={20}
                  />
                )}
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
