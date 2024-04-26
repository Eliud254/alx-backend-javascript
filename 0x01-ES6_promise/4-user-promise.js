import signUpUser from "./4-user-promise";

signUpUser("Bob", "Dylan")
  .then(user => console.log(user));

export default function signUpUser(firstName, lastName) {
  return Promise.resolve({
    firstName,
    lastName,
  });
}
