type ControlPanelProps = {
  input: string;
  onChange: (val: string) => void;
  onPush: () => void;
  onPop: () => void;
  onPeek: () => void;
  onReset: () => void;
};

export default function ControlPanel({
  input,
  onChange,
  onPush,
  onPop,
  onPeek,
  onReset,
}: ControlPanelProps) {
  return (
    <div className="flex gap-2">
      <input
        type="text"
        value={input}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            e.preventDefault();
            onPush();
          }
        }}
        className="border border-gray-400 rounded px-2 py-1"
        placeholder="Enter value"
      />
      <button onClick={onPush} className="bg-blue-500 text-white px-4 py-1 rounded">Push</button>
      <button onClick={onPop} className="bg-red-500 text-white px-4 py-1 rounded">Pop</button>
      <button onClick={onPeek} className="bg-green-500 text-white px-4 py-1 rounded">Peek</button>
      <button onClick={onReset} className="bg-gray-600 text-white px-4 py-1 rounded">Reset</button>
    </div>
  );
}
