const transferYearBlock = async (req, res, db) => {
  
 

  let studentId = req.query.studentId;
  if (studentId.length > 4 && studentId.charAt(4) !== '-') {
    const newStudentId = studentId.slice(0, 4) + '-' + studentId.slice(4);
    studentId = newStudentId;
  }


    console.log('Student ID:', studentId);
    try {
      const query = db('students')
        .select(db.raw("year || '-' || block as year_block"))
        .where('student_id', '=', studentId)
        .orderBy('last_name', 'asc');
      
    
  
      const year_block = await query;
    
      res.status(200).json(year_block);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'An error occurred while retrieving student data.' });
    }
  };
  
  export default transferYearBlock;
  