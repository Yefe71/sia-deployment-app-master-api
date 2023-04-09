import express from 'express'
import cors from 'cors'
import knex from 'knex'
import grabStudentsData from './controllers/grabStudentsData.js'





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


app.get('/grabStudents', (req, res) => grabStudentsData(req, res, db))





// /grabStudents




app.listen(3000, () => {
    console.log('App is running in port 3000')   
})