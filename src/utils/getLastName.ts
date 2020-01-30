export default (name = ''): string =>
  name
    .replace(/\s+/, ' ')
    .split(' ')
    .pop() || "";
