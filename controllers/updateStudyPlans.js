const updateStudyPlans = async (req, res, db) => {
  console.log(req.body, "UPDATE STUDY PLANS!!!!!!!!!!!!!!");

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
  };

export default updateStudyPlans;
