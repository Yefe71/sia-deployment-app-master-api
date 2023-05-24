import express from 'express'
import cors from 'cors'
import knex from 'knex'
import grabStudentsData from './controllers/grabStudentsData.js'
import grabStudentButtons from './controllers/grabStudentButtons.js'
import grabProfessorsData from './controllers/grabProfessorsData.js'
import updateProfessorsData from './controllers/updateProfessorsData.js'
import grabProfessorsNames from './controllers/grabProfessorsNames.js'
import updateRoomsData from './controllers/updateRoomsData.js'
import grabRoomsNames from './controllers/grabRoomsNames.js'
import grabRoomsData from './controllers/grabRoomsData.js'
import updateSchedulesData from './controllers/updateSchedulesData.js'
import grabSchedulesData from './controllers/grabSchedulesData.js'
import transferStudentsData from './controllers/transferStudentsData.js'
import dropStudentsData from './controllers/dropStudentsData.js'
import transferYearBlock from './controllers/transferYearBlock.js'
import transferStudent from './controllers/transferStudent.js'
import addStudent from './controllers/addStudent.js'
import dropStudent from './controllers/dropStudent.js'
import transferStudentNameEdit from './controllers/transferStudentNameEdit.js'
import compareUnits from './controllers/compareUnits.js'
import updateProfessorsUnits from './controllers/updateProfessorsUnits.js'
import grabMajorCourses from './controllers/grabMajorCourses.js'
import grabCoursesColors from './controllers/grabCoursesColors.js'
import grabMinorsData from './controllers/grabMinorsData.js'
import grabMajorMinorCourses from './controllers/grabMajorMinorCourses.js'
import grabFormMajorMinor from './controllers/grabFormMajorMinor.js'
import updateFormMajorMinor from './controllers/updateFormMajorMinor.js'
import grabIrregulars from './controllers/grabIrregulars.js'
import grabStudyPlans from './controllers/grabStudyPlans.js'
import updateMinorsData from './controllers/updateMinorsData.js'
import updateStudyPlans from './controllers/updateStudyPlans.js'




const db = knex({
    client: "pg",
    connection: {
        host: '127.0.0.1',
        user: 'postgres',
        password : 'root',
        database : 'AdvanceIT'
    }
})
const app = express();
app.use(cors());
app.use(express.json());

//Manage Block Page: Subject Assignment
app.get('/grabStudents', (req, res) => grabStudentsData(req, res, db))
app.get('/grabStudentsButtons', (req, res) => grabStudentButtons(req, res, db))

app.get('/grabProfessors', (req, res) => grabProfessorsData(req, res, db))
app.put('/updateProfessors', (req, res) => updateProfessorsData(req, res, db))

app.get('/grabProfessorsNames', (req, res) => grabProfessorsNames(req, res, db))

app.get('/grabRooms', (req, res) => grabRoomsData(req, res, db))
app.put('/updateRooms', (req, res) => updateRoomsData(req, res, db))

app.get('/grabRoomsNames', (req, res) => grabRoomsNames(req, res, db))


app.get('/grabSchedules', (req, res) => grabSchedulesData(req, res, db))
app.put('/updateSchedules', (req, res) => updateSchedulesData(req, res, db));


app.put('/transferStudent', (req, res) => transferStudent(req, res, db));
app.put('/transferStudentName', (req, res) => transferStudentsData(req, res, db));
app.put('/transferStudentNameEdit', (req, res) => transferStudentNameEdit(req, res, db));
app.put('/transferYearBlock', (req, res) => transferYearBlock(req, res, db));


app.put('/addStudent', (req, res) => addStudent(req, res, db));
app.put('/dropStudent', (req, res) => dropStudent(req, res, db));

app.get('/compareUnits', (req, res) => compareUnits(req, res, db))

app.put('/updateProfessorsUnits', (req, res) => updateProfessorsUnits(req, res, db));


app.get('/grabMajorCourses', (req, res) => grabMajorCourses(req, res, db))
app.get('/grabCoursesColors', (req, res) => grabCoursesColors(req, res, db))

app.get('/grabMinorsData', (req, res) => grabMinorsData(req, res, db))
app.put('/updateMinorsData', (req, res) => updateMinorsData(req, res, db));



app.get('/grabMajorMinorCourses', (req, res) => grabMajorMinorCourses(req, res, db))


app.get('/grabFormMajorMinor', (req, res) => grabFormMajorMinor(req, res, db))
app.put('/updateFormMajorMinor', (req, res) => updateFormMajorMinor(req, res, db))

app.get('/grabIrregulars', (req, res) => grabIrregulars(req, res, db))

app.get('/grabStudyPlans', (req, res) => grabStudyPlans(req, res, db))
app.put('/updateStudyPlans', (req, res) => updateStudyPlans(req, res, db));
app.listen(3000, () => {
    console.log('App is running in port 3000')   
})

