const student1 = {
    "name": "Tanja",
    "id": 1
}
const student2 = {
    "name": "Barbara",
    "id": 2
}
const student3 = {
    "name": "Vincent",
    "id": 3
}
const student4 = {
    "name": "Anna Lena",
    "id": 4
}

let studentList = [
    student1,
    student2,
    student3
]

function findStudent(student, studentList) {
    let indexOfStudentToFind = studentList.findIndex(s => s.id === student.id)
    let foundStudent = studentList[indexOfStudentToFind]
    console.log(foundStudent)
    return foundStudent
}
function findAndUpdateStudent(student, studentList, changedName) {
    let indexOfFoundStudent = studentList.findIndex(s => s.id === student.id)
    console.log(studentList[indexOfFoundStudent])
    studentList[indexOfFoundStudent].name = changedName
    console.log(studentList[indexOfFoundStudent])
    return studentList
}
function addStudent(student, studentList) {
    console.log(studentList)
    studentList.push(student)
    console.log(studentList)
    return studentList
}
