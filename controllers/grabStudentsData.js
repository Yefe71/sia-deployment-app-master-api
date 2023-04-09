const grabStudentsData = (req, res, db) => {
  const year = req.query.year; // get year from query parameter
  const numBlock = req.query.numBlock; // get block from query parameter
  console.log(year, numBlock)

  // First query: alter table to assign block numbers
  db.raw(`
    WITH 
      block_sizes AS (
        SELECT 
          COUNT(*) AS total_students, 
          ceil(COUNT(*)::FLOAT / ${numBlock}) AS target_block_size 
        FROM students
        WHERE YEAR = ${year} -- Add the condition here
      ),
      students_with_blocks AS (
        SELECT 
          *,
          ceil(row_number() over (order by random())::float / block_sizes.target_block_size) AS block_number
        FROM students
        CROSS JOIN block_sizes
        WHERE YEAR = ${year} -- Add the same condition here
      )
    UPDATE students sl
    SET 
      block = swb.block_number
    FROM students_with_blocks swb
    WHERE swb.student_id = sl.student_id;
  `)
  .then(() => {
    // Second query: select data filtered by year and block
    return db.select('*')
             .from('students')
             .where('year', '=', year);

  })
  .then((data) => {
    // handle response data here
    res.json(data)
  })
  .catch((error) => {
    // handle errors here
    console.error('hahaha',error);
  });

}

export default grabStudentsData;