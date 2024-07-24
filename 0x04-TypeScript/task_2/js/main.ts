interface DirectorInterface {
  workFromHome: () => string;
  getCoffeeBreak: () => string;
  workDirectorTasks: () => string;
}

interface TeacherInterface {
  workFromHome: () => string;
  getCoffeeBreak: () => string;
  workTeacherTasks: () => string;
}

type Subjects = 'Math' | 'History';

class Director implements DirectorInterface {
  workFromHome() {
    return 'Working from home';
  }
  getCoffeeBreak() {
    return 'Getting a coffee break';
  }
  workDirectorTasks() {
    return 'Getting to director tasks';
  }
}

class Teacher implements TeacherInterface {
    workFromHome() {
      return 'Cannot work from home';
    }
    getCoffeeBreak() {
      return 'Cannot have a break';
    }
    workTeacherTasks() {
      return 'Getting to work';
    }
}

function createEmployee(salary: number | string): DirectorInterface | TeacherInterface {
  if (typeof salary === 'string')
    salary = Number(salary);
  if (salary < 500)
    return new Teacher();
  return new Director();
}

function isDirector(employee: DirectorInterface | TeacherInterface):
  employee is DirectorInterface {
  return (employee.constructor === Director);
}

function executeWork(employee: DirectorInterface | TeacherInterface) {
  if (isDirector(employee))
    console.log(employee.workDirectorTasks());
  else console.log(employee.workTeacherTasks());
}

function teachClass(todayClass: Subjects) {
  return `Teaching ${todayClass}`;
}
executeWork(createEmployee(200));
executeWork(createEmployee(1000));
executeWork(createEmployee('$500'));
console.log(teachClass('Math'));
console.log(teachClass('History'));