var SimpleListModel = function (items) {                             //variable for the function 
    self = this;                                                     //this = SimpleListModel 
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

ko.applyBindings(new SimpleListModel(["Alpha", "Beta", "Gamma"]));  //puts these pre defined values into the table
