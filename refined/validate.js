class ValidateForm 
{
	constructor( argument ) {
		this.message = null
		this.status = true;
	}

	validate_name ( argument ) {
		var validation = /^[A-Za-z ]+$/.test( argument );

		if ( ! validation ) {
			this.message = "Invalid Name Format.";
			this.status = false;
		}

		return this.responseData();
	}

	validate_email ( argument ) {
		var validation = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/.test( argument );

		if ( ! validation ) {
			this.message = "Invalid Email Address.";
			this.status = false;
		}

		return this.responseData();
	}

	validate_password ( argument ) {
		var validation = this.validate_null( argument, 8 );

		if ( ! validation ) {
			this.message = "Password length must be more than 8 character.";
			this.status = false;
		}

		return this.responseData();
	}

	validate_confirm_password ( argument_one, argument_two ) {

		if ( argument_one !== argument_two ) {
			this.message = "Password doesn't match.";
			this.status = false;
		}

		return this.responseData();
	}

	validate_contact ( argument ) {

		// if ( ! isNaN( argument ) ) {

		// 	var validation = this.validate_null( argument, 10 );

		// 	if ( ! validation ) {
		// 		this.message = "Contact number must be equal to 10 digits.";
		// 		this.status = false;
		// 	}
		// } else {
		// 	this.message = "Invalid Contact Number.";
		// 	this.status = false;
		// }

		return this.responseData();
	}

	validate_userUniqueId ( argument ) {
		return /^[A-Za-z ]+$/.test( argument );
	}

	validate_null ( argument, length ) {
		return ( argument.length >= length ) ? true : false;
	}

	validate_url ( argument ) {
		return /\b(?:(?:https?|ftp):\/\/|www\.)[-a-z0-9+&@#\/%?=~_|!:,.;]*[-a-z0-9+&@#\/%=~_|]/i.test( argument );
	}

	validate_specialChar ( argument ) {
		return /[^A-Za-z0-9\-]/.test( argument );
	}

	responseData () {
		return { 
				"message": this.message, 
				"status": this.status
			};
	}
}


// alert('validate')
// console.log( validate.validate_name( '<span>Pawan Pandey</span>' ) )
// console.log( validate.validate_url( 'www.google.com' ) )