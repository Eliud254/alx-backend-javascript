export default function iterateThroughObject(reportWithIterator) {
  let employeeString = '';

  for (const department in reportWithIterator.allEmployees) {
    const employees = reportWithIterator.allEmployees[department];
    for (const employee of employees) {
      employeeString += `${employee} | `;
    }
  }

  // Remove the trailing ' | ' from the concatenated string
  return employeeString.slice(0, -3);
}
