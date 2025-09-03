import { GrClear } from 'react-icons/gr';

interface ClearGridProps {
  handleClearGrid: () => void;
}

const ClearGrid = ({ handleClearGrid }: ClearGridProps) => {
  return (
    <>
      <div className="grid-controls_clear">
        <button onClick={handleClearGrid}>
          <GrClear /> Clear Grid
        </button>
      </div>
    </>
  );
};

export default ClearGrid;
