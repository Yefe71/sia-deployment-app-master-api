const updateSchedulesData = async (req, res, db) => {
  console.log(req.body, 'hahah');
  const schedules = req.body;

  const schedulesObjects = schedules.map((schedule) => ({
    id: schedule.id,
    color: schedule.color,
    start_date: schedule.startDate,
    end_date: schedule.endDate,
    professor_name: schedule.professorName,
    year: schedule.year,
    block: schedule.block,
    course_name: schedule.courseName,
    course_code: schedule.courseCode,
    units: schedule.units,
    actual_units: schedule.actualUnits,
    class_type: schedule.classType,
    room: schedule.room,
    day: schedule.day
  }));

  console.log(schedulesObjects, 'hahha');
    await db('schedules').truncate();
    await db('schedules').insert(schedulesObjects);

};

export default updateSchedulesData;
