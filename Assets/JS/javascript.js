/*Set different arrays with specific character types
(Capital, Lowercase, Numbers, Special Characters)
Set other useable variables.*/
var capLet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]; 
var lowLet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var charArray = ["~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "=", "+"];
var makeMyArray = [];
var newPassword = [];
var generatedPass = "";

//Gather Check Box information to see if it has been checked
var lowLetCheck = document.getElementById("addUpCase");
var capLetCheck = document.getElementById("addLowCase");
var numArrayCheck = document.getElementById("addNumbers");
var charArrayCheck = document.getElementById("addChar");

// Create a variable to store password on site
var displayPass = document.querySelector(".displayPass");

/*Pull the length provided by user in the input*/
var passLength = document.querySelector("#passLength");

/* Function takes premade array and adds to a new array container */
function makeArray(containerArray, addingArray){
    for(var i = 0; i < addingArray.length; i++){
        containerArray.push(addingArray[i]);
    }
    return containerArray;      
}

/* Function takes finished array and reassignes as a string to display easier */
function makeString(containerString, finishedArray){
    for(var i = 0; i < finishedArray.length; i++){
        containerString = containerString + finishedArray[i];
    }
    return containerString;      
}


// Create the button and on click effect
var btnGenerate = document.querySelector("#btnGenerate");

btnGenerate.addEventListener("click", function(){
    event.preventDefault();

    // Reset the password array and string withe every press
    var makeMyArray = [];
    var newPassword = [];
    var generatedPass = "";
    var passwordLen = passLength.value;

    /* Check to make sure a number is given */
    if(passwordLen.charAt(0) === "0" || 
        passwordLen.charAt(0) === "1" ||
        passwordLen.charAt(0) === "2" || 
        passwordLen.charAt(0) === "3" ||
        passwordLen.charAt(0) === "4" || 
        passwordLen.charAt(0) === "5" ||
        passwordLen.charAt(0) === "6" || 
        passwordLen.charAt(0) === "7" ||
        passwordLen.charAt(0) === "8" || 
        passwordLen.charAt(0) === "9"){

        passwordLen = parseInt(passwordLen);
    }

    /* Based on users answers, check if they said yes, if so, add the corrisponding array to the new array using out makeArray Function */
    if (capLetCheck.checked === true){
        makeArray(makeMyArray, capLet)
    }
    if (lowLetCheck.checked === true){
        makeArray(makeMyArray, lowLet)
    }
    if (numArrayCheck.checked === true){
        makeArray(makeMyArray, numArray)
    }
    if (charArrayCheck.checked === true){
        makeArray(makeMyArray, charArray)
    }

    if(
        capLetCheck.checked === false &&
        lowLetCheck.checked === false &&
        numArrayCheck.checked === false &&
        charArrayCheck.checked === false
    ){
        alert("Please select one of the checked boxes!");
    }
    else{
        /* Use number of characters user provided and pull that many random characters from the makeMyArray container */
        for(var i = 0; i < passwordLen; i++){
            newPassword.push(makeMyArray[Math.floor(Math.random() * (makeMyArray.length - 1))]);
        }
        // Pass the newly generated password to the Password box on site
        displayPass.textContent = makeString(generatedPass, newPassword);
    }

})
