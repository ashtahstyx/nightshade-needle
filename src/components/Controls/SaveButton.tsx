import saveAsPDF from '../../utils/saveAsPDF';

interface SavePDFButtonProps {
  gridId: string;
  paletteId: string;
}

const SavePDFButton = ({ gridId, paletteId }: SavePDFButtonProps) => {
  const handleSavePDF = () => {
    saveAsPDF(gridId, paletteId);
  };

  return <button onClick={handleSavePDF}>Save Design as PDF</button>;
};

export default SavePDFButton;
