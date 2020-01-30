export default (name = ''): string =>
  name
    .replace(/\s+/, ' ')
    .split(' ')
    .slice(0, 1)
    .join('');
