import readDatabase from '../utils';

class StudentsController {
  static getAllStudents(request, response) {
    readDatabase(path).then((data) => {
      response.write('This is the list of our student\n');
      const fields = Object.keys(data).sort();
      for (const field of fields) {
        response
          .write(`Number of students in ${field}: ${data[field].length}. `);
        response.write(`List: ${data[field].join(', ')}\n`);
      }
      response.end();
    }).catch((err) => {
        response.statusCode = 500;
        response.statusMessage = 'Cannot load database';
    });
  }
}