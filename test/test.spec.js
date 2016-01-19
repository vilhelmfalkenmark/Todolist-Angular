describe("todo", function(){
  beforeEach(module("todoList"));


  var todoController, scope;
  beforeEach(inject(function($rootScope, $controller){

  scope = $rootScope.$new();

  todoController = $controller("todoController",{
  $scope: scope

  });
  }));

  it('should return true', function(){
    expect(scope.addItem()).toBe(true);
  });
  //
  // it("tab is set to 1", function(){
  //   expect(TabController.tab).toBe(1);
  // });
  //
  //
  // it("should set tab to the passed value",function(){
  //   TabController.setTab(1); // Kallar på funktionen
  //   expect(TabController.tab).toBe(1); // Kollar vad som händer och skriver ut i konsollen vad som händer.
  // });
  //
  //
  // it("should set tab to 1 if no value is passed",function(){
  //   TabController.setTab();
  //   expect(TabController.tab).toBe(1);
  // });
  //
  //
  // it("should return true if tab match passed value", function(){
  //   expect(TabController.setTab(2));
  //   expect(TabController.isSet(2)).toBe(true);
  // });
});
