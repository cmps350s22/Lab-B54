import fs from 'fs-extra'

/* 1.	In project7.js :  Rewrite the code you created in project5.js using Async/await.
*/

async function getCourses() {
    const courses = await fs.readJson('data/course.json')
    const staff = await fs.readJson('data/staff.json')
    const students = await fs.readJson('data/student.json')

    for (const course of courses) {
        const {firstname, lastname} = staff.find(s => s.staffNo == course.instructorId)
        course.instructor = `${firstname} ${lastname}`

        const studentNames = students
            .filter(student => student.courseIds.includes(course.crn))
            .map(s => `${s.firstname} ${s.lastname}`)

        course.students = studentNames
        course.noOfStudent = studentNames.length
    }

    return courses
}

getCourses().then(courses => console.log(courses))

console.log('this code will executer')
