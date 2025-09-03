import { type Dispatch, type SetStateAction } from 'react';
import EraseToggle from '../Controls/EraseToggle';
import Drawer from '../Drawer/Drawer';
import FlossColorPicker from '../Controls/FlossColorPicker';
import ColorPalette from '../Controls/ColorPallete';
import { FLOSS_BRANDS } from '../../database/flossColors';
import './DrawSettings.scss';

type Brand = keyof typeof FLOSS_BRANDS;

interface FlossColor {
  code: string;
  name: string;
  hex: string;
}

interface DrawSettingsProps {
  FLOSS_BRANDS: Record<Brand, FlossColor[]>;
  brand: Brand;
  setBrand: Dispatch<SetStateAction<Brand>>;
  setHoveredColor: Dispatch<
    SetStateAction<{ x: number; y: number; info: string } | null>
  >;
  selectedColor: string;
  setSelectedColor: (color: string) => void;
  hoveredColor: { x: number; y: number; info: string } | null;
  removeMode: boolean;
  setRemoveMode: (val: boolean) => void;
  palette: string[];
  onSelect: (color: string) => void;
  flossMap: Record<string, FlossColor>;
  removeColorFromPalette: (color: string) => void;
}

const DrawSettings = ({ ...props }: DrawSettingsProps) => {
  return (
    <div className="nightshade_draw-settings">
      <EraseToggle {...props} />

      <ColorPalette {...props} />
      <Drawer title="Floss Color">
        <FlossColorPicker {...props} />
      </Drawer>
    </div>
  );
};

export default DrawSettings;
