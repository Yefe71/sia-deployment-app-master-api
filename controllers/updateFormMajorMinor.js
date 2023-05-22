const updateFormMajorMinor = async (req, res, db) => {
  console.log(req.body);
  const majorMinorCourses = req.body;
  const majorMinorCoursesObjects = majorMinorCourses.map((courses) => ({
    name: courses.name,
    code: courses.code,
  }));

  console.log(majorMinorCoursesObjects);
  await db('majorMinorCourses').truncate(); // Clear the professors table before inserting new data
  await db('majorMinorCourses').insert(majorMinorCoursesObjects);
};

export default updateFormMajorMinor;
