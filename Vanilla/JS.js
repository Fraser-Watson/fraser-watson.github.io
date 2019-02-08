var pageCounter = 1;                                                    //changes the json file it gets depending on the counter
var peopleContainer = document.getElementById("people-info")            //gets the element with the id "people-info" in the html
var btn = document.getElementById('btn');                               //declares the button as a variable so it can be used to load new data on click

btn.addEventListener("click", function () {                             //uses the button to get data on click
    var ourRequest = new XMLHttpRequest();                              //XMLHttpRequest is a built in function that gets XML data
    ourRequest.open('GET', "json" + pageCounter + ".json");             //gets the json file, the pageCounter part uses the pagecounter variable to cycle through the different json files
    ourRequest.onload = function () {                                   //
        var ourData = JSON.parse(ourRequest.responseText);              //uses JSON.parse which browsers understand to process JSON
        renderHTML(ourData);                                            //passes the data recieved to the renderHTML function
    };
    ourRequest.send();                                                  //the request needs to be sent to the client
    pageCounter++;                                                      //this page counter updates var pageCounter in line 1, which is then used by line 7
});

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


    function deletefromlist(e) {                                        //
        LIST.splice(e.target.id, 1);
        displayitemsinlist();
    }
}

function renderHTML(data) {                                                             //to render the json data to the page
    var htmlString = "";                                                                //creates empty html string
    for (i = 0; i < data.length; i++) {                                                 //increments through the data    
        htmlString += "<p>" + data[i].name + " is " + data[i].age + " years old.</p>"   //concatenates the data
    }

    peopleContainer.insertAdjacentHTML('beforeend', htmlString);                        //inserts the html
}