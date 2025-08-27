import { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa6';
import './Drawer.scss';

interface DrawerProps {
  title: string;
  children: React.ReactNode;
}

const Drawer = ({ title, children }: DrawerProps) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className={`nightshade-drawer ${isOpen ? 'open' : ''}`}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="nightshade-drawer_button">
        <span>{title}</span>
        {isOpen ? <FaChevronDown size={20} /> : <FaChevronUp size={20} />}
      </button>
      <div
        className="nightshade-drawer_content"
        style={{
          maxHeight: isOpen ? '500px' : '0px',
          display: isOpen ? 'block' : 'none',
          overflow: 'scroll',
          transition: 'max-height 0.6s ease, opacity 0.6s ease',
        }}>
        {children}
      </div>
    </div>
  );
};

export default Drawer;
