import '../styles/Nightshade.scss';

interface ControlsProps {
  rows: number;
  cols: number;
  setRows: (val: number) => void;
  setCols: (val: number) => void;
  handleGridSizeChange: () => void;
}

const Controls = ({
  rows,
  cols,
  setRows,
  setCols,
  handleGridSizeChange,
}: ControlsProps) => {
  return (
    <div>
      <label>
        Rows:
        <input
          type="number"
          value={rows}
          onChange={(e) => setRows(Number(e.target.value))}
          min={1}
          max={100}
        />
      </label>
      <label>
        Columns:
        <input
          type="number"
          value={cols}
          onChange={(e) => setCols(Number(e.target.value))}
          min={1}
          max={100}
        />
      </label>
      <button onClick={handleGridSizeChange}>Update Grid</button>
    </div>
  );
};

export default Controls;
