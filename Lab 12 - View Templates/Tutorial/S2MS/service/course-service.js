import CourseRepository from "../repo/course-repository.js";

const courseRepository = new CourseRepository()

export default class CourseService {
    constructor() {

    }

    async getPrograms(req, res) {
        try {
            const programs = await courseRepository.getPrograms();
            res.json(programs);
        } catch (e) {
            res.send(500).send(e);
        }
    }

    async getCourses(req, res) {
        try {
            let programCode = req.params.programCode;
            let courses = await courseRepository.getCourses(programCode);
            res.json(courses);
        } catch (e) {
            res.send(500).send(e);
        }
    }

    /*
            TODO : add the service classes
     */
    async renderIndex(req, res) {
        try {
            res.render('index', {title: 'Index' , show : true})
        } catch (e) {
            res.send(500).send(e);
        }
    }

    async renderCourses(req, res) {
        try {
            const programs = await courseRepository.getPrograms()
            res.render('courses', {
                title: 'Courses',
                 programs
            })
        } catch (e) {
            res.send(500).send(e);
        }
    }

    async renderStudents(req, res) {
        try {
            res.render('students', {title: 'Students'})
        } catch (e) {
            res.send(500).send(e);
        }
    }

}

