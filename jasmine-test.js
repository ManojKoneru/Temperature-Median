describe("Sample Test Suite", function() {

  it("sample thrutiness test", function() {
    expect(true).toBeTruthy();
  });

});

/**
 * http://usejsdoc.org/
 */

    describe('mainController', function() {
        beforeEach(function() {
            module('myApp');
        });
 
        beforeEach(inject(function($controller, $rootScope){
            $scope = $rootScope.$new();
        }));
 
        it('testing median', inject(function($controller) {
            var scope = {},
                ctrl = $controller('mainController', { $scope: scope });
            expect(scope.data).toBe();
        }));
    });
