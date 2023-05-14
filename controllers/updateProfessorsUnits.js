const updateProfessorsUnits = async (req, res, db) => {
  try {
    // Calculate the sum of units for each professor in schedules table
    const sums = await db('schedules')
      .select('professor_name')
      .sum(db.raw('??::numeric', ['units'])) // cast units to numeric
      .groupBy('professor_name');

    // Fetch all professors
    const professors = await db('professors');

    // Create a map of professors by name for faster lookup
    const professorsByName = new Map(professors.map(prof => [`${prof.last_name}, ${prof.first_name} ${prof.middle_name}`, prof]));

    // For each sum, find the matching professor and update their current_units
    for (const sum of sums) {
      const professor = professorsByName.get(sum.professor_name);

      // Update the matching professor
      if (professor) {
        await db('professors')
        .where({
          last_name: professor.last_name,
          first_name: professor.first_name,
          middle_name: professor.middle_name
        })
          .update({current_units: sum.sum});  // use sum.sum because sum function result is returned as 'sum'
      }
    }
    
    res.status(200).send("Success");
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
};

export default updateProfessorsUnits;
