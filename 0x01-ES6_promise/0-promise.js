export default function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    // eslint-disable-next-line no-constant-condition
    const condition = true;
    if (condition) {
      resolve();
    } else {
      reject();
    }
  });
}
