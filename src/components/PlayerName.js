import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setPlayerName } from '../store/players';



const PlayerName = ({ index }) => {

  const dispatch = useDispatch();

  const { name } = useSelector((state) => state.players[index]);

  const [ editedName, setEditedName ] = useState(name);

  // store the new name as it's being edited
  const handleChange =(e) => {
    setEditedName(e.target.value);
  }

  // When the user clicks out of the input field check if the name has been changed then update the redux store.
  // By only updating the store when the user is done editing the name we avoid making extra API calls.
  const handleBlur = () => {
    if (name !== editedName) {
      dispatch(setPlayerName(index, editedName));
    }
  }

  // The user will expect the changes to be applied when they hit enter. We can accomplish this by bluring focus on the input when the enter key is pressed.
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') e.target.blur();
  }

  return (
    <input
      value={editedName}
      placeholder={`Player ${index + 1}`}
      onChange={handleChange}
      onBlur={handleBlur}
      onKeyDown={handleKeyDown}
    />
  );

}

export default PlayerName;
