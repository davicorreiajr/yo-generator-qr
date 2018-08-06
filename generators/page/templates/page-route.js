import controller from './<%= fileName %>.ctrl';
import templateUrl from './<%= fileName %>.slim';

export const stateName = '<%= stateName %>';

export default function <%= pageName %>Route($stateProvider) {
  'ngInject';

  $stateProvider.state(stateName, {
    url: '/<%= pageUrl %>',
    controller,
    controllerAs: '$ctrl',
    templateUrl,
    params: {
    },
    resolve: {
    }
  });
}