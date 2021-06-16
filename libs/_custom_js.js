(function() {

	invokeLogin();

	function print(arg) {console.log(arg)}

	function invokeLogin() {
		ele = new Elements; ele.a('login');
	}

	function invokeRegister() {
		ele = new Elements; ele.a('register');
	}

	var body = document.querySelector('body');

	function redirectToLanding() {window.location = '/';}

	document.getElementById("register").addEventListener("click", invokeRegister);
	document.getElementById("login").addEventListener("click", invokeLogin);

	body.addEventListener('click', function(event) {
		if (event.target.name === '_cancel') redirectToLanding();
	});

})();

function emptyBase(argument) {
	while (argument.hasChildNodes()) argument.removeChild(argument.lastChild)
}

function throwResponse(_response_message) {
	var error_class = document.querySelector('.error-display .alert');

	if (_response_message !== null) {
		emptyBase(error_class);
		var content = document.createTextNode(_response_message);
		error_class.appendChild(content);
		error_class.style.display = 'block';
	} else {
		error_class.style.display = 'none';
	}
}

function validate(form) {
	form.addEventListener('submit', function(event) {
		var validate = new ValidateForm, __response;

		if (form._email_id) {
			__response = validate.validate_email(form._email_id.value);
		}

		if (form._password) {
			__response = validate.validate_password(form._password.value);
		}

		// if ( form._contact_number ) {
		// 	__response = validate.validate_contact( form._contact_number.value );
		// }

		if (form._user_name) {
			__response = validate.validate_name(form._user_name.value);
		}

		if (form._confirm_password) {
			__response = validate.validate_confirm_password(form._password.value, form._confirm_password.value);
		}



		if (__response.status === false) {
			throwResponse(__response.message)
			console.log(__response)
			event.preventDefault();
		} else {
			console.log(__response)
			// alert( 'success' );
			// submitForm( form );
			// form.submit();
			return true;
		}
	});
}

// function submitForm( form ) {
// 	form.submit();
// }