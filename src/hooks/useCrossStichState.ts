import { useMemo, useState, useEffect } from 'react';
import { FLOSS_BRANDS } from '../database/flossColors';
import { AIDA_COLORS } from '../database/aidaColors';
import { getFlossHexMap } from '../database/flossService';

const STORAGE_KEY = 'crossStitchAppState';

const useCrossStitchState = () => {
  const savedState =
    typeof window !== 'undefined' && localStorage.getItem(STORAGE_KEY);
  const initialState = savedState ? JSON.parse(savedState) : null;

  const [selectedColor, setSelectedColor] = useState(
    initialState?.selectedColor || '#000000'
  );
  const [aidaColor, setAidaColor] = useState(
    initialState?.aidaColor || AIDA_COLORS[0].hex
  );
  const [rows, setRows] = useState(initialState?.rows || 100);
  const [cols, setCols] = useState(initialState?.cols || 100);
  const [grid, setGrid] = useState<string[][]>(
    initialState?.grid ||
      Array.from({ length: 100 }, () => Array(100).fill(AIDA_COLORS[0].hex))
  );
  const [brand, setBrand] = useState(initialState?.brand || 'DMC');

  const flossMap = useMemo(() => getFlossHexMap(brand), [brand]);

  const [hoveredColor, setHoveredColor] = useState<{
    x: number;
    y: number;
    info: string;
  } | null>(null);

  const [removeMode, setRemoveMode] = useState(false);
  const [zoom, setZoom] = useState(1);
  const [isDrawing, setIsDrawing] = useState(false);

  const [usedPalette, setUsedPalette] = useState<string[]>([
    AIDA_COLORS[0].hex,
  ]);

  useEffect(() => {
    setUsedPalette([]);
  }, [brand]);

  const addToPalette = (color: string) => {
    if (color && !usedPalette.includes(color)) {
      setUsedPalette((prev) => [...prev, color]);
    }
  };

  const handleSetSelectedColor = (color: string) => {
    setSelectedColor(color);
    addToPalette(color);
  };

  const handleCellClick = (row: number, col: number, remove: boolean) => {
    const newGrid = grid.map((r) => [...r]);
    const colorToApply = remove ? '' : selectedColor;
    newGrid[row][col] = colorToApply;
    setGrid(newGrid);
    if (!remove) {
      addToPalette(selectedColor);
    }
  };

  const handleGridSizeChange = () => {
    setGrid(Array.from({ length: rows }, () => Array(cols).fill(aidaColor)));
  };

  const handleAidaChange = (hex: string) => {
    setAidaColor(hex);
    setGrid(Array.from({ length: rows }, () => Array(cols).fill(hex)));
  };

  const handleClearGrid = () => {
    setGrid(Array.from({ length: rows }, () => Array(cols).fill(aidaColor)));
  };

  const zoomIn = () => setZoom((z) => Math.min(z + 0.1, 3));
  const zoomOut = () => setZoom((z) => Math.max(z - 0.1, 0.5));
  const resetZoom = () => setZoom(1);

  const removeColorFromPalette = (colorToRemove: string) => {
    setUsedPalette((prev) => prev.filter((color) => color !== colorToRemove));

    setGrid((prevGrid) =>
      prevGrid.map((row) =>
        row.map((cellColor) =>
          cellColor === colorToRemove ? aidaColor : cellColor
        )
      )
    );
  };

  useEffect(() => {
    const stateToSave = {
      selectedColor,
      aidaColor,
      rows,
      cols,
      grid,
      brand,
      usedPalette,
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(stateToSave));
  }, [selectedColor, aidaColor, rows, cols, grid, brand, usedPalette]);

  return {
    sidebarProps: {
      AIDA_COLORS,
      aidaColor,
      handleAidaChange,
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
      handleAidaChange,
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
};

export default useCrossStitchState;
