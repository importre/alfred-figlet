const alfy = require('alfy');
const input = alfy.input;
const font = alfy.config.get('font') || 'Standard';
const list = [{
  title: input,
  subtitle: font,
  arg: input,
}];
const items = alfy.inputMatches(list, 'title');
alfy.output(items);

