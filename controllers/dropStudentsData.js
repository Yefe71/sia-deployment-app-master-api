const dropStudentsData = (req, res, db) => {

    db.select('*').from('professors')
    .then((data) => {
      res.json(data)
    })
    .catch((error) => {
      console.error(error);
    })
  
  }
  
  export default dropStudentsData;