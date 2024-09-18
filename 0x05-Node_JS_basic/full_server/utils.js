import fs from 'node:fs';

function readDatabase(path) {
  return new Promise((resolve, reject) => {
    try {
      const data = fs.readFileSync(path, 'utf-8');
      let lines = data.split('\n');
      lines.shift();
      lines = lines.filter((line) => line);
      const fieldOjb = {};

      for (let i = 0; i < lines.length; i += 1) {
        lines[i] = lines[i].split(',');
      }
      const fields = new Set(lines.map((line) => line[3]));
      for (const field of fields) {
        fieldOjb[field] = lines.filter((line) => line[3] === field)
          .map((line) => line[0]);
      }
      resolve(fieldOjb);
    } catch (err) {
      reject(new Error('Cannot load the database'));
    }
  });
}