export const weakMap = new WeakMap();

export function queryAPI(endpoint) {
  if (weakMap.get(endpoint) < 4) weakMap.set(endpoint, weakMap.get(endpoint) + 1);
  else if (!weakMap.get(endpoint)) weakMap.set(endpoint, 1);
  else throw new Error('Endpoint load is high');
}
