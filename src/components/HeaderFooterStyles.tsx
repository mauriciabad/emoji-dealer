import { makeStyles, createStyles, Theme } from '@material-ui/core';

export default makeStyles((theme: Theme) => createStyles({
  root: {
    minHeight: '100%',
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',
  },
  container: {
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
}));
