let p = document.getElementById("para1");
let output = prompt("What's your output?");

if (output == 1) {
    p.innerHTML = "current World";
    p.style.backgroundColor = "Green";
} else {
    p.innerHTML = "chutia World";
    p.style.backgroundColor = "Red";
}

let use = prompt("Who is the user?");
document.getElementById("user").innerText = use;

// Parent from child
let child = document.getElementById("child5");
let parent = child.parentElement;

// Logging to page
let logDiv = document.getElementById("log");

function logToPage(message) {
    logDiv.innerHTML += `<p>${message}</p>`;
}

logToPage("Parent Element: " + parent.tagName);
logToPage("Parent Node: " + child.parentNode.tagName);
logToPage("child Element:" + child);
let changeId = document.getElementById("child5");
let colorNum = prompt("Enter color number: ");
if (colorNum == 1) {
    changeId.style.backgroundColor = "red";
}
else if (colorNum == 2) {
    changeId.style.backgroundColor = "green";
}
else if (colorNum == 3) {
    changeId.style.backgroundColor = "blue";
}
else {
    changeId.style.backgroundColor = "Black";
}