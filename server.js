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



app.listen(3000, () => {
    console.log('App is running in port 3000')   
})