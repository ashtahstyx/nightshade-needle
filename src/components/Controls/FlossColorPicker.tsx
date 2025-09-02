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
        className="floss-picker_brand"
        name="Floss Brand"
        value={brand}
        onChange={(e) => setBrand(e.target.value as Brand)}>
        {(Object.keys(FLOSS_BRANDS) as Brand[]).map((b) => (
          <option key={b} value={b}>
            {b}
          </option>
        ))}
      </select>

      <div className="floss-picker_view">
        <button
          className="floss-picker_view-button"
          onClick={() => setView(view === 'swatch' ? 'list' : 'swatch')}>
          {view === 'swatch' ? 'List View' : 'Swatch View'}
        </button>
      </div>

      <div>
        {view === 'swatch' ? (
          <div className="floss-picker_swatch">
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
          <ul className="floss-picker_list">
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
                      ? '2px solid #ccc'
                      : '0px transparent',
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
