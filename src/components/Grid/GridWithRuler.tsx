import Grid from './Grid';
import './Grid.scss';

const BASE_CELL_SIZE = 20;

interface GridWithRulerProps {
  grid: string[][];
  aidaColor: string;
  zoom: number;
  onCellClick: (row: number, col: number, removeMode: boolean) => void;
  removeMode: boolean;
  isDrawing: boolean;
  setIsDrawing: (val: boolean) => void;
}

const GridWithRuler = ({
  grid,
  aidaColor,
  zoom,
  onCellClick,
  removeMode,
  isDrawing,
  setIsDrawing,
}: GridWithRulerProps) => {
  const cellSize = BASE_CELL_SIZE * zoom;
  const rows = grid.length;
  const cols = grid[0]?.length || 0;

  return (
    <div
      className="grid-ruler_wrapper"
      style={{ '--cell-size': `${cellSize}px` } as any}>
      <div className="corner" />

      <div className="grid-ruler_wrapper-top">
        {Array.from({ length: cols }).map((_, colIdx) => (
          <div key={colIdx} className="ruler-cell">
            {colIdx % 5 === 0 ? colIdx : ''}
          </div>
        ))}
      </div>

      <div className="grid-ruler_wrapper-side">
        {Array.from({ length: rows }).map((_, rowIdx) => (
          <div key={rowIdx} className="ruler-cell">
            {rowIdx % 5 === 0 ? rowIdx : ''}
          </div>
        ))}
      </div>

      <Grid
        grid={grid}
        onCellClick={onCellClick}
        aidaColor={aidaColor}
        removeMode={removeMode}
        zoom={zoom}
        isDrawing={isDrawing}
        setIsDrawing={setIsDrawing}
      />
    </div>
  );
};

export default GridWithRuler;
