const grabCoursesColors = (req, res, db) => {


  db.select('*').from('coursesColors')
  .then((data) => {
    console.log(data, 'colors from database')
    res.json(data)
  })
  .catch((error) => {
    console.error(error);
  })

}

export default grabCoursesColors;

