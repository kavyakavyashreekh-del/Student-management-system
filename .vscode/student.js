function addStudent() {
    let students = JSON.parse(localStorage.getItem("students")) || [];

    let student = {
        id: document.getElementById("id").value,
        name: document.getElementById("name").value,
        age: document.getElementById("age").value,
        course: document.getElementById("course").value,
        marks: document.getElementById("marks").value
    };

    students.push(student);
    localStorage.setItem("students", JSON.stringify(students));

    alert("Student Added Successfully");
}