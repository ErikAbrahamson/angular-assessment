(function() {
  'use strict';

  angular.module('app.components.peopleGrid')
    .directive('gsPeopleGrid', peopleGridDirective);

  function peopleGridDirective() {
    return {
      restrict: 'E',
      templateUrl: 'app/components/peopleGrid/peopleGrid.html',
      scope: { data: '=' },
      controller: PeopleGridController,
      controllerAs: 'vm',
      bindToController: true
    };
  }

  PeopleGridController.$inject = ['dataservice', 'logger'];

  function PeopleGridController(dataservice, logger) {
    var vm = this;
    vm.people = [];
    vm.activate = activate;

    function activate() {
      getPeople();
    }

    function getPeople() {
      return dataservice.getPeople()
        .then(function (data) {
          vm.people = data;
          return vm.people;
      });
    }
  }

}());
