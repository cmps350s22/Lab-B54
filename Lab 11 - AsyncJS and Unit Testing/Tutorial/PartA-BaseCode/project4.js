import fs from 'fs-extra'


/*
1.Rewrite the you created in Part-2 using promises.
*/

fs.readJson('data/course.json')
    .then(courses => {
        return fs.readJson('data/staff.json')
            .then(staff => {
                for (const course of courses) {
                    const {firstname, lastname} = staff.find(s => s.staffNo == course.instructorId)
                    course.instructor = `${firstname} ${lastname}`
                }
                return courses
            })
    })
    .then(courses => {
        return fs.readJson('data/student.json')
            .then(students => {
                for (const course of courses) {
                    const studentNames = students
                        .filter(student => student.courseIds.includes(course.crn))
                        .map(s => `${s.firstname} ${s.lastname}`)

                    course.students = studentNames
                    course.noOfStudent = studentNames.length
                }
                return courses
            })
    })
    .then(courses => console.log(courses))
    .catch(err => console.error(err))
