export default function updateStudentGradeByCity(listOfStudents, city,
  newGrades) {
  if (!Array.isArray(listOfStudents)) return [];
  return listOfStudents.filter((student) => student.location === city)
    .map((student) => {
      const modStudent = student;
      const studentGrade = newGrades.find((grade) => grade.studentId === student.id);
      if (studentGrade) modStudent.grade = studentGrade.grade;
      else modStudent.grade = 'N/A';
      return modStudent;
    });
}
