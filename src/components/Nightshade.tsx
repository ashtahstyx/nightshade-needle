// src/components/Cross.tsx
import { useState } from 'react';
import { FLOSS_BRANDS } from '../database/flossColors';
import { AIDA_COLORS } from '../database/aidaColors';
import Header from './Header';
import Sidebar from './SideBar';
import Grid from './Grid';
import Controls from './Controls';
import '../styles/Nightshade.scss';

const Cross = () => {
  const [selectedColor, setSelectedColor] = useState('#000000');
  const [aidaColor, setAidaColor] = useState(AIDA_COLORS[0].hex);
  const [rows, setRows] = useState(50);
  const [cols, setCols] = useState(50);
  const [grid, setGrid] = useState<string[][]>(
    Array.from({ length: 50 }, () => Array(50).fill(AIDA_COLORS[0].hex))
  );
  const [brand, setBrand] = useState<keyof typeof FLOSS_BRANDS>('DMC');
  const [hoveredColor, setHoveredColor] = useState<{
    x: number;
    y: number;
    info: string;
  } | null>(null);
  const [removeMode, setRemoveMode] = useState(false);

  // Zoom state and handlers
  const [zoom, setZoom] = useState(1);
  const zoomIn = () => setZoom((z) => Math.min(z + 0.1, 3));
  const zoomOut = () => setZoom((z) => Math.max(z - 0.1, 0.5));
  const resetZoom = () => setZoom(1);

  // Drawing state
  const [isDrawing, setIsDrawing] = useState(false);

  const handleCellClick = (row: number, col: number, remove: boolean) => {
    const newGrid = grid.map((r) => [...r]);
    if (remove) {
      newGrid[row][col] = '';
    } else {
      newGrid[row][col] = selectedColor;
    }
    setGrid(newGrid);
  };

  const handleGridSizeChange = () => {
    setGrid(Array.from({ length: rows }, () => Array(cols).fill(aidaColor)));
  };

  const handleAidaChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newColor = e.target.value;
    setAidaColor(newColor);
    setGrid(Array.from({ length: rows }, () => Array(cols).fill(newColor)));
  };

  const handleClearGrid = () => {
    setGrid(Array.from({ length: rows }, () => Array(cols).fill(aidaColor)));
  };

  return (
    <div className="nightshade">
      <Header />
      <div className="nightshade-needle">
        <Sidebar
          AIDA_COLORS={AIDA_COLORS}
          aidaColor={aidaColor}
          handleAidaChange={handleAidaChange}
          FLOSS_BRANDS={FLOSS_BRANDS}
          brand={brand}
          setBrand={setBrand}
          selectedColor={selectedColor}
          setSelectedColor={setSelectedColor}
          hoveredColor={hoveredColor}
          setHoveredColor={setHoveredColor}
          removeMode={removeMode}
          setRemoveMode={setRemoveMode}
        />

        <div className="nightshade-needle_container">
          <Controls
            rows={rows}
            cols={cols}
            setRows={setRows}
            setCols={setCols}
            handleGridSizeChange={handleGridSizeChange}
            zoom={zoom}
            zoomIn={zoomIn}
            zoomOut={zoomOut}
            resetZoom={resetZoom}
            handleClearGrid={handleClearGrid}
          />

          <Grid
            grid={grid}
            onCellClick={handleCellClick}
            aidaColor={aidaColor}
            removeMode={removeMode}
            zoom={zoom}
            isDrawing={isDrawing}
            setIsDrawing={setIsDrawing}
          />
        </div>
      </div>
    </div>
  );
};

export default Cross;
