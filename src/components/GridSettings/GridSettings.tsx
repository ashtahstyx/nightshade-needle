import Drawer from '../Drawer/Drawer';
import AidaColor from '../Controls/AidaColorPicker';
import ZoomControl from '../Controls/Zoom';
import GridSizeControl from '../Controls/GridSize';
import ClearGrid from '../Controls/ClearGrid';
import SaveButton from '../Controls/SaveButton';
import './GridSettings.scss';

interface GridSettingsProps {
  AIDA_COLORS: { name: string; hex: string }[];
  aidaColor: string;
  handleAidaChange: (hex: string) => void;
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

const GridSettings = ({ ...props }: GridSettingsProps) => {
  return (
    <div className="nightshade_grid-settings">
      <SaveButton gridId="crossStitchGrid" paletteId="crossStitchPalette" />
      <ClearGrid {...props} />
      <Drawer title="Aida Options">
        <div className="grid-controls">
          <AidaColor {...props} />
          <GridSizeControl {...props} />
          <ZoomControl {...props} />
        </div>
      </Drawer>
    </div>
  );
};

export default GridSettings;
