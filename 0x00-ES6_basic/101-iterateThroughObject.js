export default function iterateThroughObject(reportWithIterator) {
  // Join the iterator values using '|' as separator
  return [...reportWithIterator].join(' | ');
}
