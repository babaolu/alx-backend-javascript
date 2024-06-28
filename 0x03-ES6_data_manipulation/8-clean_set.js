export default function cleanSet(set, startString) {
  let restString = '';
  if (startString) {
    set.forEach((value) => {
      if (value.startsWith(startString)) {
        restString = restString.concat('-',
          value.substring(startString.length));
      }
    });
  }
  return restString.substring(1);
}
