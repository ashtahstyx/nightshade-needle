import type { Dispatch, SetStateAction } from 'react';
import { useState } from 'react';
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
  selectedColor: string;
  setSelectedColor: (color: string) => void;
}

const FlossPicker = ({
  FLOSS_BRANDS,
  brand,
  setBrand,
  selectedColor,
  setSelectedColor,
}: FlossPickerProps) => {
  const [view, setView] = useState<'swatch' | 'list'>('swatch');

  const colors = FLOSS_BRANDS[brand];

  return (
    <div className="floss-picker">
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

      {/* View toggle */}
      <div style={{ margin: '8px 0' }}>
        <button
          onClick={() => setView('swatch')}
          style={{ fontWeight: view === 'swatch' ? 'bold' : 'normal' }}>
          Swatch View
        </button>
        <button
          onClick={() => setView('list')}
          style={{
            fontWeight: view === 'list' ? 'bold' : 'normal',
            marginLeft: 8,
          }}>
          List View
        </button>
      </div>

      <div>
        {view === 'swatch' ? (
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px' }}>
            {colors.map((color) => (
              <div
                key={color.code}
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
        ) : (
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {colors.map((color) => (
              <li
                key={color.code}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  marginBottom: 4,
                  cursor: 'pointer',
                  border:
                    selectedColor === color.hex
                      ? '2px solid black'
                      : '1px solid #ccc',
                  padding: '2px 4px',
                }}
                onClick={() => setSelectedColor(color.hex)}>
                <div
                  style={{
                    width: 20,
                    height: 20,
                    backgroundColor: color.hex,
                    marginRight: 8,
                  }}
                />
                <span>
                  {color.name} ({color.code})
                </span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default FlossPicker;
