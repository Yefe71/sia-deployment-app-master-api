const updateRoomsData = async (req, res, db) => {
  console.log(req.body, 'hahah');
  const rooms = req.body;
  const roomsObjects = rooms.map((room) => ({
    room_name: room.roomname
  }));

  console.log(roomsObjects, 'hahha');
  await db('rooms').truncate(); 
  await db('rooms').insert(roomsObjects);
};

export default updateRoomsData;
