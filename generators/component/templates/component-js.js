import templateUrl from './<%= fileName %>.slim';

const COMPONENT_NAME = '<%= componentName %>';

export default [COMPONENT_NAME, {
  templateUrl,
  bindings: {
  },
  controller: function () {
    'ngInject';
  }
}];
