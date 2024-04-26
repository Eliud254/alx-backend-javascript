import { uploadPhoto, createUser } from "./utils.js";

function handleProfileSignup() {
  // Call uploadPhoto and handle its promise
  uploadPhoto()
    .then((photo) => {
      // Call createUser and handle its promise
      return createUser()
        .then((user) => {
          // Log the firstName and lastName to the console
          console.log(`${photo.body} ${user.firstName} ${user.lastName}`);
        });
    })
    .catch(() => {
      // Log an error message if any of the promises reject
      console.log('Signup system offline');
    });
}

export default handleProfileSignup;
