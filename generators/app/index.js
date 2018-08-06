var Generator = require('yeoman-generator');

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts);
  }

  messages() {
    this.log('This is the Qulture.rocks generator!\n');
    this.log('You run yo qr:OPTION to create something in our app. The options allowed are:');
    this.log('component\npage\n');
  }
}
