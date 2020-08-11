import { makeStyles, createStyles, Theme } from '@material-ui/core';
import cardBackPatternImg from '../assets/card-back-pattern.svg';

export default makeStyles((theme: Theme) => createStyles({
  root: {
  },
  mainCard: {
    margin: `${theme.spacing(3)}px auto`,
    flexGrow: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  card: {
    position: 'absolute',
    perspective: 1000,
    '& > *': {
      cursor: 'pointer',
      userSelect: 'none',
      width: 15*16,
      height: (170/122)*15*16,
      position: 'relative',
      transformStyle: 'preserve-3d',
      '& > *': {
        position: 'absolute',
        width: '100%',
        height: '100%',
        backfaceVisibility: 'hidden',
        borderRadius: '0.75rem',
      },
    },
  },
  front: {
    fontSize: '7.5rem',
    textAlign: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    lineHeight: 1,
    overflow: 'hidden',
  },
  back: {
    transform: 'rotateY(-180deg)',
    padding: theme.spacing(2),
    '&::before': {
      content: `''`,
      width: '100%',
      height: '100%',
      display: 'block',
      background: `#000 url(${cardBackPatternImg}) repeat center`,
      backgroundSize: `${theme.spacing(4)}px`
    }
  },
  roundButtons: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'stretch',
    margin: `${theme.spacing(2)}px 0 0 0`,
  },
  smallCards: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  smallCard: {
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
