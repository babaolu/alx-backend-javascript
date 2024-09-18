const fs = require('fs');

function countStudents(path) {
  fs.readFile(path, 'utf-8', (err, data) => {
    if (err) throw new Error('Cannot load the database');

    let lines = data.split('\n');
    lines = lines.toSpliced(0, 1);
    lines = lines.filter((line) => line);

    console.log('Number of students:', lines.length);

    for (let i = 0; i < lines.length; i += 1) {
      lines[i] = lines[i].split(',');
    }
    const fields = new Set(lines.map((line) => line[3]));
    for (const field of fields) {
      const fiLines = lines.filter((line) => line[3] === field);
      console.log(`Number of students in ${field}: ${fiLines.length}. List:`,
        fiLines.reduce((acc, curVal) => acc.concat(', ', curVal[0]), '')
          .slice(2));
    }
  });
}

module.exports = countStudents;
