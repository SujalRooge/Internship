// Array of student objects
let students = [
    { name: "Sujal", marks: [80, 75, 90] },
    { name: "Rahul", marks: [70, 85, 78] },
    { name: "Anita", marks: [88, 92, 81] }
];

// Loop through each student
students.forEach(function(student) {

    let total = 0;

    // Calculate total marks
    student.marks.forEach(function(mark) {
        total += mark;
    });

    // Calculate average
    let average = total / student.marks.length;

    // Display result in console
    console.log("Student:", student.name);
    console.log("Marks:", student.marks);
    console.log("Average:", average);
    console.log("-----------------------");

});