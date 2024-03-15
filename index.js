const crypto = require('crypto');

function getRandomNumber() {
  // Generate a cryptographically secure random number between 0 and 65535 (inclusive)
  const buffer = crypto.randomBytes(2);
  const randomNumber = buffer.readUInt16BE(0);
  
  // Add 1 to make the range inclusive of 1 and 65536
  return randomNumber + 1;
}

function generateRandomNumbers(count) {
  const randomNumbers = [];
  for (let i = 0; i < count; i++) {
    randomNumbers.push(getRandomNumber());
  }
  return randomNumbers;
}

const numbers = generateRandomNumbers(3);
console.log(numbers);
