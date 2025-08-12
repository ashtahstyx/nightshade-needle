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
    <div className="ruler-wrapper">
      <div className="ruler-wrapper_Row" style={{ height: cellSize }}>
        <div style={{ width: cellSize }} />
        <div className="ruler-wrapper_topRuler" style={{ display: 'flex' }}>
          {Array.from({ length: cols }).map((_, colIdx) => (
            <div
              key={`top-${colIdx}`}
              style={{
                width: cellSize,
                height: cellSize,
                textAlign: 'left',
                lineHeight: `${cellSize}px`,
              }}>
              <div className="rulerCell">
                {colIdx % 5 === 0 && (
                  <>
                    <div className="tick" />
                    <span>{colIdx}</span>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="ruler-wrapper_Content">
        <div className="ruler-wrapper_sideRuler">
          {Array.from({ length: rows }).map((_, rowIdx) => (
            <div
              className="rulerCell"
              key={`side-${rowIdx}`}
              style={{
                width: cellSize,
                height: cellSize,
                textAlign: 'right',
                lineHeight: `${cellSize}px`,
              }}>
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
    </div>
  );
};

export default GridWithRuler;
