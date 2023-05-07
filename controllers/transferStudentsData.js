const transferStudentsData = async (req, res, db) => {
  
  let studentId = req.query.studentId;
  if (studentId.length > 4 && studentId.charAt(4) !== '-') {
    const newStudentId = studentId.slice(0, 4) + '-' + studentId.slice(4);
    studentId = newStudentId;
  }

  console.log('Student ID:', studentId);
  
  try {
    const query = db('students')
      .select('last_name', 'first_name', 'middle_name')
      .where('student_id', '=', studentId)
      .orderBy('last_name', 'asc');

    const studentData = await query;
  
    res.status(200).json(studentData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'An error occurred while retrieving student data.' });
  }
};

export default transferStudentsData;
