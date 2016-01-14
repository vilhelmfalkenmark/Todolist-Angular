var app = angular.module('todoList', []);
var items = [
  {
    itemName: "Första saken!",
    active: false, // true betyder klar, false betyder inte klar
    edit: false // false betyder att man inte vill redigera
  },
  {
    itemName: "Andra saken!",
    active: false, // true betyder klar, false betyder inte klar
    edit: false // false betyder att man inte vill redigera

  },
  {
    itemName: "Tredje saken!",
    active: false, // true betyder klar, false betyder inte klar
    edit: false // false betyder att man inte vill redigera

  }
];
app.controller('todoController', function($scope){
    this.items = items;
  $scope.addItem = function() {
    var newItem = {};
    newItem.itemName = $scope.item.name;
    newItem.active = false;
    newItem.edit = false;
     items.push(newItem);
     console.log(items);
   };
    $scope.itemReady = function()
    {
      this.item.active = true;
    }
    $scope.itemDelete = function(item)
    {
      items.splice(items.indexOf(item),1);
    }
    $scope.itemNotReady = function()
    {
      this.item.active = false;
    }
    $scope.editItem = function()
    {
      this.item.edit = true;
    }
    $scope.editItemName = function(newItemName)
    {
      this.item.itemName = newItemName;
      this.item.edit = false;
    }
});







// for(var key in laundryDays)
// {
//     for(var time in laundryDays[key].times)
//     {
//       if(laundryDays[key].times[time] == true)
//       {
//         laundryDays[key].availableTimes++;
//       }
//     }
//
//     if(laundryDays[key].availableTimes > 0)
//     {
//         laundryDays[key].available = true;
//     }
// }
// console.log(laundryDays);
