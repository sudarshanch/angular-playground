angular.
    module('playground').
    component('nameList', {
      template:
      '<ul>' +
        '<li ng-repeat="name in $ctrl.names">' +
            '<span>{{name.first_name}} {{name.last_name}}</span>' +
        '</li>' +
      '</ul>',
      controller: function NameController() {
        this.names = [
          {
            first_name: 'Sudarshan',
            last_name: 'Ch'
          }, {
            first_name: 'Sukruth',
            last_name: 'Chippa'
          },
          {
            first_name: 'Pavan',
            last_name: 'Chava'
          }
        ];
      }
    });