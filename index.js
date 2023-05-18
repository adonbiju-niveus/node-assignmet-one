// create a promoise to display a mesaage and cal the promise
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


//Create a file using fs module and async/await.
const fs = require('fs');

async function createFile(fileName,content) {
  try {
    if(!fs.existsSync('newfile.txt')){
    await fs.promises.writeFile(fileName,content);
    console.log('File created!');
    }
  } catch (error) {
    console.error('Error:', error);
  }
}

let fileName='newfile.txt'
let content='Hello, new file!'
createFile(fileName,content);
