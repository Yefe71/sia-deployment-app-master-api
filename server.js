import express from 'express'
import cors from 'cors'
import knex from 'knex'
import grabStudentsData from './controllers/grabStudentsData.js'
import grabStudentButtons from './controllers/grabStudentButtons.js'
import grabProfessorsData from './controllers/grabProfessorsData.js'
import updateProfessorsData from './controllers/updateProfessorsData.js'


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





app.listen(3000, () => {
    console.log('App is running in port 3000')   
})