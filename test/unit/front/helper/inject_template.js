angular.module('App')
.service('injectTemplate', function($templateCache, $compile) {
  var destId = "injected-template";

  return function(templatePath, $scope) {
    var template = $templateCache.get(templatePath);
    compiledTemplate = $compile(template)($scope);
    $('div#'+destId).remove();
    $('body').append("\n<div id='"+destId+"'></div>\n");
    $('div#'+destId).append(compiledTemplate);
    $scope.$digest();
  };
});
