import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  return Promise.all([uploadPhoto(), createUser()]).then(([photoData, userData]) => {
    console.log(photoData.body, ...Object.values(userData));
  }).catch(() => console.log('Signup system offline'));
}
