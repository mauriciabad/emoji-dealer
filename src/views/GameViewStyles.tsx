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
  cards: {
    whiteSpace: 'nowrap',
    overflow: 'auto',
    textAlign: 'center',
  },
  card: {
    padding: theme.spacing(1),
    width: '2rem',
    height: `${(170/122)*2}rem`,
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    margin: '4px',
    lineHeight: 1,
  },
  roundButtonsTitle: {
    opacity: 0.8,
  },
}));
