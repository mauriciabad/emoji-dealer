import { makeStyles, createStyles, Theme } from '@material-ui/core';

export default makeStyles((theme: Theme) => createStyles({
  root: {
  },
  mainCard: {
    fontSize: '7.5rem',
    textAlign: 'center',
    width: '15rem',
    height: `${(170/122)*15}rem`,
    margin: 'auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    lineHeight: 1,
  },
  roundButtons: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'stretch',
    margin: `${theme.spacing(2)}px 0`,
  },
  playerButtons: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: `${theme.spacing(2)}px 0`,
  },
  roundButtonsTitle: {
    opacity: 0.8,
  },
  shareButton: {
    display: 'flex',
    justifyContent: 'center',
    margin: `${theme.spacing(2)}px 0`,
  },
}));
