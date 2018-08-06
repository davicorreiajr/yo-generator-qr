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
      message : 'Provide the path to the new page (from app/javascript/src/modules/)'
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

  writing() {
    var bindings = {
      fileName: this._getFileName(),
      pageName: this._getPageName(),
      stateName: this._getStateName(),
      pageUrl: this._getPageUrl()
    };

    this._createControllerFile(bindings);
    this._createRouteFile(bindings)
    this._createTemplateFile(bindings);
    this._createIndexFile(bindings);
  }

  end() {
    this.log('\n!!! REMEMBER TO UPDATE THE PARENT FOLDER INDEX TO IMPORT THIS NEW PAGE !!!\n');
  }

  _getFileName() {
    return this.pageName;
  }

  _getPageName() {
    return this.pageName
      .split('-')
      .map(item => item.charAt(0).toUpperCase() + item.substr(1))
      .reduce((prev, curr) => prev.concat(curr));
  }

  _getStateName() {
    return 'FIX_STATE_NAME';
  }

  _getPageUrl() {
    return 'FIX_PAGE_URL';
  }

  _createControllerFile(bindings) {
    this._copyTemplate(
      this._getTemplate('page-ctrl.js'),
      this._getDestinationPath(this._getComponentPath(), this._getFileName() + '.ctrl.js'),
      bindings
    )
  }

  _createRouteFile(bindings) {
    this._copyTemplate(
      this._getTemplate('page-route.js'),
      this._getDestinationPath(this._getComponentPath(), this._getFileName() + '.route.js'),
      bindings
    )
  }

  _createTemplateFile(bindings) {
    this._copyTemplate(
      this._getTemplate('page-template.slim'),
      this._getDestinationPath(this._getComponentPath(), this._getFileName() + '.slim'),
      bindings
    )
  }

  _createIndexFile(bindings) {
    this._copyTemplate(
      this._getTemplate('page-index.js'),
      this._getDestinationPath(this._getComponentPath(), 'index.js'),
      bindings
    )
  }

  _getComponentPath() {
    return 'app/javascript/src/modules/' + this.pagePath + '/' + this.pageName + '/';
  }

  _getDestinationPath(componentPath, fileName) {
    return this.destinationPath(componentPath + fileName);
  }

  _getTemplate(path) {
    return this.templatePath(path);
  }

  _copyTemplate(fromPath, toPath, bindings) {
    this.fs.copyTpl(fromPath, toPath, bindings);
  }
}