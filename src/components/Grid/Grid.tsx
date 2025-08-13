import React from 'react';
import { getContrastColor } from '../../helper/contrast-helper';
import './Grid.scss';

interface GridProps {
  grid: string[][];
  onCellClick: (row: number, col: number, removeMode: boolean) => void;
  aidaColor: string; // background color of entire grid
  removeMode: boolean;
  zoom: number;
  isDrawing: boolean;
  setIsDrawing: (val: boolean) => void;
}

const Grid = ({
  grid,
  onCellClick,
  aidaColor,
  removeMode,
  zoom,
  isDrawing,
  setIsDrawing,
}: GridProps) => {
  const handleMouseDown = (row: number, col: number) => {
    onCellClick(row, col, removeMode);
    setIsDrawing(true);
  };

  const handleMouseEnter = (row: number, col: number, e: React.MouseEvent) => {
    if (isDrawing && e.buttons === 1) {
      onCellClick(row, col, removeMode);
    }
  };

  const handleMouseUp = () => {
    setIsDrawing(false);
  };

  return (
    <div
      id="crossStitchGrid"
      className="gridContainer"
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}>
      <div
        className="gridContainer_grid"
        style={{
          backgroundColor: aidaColor,
          transform: `scale(${zoom})`,
          transformOrigin: 'top left',
        }}>
        {grid.map((row, rowIndex) => (
          <div className="gridContainer_row" key={rowIndex}>
            {row.map((color, colIndex) => {
              const fill = color || 'transparent';

              const borderColor = getContrastColor(color || aidaColor);

              return (
                <div
                  key={colIndex}
                  className="gridContainer_cell"
                  data-color={fill}
                  style={
                    {
                      '--border-color': borderColor,
                      '--fill-color': fill,
                    } as React.CSSProperties
                  }
                  onMouseDown={() => handleMouseDown(rowIndex, colIndex)}
                  onMouseEnter={(e) => handleMouseEnter(rowIndex, colIndex, e)}
                />
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Grid;
