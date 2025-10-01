// src/components/StudentGroups.jsx
import React from "react";

const students = [
  { id: 1, name: "Alice", grade: "A" },
  { id: 2, name: "Bob", grade: "B" },
  { id: 3, name: "Charlie", grade: "A" },
  { id: 4, name: "David", grade: "C" },
];

function StudentGroups() {
  const groupedStudents = students.reduce((acc, student) => {
    (acc[student.grade] = acc[student.grade] || []).push(student);
    return acc;
  }, {});

  return (
    <div>
      {Object.entries(groupedStudents).map(([grade, studentsInGrade]) => (
        <div key={grade}>
          <h3>Grade: {grade}</h3>
          <ul>
            {studentsInGrade.map((student) => (
              <li key={student.id}>{student.name}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default StudentGroups;
