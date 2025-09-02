interface ZoomProps {
  zoom: number;
  zoomIn: () => void;
  zoomOut: () => void;
  resetZoom: () => void;
}

const Zoom = ({ zoom, zoomIn, zoomOut, resetZoom }: ZoomProps) => (
  <div className="grid-controls_zoom">
    <button className="grid-controls_zoom-inout" onClick={zoomOut}>
      −
    </button>
    <span>{Math.round(zoom * 100)}%</span>
    <button className="grid-controls_zoom-inout" onClick={zoomIn}>
      +
    </button>
    <button onClick={resetZoom}>Reset</button>
  </div>
);

export default Zoom;
