import saveAsPDF from '../../utils/saveAsPDF';
import { FaSave } from 'react-icons/fa';

interface SavePDFButtonProps {
  gridId: string;
  paletteId: string;
}

const SavePDFButton = ({ gridId, paletteId }: SavePDFButtonProps) => {
  const handleSavePDF = () => {
    saveAsPDF(gridId, paletteId);
  };

  return (
    <>
      <div className="grid-controls_save">
        <button onClick={handleSavePDF}>
          <FaSave /> Save PDF
        </button>
      </div>
    </>
  );
};

export default SavePDFButton;
