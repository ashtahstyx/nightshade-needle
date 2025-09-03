import '../DrawSettings/DrawSettings.scss';
import { FaEraser, FaPencilAlt } from 'react-icons/fa';

interface EraseProps {
  removeMode: boolean;
  setRemoveMode: (val: boolean) => void;
}

const Erase = ({ removeMode, setRemoveMode }: EraseProps) => {
  return (
    <button onClick={() => setRemoveMode(!removeMode)} className="erase-button">
      {removeMode ? (
        <>
          <FaPencilAlt />
          Draw
        </>
      ) : (
        <>
          <FaEraser />
          Erase
        </>
      )}
    </button>
  );
};

export default Erase;
