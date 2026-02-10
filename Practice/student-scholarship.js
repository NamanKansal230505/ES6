// ============================================
//  PRACTICE: Student Scholarship Checker
// ============================================
// Topics Used: Objects, Arrays, Functions,
//              Conditional Logic, Loops
//
// Problem: Given a student's data, calculate
// their average marks and check if they are
// eligible for a scholarship.
// Criteria: Average >= 80 AND admissionStatus === true
// ============================================

const student = {
  id: 1,
  name: "Akash",
  age: 20,
  city: "Delhi",
  country: "India",
  course: "BCA",
  marks: [90, 80, 70, 90, 90],
  admissionStatus: true
};

// --- Helper: Calculate Average of Marks ---
function calculateAverage(marks) {
  let sum = 0;
  for (let i = 0; i < marks.length; i++) {
    sum += marks[i];
  }
  return sum / marks.length;
}

// --- Main: Display Student Data & Check Eligibility ---
function displayData(student) {
  console.log("ID:", student.id);
  console.log("Name:", student.name);
  console.log("Age:", student.age);
  console.log("City:", student.city);
  console.log("Country:", student.country);
  console.log("Course:", student.course);
  console.log("Marks:", student.marks);
  console.log("Admission Status:", student.admissionStatus);

  const avg = calculateAverage(student.marks);
  console.log("Average:", avg);

  if (avg >= 80 && student.admissionStatus === true) {
    console.log("Student is eligible for scholarship");
  } else {
    console.log("Regular Admission");
  }
}

displayData(student);
