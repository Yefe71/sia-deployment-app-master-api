const grabIrregulars = (req, res, db) => {
  db.select('*')
    .from('students')
    .where('standing', '=', 'IRREGULAR')
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      console.error(error);
    });
};

export default grabIrregulars;
