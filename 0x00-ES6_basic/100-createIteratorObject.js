export default function createIteratorObject(report) {
  let departments = Object.values(report.allEmployees);
  let employees = departments.flatMap(department => department);

  let currentIndex = 0;

  return {
    [Symbol.iterator]() {
      return this;
    },
    next() {
      if (currentIndex < employees.length) {
        return { value: employees[currentIndex++], done: false };
      } else {
        currentIndex = 0;
        return { done: true };
      }
    }
  };
}
