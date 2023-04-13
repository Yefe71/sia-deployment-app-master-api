const updateProfessorsData = async (req, res, db) => {
  console.log(req.body);
  const professors = req.body;
  const professorObjects = professors.map((professor) => ({
    last_name: professor.lastname,
    first_name: professor.firstname,
    middle_name: professor.middlename,
    employment: professor.employment,
    max_units: professor.maxUnits,
  }));

  console.log(professorObjects);
  await db('professors').truncate(); // Clear the professors table before inserting new data
  await db('professors').insert(professorObjects);
  res.status(200).json({ message: 'Professor data updated successfully.' });
};

export default updateProfessorsData;
