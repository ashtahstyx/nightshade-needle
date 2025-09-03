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
      <Drawer title="Aida Color">
        <AidaColor {...props} />
      </Drawer>
      <GridSizeControl {...props} />
      <ZoomControl {...props} />
      <ClearGrid {...props} />
      <SaveButton gridId="crossStitchGrid" paletteId="crossStitchPalette" />
    </div>
  );
};

export default GridSettings;
