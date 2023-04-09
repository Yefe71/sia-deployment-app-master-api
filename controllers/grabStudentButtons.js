const grabStudentButtons = (req, res, db) => {
  const yearButton = parseInt(req.query.yearButton, 10);
  const blockButton = parseInt(req.query.blockButton, 10);

  if (!isNaN(yearButton) && isNaN(blockButton)) {
    console.log("first")
    db.select('*')
      .from('students')
      .where('year', '=', yearButton)
      .then((data) => {
        res.json(data)
      })
      .catch((error) => {
        console.error('hahaha', error);
      });
  } else if (isNaN(yearButton) && !isNaN(blockButton)) {
    console.log("second")
    db.select('*')
      .from('students')
      .where('block', '=', blockButton)
      .then((data) => {
        res.json(data)
      })
      .catch((error) => {
        console.error('hahaha', error);
      });
  } else if (!isNaN(yearButton) && !isNaN(blockButton)) {
    console.log("third")
    db.select('*')
      .from('students')
      .where('year', '=', yearButton)
      .andWhere('block', '=', blockButton)
      .then((data) => {
        res.json(data)
      })
      .catch((error) => {
        console.error('hahaha', error);
      });
  } else {
    console.log("fourth")
    db.select('*')
      .from('students')
      .then((data) => {
        res.json(data)
      })
      .catch((error) => {
        console.error('hahaha', error);
      });
  }
}

export default grabStudentButtons;
