interface Student {
  firstName : string,
  lastName : string,
  age : number,
  location : string,
}

class StudentClass {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
  
  constructor(fName : string = '', lName : string = '',
    age : number = 0, location : string = '') {
    this.firstName = fName;
    this.lastName = lName;
    this.age = age;
    this.location = location;
  }
}

const studentList : Student[] = [new StudentClass('Shola', 'Doyin', 25, 'Ibadan'),
  new StudentClass('Joshua', 'Atebong', 21, 'Mutengene')];

const table = document.createElement('table');
document.body.appendChild(table);
const hrow = document.createElement('tr');
table.appendChild(hrow);
const fName = document.createElement('th');
const loc = document.createElement('th');
hrow.appendChild(fName);
hrow.appendChild(loc);
fName.textContent = 'First Name';
loc.textContent = 'Location';

for (const student of studentList) {
  const row = document.createElement('tr');
  table.appendChild(row);
  const fName = document.createElement('td');
  const loc = document.createElement('td');
  row.appendChild(fName);
  row.appendChild(loc);
  fName.textContent = student.firstName;
  loc.textContent = student.location; 
}