export default function getListStudentIds(objectsArray) {
  if (!Array.isArray(objectsArray)) {
      return [];
  }
  const ids = objectsArray.map(i => i.id);
  return ids;
}
