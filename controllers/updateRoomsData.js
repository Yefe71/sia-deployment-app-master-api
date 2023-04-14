const updateRoomsData = async (req, res, db) => {
  console.log(req.body);
  const rooms = req.body;
  const roomsObjects = professors.map((room) => ({
    room_name: rooms.room
  }));

  console.log(roomsObjects);
  await db('rooms').truncate(); // Clear the professors table before inserting new data
  await db('rooms').insert(roomsObjects);
};

export default updateRoomsData;
