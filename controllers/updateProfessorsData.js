const updateProfessorsData = async (req, res, db) => {
  console.log(req.body);

  try {
    const updatedProfessors = req.body;

    // Loop through the updatedProfessors array and update each professor in the database
    for (const professor of updatedProfessors) {
      await db('professors')
        .where({
          first_name: professor.firstname,
          last_name: professor.lastname,
          middle_name: professor.middlename,
        })
        .update({
          employment: professor.employment,
          max_units: professor.maxUnits,
        });
    }

    res.json({ success: true });
  } catch (error) {
    console.log(error);
    res.status(400).json({ success: false, message: 'Failed to update professors' });
  }
};

export default updateProfessorsData;
