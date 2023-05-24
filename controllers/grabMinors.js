const grabMinors = (req, res, db) => {

  db.select('*').from('minorCourses')
  .then((data) => {
    res.json(data)
  })
  .catch((error) => {
    console.error(error);
  })

}

export default grabMinors;