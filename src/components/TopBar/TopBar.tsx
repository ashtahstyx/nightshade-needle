// Problem: <ClearGrid /> expects only `handleClearGrid`, but you're passing all of `TopBarProps` to it.
// Fix: Pass only `handleClearGrid` to <ClearGrid /> explicitly.

import ZoomControl from '../Controls/Zoom';
import GridSizeControl from '../Controls/GridSize';
import ClearGrid from '../Controls/ClearGrid';
import SaveButton from '../Controls/SaveButton';
import './TopBar.scss';

interface TopBarProps {
  rows: number;
  cols: number;
  setRows: (val: number) => void;
  setCols: (val: number) => void;
  handleGridSizeChange: () => void;
  zoom: number;
  zoomIn: () => void;
  zoomOut: () => void;
  resetZoom: () => void;
  handleClearGrid: () => void;
}

const TopBar = ({
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
}: TopBarProps) => {
  return (
    <div className="nightshade_topbar">
      <GridSizeControl
        rows={rows}
        cols={cols}
        setRows={setRows}
        setCols={setCols}
        handleGridSizeChange={handleGridSizeChange}
      />
      <ZoomControl
        zoom={zoom}
        zoomIn={zoomIn}
        zoomOut={zoomOut}
        resetZoom={resetZoom}
      />
      <ClearGrid handleClearGrid={handleClearGrid} />
      <SaveButton gridId="crossStitchGrid" paletteId="crossStitchPalette" />
    </div>
  );
};

export default TopBar;
