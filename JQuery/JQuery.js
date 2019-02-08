$(document).ready(
    function () {
        var LIST = [];                                           //creates an empty list array
        $(document).on("click", ".delete", function () {         //on click, delete the specified entry
            $(this).parent().parent().remove();                  //removes the set of matched elements from the DOM. Remove is the text which is shown on the button
        });
        $('#BtnAddList').on("click", function () {               //the function for the button which adds the typed value to the array
            if ((!$('#itemname').val().match(/^[a-zA-Z]+$/)) || ($('#itemname').val() == "")) { //this is the regular expression so if it doesn't match this then it won't let a user enter it
                alert('Non valid Data');                         //alerts the user of non valid data if it doesn't match the regular expression
            } else {
                LIST.push($('#itemname').val());                 //else if it matches the regular expression, push the vlaue into the list 
                $("table#itemlist").empty();                     //
                $.each(LIST, function (index, value) {           //
                    $("table#itemlist").append(                  //appends the item to the list 
                        '<tr><td>' + value + '</td><td><a class="delete" alt="delete" 			 href="#">DELETE</a></td></tr>');   //within this html is the value
                });

            }
        });
    });
$("button").click(function () {                  //.click, so when the user clicks the button the list appears
    $.getJSON("json1.json", function (obj) {     //the method to get a .json file in jQuery is to write "$.getJSON". I then typed the file name of the .json file. This could be a web address.
        $.each(obj, function (key, value) {      //this looks through the objects since there's more than one. The key is the name and the value is the data such as name, age or company
            $("ul").append("<li>" + value.name + " is " + value.age + " years old and works at " + value.company + "</li>");  //concatenates the data so it's readable on the page
        });
    });
});