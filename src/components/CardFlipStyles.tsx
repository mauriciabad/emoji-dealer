import { makeStyles, createStyles, Theme } from '@material-ui/core';
import cardBackPatternImg from '../assets/card-back-pattern.svg';

export default makeStyles((theme: Theme) => createStyles({
  root: {
  },
  container: {
    perspective: 1000,
  },
  card: {
    cursor: 'pointer',
    userSelect: 'none',
    width: '15rem',
    height: `${(170/122)*15}rem`,
    margin: 'auto',
    position: 'relative',
    transition: 'transform 500ms ease-out',
    transformStyle: 'preserve-3d',
    '& > *': {
      position: 'absolute',
      width: '100%',
      height: '100%',
      backfaceVisibility: 'hidden',
    },
  },
  cardRevealed: {
    transform: 'rotateY(-180deg)',
  },
  front: {
    borderRadius: '0.75rem',
    fontSize: '7.5rem',
    textAlign: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    lineHeight: 1,
    overflow: 'hidden',
  },
  back: {
    borderRadius: '0.75rem',
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
}));
