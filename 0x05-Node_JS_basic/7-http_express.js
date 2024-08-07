const express = require('express');
const fs = require('node:fs');
const { argv } = require('node:process');

const app = express();
const port = 1245;

function countStudents(path) {
  return new Promise((resolve, reject) => {
    try {
      const data = fs.readFileSync(path, 'utf-8');
      let lines = data.split('\n');
      lines.shift();
      lines = lines.filter((line) => line);
      const message = [];
    
      message.push(`Number of students : ${ lines.length }`);
    
      for (let i = 0; i < lines.length; i++) {
        lines[i] = lines[i].split(',');
      }
      const fields = new Set(lines.map(line => line[3]));
      for (const field of fields) {
        let fiLines = lines.filter(line => line[3] == field);
        message.push(`Number of students in ${field}: ${fiLines.length}. List: ` +
          fiLines.reduce((acc, curVal) => acc.concat(', ', curVal[0]), '')
            .slice(2));
      }
      resolve(message.join('\n'));
    } catch (err) {
      reject(new Error('Cannot load the database'));
    }
  });
}

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  const path = argv[2];
  countStudents(path)
    .then(value => res.send(`This is the list of our students\n${ value }`));
})

app.listen(port);

module.exports = app;