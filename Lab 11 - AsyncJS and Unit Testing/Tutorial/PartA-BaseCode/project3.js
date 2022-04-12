import fs from 'fs-extra'


/*
1.Rewrite the you created in Part-1 using promises.
*/
//
// fs.readFile('data/student.json', callback);
//
// function callback(err, data)  {
//     if (!err)
//         console.log(JSON.parse(data))
//     else
//         console.log(err)
// }

fs.readJson('data/student.json')
    .then(students => students.length)
    .then(studentCount => {
        return `we have ${studentCount} students`
    })
    .then(message => console.log(message))
    .catch(err => console.log(err))
