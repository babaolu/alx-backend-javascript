export default function cleanSet(set, startString) {
  let restString = '';
  if (startString && (typeof startString === 'string')) {
    set.forEach((value) => {
      if (typeof value !== 'string') return;
      if (value.startsWith(startString)) {
        restString = restString.concat('-',
          value.substring(startString.length));
      }
    });
  }
  return restString.substring(1);
}
