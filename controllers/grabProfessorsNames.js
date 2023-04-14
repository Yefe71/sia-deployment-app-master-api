const grabProfessorsNames = async (req, res, db) => {
console.log('I RAN PROF')
  try {
    const fullNames = await db('professors')
      .select(db.raw("last_name || ', ' || first_name || ' ' || middle_name as full_name"))
      .orderBy('last_name', 'asc');

    res.status(200).json(fullNames);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'An error occurred while retrieving professor data.' });
  }
};

export default grabProfessorsNames;
