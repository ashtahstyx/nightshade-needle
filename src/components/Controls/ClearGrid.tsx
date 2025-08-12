interface ClearGridProps {
  handleClearGrid: () => void;
}

const ClearGrid = ({ handleClearGrid }: ClearGridProps) => {
  return (
    <>
      <button onClick={handleClearGrid}>Clear Grid</button>
    </>
  );
};

export default ClearGrid;
