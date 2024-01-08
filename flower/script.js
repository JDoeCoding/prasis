function checkName() {
    const enteredName = document.getElementById('nameInput').value.trim().toLowerCase();
    const nameInterface = document.getElementById('nameInterface');
    const letterInterface = document.getElementById('letterInterface');

    if (enteredName === 'pratikshya') {
        // If the name is "pratikshya," hide the name interface and show the letter interface
        nameInterface.style.display = 'none';
        letterInterface.style.display = 'block';
    } else {
        // If the name is not "pratikshya," show an alert
        alert("Sorry, it's not for you.");
    }
}

function openLetter() {
    const codeInput = document.getElementById('codeInput').value.trim().toLowerCase();

    if (codeInput === 'prasis') {
        // If the code is "prasis," reveal the content of the letter
        const letterInterface = document.getElementById('letterInterface');
        letterInterface.innerHTML = '<h2>💌 Special Letter for Pratikshya 📜</h2>' +
                                    '<p>Your personalized letter content goes here...</p>' +
                                    '<p>babee ma sanga narisaa na please. I am sorry eyeelabuhh eyeelabuhh so much mero babee<3.</p>';
    } else {
        // If the code is incorrect, show an alert
        alert("You are not a oasis girlfriend. It's only for my babe.");
    }
}
