import { useDispatch } from 'react-redux';

import { removePlayer } from '../store/players';



const DeleteButton = ({ index }) => {

  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(removePlayer(index));
  }

  return (
    <button
      onClick={handleClick}
      className='delete'
      title='Delete Player'
    >
      🗑️
    </button>
  );

}

export default DeleteButton;
