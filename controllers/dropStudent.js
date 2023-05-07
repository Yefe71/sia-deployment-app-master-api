const dropStudent = async (req, res, db) => {
  
    let dropStudentId = req.query.dropStudentId;
    if (dropStudentId.length > 4 && dropStudentId.charAt(4) !== '-') {
        const newStudentId = dropStudentId.slice(0, 4) + '-' + dropStudentId.slice(4);
        dropStudentId = newStudentId;
      }
    try {
      const rowsAffected = await db('students')
        .where({ student_id: dropStudentId })
        .del();
  
      if (rowsAffected === 0) {
        res.status(404).json({ message: 'No matches found, nothing happened' });
      } else {
        res.status(200).json({ message: 'Student dropped successfully' });
      }
  
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'An error occurred while dropping the student' });
    }
  };
  
  export default dropStudent;
  