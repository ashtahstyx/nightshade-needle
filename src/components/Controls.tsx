import '../styles/Nightshade.scss';

interface ControlsProps {
  rows: number;
  cols: number;
  setRows: (val: number) => void;
  setCols: (val: number) => void;
  handleGridSizeChange: () => void;
  zoom: number;
  zoomIn: () => void;
  zoomOut: () => void;
  resetZoom: () => void;
  handleClearGrid: () => void;
}

const Controls = ({
  rows,
  cols,
  setRows,
  setCols,
  handleGridSizeChange,
  zoom,
  zoomIn,
  zoomOut,
  resetZoom,
  handleClearGrid,
}: ControlsProps) => {
  return (
    <div className="controls">
      <div className="controls-size">
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
      <div className="controls-zoom">
        <button onClick={zoomOut}>−</button>
        <span>{Math.round(zoom * 100)}%</span>
        <button onClick={zoomIn}>+</button>
        <button onClick={resetZoom}>Reset</button>
      </div>

      <button onClick={handleClearGrid}>Clear Grid</button>
    </div>
  );
};

export default Controls;
