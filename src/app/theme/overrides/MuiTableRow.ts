import palette from '../palette';

export default {
  root: {
    '&$selected': {
      backgroundColor: palette.background && palette.background.default
    },
    '&$hover': {
      '&:hover': {
        backgroundColor: palette.background && palette.background.default
      }
    }
  }
};
