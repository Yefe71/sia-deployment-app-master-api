const transferStudent = async (req, res, db) => {
  
    let studentId = req.query.studentId;
    let newBlock = req.query.newBlock;

   
    
    if (studentId.length > 4 && studentId.charAt(4) !== '-') {
      const newStudentId = studentId.slice(0, 4) + '-' + studentId.slice(4);
      studentId = newStudentId;
    }

    newBlock = newBlock.split("-")[1];

 
  
    
    try {
        // Update the block column with the newBlock value
        await db('students')
          .where('student_id', '=', studentId)
          .update({ block: newBlock });
    
        // Retrieve the updated student information
        const query = db('students')
          .select(db.raw("*"))
          .where('student_id', '=', studentId);
    
        const fullNames = await query;
    
        res.status(200).json(fullNames);
     
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'An error occurred while transferring student' });
      }
    };
  
  export default transferStudent;