let s1= document.getElementById("1");
s1.style.backgroundColor="pink";
s1.addEventListener("mousemove",function(){
    let randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    
    // Set the background color to the randomly generated color
    s1.style.backgroundColor = randomColor;
    // // s1.style.backgroundColor=
    // let redShade = 'rgb(' + Math.floor(Math.random() * 256) + ', 0, 0)';
    
    // // Set the background color to the randomly generated red shade
    // s1.style.backgroundColor = redShade;
});

s1.addEventListener("mouseleave",function(){
    let randomStrings = ["I LOVE YOU", "YOU ARE MINE", "I WILL SORT", "BUT I'M UR", "FORGIVE N", "I'M ALL YOUR'S"];
    
    // Select a random string from the array
    let randomString = randomStrings[Math.floor(Math.random() * randomStrings.length)];
    
    // Set the innerHTML to the randomly selected string
    s1.innerHTML = "<h1>" + randomString + "</h1>";
});


let s2 = document.getElementById("2");
let clr = "yellow";
s2.style.backgroundColor = "green";

// Event listener for mouse movement
s2.addEventListener("mousemove", function() {
    if (clr == "yellow") {
        s2.style.backgroundColor = "orange";
        clr = "orange";  // Update clr to "orange"
    } else if (clr == "orange") {
        s2.style.backgroundColor = "pink";
        clr = "pink";  // Update clr to "pink"
    } else {
        // Generate a random red shade
        let redShade = 'rgb(' + Math.floor(Math.random() * 256) + ', 0, 0)';
        s2.style.backgroundColor = redShade;
    }
});

// Event listener for mouse enter
// s2.addEventListener("mouseenter", function() {
//     let randomNumber = Math.floor(Math.random() * 1000);
    
//     // Display the random number inside the <h1> tag
//     s2.innerHTML = "<h1>" + randomNumber + "</h1>";

// });

// Event listener for mouse leave
s2.addEventListener("mouseleave", function() {
    // Array of strings to choose from
    let randomStrings = ["LOVE HER!", "ONLY HER", "I'M All ur's", "I'M ONLY HER", "I'M DOING MISTAKE", "SHE IS MINE"];
    
    // Select a random string from the array
    let randomString = randomStrings[Math.floor(Math.random() * randomStrings.length)];
    
    // Set the innerHTML to the randomly selected string
    s2.innerHTML = "<h1>" + randomString + "</h1>";
});


let s3 = document.getElementById("3");
s3.style.backgroundColor = "MAROON";
s3.addEventListener("mouseenter", function() {
    // Array of strings to choose from
    let randomStrings = ["LOVE HER!","SHE IS MINE"];
    
    // Select a random string from the array
    let randomString = randomStrings[Math.floor(Math.random() * randomStrings.length)];
    
    // Set the innerHTML to the randomly selected string
    s3.innerHTML = "<h1>" + randomString + "</h1>";
});
s3.addEventListener("mouseleave", function() {
    // Array of strings to choose from
    let randomStrings = ["LOVE HER!","SHE IS MINE"];
    
    // Select a random string from the array
    let randomString = randomStrings[Math.floor(Math.random() * randomStrings.length)];
    
    // Set the innerHTML to the randomly selected string
    s3.innerHTML = "<h1>" + randomString + "</h1>";
});

let s4 = document.getElementById("4");
// s4.style.backgroundColor = "ORANGE";
// s4.addEventListener("click", function() {
//     // Array of strings to choose from
//     let randomStrings = ["LOVE HER!","SHE IS MINE"];
    
//     // Select a random string from the array
//     let randomString = randomStrings[Math.floor(Math.random() * randomStrings.length)];
    
//     // Set the innerHTML to the randomly selected string
//     s4.innerHTML = "<h1>" + randomString + "</h1>";
// });
s4.style.backgroundColor = "ORANGE";
s4.addEventListener("click", function() {
    let allBoxes = [s1, s2, s3, s4];
    allBoxes.forEach(function(box) {
        box.innerHTML = "<h1>I LOVE SHRISTI</h1>";
    });
});
let messageQueue = [];
let isDisplayingMessage = false;

