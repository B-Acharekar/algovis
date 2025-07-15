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
    <div className="flex flex-wrap gap-2 justify-center items-center mt-4 w-full px-2">
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
        className="border border-gray-400 rounded px-3 py-2 w-full sm:w-40"
        placeholder="Enter value"
      />
      <button onClick={onPush} className="btn-blue">Push</button>
      <button onClick={onPop} className="btn-red">Pop</button>
      <button onClick={onPeek} className="btn-green">Peek</button>
      <button onClick={onReset} className="btn-gray">Reset</button>
    </div>
  );
}

