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
    <div className="flex flex-wrap gap-2 justify-center items-center w-full px-4 mt-4">
      <input
        type="text"
        value={value}
        onChange={(e) => onValueChange(e.target.value)}
        placeholder="Value"
        className="border border-gray-400 rounded px-3 py-2 text-sm w-full sm:w-40"
      />
      <input
        type="number"
        value={index}
        onChange={(e) => onIndexChange(e.target.value)}
        placeholder="Index"
        className="border border-gray-400 rounded px-3 py-2 text-sm w-full sm:w-24"
      />
      <button onClick={onInsert} className="btn-purple">Insert</button>
      <button onClick={onDelete} className="btn-red">Delete</button>
      <button onClick={onSearch} className="btn-blue">Search</button>
      <button onClick={onReset} className="btn-gray">Reset</button>
    </div>
  );
}

