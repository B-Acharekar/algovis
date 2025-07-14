type QueueControlPanelProps = {
  input: string;
  onChange: (val: string) => void;
  onEnqueue: () => void;
  onDequeue: () => void;
  onPeek: () => void;
  onReset: () => void;
};

export default function QueueControlPanel({
  input,
  onChange,
  onEnqueue,
  onDequeue,
  onPeek,
  onReset,
}: QueueControlPanelProps) {
  return (
    <div className="flex gap-2">
      <input
        type="text"
        value={input}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            e.preventDefault();
            onEnqueue();
          }
        }}
        className="border border-gray-400 rounded px-2 py-1"
        placeholder="Enter value"
      />
      <button onClick={onEnqueue} className="bg-green-500 text-white px-4 py-1 rounded">Enqueue</button>
      <button onClick={onDequeue} className="bg-red-500 text-white px-4 py-1 rounded">Dequeue</button>
      <button onClick={onPeek} className="bg-blue-500 text-white px-4 py-1 rounded">Peek</button>
      <button onClick={onReset} className="bg-gray-600 text-white px-4 py-1 rounded">Reset</button>
    </div>
  );
}
