var app = angular.module('todoList', []);

var milliSeconds = 24 * 60 * 60 * 1000;
var daySwitch = 0;
var currentDate = new Date(new Date().getTime() + daySwitch*milliSeconds);
var items = [
  {
    itemName: "Första saken!",
    active: false, // true betyder klar, false betyder inte klar
    edit: false, // false betyder att man inte vill redigera
    created: currentDate,
    edited: null,
    done: null
  }
];
app.controller('todoController', function($scope){
    this.items = items;

    $scope.hej = true;

    $scope.addItem = function() {
    //return true;

    var newItem = {};
    newItem.itemName = $scope.item.itemName;
    newItem.active = false;
    newItem.edit = false;
    newItem.created = currentDate;
    newItem.edited = null;
    newItem.done = null;

    items.push(newItem);
   };
    $scope.itemReady = function()
    {
      this.item.active = true;
      this.item.done = currentDate;
    };
    $scope.itemDelete = function(item)
    {
      items.splice(items.indexOf(item),1);
    };
    $scope.itemNotReady = function()
    {
      this.item.active = false;
    };
    $scope.editItem = function()
    {
      this.item.edit = true;
    };
    $scope.editItemName = function(newItemName)
    {
      this.item.itemName = newItemName;
      this.item.edit = false;
      this.item.edited = currentDate;
    };
});
