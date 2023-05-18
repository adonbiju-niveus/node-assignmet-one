function displayMessage() {
  return new Promise((resolve, reject) => {
    console.log("Hello, world!");
    resolve("Adon");
  });
}

displayMessage()
  .then((resolveMessage) => {
    console.log("Promise resolved!");
    console.log("Message in ressolve is " + resolveMessage);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
