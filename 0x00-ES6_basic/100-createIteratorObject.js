export default function createIteratorObject(report) {
  // Generator function to iterate through every employee in every department
  function* iterator() {
    for (const department of Object.values(report.allEmployees)) {
      for (const employee of department) {
        yield employee;
      }
    }
  }
  
  // Return the iterator object
  return iterator();
}
