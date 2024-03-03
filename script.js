document.addEventListener('DOMContentLoaded', function () {
    const terminal = document.querySelector('.terminal');
    const inputElement = document.querySelector('.input');
    const outputElement = document.querySelector('.output');
    const imageContainer = document.querySelector('.image');
    const imageContainer1 = document.querySelector('.image1');
    const closeButton = document.querySelector('.close-button');

    // Initialize the prompt
    const prompt = 'visitor@terminal.houssam.com:~$';

    // Welcome message
    // outputElement.textContent += "Terminal-Portfolio\n";

    // Command history
    const commandHistory = [];

    // Function to update the prompt and display output
    function displayOutput(command, response) {
        // Create a new prompt element with the desired styles
        const promptElement = document.createElement('h4');
        promptElement.style.color = '#ff9d00';
        promptElement.innerHTML = `<span style="color: #ff9d00;">visitor</span>@<span style="color: #b2bdcc;">terminal.houssam.com</span>:~$ ${command}`;

        // Append the prompt to the terminal
        outputElement.appendChild(promptElement);

        // Display the response
        const responseElement = document.createElement('p');
        responseElement.textContent = response;
        outputElement.appendChild(responseElement);

        // Add the command to the history
        commandHistory.push({ command, response });

        // Clear the input field
        inputElement.value = '';
    }

    // Function to execute user commands
    function executeCommand(command) {
        const cmd = command.toLowerCase();

        if (cmd === 'pic') {
            imageContainer.style.display = 'flex';
            imageContainer.style.zIndex = 600 + parseInt(imageContainer1.style.zIndex || 0);
            return 'Profile picture displayed.';
        } else if (cmd === 'cv') {
            imageContainer1.style.display = 'flex';
            imageContainer1.style.zIndex = parseInt(imageContainer.style.zIndex || 0) + 1;
            return 'CV picture displayed.';
        }

        // Array of available commands and their responses
        const commands = [
            { command: 'help', response: 'Available commands: help, name, about, contact, clear, echo, education, email, gui, history, projects, pwd, socials, themes, welcome, whoami' },
            { command: 'about', response: 'This is a simple terminal portfolio.' },
            { command: 'contact', response: 'You can contact me at example@email.com.' },
            { command: 'clear', response: 'Clears the terminal screen.' },
            { command: 'echo', response: 'Prints out anything you enter.' },
            { command: 'education', response: 'Displays my education background.' },
            { command: 'email', response: 'Sends an email to me.' },
            { command: 'gui', response: 'Opens my portfolio in a GUI.' },
            { command: 'projects', response: 'View projects that I\'ve coded.' },
            { command: 'pwd', response: '/home/visitor' },
            { command: 'socials', response: 'Check out my social accounts.' },
            { command: 'whoami', response: 'visitor' },
            { command: 'name', response: 'Say hi to Mr.Houssam El Khesassi.' },
        ];

        // Search for the command in the commands array
        for (const item of commands) {
            if (cmd === item.command.toLowerCase()) {
                return item.response;
            }
        }

        // If the command is not found, provide an error message
        return `Command not found: ${command}`;
    }

    // Handle user input
    inputElement.addEventListener('keydown', function (event) {
        if (event.key === 'Enter') {
            const userInput = inputElement.value.trim();
            if (userInput === '') return;

            // Process the command
            const response = executeCommand(userInput);

            // Display the command and response
            displayOutput(userInput, response);
        }
    });

    closeButton.addEventListener('click', function () {
        imageContainer.style.zIndex = 100 + parseInt(imageContainer1.style.zIndex || 0);
        imageContainer1.style.zIndex = 200 + parseInt(imageContainer.style.zIndex || 0);
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const inputElement = document.querySelector('.input');

    function focusInputElement() {
        inputElement.focus();
    }

    focusInputElement();
    inputElement.addEventListener('blur', focusInputElement);

});

// Make the DIV element draggable:
dragElement(document.getElementById("mydiv"));

function dragElement(elmnt) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    if (document.getElementById(elmnt.id + "header")) {
        // if present, the header is where you move the DIV from:
        document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
    } else {
        // otherwise, move the DIV from anywhere inside the DIV:
        elmnt.onmousedown = dragMouseDown;
    }

    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        // get the mouse cursor position at startup:
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        // call a function whenever the cursor moves:
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        // calculate the new cursor position:
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        // set the element's new position:
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {
        // stop moving when mouse button is released:
        document.onmouseup = null;
        document.onmousemove = null;
    }
}

// jQuery for z-index increment on click
$(document).ready(function() {
    $(".image, .image1").click(function() {
        // Get the current z-index value
        var currentZIndex = parseInt($(this).css("z-index"));

        // Increase the z-index by 1
        $(this).css("z-index", currentZIndex + 1);
    });
});

function closeimg() {
    document.getElementById("imageContainer").style.display = "none";
}

function closeimg1() {
    document.getElementById("imageContainer1").style.display = "none";
}