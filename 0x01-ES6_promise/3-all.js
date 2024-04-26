import { uploadPhoto, createUser } from "./utils.js";

function handleProfileSignup() {
  // Call both functions and store their promises
  const photoPromise = uploadPhoto();
  const userPromise = createUser();

  // Use Promise.all to collectively resolve all promises
  Promise.all([photoPromise, userPromise])
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
