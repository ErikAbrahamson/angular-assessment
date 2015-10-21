/* jshint -W117, -W030 */
(function() {
  'use strict';

  describe.only('Directive: peopleGrid', function() {
    var element,
      vm;

    beforeEach(function() {
      bard.appModule('app.components.peopleGrid');
      bard.inject(
        '$q',
        '$compile',
        '$rootScope',
        '$state',
        '$templateCache'
      );
    });

    beforeEach(function() {
      var html = angular.element('<gs-people-grid><gs-people-grid>');

      $rootScope = $rootScope.$new();
      $templateCache.put('app/components/peopleGrid/peopleGrid.html', '');
      element = $compile(html)($rootScope);

      $rootScope.$digest(element);

      vm = element.controller('gsPeopleGrid');
    });

    bard.verifyNoOutstandingHttpRequests();

    it('is able to be created', function() {
      expect(element).to.be.defined;
      expect(vm).to.be.defined;
    });
  });

}());
