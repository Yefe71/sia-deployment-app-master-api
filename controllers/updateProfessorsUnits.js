const updateProfessorsUnits = async (req, res, db) => {
  try {
    // Calculate the sum of units for each professor in schedules table
    const sums = await db('schedules')
      .select('professor_name')
      .sum(db.raw('??::numeric', ['units'])) // cast units to numeric
      .groupBy('professor_name');

    // For each sum, find the matching professor and update their current_units
    for (const sum of sums) {
      const names = sum.professor_name.split(', ');

      await db('professors')
        .where({
          last_name: names[0],
          first_name: names[1],
          middle_name: names[2] || null
        })
        .update({current_units: sum.sum});  // use sum.sum because sum function result is returned as 'sum'
    }
    
    res.status(200).send("Success");
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
};

export default updateProfessorsUnits;
