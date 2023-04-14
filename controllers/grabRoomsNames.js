const grabRoomsNames = async (req, res, db) => {

  console.log('I RAN ROOM')
  try {
    const fullNames = await db('rooms')
      .select(db.raw("room_name"));

    res.status(200).json(fullNames);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'An error occurred while retrieving room data.' });
  }
};

export default grabRoomsNames;
