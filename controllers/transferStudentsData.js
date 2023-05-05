const transferStudentsData = async (req, res, db) => {
  
    const studentId = req.query.studentId;
    console.log('Student ID:', studentId);
    
    try {
      const query = db('students')
        .select(db.raw("last_name || ', ' || first_name || ' ' || middle_name as full_name"))
        .where('student_id', '=', studentId)
        .orderBy('last_name', 'asc');
      
    
  
      const fullNames = await query;
    
      res.status(200).json(fullNames);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'An error occurred while retrieving student data.' });
    }
  };
  
  export default transferStudentsData;
  