type ControlPanelProps = {
  value: string;
  index: string;
  onValueChange: (val: string) => void;
  onIndexChange: (val: string) => void;
  onInsert: () => void;
  onDelete: () => void;
  onSearch: () => void;
  onReset: () => void;
};

export default function ControlPanel({
  value,
  index,
  onValueChange,
  onIndexChange,
  onInsert,
  onDelete,
  onSearch,
  onReset,
}: ControlPanelProps) {
  return (
    <div className="flex flex-wrap gap-2 justify-center items-center mb-4">
      <input
        type="text"
        value={value}
        onChange={(e) => onValueChange(e.target.value)}
        placeholder="Value"
        className="border rounded px-3 py-1"
      />
      <input
        type="number"
        value={index}
        onChange={(e) => onIndexChange(e.target.value)}
        placeholder="Index"
        className="border rounded px-3 py-1 w-24"
      />
      <button onClick={onInsert} className="bg-purple-500 text-white px-4 py-1 rounded">Insert</button>
      <button onClick={onDelete} className="bg-red-500 text-white px-4 py-1 rounded">Delete</button>
      <button onClick={onSearch} className="bg-blue-500 text-white px-4 py-1 rounded">Search</button>
      <button onClick={onReset} className="bg-gray-600 text-white px-4 py-1 rounded">Reset</button>
    </div>
  );
}
