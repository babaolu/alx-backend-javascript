export default function createIteratorObject(report) {
  return Object.values(report.allEmployees)
    .reduce((dep1, dep2) => dep1.concat(dep2));
}
