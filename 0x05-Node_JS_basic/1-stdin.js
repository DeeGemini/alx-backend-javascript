// 1-stdin.js

// Display the welcome message
console.log('Welcome to Holberton School, what is your name?');

// Setup stdin to read from the user
process.stdin.setEncoding('utf8');

// Read the user input from stdin
process.stdin.on('data', (input) => {
  const name = input.trim(); // Remove any trailing newlines
  console.log(`Your name is: ${name}`); // Use backticks for template literals
  console.log('This important software is now closing');
  process.exit(); // Exit the process after displaying the messages
});
