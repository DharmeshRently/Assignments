const fs = require('fs');

const fileDescriptor = fs.openSync('file.txt', 'r');

fs.read(fileDescriptor,(err,data)=>{
    console.log(data)
})

fs.close(fileDescriptor, (err) => {
  if (err) {
    console.error('Error closing file:', err);
  } else {
    console.log('File closed successfully.');
  }
});
