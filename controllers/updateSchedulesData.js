const updateSchedulesData = async (req, res, db) => {
  console.log(req.body, 'hahah');
  const schedules = req.body;

  

for (const schedule of schedules) {
  console.log(typeof(schedule.id), typeof(parseInt(schedule.actualUnits, 10)), typeof(schedule.year), typeof(schedule.block))
}

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
    actual_units: parseInt(schedule.actualUnits, 10),
    class_type: schedule.classType,
    room: schedule.room,
    day: schedule.day
  }));

  try {
    await db('schedules').truncate();

    if (schedulesObjects.length > 0) {
      await db('schedules').insert(schedulesObjects);
    }

    res.json({ success: true });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: 'Failed to update schedules' });
  }


};

export default updateSchedulesData;
