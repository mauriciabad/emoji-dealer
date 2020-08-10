import React, { useContext, useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { GameContext } from '../contexts/GameContext';
import { GameDispatchContext } from '../contexts/GameContext';

export default function DialogPlayerNumber({open, onClose}) {
  const game = useContext(GameContext);
  const dispatchGame = useContext(GameDispatchContext);
  
  const [playerNumber, setPlayerNumber] = useState(game.player);

  function handleClose(){
    dispatchGame({type: 'setPlayer', payload: {player: playerNumber}});

    onClose();
  }

  function handleChange(event){
    setPlayerNumber(event.target.value)
  }

  return (
    <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
      <DialogTitle id="form-dialog-title">Player number</DialogTitle>

      <DialogContent>

        <DialogContentText>
          Enter your position in the table.
        </DialogContentText>

        <TextField
          autoFocus
          id="playerNumber"
          label="Player number"
          type="number"
          InputProps={{ inputProps: { min: 1 } }}
          fullWidth
          value={playerNumber}
          onChange={handleChange}
          required
          variant="outlined"
        />

      </DialogContent>

      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Done
        </Button>
      </DialogActions>
    </Dialog>
  );
}
