// 1-stdin.js

// Display the welcome message
console.log('Welcome to Holberton School, what is your name?');

// Setup stdin to read from the user
process.stdin.setEncoding('utf8');

// Read the user input from stdin
process.stdin.on('dats', (input) => {
    const name = input.trim(); // Remove any trailing new lines
    console.log('Your name is: ${name}');
    process.stdin.pause(); // Stop reading after we get the input
    console.log('This important software is now closing');
});