const addStudent = async (req, res, db) => {
  
  let addStudentId = req.query.addStudentId.toUpperCase(); 
  let addStudentYear = req.query.addStudentYear;
  let addStudentBlock = req.query.addStudentBlock;
  let addStudentLast = req.query.addStudentLast.toUpperCase();
  let addStudentFirst = req.query.addStudentFirst.toUpperCase();
  let addStudentMiddle = req.query.addStudentMiddle.toUpperCase();
  let addStudentStanding = req.query.addStudentStanding.toUpperCase();
  
  console.log(addStudentId, addStudentYear, addStudentBlock, addStudentLast, addStudentFirst, addStudentMiddle, addStudentStanding)
  
  if (addStudentId.length > 4 && addStudentId.charAt(4) !== '-') {
    const newStudentId = addStudentId.slice(0, 4) + '-' + addStudentId.slice(4);
    addStudentId = newStudentId;
  }

  try {
   
      const existingStudent = await db('students').where({ student_id: addStudentId }).first();

      if (existingStudent) {
          res.status(400).json({ message: 'Student ID already exists' });
      } else {
         
          await db('students').insert({
              student_id: addStudentId,
              last_name: addStudentLast,
              first_name: addStudentFirst,
              middle_name: addStudentMiddle,
              standing: addStudentStanding,
              year: addStudentYear,
              block: addStudentBlock,
          });

          res.status(201).json({ message: 'Student added successfully' });
      }
  } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'An error occurred while adding the student' });
  }
};

export default addStudent;
