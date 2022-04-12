/*
1)	We need to read data from two files. course.json and staff.json. Both using callbacks.
2)	We need finally print all courses with their corresponding instructor names.
a)	Instructor name can be found at the staff file.
b)	Use staffNo in staff.json property to match the instructorId from course.json
3)	Create two functions getCourses and setInstructorNames.
function getCourses(cb)
	function setInstrctorNames(courses , cb)
4)	Instructor names are set as a new property to the course object in the setInstrctorNames function.

 */
import fs from 'fs';

function setCourseStudents(courses, cb) {
    fs.readFile('data/student.json', (err, data) => {
        if (!err) {
            const students = JSON.parse(data)
            for (const course of courses) {
                const studentNames = students
                    .filter(student => student.courseIds.includes(course.crn))
                    .map(s => `${s.firstname} ${s.lastname}`)

                course.students = studentNames
                course.noOfStudent = studentNames.length
            }
            cb(null, courses)

        } else
            cb(err, null)
    });
}

function setInstructorNames(courses, cb) {
    fs.readFile('data/staff.json', (err, data) => {
        if (!err) {
            const staff = JSON.parse(data)
            for (const course of courses) {
                const {firstname, lastname} = staff.find(s => s.staffNo == course.instructorId)
                course.instructor = `${firstname} ${lastname}`
            }
            setCourseStudents(courses, cb)

        } else
            cb(err, null)
    });
}

function getCourses(cb) {
    fs.readFile('data/course.json', (err, data) => {
        if (!err) {
            const courses = JSON.parse(data)
            setInstructorNames(courses, cb)
        } else
            cb(err, null)
    });
}

//calling the function

getCourses((err, data) => {
    if (!err)
        console.log(data)
    else
        console.log(err)
})
