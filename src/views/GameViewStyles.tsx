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
    margin: `${theme.spacing(2)}px 0 0 0`,
  },
  playerButtons: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cards: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    overflow: 'hidden',
  },
  card: {
    padding: theme.spacing(1),
    width: '2rem',
    height: `${(170/122)*2}rem`,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    margin: '4px',
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
