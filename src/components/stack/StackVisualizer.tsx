'use client';

import { useState } from 'react';
import { useToast } from '@/components/ToastProvider';
import ControlPanel from '@/components/stack/ControlPanel';
import PeekBanner from '@/components/TopBanner';
import { motion, AnimatePresence } from 'framer-motion';

export default function StackVisualizer() {
    const [stack, setStack] = useState<string[]>([]);
    const [input, setInput] = useState('');
    const { showToast } = useToast(); // << use context
    const [peeked, setPeeked] = useState<string | null>(null);

    const handlePush = () => {
        if (!input.trim()) return;
        setStack([...stack, input]);
        setInput('');
    };

    const handlePop = () => setStack((prev) => prev.slice(0, -1));
    
    const handlePeek = () => {
        if (stack.length === 0) return showToast('Stack is empty');
        setPeeked(stack[stack.length - 1]);
    };

    const handleReset = () => setStack([]);

    return (
        <div className="flex flex-col items-center">
            {peeked && <PeekBanner value={peeked} label="Top" onClose={() => setPeeked(null)} />}

            <ControlPanel
                input={input}
                onChange={setInput}
                onPush={handlePush}
                onPop={handlePop}
                onPeek={handlePeek}
                onReset={handleReset}
            />

            <div className="flex flex-col-reverse items-center mt-10 space-y-2 space-y-reverse">
                <AnimatePresence>
                    {stack.map((item, index) => (
                        <motion.div
                            key={item + index}
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.8, y: 20 }}
                            transition={{ duration: 0.3 }}
                            layout
                            className="bg-blue-400 text-white w-32 text-center py-2 rounded shadow-md"
                        >
                            {item}
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>
        </div>
    );
}
