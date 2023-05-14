const compareUnits = (req, res, db) => {


  db.select('*').from('schedules')
  .then((data) => {
    console.log(data, 'data from database')
    res.json(data)
  })
  .catch((error) => {
    console.error(error);
  })


  

}

export default compareUnits;