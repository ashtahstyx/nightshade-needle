import '../DrawSettings/DrawSettings.scss';

interface AidaColorProps {
  AIDA_COLORS: { name: string; hex: string }[];
  aidaColor: string;
  handleAidaChange: (hex: string) => void;
}

const AidaColor = ({
  AIDA_COLORS,
  aidaColor,
  handleAidaChange,
}: AidaColorProps) => {
  return (
    <div className="grid-controls_color">
      <h4>Aida Colors</h4>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
        {AIDA_COLORS.map((color) => (
          <div
            key={color.hex}
            title={color.name}
            onClick={() => handleAidaChange(color.hex)}
            style={{
              backgroundColor: color.hex,
              width: 30,
              height: 30,
              border:
                aidaColor === color.hex ? '2px solid black' : '1px solid #ccc',
              cursor: 'pointer',
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default AidaColor;
