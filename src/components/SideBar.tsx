import React from 'react';
import '../styles/Nightshade.scss';

interface SidebarProps {
  AIDA_COLORS: { name: string; hex: string }[];
  aidaColor: string;
  handleAidaChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  FLOSS_BRANDS: unknown;
  brand: string;
  setBrand: (b: string) => void;
  selectedColor: string;
  setSelectedColor: (color: string) => void;
  hoveredColor: { x: number; y: number; info: string } | null;
  setHoveredColor: (val: unknown) => void;
  removeMode: boolean;
  setRemoveMode: (val: boolean) => void;
}

const Sidebar = ({
  AIDA_COLORS,
  aidaColor,
  handleAidaChange,
  FLOSS_BRANDS,
  brand,
  setBrand,
  selectedColor,
  setSelectedColor,
  hoveredColor,
  setHoveredColor,
  removeMode,
  setRemoveMode,
}: SidebarProps) => {
  return (
    <div
      className="sidebar"
      style={{ marginRight: '2rem', minWidth: '200px', position: 'relative' }}>
      <button onClick={() => setRemoveMode(!removeMode)}>
        {removeMode ? 'Switch to Draw Mode' : 'Switch to Remove Mode'}
      </button>

      <h2>Select Aida Color</h2>
      <select value={aidaColor} onChange={handleAidaChange}>
        {AIDA_COLORS.map((color) => (
          <option key={color.hex} value={color.hex}>
            {color.name}
          </option>
        ))}
      </select>

      <h2>Select Brand</h2>
      <select value={brand} onChange={(e) => setBrand(e.target.value)}>
        {Object.keys(FLOSS_BRANDS).map((b) => (
          <option key={b} value={b}>
            {b}
          </option>
        ))}
      </select>

      <h3>Colors</h3>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px' }}>
        {FLOSS_BRANDS[brand].map((color: any) => (
          <div
            key={color.code}
            onMouseEnter={(e) => {
              const rect = (e.target as HTMLElement).getBoundingClientRect();
              setHoveredColor({
                x: rect.right + 10,
                y: rect.top,
                info: `${color.name} (${color.code}) - ${color.hex}`,
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
    </div>
  );
};

export default Sidebar;
