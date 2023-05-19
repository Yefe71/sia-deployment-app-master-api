const grabMajorCourses = (req, res, db) => {


  db.select('*').from('majorCourses')
  .then((data) => {
    console.log(data, 'major courses from database')
    res.json(data)
  })
  .catch((error) => {
    console.error(error);
  })

}

export default grabMajorCourses;