export default function updateStudentGradeByCity(data, city, newGrades) {
    const sanFstudents = data.filter((i) => i.location === city);
    const newData = sanFstudents.map((i) => {
      const studentId = newGrades.find((entry) => entry.studentId === i.id);
      if (studentId) {
        return {
          ...i,
          grade: studentId.grade,
        };
      }
      return { ...x, grade: 'N/A' };
    });
  
    return newData;
  }
  
