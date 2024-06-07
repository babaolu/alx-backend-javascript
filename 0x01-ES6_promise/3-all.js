import { uploadPhoto, createUser } from "./utils.js";


export default async function handleProfileSignup() {
  const photoName = await uploadPhoto().then((data) => data.body);
  const userName = await createUser().then(data => Object.values(data));
  console.log(photoName, ...userName);
}
