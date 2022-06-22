//defining a function that adds property and its respective values in a table cell and creates a new row

function addpv(){
    //getting the required input values from the document using input form fields
    let x=document.getElementById("in-property").value
    let y=document.getElementById("in-value").value
    //rearranging according to the html tags
    let z = "<tr><td>"+ x + "</td><td>"+ y + "</td></tr>"
    //inserting the rearranged properties in the preview or work-area
    document.querySelector("#work-area").innerHTML+=z
    //clearing the input values as soon as they are clicked
    document.getElementById("in-property").value=""
    document.getElementById("in-value").value=""
}

//defining a function to change the name of the project as per the input form fields
function h(){
    //getting required input value for the project name
    let x=document.getElementById("in-topic").value
    //inserting the value in the respective header section
    document.querySelector(".topic").innerHTML=x
    //clearing the input values upon completion of the onclick event
    document.getElementById("in-topic").value=""
}

//defining a print function to export the previewed document
function p(){
    window.print()
}

//event listener added in order to confirm before leaving the site unsaved or before unsaved work is printed or exported
window.addEventListener("beforeunload", function (e) {
    var confirmationMessage = "";

    (e || window.event).returnValue = confirmationMessage;
    return confirmationMessage;
});