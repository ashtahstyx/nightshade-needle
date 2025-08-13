import { useMemo } from 'react';
import type { FlossColor } from '../../types/floss';
import ICONS from '../../database/colorIcons';
import { FaTimesCircle } from 'react-icons/fa';
import '../SideBar/SideBar.scss';

interface ColorPaletteBoxProps {
  palette: string[];
  onSelect: (color: string) => void;
  selectedColor: string;
  setHoveredColor: (
    info: { x: number; y: number; info: string } | null
  ) => void;
  flossMap: Record<string, FlossColor>;
  removeColorFromPalette?: (color: string) => void;
  readOnly?: boolean;
}

const MAX_COLORS = 30;

const ColorPalette = ({
  palette,
  onSelect,
  selectedColor,
  setHoveredColor,
  flossMap,
  removeColorFromPalette,
  readOnly = false,
}: ColorPaletteBoxProps) => {
  const limitedPalette = palette.slice(0, MAX_COLORS);
  const isMaxReached = palette.length > MAX_COLORS;

  const iconMap = useMemo(() => {
    const map: Record<string, React.ElementType> = {};
    limitedPalette.forEach((color, index) => {
      map[color] = ICONS[index % ICONS.length];
    });
    return map;
  }, [limitedPalette]);

  return (
    <div id="crossStitchPalette" className="color-palette_box">
      <h3 className="color-palette_title">Color Palette ({palette.length})</h3>

      {limitedPalette.map((hex) => {
        const Icon = iconMap[hex];
        const floss = flossMap[hex];
        const info = floss ? `${floss.name} (${floss.code})` : hex;

        return (
          <div
            className="color-palette_block"
            key={hex}
            onMouseEnter={(e) => {
              const rect = (e.target as HTMLElement).getBoundingClientRect();
              setHoveredColor({
                x: rect.right + 10,
                y: rect.top,
                info,
              });
            }}
            onMouseLeave={() => setHoveredColor(null)}
            onClick={() => onSelect(hex)}
            style={{
              backgroundColor: hex,
              border:
                selectedColor === hex ? '2px solid black' : '1px solid #ccc',
              position: 'relative',
              cursor: readOnly ? 'default' : 'pointer',
              padding: '8px 4px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
            title={info}>
            {Icon && <Icon className="colorIcon" />}

            {!readOnly && removeColorFromPalette && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  removeColorFromPalette(hex);
                }}
                style={{
                  position: 'absolute',
                  top: -6,
                  right: -6,
                  background: 'white',
                  borderRadius: '50%',
                  border: 'none',
                  cursor: 'pointer',
                  padding: 0,
                  width: 16,
                  height: 16,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
                aria-label={`Remove color ${info}`}
                title={`Remove ${info}`}>
                <FaTimesCircle color="red" size={14} />
              </button>
            )}

            {readOnly && (
              <div
                style={{
                  marginTop: 4,
                  fontSize: '0.75rem',
                  textAlign: 'center',
                  color: '#333',
                  userSelect: 'none',
                }}>
                {info}
              </div>
            )}
          </div>
        );
      })}

      {isMaxReached && (
        <p style={{ marginTop: '8px', fontSize: '0.85rem', color: '#666' }}>
          Maximum of {MAX_COLORS} colors shown. Additional colors won’t appear
          here.
        </p>
      )}
    </div>
  );
};

export default ColorPalette;
