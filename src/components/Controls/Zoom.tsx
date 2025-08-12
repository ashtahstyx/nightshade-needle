interface ZoomProps {
  zoom: number;
  zoomIn: () => void;
  zoomOut: () => void;
  resetZoom: () => void;
}

const Zoom = ({ zoom, zoomIn, zoomOut, resetZoom }: ZoomProps) => (
  <div className="grid-controls_zoom">
    <button onClick={zoomOut}>−</button>
    <span>{Math.round(zoom * 100)}%</span>
    <button onClick={zoomIn}>+</button>
    <button onClick={resetZoom}>Reset</button>
  </div>
);

export default Zoom;
