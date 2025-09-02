interface ClearGridProps {
  handleClearGrid: () => void;
}

const ClearGrid = ({ handleClearGrid }: ClearGridProps) => {
  return (
    <>
      <div className="grid-controls_clear">
        <button onClick={handleClearGrid}>Clear Grid</button>
      </div>
    </>
  );
};

export default ClearGrid;
