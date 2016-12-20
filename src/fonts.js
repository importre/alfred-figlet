const alfy = require('alfy');
const figlet = require('figlet');
const font = alfy.config.get('font') || 'Standard';
const list = figlet
  .fontsSync()
  .map(fontName => ({
    title: fontName,
    subtitle: font,
    arg: fontName,
  }));
const items = alfy.inputMatches(list, 'title');
alfy.output(items);

