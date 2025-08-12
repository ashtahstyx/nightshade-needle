import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

export default async function saveAsPDF(gridId: string, paletteId: string) {
  const pdf = new jsPDF();

  const gridElement = document.getElementById(gridId);
  const paletteElement = document.getElementById(paletteId);

  if (!gridElement || !paletteElement) {
    alert('Grid or palette element not found!');
    return;
  }

  try {
    const gridCanvas = await html2canvas(gridElement, { useCORS: true });
    const gridImgData = gridCanvas.toDataURL('image/png');

    if (!gridImgData || !gridImgData.startsWith('data:image/png')) {
      throw new Error('Invalid grid image data');
    }

    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (gridCanvas.height * pdfWidth) / gridCanvas.width;

    pdf.addImage(gridImgData, 'PNG', 0, 0, pdfWidth, pdfHeight);

    const paletteCanvas = await html2canvas(paletteElement, { useCORS: true });
    const paletteImgData = paletteCanvas.toDataURL('image/png');

    if (!paletteImgData || !paletteImgData.startsWith('data:image/png')) {
      throw new Error('Invalid palette image data');
    }

    pdf.addPage();
    const paletteHeight =
      (paletteCanvas.height * pdfWidth) / paletteCanvas.width;
    pdf.addImage(paletteImgData, 'PNG', 0, 0, pdfWidth, paletteHeight);

    pdf.save('cross-stitch-design.pdf');
  } catch (error) {
    alert('Error creating PDF. See console for details.');
  }
}
