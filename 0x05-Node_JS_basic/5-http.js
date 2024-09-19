const http = require('http');
const fs = require('fs');
const { argv } = require('process');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    try {
      const data = fs.readFileSync(path, 'utf-8');
      let lines = data.split('\n');
      lines.shift();
      lines = lines.filter((line) => line);
      const message = [];

      message.push(`Number of students : ${lines.length}`);

      for (let i = 0; i < lines.length; i += 1) {
        lines[i] = lines[i].split(',');
      }
      const fields = new Set(lines.map((line) => line[3]));
      for (const field of fields) {
        const fiLines = lines.filter((line) => line[3] === field);
        message.push(`Number of students in ${field}: ${fiLines
          .length}. List: ${fiLines
          .reduce((acc, curVal) => acc.concat(', ', curVal[0]), '')
          .slice(2)}`);
      }
      resolve(message.join('\n'));
    } catch (err) {
      reject(new Error('Cannot load the database'));
    }
  });
}

const app = http.createServer((request, response) => {
  if (request.url === '/') {
    response.end('Hello Holberton School!');
  } else if (request.url === '/students') {
    const path = argv[2];
    response.write('This is the list of our students\n');
    countStudents(path).then(((value) => response.end(value)))
    .catch((e) => response.end(e.message));
  }
});
app.listen(1245);

module.exports = app;
