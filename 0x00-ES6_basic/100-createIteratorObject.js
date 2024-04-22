// Create an iterator object to iterate through all employees in every department
export default function createIteratorObject(report) {
  return Object.values(report.allEmployees).flat();
}
