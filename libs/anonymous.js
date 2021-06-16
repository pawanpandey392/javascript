	// Anonymous Functions

var myButton = document.querySelector('#submit-btn');

myButton.onclick = function() {		// anonymous function attched to an event
  	greetings('this is so cool that we have javascript.');
}

var greetings = function( msg ) {	// anonymous function assigned to a variable
	greetingsAgain(msg + ' [ With Another Greetings ]');
}

var greetingsAgain = function( msg ) {	// anonymous function assigned to another variable
	alert(msg);
}



function displayMessage(msgText, msgType) {
	var html = document.querySelector('html');

	var panel = document.createElement('div');
	panel.setAttribute('class','msgBox');
	html.appendChild(panel);

	var msg = document.createElement('p');
	msg.textContent = msgText;
	panel.appendChild(msg);

	var closeBtn = document.createElement('button');
	closeBtn.textContent = 'x';
	panel.appendChild(closeBtn);

	closeBtn.onclick = function() {
	  panel.parentNode.removeChild(panel);
	}

	if (msgType === 'warning') {
	  msg.style.backgroundImage = 'url(icons/warning.png)';
	  panel.style.backgroundColor = 'red';
	} else if (msgType === 'chat') {
	  msg.style.backgroundImage = 'url(icons/chat.png)';
	  panel.style.backgroundColor = 'aqua';
	} else {
	  msg.style.paddingLeft = '20px';
	}

}

myButton.onclick = function() {
	displayMessage('Your inbox is almost full — delete some mails', 'warning');
	displayMessage('Brian: Hi there, how are you today?','chat');
}


myButton.onclick = function() {		// anonymous function attched to an event
  	var number = Number(prompt("Pick a number", ""));
  	// prompt('if its cool, then type cool.');
  	alert(number);
}