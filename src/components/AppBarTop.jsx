import React, { useState, useContext } from 'react';
import { AppBar, Toolbar, Typography, IconButton, Snackbar } from '@material-ui/core';
import ShareIcon from '@material-ui/icons/Share';
import RefreshIcon from '@material-ui/icons/Refresh';
import PersonIcon from '@material-ui/icons/Person';
import {Link} from 'react-router-dom';
import { GameContext, defaultSeed } from '../contexts/GameContext';
import DialogPlayerNumber from './DialogPlayerNumber';
import AppBarBgImg from '../assets/backgrounds/wood_pattern_dark.png';
// import AppBarBgImg2x from '../assets/backgrounds/wood_pattern_dark_@2X.png';

function getGameURL({seed, orderedCards}){
  const params = new URLSearchParams();
  params.append('seed', seed);
  params.append('cards', orderedCards.join(''));
  return `${process.env.REACT_APP_DOMAIN}/game/join?${params.toString()}`;
}

export default function AppBarTop() {
  const game = useContext(GameContext);

  const [openClipboardToast, setOpenClipboardToast] = useState(false);
  const handleOpenClipboardToast = (event, reason) => {   
    setOpenClipboardToast(false);
  };
  
  const [openPlayerDialog, setOpenPlayerDialog] = useState(false);
  const handleDialogPlayerOpen = () => {
    setOpenPlayerDialog(true);
  };
  const handleDialogPlayerClose = () => {
    setOpenPlayerDialog(false);
  };

  const shareJoinURL = () => {
    const invitationURL = getGameURL(game);

    if(navigator.share){
      navigator.share({title: 'Game invitation', url: invitationURL})
    }else {
      if(navigator.clipboard) {
        navigator.clipboard.writeText(invitationURL);
        setOpenClipboardToast(true);
      }
    }
  }

  return (
    <AppBar position="static" style={{background: `url(${AppBarBgImg}) repeat center bottom`}} elevation={12}>
      <Toolbar style={{justifyContent: 'center'}}>

        {game.seed !== defaultSeed && (
          <>
            <IconButton edge="end" color="inherit" onClick={shareJoinURL} style={{padding: '0 1rem'}}>
              <ShareIcon />
            </IconButton>
            <Snackbar 
              open={openClipboardToast} 
              onClose={handleOpenClipboardToast}
              message="URL copied to clipboard" 
            />
          </>
        )}
        <IconButton edge="end" color="inherit" onClick={handleDialogPlayerOpen} style={{padding: '0 1rem'}}>
          <PersonIcon /><small style={{fontSize: '0.667em'}}>{game.player}</small>
        </IconButton>
        <DialogPlayerNumber open={openPlayerDialog} onClose={handleDialogPlayerClose} />
        <IconButton edge="end" color="inherit" to="/game/new" component={Link} style={{padding: '0 1rem'}}>
          <RefreshIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
