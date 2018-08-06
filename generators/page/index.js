var Generator = require('yeoman-generator');

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts);
  }

  prompting() {
    return this.prompt([{
      type    : 'input',
      name    : 'pageName',
      message : 'What is the name of the new page? (e.g new-page)'
    }, {
      type    : 'input',
      name    : 'pagePath',
      message : 'Provide the path to the new page'
    }]).then((answers) => {
      this._setPageName(answers.pageName);
      this._setPagePath(answers.pagePath);
    });
  }

  _setPageName(name) {
    this.pageName = name;
  }

  _setPagePath(path) {
    this.pagePath = path;
  }
}