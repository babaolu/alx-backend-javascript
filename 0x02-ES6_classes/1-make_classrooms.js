import Classroom from './0-classroom';

export default function initializeRooms() {
  const sizes = [19, 20, 34];
  const rooms = [];

  for (let size of sizes) {
    rooms.push(new Classroom(size));
  }
  return rooms;
}
