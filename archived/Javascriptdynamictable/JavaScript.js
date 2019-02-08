var LIST = [];                                                          //this is the array where the array items will be stored
window.onload = function () {                                           //when the page is loaded, run this function
	document.getElementById("BtnAddList").onclick = addtolist;          //gets the element named"BtnAddList" and assigns it the onclick function of addtolist
}
function addtolist() {                                                  //addtolist function
    var thisitem = document.getElementById("itemname").value;           //assign the itemname to the thisitem variable
    if (ValidateString(thisitem) == true) {                             //if the regular expression matches the inputted data then it is valid, if it gets a true from the ValidateString function
        LIST.push(thisitem);                                            //puts the newly entered item into the table
        displayitemsinlist();                                           //calls the displayitemsinlist function
    }

    function displayitemsinlist() {                                     //function for displayitemsinlist
        var table = document.getElementById("itemlist");                //gets the elements with the ID "itemlist"
        table.innerHTML = "";                                           //setting the value to nothing
        for (var i = 0; i < LIST.length; i++) {                         //loops over all the values in the array
            var row = table.insertRow(0);                               //and replaces all the values with nothing
            var cell1 = row.insertCell(0);                              //inserts row into table
            var cell2 = row.insertCell(1);                              //insert cell into row
            cell1.innerHTML = LIST[i];                                  //
            var id = i;
            cell2.innerHTML = "<p id='" + id + "' " + " >DELETE</p>";   //the part which adds the data to the html
            document.getElementById(id).onclick = deletefromlist;       //gets the elements with the id "id" and assigns them an onclick function "deletefromlist"
        }
    }
    function ValidateString(data) {                                     //function to validate string using a regular expression
        var re = /^[a-zA-Z]+$/;
        return re.test(data);                                           //sends back true or false
    }


    function deletefromlist(e) {                                        //function to delete from list
        LIST.splice(e.target.id, 1);                                    //
        displayitemsinlist();
    }
}