function displayMessage() {
    if (messageQueue.length === 0 || isDisplayingMessage) return;

    isDisplayingMessage = true;

    // Get the first message in the queue
    let messageData = messageQueue.shift();
    let { message, x, y } = messageData;

    // Create a new span element to display the message
    let messageElement = document.createElement("span");
    messageElement.textContent = message;

    // Style the message element
    messageElement.style.position = "absolute";
    messageElement.style.left = x + "px";
    messageElement.style.top = y + "px";
    messageElement.style.fontSize = "20px"; // Adjust font size as needed
    messageElement.style.fontFamily = "Arial, sans-serif";
    messageElement.style.color = "black"; // Ensure text color is visible
    messageElement.style.zIndex = "1000"; // Ensure the message is on top
    messageElement.style.pointerEvents = "none"; // Prevent interference with other elements

    // Append the message to the document body
    document.body.appendChild(messageElement);

    // Apply a fade-out effect
    messageElement.style.transition = "opacity 1s ease-out";
    messageElement.style.opacity = "1";
    setTimeout(function() {
        messageElement.style.opacity = "0";
        setTimeout(function() {
            messageElement.remove();
            isDisplayingMessage = false;
            displayMessage(); // Display the next message in the queue
        }, 1000); // Ensure the element is removed after the fade-out
    }, 500); // Initial delay before fade-out starts
}

// Function to queue a message to be displayed
function queueMessage(message, x, y) {
    messageQueue.push({ message, x, y });
    displayMessage(); // Start displaying if not already in progress
}

// Event listener for mouse movement
document.addEventListener("mousemove", function(event) {
    let shristiMessages = ["Shristi😍", "Shristi🥰", "Shristi💓","I💓LOVE💓U","SORRY💓"];
    let randomMessage = shristiMessages[Math.floor(Math.random() * shristiMessages.length)];
    
    // Queue the message to be displayed
    queueMessage(randomMessage, event.pageX, event.pageY);
});

// script.js

// // Show the modal
// document.addEventListener("DOMContentLoaded", function() {
//     document.getElementById("modal").style.display = "block";
// });

// document.getElementById("yesBtn").addEventListener("click", function() {
//     setTimeout(function() {
//         showMessage("She is yours too!!!");
//     }, 5000); // 5 seconds delay
//     document.getElementById("modal").style.display = "none";
// });

// document.getElementById("noBtn").addEventListener("click", function() {
//     // Clear any existing intervals
//     clearInterval(messageInterval);

//     // Start displaying the message every 5 seconds
//     messageInterval = setInterval(function() {
//         showMessage("Think again!!!!");
//     }, 5000); // 5 seconds interval

//     document.getElementById("noBtn").classList.add("enable");
//     document.getElementById("yesBtn").classList.add("enable");
// });
// function showMessage(message) {
//     var messageBox = document.createElement("div");
//     messageBox.className = "message-box";
//     messageBox.innerHTML = "<h1>" + message + "</h1>";

//     // Append the message box to the body
//     document.body.appendChild(messageBox);

//     // Display the message box
//     messageBox.style.display = "block";

//     // Hide the message box after 3 seconds
//     setTimeout(function() {
//         messageBox.style.opacity = "0";
//         setTimeout(function() {
//             messageBox.remove();
//         }, 1000); // Ensure the element is removed after fade-out
//     }, 3000); // Display the message for 3 seconds
// }

// script.js

let messageInterval;
let questionInterval;

// Show the modal
document.addEventListener("DOMContentLoaded", function() {
    showQuestion();
});

function showQuestion() {
    // Show the modal
    document.getElementById("modal").style.display = "block";
}

document.getElementById("yesBtn").addEventListener("click", function() {
    // Clear any existing intervals
    clearInterval(messageInterval);
    clearInterval(questionInterval);

    // Start displaying the message every 5 seconds
    messageInterval = setInterval(function() {
        showMessage("She is yours too!!!");
    }, 5000); // 5 seconds interval

    document.getElementById("modal").style.display = "none";
});

document.getElementById("noBtn").addEventListener("click", function() {
    clearInterval(messageInterval);
    
    // Show the detailed message
    showDetailedMessage();

    // Re-show the question after 10 seconds
    setTimeout(function() {
        showQuestion();
    }, 10000); // 10 seconds delay before re-showing the question

    document.getElementById("noBtn").classList.add("disabled");
    document.getElementById("yesBtn").classList.add("disabled");
});

function showMessage(message) {
    var messageBox = document.createElement("div");
    messageBox.className = "message-box";
    messageBox.innerHTML = "<h1>" + message + "</h1>";

    // Append the message box to the body
    document.body.appendChild(messageBox);

    // Display the message box
    messageBox.style.display = "block";

    // Hide the message box after 3 seconds
    setTimeout(function() {
        messageBox.style.opacity = "0";
        setTimeout(function() {
            messageBox.remove();
        }, 1000); // Ensure the element is removed after fade-out
    }, 3000); // Display the message for 3 seconds
}

function showDetailedMessage() {
    let detailedMessage = "Mana toh phele hi kiya tha ki mt aao mt socho bhul jao tb ni mane toh ab bhukto ky keh rhe the I LOVE U where is ur love now nikame gadhe aur ha kya bol rhe the gussa krti hu toh hrkat ni dekhte apni besharm";
    
    // Create and show the detailed message
    showMessage(detailedMessage);
}
