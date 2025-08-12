import type { Dispatch, SetStateAction } from 'react';
import '../SideBar/SideBar.scss';

type Brand = 'DMC' | 'Anchor' | 'Sullivans' | 'JPCoats' | 'MaxiMouline';

interface FlossColor {
  code: string;
  name: string;
  hex: string;
}

interface FlossPickerProps {
  FLOSS_BRANDS: Record<Brand, FlossColor[]>;
  brand: Brand;
  setBrand: Dispatch<SetStateAction<Brand>>;
  setHoveredColor: Dispatch<
    SetStateAction<{ x: number; y: number; info: string } | null>
  >;
  selectedColor: string;
  setSelectedColor: (color: string) => void;
  hoveredColor: { x: number; y: number; info: string } | null;
}

const FlossPicker = ({
  FLOSS_BRANDS,
  brand,
  setBrand,
  selectedColor,
  setSelectedColor,
  hoveredColor,
  setHoveredColor,
}: FlossPickerProps) => {
  return (
    <>
      <h2>Select Brand</h2>
      <select
        id="select_floss-brand"
        name="Floss Brand"
        value={brand}
        onChange={(e) => setBrand(e.target.value as Brand)}>
        {(Object.keys(FLOSS_BRANDS) as Brand[]).map((b) => (
          <option key={b} value={b}>
            {b}
          </option>
        ))}
      </select>

      <h3>Colors</h3>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px' }}>
        {FLOSS_BRANDS[brand].map((color) => (
          <div
            key={color.code}
            onMouseEnter={(e) => {
              const rect = (e.target as HTMLElement).getBoundingClientRect();
              setHoveredColor({
                x: rect.right + 10,
                y: rect.top,
                info: `${color.name} (${color.code})`,
              });
            }}
            onMouseLeave={() => setHoveredColor(null)}
            style={{
              backgroundColor: color.hex,
              width: 30,
              height: 30,
              border:
                selectedColor === color.hex
                  ? '2px solid black'
                  : '1px solid #ccc',
              cursor: 'pointer',
            }}
            onClick={() => setSelectedColor(color.hex)}
          />
        ))}
      </div>

      {hoveredColor && (
        <div
          style={{
            position: 'fixed',
            top: hoveredColor.y,
            left: hoveredColor.x,
            backgroundColor: '#f0f0f0',
            padding: '4px 8px',
            border: '1px solid #ccc',
            fontSize: '0.85rem',
            borderRadius: '4px',
            zIndex: 1000,
          }}>
          {hoveredColor.info}
        </div>
      )}
    </>
  );
};

export default FlossPicker;
