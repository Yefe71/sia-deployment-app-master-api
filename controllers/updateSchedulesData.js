const updateSchedulesData = async (req, res, db) => {
  console.log(req.body, 'hahah');
  const schedules = req.body;

  if (!schedules || schedules.length === 0) {
    res.status(400).json({ error: 'No schedules data received' });
    return;
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
    actual_units: schedule.actualUnits,
    class_type: schedule.classType,
    room: schedule.room,
    day: schedule.day
  }));

  console.log(schedulesObjects, 'hahha');
  try {
    await db('schedules').truncate();
    await db('schedules').insert(schedulesObjects);
    res.status(200).json({ message: 'Schedules updated successfully' });
  } catch (error) {
    console.error('Error updating schedules:', error);
    res.status(400).json({ error: 'Error updating schedules' });
  }
};

export default updateSchedulesData;
