
const prompt = require('prompt-sync')();

let age = prompt("what is your age?");
age = Number(age);
if(age < 18) {
    console.log('access denied');
}
else {
    console.log('access granted');
}
