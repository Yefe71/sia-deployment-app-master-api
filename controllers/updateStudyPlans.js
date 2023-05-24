const updateStudyPlans = async (req, res, db) => {
  try {
    console.log(req.body, "UPDATE STUDY PLANS!!!!!!!!!!!!!!");

    if (!req.body) {
      throw new Error('Request body is empty');
    }

    const generatedSchedule = req.body;

    const generatedScheduleObjects = generatedSchedule.map((schedule) => ({
      start_date: schedule.startDate,
      end_date: schedule.endDate,
      professor_name: schedule.professorName,
      year: schedule.year,
      block: schedule.block,
      course_name: schedule.courseName,
      course_code: schedule.courseCode,
      class_type: schedule.classType,
      room: schedule.room,
      day: schedule.day,
      student_name: schedule.studentName
    }));

    console.log(generatedScheduleObjects);
    await db('studyPlans').truncate(); // Clear the professors table before inserting new data
    await db('studyPlans').insert(generatedScheduleObjects);

    // Fetch the updated data from the database
    const updatedData = await db.select('*').from('studyPlans');

    // Send the updated data back to the client
    res.json(updatedData);

  } catch (error) {
    console.error(error);
    res.status(500).send({ message: error.message });
  }
};
export default updateStudyPlans;
