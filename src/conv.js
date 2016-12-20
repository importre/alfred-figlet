const alfy = require('alfy');
const figlet = require('figlet');
const input = alfy.input;
const font = alfy.config.get('font') || 'Standard';
const output = figlet.textSync(input, {
  font
});
console.log(output);

