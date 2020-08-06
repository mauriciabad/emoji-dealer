import { makeStyles, createStyles, Theme } from '@material-ui/core';

export default makeStyles((theme: Theme) => createStyles({
  root: {
  },
  paper: {
    margin: `${theme.spacing(2)}px auto`,
    padding: theme.spacing(2),
  },
  textArea: {
    width: '100%',
  },
}));
