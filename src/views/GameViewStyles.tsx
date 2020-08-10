import { makeStyles, createStyles, Theme } from '@material-ui/core';

export default makeStyles((theme: Theme) => createStyles({
  root: {
  },
  mainCard: {
    margin: `${theme.spacing(3)}px auto`,
    flexGrow: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  roundButtons: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'stretch',
    margin: `${theme.spacing(2)}px 0 0 0`,
  },
  cards: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
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
