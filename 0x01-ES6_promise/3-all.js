import { uploadPhoto, createUser } from "./utils.js";

function handleProfileSignup() {
  // Use Promise.all to collectively resolve all promises
  Promise.all([uploadPhoto(), createUser()])
    .then((results) => {
      // Destructure the results array to access the resolved values
      const [photo, user] = results;
      // Log the firstName and lastName to the console
      console.log(`${photo.body} ${user.firstName} ${user.lastName}`);
    })
    .catch(() => {
      // Log an error message if any of the promises reject
      console.log('Signup system offline');
    });
}

export default handleProfileSignup;
