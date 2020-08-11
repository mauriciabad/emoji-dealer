import React, { useContext, useState, useEffect } from 'react';
import HeaderFooter from '../components/HeaderFooter';
import useStyles from './GameViewStyles';
import { GameContext } from '../contexts/GameContext';
import { GameDispatchContext } from '../contexts/GameContext';
import { Paper, Typography, IconButton } from '@material-ui/core';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import DialogPlayerNumber from '../components/DialogPlayerNumber';
import { motion, useAnimation } from "framer-motion";

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
  const [cardRevealed, setCardRevealed] = useState(false);
  const [oldCardRevealed, setOldCardRevealed] = useState(cardRevealed);
  const [oldCard, setOldCard] = useState(game.card);


  const handleDialogPlayerClose = () => {
    setOpenPlayerDialog(false);
  };

  useEffect(() => {
    if(!game.player) setOpenPlayerDialog(true);
  }, [game.player])

  function handleFlip() {
    setCardRevealed((state) => !state);
  }

  function handleNextRoundClick() {
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
        <IconButton><NavigateBeforeIcon /></IconButton>
        <Typography variant="h3" className={classes.roundButtonsTitle}>Round {game.round}</Typography>
        <IconButton onClick={handleNextRoundClick}><NavigateNextIcon /></IconButton>
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

      <DialogPlayerNumber open={openPlayerDialog} onClose={handleDialogPlayerClose} />
    </HeaderFooter>
  );
}
