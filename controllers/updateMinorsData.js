const updateMinorsData = async (req, res, db) => {
  const {
    professor_name, 
    year, 
    course_name, 
    course_code, 
    unit, 
    actual_unit, 
    class_type, 
    room, 
    day, 
    start_date, 
    end_date,
    new_professor_name, 
    new_year, 
    new_course_name, 
    new_course_code, 
    new_unit, 
    new_actual_unit, 
    new_class_type, 
    new_room, 
    new_day, 
    new_start_date, 
    new_end_date,
  } = req.body;


  console.log(req.body, "recieved!")
  try {
    await db('minorSchedules')
      .where({
        professor_name, 
        year: parseInt(year, 10), 
        course_name, 
        course_code, 
        unit: parseInt(unit, 10), 
        actual_unit: parseInt(actual_unit, 10), 
        class_type, 
        room, 
        day: new Date(day), 
        start_date: new Date(start_date),
        end_date: new Date(end_date)
      })
      .update({
        professor_name: new_professor_name, 
        year: parseInt(new_year, 10), 
        course_name: new_course_name, 
        course_code: new_course_code, 
        unit: parseInt(new_unit, 10), 
        actual_unit: parseInt(new_actual_unit, 10), 
        class_type: new_class_type, 
        room: new_room, 
        day: new Date(new_day), 
        start_date: new Date(new_start_date),
        end_date: new Date(new_end_date)
      });

    res.status(200).send('Data updated successfully');
  } catch (error) {
    console.error(error);
    res.status(500).send('An error occurred while updating the data');
  }
};

export default updateMinorsData;
