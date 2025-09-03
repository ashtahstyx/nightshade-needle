// src/components/Cross.tsx
import useCrossStitchState from '../../hooks/useCrossStichState';
import Header from '../Header/Header';
import Sidebar from '../SideBar/SideBar';
import GridWithRuler from '../../components/Grid/GridWithRuler';

import './Nightshade.scss';

const Nightshade = () => {
  const { gridProps } = useCrossStitchState();

  return (
    <div className="nightshade">
      <div className="nightshade_top">
        <Header />
      </div>
      <div className="nightshade_body">
        <Sidebar />
        <GridWithRuler {...gridProps} />
      </div>
    </div>
  );
};

export default Nightshade;
