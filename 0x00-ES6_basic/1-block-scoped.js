export default function taskBlock(trueOrFalse) {
  // Initialize task variable with false
  const task = false;

  // Initialize task2 variable with true
  const task2 = true;

  if (trueOrFalse) {
    /* eslint-disable no-unused-vars */
    // Declare and set task to true (local scope)
    const task = true;

    // Declare and set task2 to false (local scope)
    const task2 = false;
    /* eslint-enable no-unused-vars */
  }

  // Return an array containing task and task2
  return [task, task2];
}
