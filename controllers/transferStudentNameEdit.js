const transferStudentNameEdit = async (req, res, db) => {
  
  let studentId = req.query.studentId;
  let editStudentLast = req.query.editStudentLast;
  let editStudentFirst = req.query.editStudentFirst;
  let editStudentMiddle = req.query.editStudentMiddle;
  let editStudentSuffix = req.query.editStudentSuffix;
  let transferStanding = req.query.transferStanding;

  if (studentId.length > 4 && studentId.charAt(4) !== '-') {
    const newStudentId = studentId.slice(0, 4) + '-' + studentId.slice(4);
    studentId = newStudentId;
  }

  console.log('Student ID:', studentId);
  
  try {
    await db('students')
      .where({ student_id: studentId })
      .update({
        last_name: editStudentLast,
        first_name: editStudentFirst,
        middle_name: editStudentMiddle,
        suffix: editStudentSuffix,
        standing: transferStanding,
      });

    res.status(200).json({ message: 'Student data updated successfully.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'An error occurred while updating student data.' });
  }
};

export default transferStudentNameEdit;
