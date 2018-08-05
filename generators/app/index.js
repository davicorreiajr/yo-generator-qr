var Generator = require('yeoman-generator');

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts);

    this.argument('generatorType', { type: String, required: true });
    
    this.DEFAULT_COMPONENT_PATH = 'qr-components';
  }


  prompting() {
    return this.prompt([{
      type    : 'input',
      name    : 'componentName',
      message : 'What is the name of the new component? (e.g qr-bleus)'
    }, {
      type    : 'input',
      name    : 'componentPath',
      message : 'Would you like to create the component in which module?',
      default : this.DEFAULT_COMPONENT_PATH
    }]).then((answers) => {
      this._setComponentName(answers.componentName);
      this._setComponentPath(answers.componentPath);
    });
  }

  writing() {
    var bindings = {
      fileName: this._getFileName(),
      componentName: this._getComponentName()
    };

    this._createJavascriptFile(bindings);
    this._createTemplateFile(bindings);
    this._createIndexFile(bindings);

    this._updateParentIndexFile();
  }

  _getFileName() {
    return this.componentName;
  }

  _getComponentName() {
    return this.componentName.replace(/-([a-z])/g, function (g) { return g[1].toUpperCase(); });
  }

  _getDestinationPath(componentPath, fileName) {
    return this.destinationPath(componentPath + fileName);
  }

  _getComponentPath() {
    return 'app/javascript/src/modules/' + this.componentPath + '/' + this.componentName + '/';
  }

  _copyTemplate(fromPath, toPath, bindings) {
    this.fs.copyTpl(fromPath, toPath, bindings);
  }

  _getTemplate(path) {
    return this.templatePath(path);
  }

  _setComponentName(componentName) {
    this.componentName = componentName;
  }

  _setComponentPath(componentPath) {
    if (componentPath === this.DEFAULT_COMPONENT_PATH) {
      this.componentPath = componentPath;
    } else {
      this.componentPath = componentPath + '/components';
    }
  }

  _createJavascriptFile(bindings) {
    this._copyTemplate(
      this._getTemplate('component-js.js'),
      this._getDestinationPath(this._getComponentPath(), this._getFileName() + '.js'),
      bindings
    )
  }

  _createTemplateFile(bindings) {
    this._copyTemplate(
      this._getTemplate('component-template.slim'),
      this._getDestinationPath(this._getComponentPath(), this._getFileName() + '.slim'),
      bindings
    )
  }

  _createIndexFile(bindings) {
    this._copyTemplate(
      this._getTemplate('component-index.js'),
      this._getDestinationPath(this._getComponentPath(), 'index.js'),
      bindings
    )
  }

  _updateParentIndexFile() {
    var indexFileName = this.componentPath === this.DEFAULT_COMPONENT_PATH ?
      '/qr-components.manifest.js' : '/index.js';

    var filePath = this.destinationPath('app/javascript/src/modules/' + this.componentPath + indexFileName);
    var content = 'export { ' + this._getComponentName() + " } from './" + this._getFileName() + "';\n";

    this.fs.append(filePath, content);
  }
};
