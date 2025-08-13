import type { Dispatch, SetStateAction } from 'react';
import AidaColor from '../Controls/AidaColorPicker';
import EraseToggle from '../Controls/EraseToggle';
import Drawer from '../Drawer/Drawer';
import FlossColorPicker from '../Controls/FlossColorPicker';
import ColorPalette from '../Controls/ColorPallete';
import { FLOSS_BRANDS } from '../../database/flossColors';
import './SideBar.scss';

type Brand = keyof typeof FLOSS_BRANDS;

interface FlossColor {
  code: string;
  name: string;
  hex: string;
}

interface SidebarProps {
  AIDA_COLORS: { name: string; hex: string }[];
  aidaColor: string;
  handleAidaChange: (hex: string) => void;
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

const Sidebar = ({ ...props }: SidebarProps) => {
  return (
    <div className="nightshade-needle_sidebar">
      <div className="grid-controls">
        <Drawer title="Aida Color">
          <AidaColor {...props} />
        </Drawer>
        <EraseToggle {...props} />
        <ColorPalette {...props} />
        <FlossColorPicker {...props} />
      </div>
    </div>
  );
};

export default Sidebar;
