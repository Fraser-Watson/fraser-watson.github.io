var app = angular.module('MyApp', [])                               //declaring the variable for the angular app
app.controller('MyController', function ($scope, $window) {         //function called "myController" which declares the scope
    $scope.customers = [                                            //scope.customers which lists all the data in the table. These are pre-defined values
        { name: "Bob Smith", company: "Google", age: "22" },        //data
        { name: "Bill Gates", company: "Microsoft", age: "28" },    //data
        { name: "Steve Jobs", company: "Apple", age: "44" }         //data
    ];

    $scope.Add = function () {                                      //function to add new data to the array
        var customer = {};                                          //empty array
        customer.name = $scope.name;                                //customer.name, because customer is the scope and then name as this is the property it is accessing
        customer.company = $scope.company;                          //customer.company, because the customer is the scope and then we are accessing the company property
        customer.age = $scope.age;                                  //customer.age, because the customer is the scope and then we access the age property of the object
        $scope.customers.push(customer);                            //customers.push, with customer as the argument. This pushes it to the array so that it can then be displayed on the page.
        $scope.name = "";                                           //this is to clear the boxes once you've added a new entry into the table
        $scope.company = "";                                        //if these weren't have, then you would click add and the text boxes would still have...
        $scope.age = "";                                            //whatever you typed in them
 
    };

    $scope.Remove = function (index) {                              //this is to delete an entry from the table
        var name = $scope.customers[index].name;                    //find the record using Index from Array.
        if ($window.confirm("Delete " + name + "?")) {              //shows the user a confirmation window, e.g "Delete Bob Smith?"        
            $scope.customers.splice(index, 1);                      //if the user confirms, then splice the index, 1 which then results in the specific one being removed
        }
    }
});