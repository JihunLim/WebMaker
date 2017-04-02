var app = angular.module("angularApp", ['ngSanitize']);

function onLoad(){
    //alert("Function onLoad() called");
    //document.getElementById("timestamp").innerHTML = Date();
    getAPIBadge();
}

function checkNumber(){
    var theNumber, theMessage;
    theNumber = document.getElementById("smallnumber").value;
    if (isNaN(theNumber) || theNumber <1 || theNumber >10){
        theMessage = "numver was expecged to be between 1 and 10";
    } else{
        theMessage = "number is good";
    }
    document.getElementById("numberMessage").innerHTML = theMessage;
}