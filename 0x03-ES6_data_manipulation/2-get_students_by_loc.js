export default function getStudentsByLocation(data, city) {
    const studentsInCity = data.filter((i) => i.location === city);
    return studentsInCity;
  }
