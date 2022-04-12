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
function setInstructorNames(courses, cb) {

}

function getCourses(cb) {
    fs.readFile('data/course.json', (err, data) => {
        if (!err) {
            cb(null, JSON.parse(data))
        } else
            cb(err, null)
    });
}

getCourses((err, data)=>{
    if(!err)
        console.log(data)
    else
        console.log(err)
})
