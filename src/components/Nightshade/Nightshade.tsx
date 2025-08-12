// src/components/Cross.tsx
import useCrossStitchState from '../../hooks/useCrossStichState';
import Header from '../Header/Header';
import TopBar from '../TopBar/TopBar';
import Sidebar from '../../components/SideBar/SideBar';
import GridWithRuler from '../../components/Grid/GridWithRuler';

import './Nightshade.scss';

const Nightshade = () => {
  const { sidebarProps, gridProps, topbarProps } = useCrossStitchState();

  return (
    <div className="nightshade">
      <div className="nightshade_top">
        <TopBar {...topbarProps} />
        <Header />
      </div>
      <div className="nightshade_body">
        <Sidebar {...sidebarProps} />
        <GridWithRuler {...gridProps} />
      </div>
    </div>
  );
};

export default Nightshade;
