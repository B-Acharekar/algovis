// components/linkedlist/Visualizer.tsx
'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ControlPanel from './ControlPanel';
import { useToast } from '../ToastProvider';
import { ArrowRight } from 'lucide-react';
import InfoTooltip from '@/components/InfoTooltip';


// ℹ️ Singly Linked List - insert/delete/search with index and value.
// ⚠️ Indexes must be continuous; skipping indexes (like insert at 3 when only index 0 exists) is invalid.

class Node {
    value: string;
    next: Node | null;

    constructor(value: string) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    head: Node | null = null;

    insertAt(index: number, value: string) {
        const newNode = new Node(value);

        if (index === 0) {
            newNode.next = this.head;
            this.head = newNode;
            return;
        }

        let prev: Node | null = this.head;
        let currentIndex = 0;

        while (prev !== null && currentIndex < index - 1) {
            prev = prev.next;
            currentIndex++;
        }

        if (prev === null) {
            throw new Error(
                'Invalid index: You can only insert at continuous positions starting from 0. Singly linked list does not support index skipping.'
            );
        }

        newNode.next = prev.next;
        prev.next = newNode;
    }

    deleteAt(index: number) {
        if (!this.head) throw new Error('List is empty');
        if (index === 0) {
            this.head = this.head.next;
            return;
        }
        let prev: Node | null = this.head;
        let currentIndex = 0;
        while (prev && currentIndex < index - 1) {
            prev = prev.next;
            currentIndex++;
        }
        if (!prev || !prev.next) throw new Error('Invalid index: Nothing to delete at that position');
        prev.next = prev.next.next;
    }

    search(value: string): number {
        let current = this.head;
        let index = 0;
        while (current) {
            if (current.value === value) return index;
            current = current.next;
            index++;
        }
        return -1;
    }

    toArray(): string[] {
        const result: string[] = [];
        let current = this.head;
        while (current) {
            result.push(current.value);
            current = current.next;
        }
        return result;
    }

    reset() {
        this.head = null;
    }
}

export default function LinkedListVisualizer() {
    const [list] = useState(new LinkedList());
    const [renderList, setRenderList] = useState<string[]>([]);
    const [value, setValue] = useState('');
    const [index, setIndex] = useState('');
    const [highlighted, setHighlighted] = useState<number | null>(null);
    const { showToast } = useToast();

    const updateRender = () => setRenderList([...list.toArray()]);

    const handleInsert = () => {
        try {
            if (!value.trim()) return;
            const i = parseInt(index);
            if (isNaN(i) || i < 0) return showToast('Invalid index');
            list.insertAt(i, value);
            setValue('');
            setIndex('');
            updateRender();
        } catch (err) {
            showToast((err as Error).message);
        }
    };

    const handleDelete = () => {
        try {
            const i = parseInt(index);
            if (isNaN(i) || i < 0) return showToast('Invalid index');
            list.deleteAt(i);
            setIndex('');
            updateRender();
        } catch (err) {
            showToast((err as Error).message);
        }
    };

    const handleSearch = () => {
        const i = list.search(value);
        if (i === -1) return showToast('Value not found');
        setHighlighted(i);
        setTimeout(() => setHighlighted(null), 1500);
    };

    const handleReset = () => {
        list.reset();
        setValue('');
        setIndex('');
        updateRender();
    };

    return (
        <div className="flex flex-col items-center">
            <div className="flex items-center gap-2 mt-2 mb-2">
                <h2 className="text-lg font-semibold text-gray-700">
                    Singly Linked List
                </h2>
                <InfoTooltip>
                    <div className="space-y-1">
                        <p><strong>Insert:</strong> Allowed only at continuous indexes from <code>0</code> to current length.</p>
                        <p><strong>Delete:</strong> Requires a valid existing index. Cannot delete from an empty list.</p>
                        <p><strong>Search:</strong> Highlights the first node that matches the entered value.</p>
                        <p className="text-yellow-300">Skipping indexes (e.g., inserting at 3 when only index 0 exists) will show an error.</p>
                    </div>
                </InfoTooltip>
            </div>

            <ControlPanel
                value={value}
                index={index}
                onValueChange={setValue}
                onIndexChange={setIndex}
                onInsert={handleInsert}
                onDelete={handleDelete}
                onSearch={handleSearch}
                onReset={handleReset}
            />

            <div className="flex flex-wrap justify-center items-center gap-4 mt-4">
                <AnimatePresence>
                    {renderList.map((item, i) => (
                        <div className="flex items-center" key={item + i + renderList.length}>
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.6 }}
                                transition={{ duration: 0.3 }}
                                className={`px-6 py-3 rounded-lg shadow-md font-semibold text-white min-w-[80px] text-center ${highlighted === i ? 'bg-yellow-500' : 'bg-purple-600'
                                    }`}
                            >
                                {item}
                            </motion.div>
                            {i !== renderList.length - 1 && <ArrowRight className="text-purple-600 w-6 h-6 mx-2" />}
                        </div>
                    ))}
                </AnimatePresence>
            </div>
        </div>
    );
}