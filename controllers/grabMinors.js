const grabMinors = (req, res, db) => {

  db.select('*').from('rooms')
  .then((data) => {
    res.json(data)
  })
  .catch((error) => {
    console.error(error);
  })

}

export default grabMinors;