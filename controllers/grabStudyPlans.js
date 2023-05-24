const grabStudyPlans = (req, res, db) => {
  console.log("grabbing study")

  db.select('*')
    .from('studyPlans')
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      console.error(error);
    });
};

export default grabStudyPlans;
