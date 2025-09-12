interface GridSizeProps {
  rows: number;
  cols: number;
  setRows: (val: number) => void;
  setCols: (val: number) => void;
  handleGridSizeChange: () => void;
}

const GridSize = ({
  rows,
  cols,
  setRows,
  setCols,
  handleGridSizeChange,
}: GridSizeProps) => {
  return (
    <>
      <div className="grid-controls_size">
        <h4>Grid Size</h4>
        <label>
          Rows:
          <input
            type="number"
            value={rows}
            onChange={(e) => setRows(Number(e.target.value))}
            min={1}
            max={500}
          />
        </label>
        <label>
          Columns:
          <input
            type="number"
            value={cols}
            onChange={(e) => setCols(Number(e.target.value))}
            min={1}
            max={500}
          />
        </label>
        <button onClick={handleGridSizeChange}>Update Grid</button>
      </div>
    </>
  );
};

export default GridSize;
