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
  }
}));
