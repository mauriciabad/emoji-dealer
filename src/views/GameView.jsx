import React, { useContext, useState, useEffect } from 'react';
import HeaderFooter from '../components/HeaderFooter';
import useStyles from './GameViewStyles';
import { GameContext } from '../contexts/GameContext';
import { GameDispatchContext } from '../contexts/GameContext';
import { Paper, Typography, Button,Dialog, DialogTitle, DialogContent, DialogActions, DialogContentText } from '@material-ui/core';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import DialogPlayerNumber from '../components/DialogPlayerNumber';
import { motion, useAnimation } from "framer-motion";
import { bgColors } from "../theme";
import { useLocation, useHistory } from 'react-router-dom';
import GraphemeSplitter from 'grapheme-splitter';

function hashCode(s) {
  let hash = 0;
  if (s.length === 0) return hash;

  for (let i = 0; i < s.length; i++) {
      let char = s.charCodeAt(i);
      hash = ((hash<<5)-hash)+char;
      hash = hash & hash; // Convert to 32bit integer
  }

  return Math.abs(hash);
};

const variants = {
  left: {
    x: -window.innerWidth/2 - 206, // 206 is half the diagonal of the card in pixels
    rotate: -180,
  },
  center: {
    x: "0%",
    rotate: 0,
  },
  right: {
    x: window.innerWidth/2 + 206,
    rotate: 180,
  },
}

export default function GameView() {
  const classes = useStyles();

  const game = useContext(GameContext);
  const dispatchGame = useContext(GameDispatchContext);

  const controlsCard = useAnimation();
  const controlsCardOld = useAnimation();

  const [openPlayerDialog, setOpenPlayerDialog] = useState(false);
  const [openConfirmDialog, setOpenConfirmDialog] = useState(false);
  const [cardRevealed, setCardRevealed] = useState(false);
  const [oldCardRevealed, setOldCardRevealed] = useState(cardRevealed);
  const [oldCard, setOldCard] = useState(game.card);

  document.addEventListener("visibilitychange", function () {
    if (document.hidden) {
      setCardRevealed(false);
    }
  }, false);

  const history = useHistory();
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);
  if(queryParams.has('s') && queryParams.has('c')){
    const seed = queryParams.get('s');
    const round = parseInt(queryParams.get('r')) || 1;

    const cardsString = queryParams.get('c');
    const splitter = new GraphemeSplitter();
    const orderedCards = splitter.splitGraphemes(cardsString);
  
    dispatchGame({type: 'beginGame', payload: {seed, orderedCards, round}})

    history.replace('/');
  }

  const handleDialogPlayerClose = () => {
    setOpenPlayerDialog(false);
  };

  const handleDialogConfirmClose = (confirmed) => {
    setOpenConfirmDialog(false);

    if(confirmed) nextRound();
  };

  useEffect(() => {
    if(!game.player) setOpenPlayerDialog(true);
  }, [game.player]);

  useEffect(() => {
    document.body.style.backgroundColor = bgColors[(hashCode(game.seed) + game.round) % bgColors.length];
  }, [game.seed, game.round]);

  function handleFlip() {
    setCardRevealed((state) => !state);
  }

  function handleNextRoundClick() {
    setOpenConfirmDialog(true)
  }

  function nextRound() {
    setOldCard(game.card);
    setOldCardRevealed(cardRevealed);

    setCardRevealed(false);
  
    controlsCardOld.set('center');
    controlsCardOld.start('left');
  
    controlsCard.stop();
    controlsCard.set("right");
    controlsCard.start("center");

    dispatchGame({type: 'nextRound'});
  }

  return (
    <HeaderFooter className={classes.root}>
      <div className={classes.roundButtons}>
        <Typography variant="h3" className={classes.roundButtonsTitle}>Round {game.round}</Typography>
      </div>

      <div className={classes.smallCards}>
        {game.orderedCards.map((value, index) => {
          return <Paper key={index} className={classes.smallCard}>{value}</Paper>
        })}
      </div>

      <div className={classes.mainCard}>
        <motion.div
          animate={controlsCardOld}
          variants={variants}
          transition={{ type: 'spring', damping: 300 }}
          initial="left"
          style={{pointerEvents: 'none'}}
          className={classes.card}
        >
          <div style={{transform: `rotateY(${oldCardRevealed ? 0 : 180}deg)`}}>
            <Paper className={classes.front}>{oldCard}</Paper>
            <Paper className={classes.back}></Paper>
          </div>
        </motion.div>

        <motion.div
          animate={controlsCard}
          variants={variants}
          transition={{ type: 'spring', damping: 300 }}
          initial="center"
          onClick={handleFlip}
          className={classes.card}
        >
          <motion.div
              animate={cardRevealed ?
                {rotateY: 0, z: 0} :
                {rotateY: -180, z: -15*16}
              }
              initial={{rotateY: -180, z: -15*16}}
              style={{ originZ: 15*16/2 }}
              transition={{ type: 'tween' }}
            >
            <Paper className={classes.front}>{game.card}</Paper>
            <Paper className={classes.back}></Paper>
          </motion.div>
        </motion.div>
      </div>

      <Button 
          variant="contained" 
          color="primary" 
          className={classes.bottomButton}
          size="large"
          onClick={handleNextRoundClick}
          endIcon={<NavigateNextIcon />}
          startIcon={<NavigateNextIcon />}
          >
          Next round
        </Button>

      <DialogPlayerNumber open={openPlayerDialog} onClose={handleDialogPlayerClose} />

      <Dialog open={openConfirmDialog} onClose={() => handleDialogConfirmClose(false)} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Go to next round?</DialogTitle>

        <DialogContent>

          <DialogContentText>
            Make sure that everyone else also goes to the next round at the same time.
          </DialogContentText>

        </DialogContent>

        <DialogActions>
          <Button onClick={() => handleDialogConfirmClose(false)} color="primary">
            Nope
          </Button>
          <Button onClick={() => handleDialogConfirmClose(true)} color="primary">
            Yes
          </Button>
        </DialogActions>
      </Dialog>
    </HeaderFooter>
  );
}
