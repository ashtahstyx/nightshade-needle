import saveAsPDF from '../../utils/saveAsPDF';

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
        <button onClick={handleSavePDF}>Save Design as PDF</button>
      </div>
    </>
  );
};

export default SavePDFButton;
