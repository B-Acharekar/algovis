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
    <div className="flex flex-wrap gap-2 justify-center items-center mt-4 w-full px-2">
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
        className="border border-gray-400 rounded px-3 py-2 w-full sm:w-40"
        placeholder="Enter value"
      />
      <button onClick={onEnqueue} className="btn-green">Enqueue</button>
      <button onClick={onDequeue} className="btn-red">Dequeue</button>
      <button onClick={onPeek} className="btn-blue">Peek</button>
      <button onClick={onReset} className="btn-gray">Reset</button>
    </div>
  );
}
