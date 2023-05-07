const dropStudent = async (req, res, db) => {
  
    let dropStudentId = req.query.dropStudentId;
  
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
  