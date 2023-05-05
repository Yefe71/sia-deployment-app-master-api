const grabStudentButtons = (req, res, db) => {


  const yearButton = parseInt(req.query.yearButton, 10);
  const blockButton = parseInt(req.query.blockButton, 10);
  const standingButton = req.query.standingButton;
  console.log(yearButton, blockButton, standingButton)
 
  
  if (!isNaN(yearButton) && isNaN(blockButton)) {
    console.log("first")
    db.select('*')
      .from('students')
      .where('year', '=', yearButton)
      .orderBy('last_name', 'asc')
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
      .orderBy('last_name', 'asc')
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
      .orderBy('last_name', 'asc')
      .then((data) => {
        res.json(data)
      })
      .catch((error) => {
        console.error('hahaha', error);
      });
  } else if (standingButton) {
    console.log(standingButton, "standing ran")
    db.select('*')
      .from('students')
      .where('standing', '=', standingButton)
      .orderBy('last_name', 'asc')
      .then((data) => {
        res.json(data)
      })
      .catch((error) => {
        console.error('hahaha', error);
      });
    }else {
    console.log("fourthdisidsd")
    db.select('*')
      .from('students')
      .orderBy('last_name', 'asc')
      .then((data) => {
        res.json(data)
      })
      .catch((error) => {
        console.error('hahaha', error);
      });
  }
}

export default grabStudentButtons;
