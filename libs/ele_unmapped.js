class Elements {
	constructor(argument) {
		this.random_string = ''
		this.possibleChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
		this.baseFragment = document.querySelector('#landing-page')
		this.deleteElement(this.baseFragment)
		this.uniq_id = this.generateUniqueId()
	}

	createBaseFragment(args) {
		if (args === 'login') {
			this.createLoginFormFields();
		} else if (args === 'register') {
			this.createRegisterFormFields();
		}
	}

	createDivisionStructure(classesList) {
		classesList = classesList.classes;
		if (Array.isArray(classesList)) {
			var division = this.baseFragment;
			for (var i = 0;i < classesList.length;i++) {
				var temp = document.createElement('div');
				temp.setAttribute('class', classesList[i]);

				if (!division.hasChildNodes()) {
					division.appendChild(temp)
					division = division.firstChild
				}
			}
		}
		return this.baseFragment;
	}

	createFormStructure(form_type, node) {
		node = this.getLastChildNode(node);
		var form_ele = document.createElement('form');

		for (var key in form_type) {
			for (var id in form_type[key]) {
				for (var pair in form_type[key][id]) {
					if (pair === 'id') {
						form_ele.setAttribute(pair, form_type[key][id][pair] + this.uniq_id);
					} else {
						form_ele.setAttribute(pair, form_type[key][id][pair]);
					}
				}
			}
		}
		node.appendChild(form_ele)
		return this.baseFragment;
	}

	createLoginFormFields() {
		this.createElement(this.getLoginFormJsonObject(), this.createFormStructure(this.getLoginFormStructureJson(), this.createDivisionStructure(this.getDivisionStructureJson())))
	}

	createRegisterFormFields() {
		this.createElement(this.getRegisterFormJsonObject(), this.createFormStructure(this.getRegisterFormStructureJson(), this.createDivisionStructure(this.getDivisionStructureJson())))
	}

	createElement(jsonObject, element) {
		element = this.getLastChildNode(element)
		for (var key in jsonObject) {
			for (var id in jsonObject[key]) {
				for (var pair in jsonObject[key][id]) {

					var type = jsonObject[key][id].type,
						ele_type = jsonObject[key][id].ele_type,
						ele_name = jsonObject[key][id].name,
						uniqueid = jsonObject[key][id].uniqueid;

					var ele = document.createElement(ele_type)
					ele.setAttribute("type", type)
					ele.setAttribute("name", ele_name)
					ele.setAttribute("id", "id-" + uniqueid)

					if (jsonObject[key][id][pair] !== 'undefined') {
						ele.setAttribute("placeholder", jsonObject[key][id][pair])
					}

					if (type === 'submit') {
						ele.innerHTML = "Submit";
						ele.setAttribute('class', 'btn btn-primary btn-block');
					} else if (ele_name === '_cancel') {
						ele.innerHTML = "Cancel";
						ele.setAttribute('class', 'btn btn-block');
					} else if (type === 'checkbox') {
						ele.setAttribute("class", "class-" + uniqueid);
					} else {
						ele.setAttribute("class", "form-control class-" + uniqueid);
					}
				}
				if (type !== 'submit' && type !== 'button') {
					element.appendChild(this.createElementFormGroupAndLabel(ele, type, uniqueid))
				} else {
					element.appendChild(ele)
				}
			}
		}
	}

	getLastChildNode(node) {
		while (node.hasChildNodes()) node = node.firstChild
		return node;
	}

	createElementFormGroupAndLabel(element, type, uniqueid) {
		var formGroup = document.createElement('div');
		formGroup.setAttribute('class', 'form-group');

		var loginFormLabel = document.createElement('label');
		loginFormLabel.setAttribute('for', 'id-' + uniqueid);

		if (uniqueid === 'emailid' || uniqueid === 'email-id') {
			loginFormLabel.innerHTML = 'Email address:';
		} else if (uniqueid === 'password') {
			loginFormLabel.innerHTML = 'Password:';
		} else if (uniqueid === 'remember-token') {
			formGroup.removeAttribute('class');
			formGroup.setAttribute('class', 'checkbox');
			loginFormLabel.removeAttribute('for');

			var span_ele = document.createElement('span');
			span_ele.innerHTML = 'Remember me'

			loginFormLabel.appendChild(element)
			loginFormLabel.appendChild(span_ele)

			formGroup.appendChild(loginFormLabel)
			return formGroup;
		} else if (uniqueid === 'user-name') {
			loginFormLabel.innerHTML = 'User Name:';
		} else if (uniqueid === 'contact-number') {
			loginFormLabel.innerHTML = 'Contact Number:';
		} else if (uniqueid === 'confirm-password') {
			loginFormLabel.innerHTML = 'Confirm Password:';
		}

		formGroup.appendChild(loginFormLabel)
		formGroup.appendChild(element)
		return formGroup;
	}

	pretty(object) {
		console.log(JSON.stringify(object, undefined, 2))
	}

	deleteElement(node) {
		while (node.hasChildNodes()) node.removeChild(node.lastChild)
	}

	getDivisionStructureJson() {
		return {
			"classes": ["container", "row", "col-md-12 col-xs-12 col-sm-12 col-lg-12"]
		};
		return this.requestJson('division')
	}

	getLoginFormStructureJson() {
		return {
			"form_attributes": [{
				"id": "_login_form_id",
				"class": "_login_form_class",
				"action": "/login",
				"method": "POST"
			}]
		};
	}

	getRegisterFormStructureJson() {
		return {
			"form_attributes": [{
				"id": "_register_form_id",
				"class": "_register_form_class",
				"action": "/register",
				"method": "POST"
			}]
		};
	}

	getLoginFormJsonObject() {
		return {
			"_email_id": [{
				"ele_type": "input",
				"type": "email",
				"name": "_email_id",
				"uniqueid": "emailid",
				"caption": "Enter your email address"
			}],
			"_password": [{
				"ele_type": "input",
				"type": "password",
				"name": "_password",
				"uniqueid": "password",
				"caption": "Enter your password"
			}],
			"_remember_me": [{
				"ele_type": "input",
				"type": "checkbox",
				"name": "_remember_token",
				"uniqueid": "remember-token"
			}],
			"_submit_button": [{
				"ele_type": "button",
				"type": "submit",
				"name": "_submit",
				"uniqueid": "submit-button"
			}],
			"_cancel_button": [{
				"ele_type": "button",
				"type": "button",
				"name": "_cancel",
				"uniqueid": "cancel-button"
			}]
		};
	}

	getRegisterFormJsonObject() {
		return {
			"_user_name": [{
				"ele_type": "input",
				"type": "text",
				"name": "_user_name",
				"uniqueid": "user-name",
				"caption": "Enter your name"
			}],
			"_email_id": [{
				"ele_type": "input",
				"type": "email",
				"name": "_email_id",
				"uniqueid": "email-id",
				"caption": "Enter your email address"
			}],
			"_contact_number": [{
				"ele_type": "input",
				"type": "text",
				"name": "_contact_number",
				"uniqueid": "contact-number",
				"caption": "Enter your contact number"
			}],
			"_password": [{
				"ele_type": "input",
				"type": "password",
				"name": "_password",
				"uniqueid": "password",
				"caption": "Enter your password"
			}],
			"_confirm_password": [{
				"ele_type": "input",
				"type": "password",
				"name": "_confirm_password",
				"uniqueid": "confirm-password",
				"caption": "Re-enter your password"
			}],
			"_submit_button": [{
				"ele_type": "button",
				"type": "submit",
				"name": "submit",
				"uniqueid": "submit-button"
			}],
			"_cancel_button": [{
				"ele_type": "button",
				"type": "button",
				"name": "_cancel",
				"uniqueid": "cancel-button"
			}]
		};
	}

	generateUniqueId() {
		for (var i = 0;i < 10;i++) this.random_string += this.possibleChars.charAt(Math.floor(Math.random() * this.possibleChars.length));
		return this.random_string;
	}

	requestJson(request) {
		var xhr = new XMLHttpRequest();
		xhr.open('GET', 'http://dev.js.com:3000/get-json?request=' + request, true);
		xhr.responseType = 'text';
		xhr.onload = function() {
			if (xhr.readyState === xhr.DONE) {
				if (xhr.status === 200) {
					// console.log(xhr.response);
					// console.log(xhr.responseText);
					return xhr.responseText;
				}
			}
		};
		xhr.send(null);
	}

}

// document.onload = function () {
// login();
// document.getElementsByClassName('body-background').style.height = screen.height;
// document.querySelector('.body-background').style.backgroundSize = window.innerHeight + 'px ' + window.innerWidth + 'px'
//'200px 300px' // window.innerHeight;
// }

window.onload = function() {

	login();
	// document.querySelector('.body-background').style.backgroundSize = window.innerWidth + 'px ' + window.innerHeight + 'px'
	// document.querySelector('.body-background').style.backgroundSize = window.innerHeight;

};

function login() {
	ele = new Elements;
	ele.createBaseFragment('login');
}

function register() {
	ele = new Elements;
	ele.createBaseFragment('register');
}