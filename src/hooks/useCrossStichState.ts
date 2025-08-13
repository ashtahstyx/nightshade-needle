import { useState, useMemo, useEffect } from 'react';
import { FLOSS_BRANDS } from '../database/flossColors';
import { AIDA_COLORS } from '../database/aidaColors';
import { getFlossHexMap } from '../database/flossService';

const STORAGE_KEY = 'crossStitchAppState';

const createEmptyGrid = (rows: number, cols: number) =>
  Array.from({ length: rows }, () => Array(cols).fill(''));

export default function useCrossStitchState() {
  // -------------------------
  // Load Saved State
  // -------------------------
  const savedState =
    typeof window !== 'undefined'
      ? JSON.parse(localStorage.getItem(STORAGE_KEY) || 'null')
      : null;

  // -------------------------
  // Core State
  // -------------------------
  const [rows, setRows] = useState(savedState?.rows || 100);
  const [cols, setCols] = useState(savedState?.cols || 100);
  const [grid, setGrid] = useState<string[][]>(
    savedState?.grid || createEmptyGrid(rows, cols)
  );

  const [selectedColor, setSelectedColor] = useState(
    savedState?.selectedColor || '#000000'
  );
  const [brand, setBrand] = useState(savedState?.brand || 'DMC');

  // Aida background (single solid color, not stored in cells)
  const [aidaColor, setAidaColor] = useState(
    savedState?.aidaColor || AIDA_COLORS[0].hex
  );

  // Zoom and tools
  const [zoom, setZoom] = useState(savedState?.zoom || 1);
  const [removeMode, setRemoveMode] = useState(false);
  const [isDrawing, setIsDrawing] = useState(false);

  // Hover info
  const [hoveredColor, setHoveredColor] = useState<{
    x: number;
    y: number;
    info: string;
  } | null>(null);

  // Palette
  const [usedPalette, setUsedPalette] = useState<string[]>(
    savedState?.usedPalette || []
  );

  const flossMap = useMemo(() => getFlossHexMap(brand), [brand]);

  // -------------------------
  // Actions
  // -------------------------
  const addToPalette = (color: string) => {
    if (color && !usedPalette.includes(color)) {
      setUsedPalette((prev) => [...prev, color]);
    }
  };

  const handleSetSelectedColor = (color: string) => {
    setSelectedColor(color);
    addToPalette(color);
  };

  const handleCellClick = (row: number, col: number, remove = false) => {
    const newGrid = grid.map((r) => [...r]);
    newGrid[row][col] = remove ? '' : selectedColor;
    setGrid(newGrid);
    if (!remove) addToPalette(selectedColor);
  };

  const handleGridSizeChange = () => {
    setGrid(createEmptyGrid(rows, cols));
  };

  const handleClearGrid = () => {
    setGrid(createEmptyGrid(rows, cols));
  };

  const removeColorFromPalette = (colorToRemove: string) => {
    setUsedPalette((prev) => prev.filter((color) => color !== colorToRemove));
    setGrid((prev) =>
      prev.map((row) => row.map((cell) => (cell === colorToRemove ? '' : cell)))
    );
  };

  const zoomIn = () => setZoom((z: number) => Math.min(z + 0.1, 3));
  const zoomOut = () => setZoom((z: number) => Math.max(z - 0.1, 0.5));
  const resetZoom = () => setZoom(1);

  // -------------------------
  // Save to LocalStorage
  // -------------------------
  useEffect(() => {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({
        rows,
        cols,
        grid,
        selectedColor,
        brand,
        aidaColor,
        zoom,
        removeMode,
        usedPalette,
      })
    );
  }, [
    rows,
    cols,
    grid,
    selectedColor,
    brand,
    aidaColor,
    zoom,
    removeMode,
    usedPalette,
  ]);

  // -------------------------
  // Return grouped props
  // -------------------------
  return {
    sidebarProps: {
      AIDA_COLORS,
      aidaColor,
      handleAidaChange: setAidaColor,
      FLOSS_BRANDS,
      brand,
      setBrand,
      selectedColor,
      setSelectedColor: handleSetSelectedColor,
      hoveredColor,
      setHoveredColor,
      palette: usedPalette,
      flossMap,
      onSelect: handleSetSelectedColor,
      removeMode,
      setRemoveMode,
      rows,
      cols,
      setRows,
      setCols,
      handleGridSizeChange,
      zoom,
      zoomIn,
      zoomOut,
      resetZoom,
      removeColorFromPalette,
    },
    topbarProps: {
      AIDA_COLORS,
      aidaColor,
      handleAidaChange: setAidaColor,
      FLOSS_BRANDS,
      brand,
      setBrand,
      selectedColor,
      setSelectedColor: handleSetSelectedColor,
      hoveredColor,
      setHoveredColor,
      removeMode,
      setRemoveMode,
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
    },
    gridProps: {
      grid,
      onCellClick: handleCellClick,
      aidaColor,
      removeMode,
      zoom,
      isDrawing,
      setIsDrawing,
    },
  };
}
