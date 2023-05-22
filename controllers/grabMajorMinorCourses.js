const grabMajorMinorCourses = (req, res, db) => {
  db.select('name', 'code').from('majorCourses')
    .union(db.select('name', 'code').from('minorCourses'))
    .then((data) => {
      console.log(data, 'major and minor courses from the database');
      res.json(data);
    })
    .catch((error) => {
      console.error(error);
    });
};

export default grabMajorMinorCourses;
