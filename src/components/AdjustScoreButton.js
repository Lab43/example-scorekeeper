import { useDispatch, useSelector } from 'react-redux';

import { setPlayerScore } from '../store/players';



const AdjustScoreButton = ({ children, index, amount, title }) => {

  const dispatch = useDispatch();

  const { score } = useSelector((state) => state.players[index]);

  const handleClick = () => {
    dispatch(setPlayerScore(index, score + amount));
  }

  return (
    <button
      onClick={handleClick}
      title={title}
    >
      {children}
    </button>
  );

}

export default AdjustScoreButton;
