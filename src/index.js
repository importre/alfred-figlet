const alfy = require('alfy');
const alfredNotifier = require('alfred-notifier');
const input = alfy.input;
const font = alfy.config.get('font') || 'Standard';
const list = [{
  title: input,
  subtitle: font,
  arg: input,
}];
const items = alfy.inputMatches(list, 'title');
alfredNotifier();
alfy.output(items);

