const grabFormMajorMinor = (req, res, db) => {

  db.select('*').from('formMajorMinorData')
  .then((data) => {
    console.log(data, 'major minor courses from database')
    res.json(data)
  })
  .catch((error) => {
    console.error(error);
  })

};

export default grabFormMajorMinor;
