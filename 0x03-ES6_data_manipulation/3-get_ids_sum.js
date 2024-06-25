export default function getStudentIdsSum(listOfStudents) {
  if (!Array.isArray(listOfStudents)) return 0;
  return listOfStudents.map((student) => student.id)
    .reduce((accumulator, currentValue) => accumulator + currentValue);
}
