export default function createReportObject(employeesList) {
  const obj = {};
  obj.allEmployees = employeesList;
  obj.getNumberOfDepartments = (objlist) => Object.keys(objlist).length;

  return obj;
}
