import { useState } from 'react';
import useCrossStitchState from '../../hooks/useCrossStichState';
import GridSettings from '../GridSettings/GridSettings';
import DrawSettings from '../DrawSettings/DrawSettings';
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa6';
import './SideBar.scss';

const SideBar = () => {
  const { drawSettingsProps, gridSettingsProps } = useCrossStitchState();
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className={`nightshade-needle_sidebar ${isOpen ? 'open' : ''}`}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="nightshade-needle_sidebar-button">
        {isOpen ? <FaChevronLeft size={20} /> : <FaChevronRight size={20} />}
      </button>
      <div
        className="nightshade-needle_sidebar-content"
        style={{
          width: isOpen ? '250px' : '0px',
          maxHeight: '70vh',
          opacity: isOpen ? 1 : 0,
          overflow: 'scroll',
          transition: 'width 0.6s ease, opacity 0.6s ease',
        }}>
        <GridSettings {...gridSettingsProps} />
        <DrawSettings {...drawSettingsProps} />
      </div>
    </div>
  );
};

export default SideBar;
