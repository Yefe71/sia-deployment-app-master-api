const grabStudyPlans = (req, res, db) => {
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
