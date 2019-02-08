var SimpleListModel = function (items) {                             //variable for the function 
    self = this;                                                     //this = SimpleListModel, needs to be declared as a variable as self cannot be used as an argument
    self.items = ko.observableArray(items);                          //declares the variable "my.items" and makes it equal to an observable array so that the UI can update

    self.itemToAdd = ko.observable("");                              //creates an empty string that is observable 

    self.deleteItem = function (item) {                              //function to delete items in the list
        self.items.remove(item);                                     //removes the item from the list
        return self.items;                                           //returns the list with the deleted items
    }

    self.addItem = function () {                                     //function for adding items to the list
        if (self.itemToAdd() != "") {                                //validation check, if the item does not equal an empty string, then execute the following code
            self.items.push(self.itemToAdd());                       //pushes the string entered, into the table
            self.itemToAdd("");                                      //empty string which recieves the string
        }
    }.bind(this);
};

var jsonfile = "json1.json"                                          //declares the variable jasonfile to equal json1.json 
$.getJSON(jsonfile)                                                  //we can then use the variable "jsonfile" as an argument in this function
    .done(function (data) {                                          //when getJSON is finished, it runs this function 
        var model = [];                                              //declares the variable model to be an empty array, to hold the data
        $.each(data, function (i, item) {                            //for each with the data from the json file, iterates over every value in the file
            model.push(item.name);                                   //pushes the item.name into the array
        });
        ko.applyBindings(new SimpleListModel(model));                //Initialises the data bind using SimpleListModel, so it puts it into the existing table
    });
