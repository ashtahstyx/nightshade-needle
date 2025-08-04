// src/components/Grid.tsx
import React, { useState } from 'react';
import { getContrastColor } from '../helper/contrast-helper';
import '../styles/Nightshade.scss';

interface GridProps {
  grid: string[][];
  onCellClick: (row: number, col: number, removeMode: boolean) => void;
  aidaColor: string;
  removeMode: boolean;
}

const Grid = ({ grid, onCellClick, aidaColor, removeMode }: GridProps) => {
  const [zoom, setZoom] = useState(1);
  const zoomIn = () => setZoom((z) => Math.min(z + 0.1, 3));
  const zoomOut = () => setZoom((z) => Math.max(z - 0.1, 0.5));
  const resetZoom = () => setZoom(1);

  const handleWheel = (e: React.WheelEvent<HTMLDivElement>) => {
    if (e.ctrlKey || e.metaKey) {
      e.preventDefault();
      const delta = e.deltaY > 0 ? -0.1 : 0.1;
      setZoom((prevZoom) => Math.min(Math.max(prevZoom + delta, 0.5), 3));
    }
  };

  return (
    <div className="gridContainer">
      <div className="zoom-controls">
        <button onClick={zoomOut}>−</button>
        <button onClick={resetZoom}>Reset</button>
        <button onClick={zoomIn}>+</button>
      </div>
      <div
        className="gridContainer_grid"
        style={{
          backgroundColor: aidaColor,
          transform: `scale(${zoom})`,
          transformOrigin: 'top center',
        }}
        onWheel={handleWheel}>
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
                  onClick={() => onCellClick(rowIndex, colIndex, removeMode)}
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
