class Elements {

	constructor( argument ) {
		this.base = arguments[ 0 ];
		this.baseFragment = document.querySelector('#landing-page');
	}

	createBaseFragment() {
		var division = document.createElement('div');
		division.setAttribute( 'class', 'container' );

		var row = document.createElement('div');
		row.setAttribute( 'class', 'row' );

		var col = document.createElement('div');
		col.setAttribute( 'class', 'col-md-8 col-md-offset-2' );

		col.appendChild( this.createLoginFormFields() );
		row.appendChild( col );
		division.appendChild( row );
		// this.baseFragment.appendChild( division )
		this.display( division )
	}

	createLoginFormFields() {
		var loginForm = document.createElement('form');
		loginForm.setAttribute( 'method', 'POST' );
		loginForm.setAttribute( 'action', 'backend' );
		loginForm.setAttribute( 'id', 'loginform' );
		loginForm.setAttribute( 'class', 'loginform' );

		var fieldsList = this.getLoginFormJsonObject();
 
		for( var key in fieldsList ) {
			for( var id in fieldsList[ key ] ) {
			    var type = fieldsList[ key ][ id ].type,
			    	ele_type = fieldsList[ key ][ id ].ele_type,
			    	name = fieldsList[ key ][ id ].name,
			    	uniqueid = fieldsList[ key ][ id ].uniqueid;

			    if ( type === 'checkbox' ) {
					var formGroup = document.createElement('div');
					formGroup.setAttribute( 'class', 'checkbox' );

					var loginFormLabel = document.createElement('label')
					var ele = document.createElement( 'input' );
					ele.setAttribute( 'type', 'checkbox' );
					ele.setAttribute( 'name', 'remember_me' );

				    loginFormLabel.appendChild( ele );

				    var spanEle = document.createElement( 'span' );
				    spanEle.innerHTML = 'Remember me';

					formGroup.appendChild( loginFormLabel );
					loginFormLabel.appendChild( spanEle );

					loginForm.appendChild( formGroup );
			    } else if ( type === 'email' ||  type === 'password' ) {
					var formGroup = document.createElement('div');
					formGroup.setAttribute( 'class', 'form-group' );

				    formGroup.appendChild( this.createElementLabel( type, uniqueid ) );
					formGroup.appendChild( this.createElement( ele_type, type, name, uniqueid ) );

					loginForm.appendChild( formGroup );
			    } else {
			    	loginForm.appendChild( this.createElement( ele_type, type, name, uniqueid ) );
			    }
			}
		}
		return loginForm;
	}

	createElementLabel( args, uniqueid ) {
		var loginFormLabel = document.createElement('label');

		if ( args === 'email' ) {
			loginFormLabel.setAttribute( 'for', 'id-' + uniqueid );
			loginFormLabel.innerHTML = 'Email address:';
		} else if ( args === 'password' ) {
			loginFormLabel.setAttribute( 'for', 'id-' + uniqueid );
			loginFormLabel.innerHTML = 'Password:';
		}
		return loginFormLabel;
	}

	createElement( ele_type, type, ele_name, ele_uniqueid ) {
		var ele = document.createElement( ele_type );

		ele.setAttribute( "type", type );
		ele.setAttribute( "name", ele_name );
		ele.setAttribute( "id", "id-" + ele_uniqueid );
		ele.setAttribute( "placeholder", "Please Insert Here.");

		if ( type === 'submit' ) {
			ele.innerHTML = "Submit";
			ele.setAttribute( 'class', 'btn btn-primary btn-block' );
		} else {
			ele.setAttribute( "class", "form-control class-" + ele_uniqueid );
		}
		return ele;
	}

	createRegisterFormFields() {
		var response = this.createElement( 'input', 'firstfield' );
	}

	deleteElement( identity ) {
		identity.forEach(function( element ) {
		var rawIdClass = element.replace(/[^\w\s]/gi, '').toLowerCase();
		var ele = document.getElementById("id-" + rawIdClass);
		ele.remove();
		});
	}

	getLoginFormJsonObject() {
		return {"_email_id":[{"ele_type":"input","type":"email","name":"email_id","uniqueid":"emailid"}],"_password":[{"ele_type":"input","type":"password","name":"password","uniqueid":"password"}],"_remember_me":[{"ele_type":"input","type":"checkbox","name":"remember_token","uniqueid":"remember-token"}],"_submit_button":[{"ele_type":"button","type":"submit","name":"submit","uniqueid":"submit-button"}]};
	}

	getRegisterFormJsonObject() {
		var json = {"_email_id":["type","email","name","email_id","unique","emailid"],"_password":["type","password","name","password","unique","password"],"_remember_me":["type","text","name","remember_token","unique","remember-token"],"_submit_button":["type","button","name","submit","unique","submit-button"]};
		return json;
	}

	display( args ) {
		this.baseFragment.appendChild( args );
		// console.log( args );
	}

	append() {

	}

	generateUniqueId() {

	}

	createBootstrapRecursiveStructure() {

	}

}


function login( args ) {
	args.setAttribute('onclick', 'return false')
	var ele = new Elements();	
	ele.createBaseFragment();
}

// btn.addEventListener('click', function() { 
// 	var ele = new Elements();
// 	ele.createElement();
// });



	// var ul = document.getElementsByTagName("ul")[0]; // assuming it exists
	// var id = document.getElementById('landing-page');
	// var docfrag = document.createDocumentFragment();
	// var browserList = [ "Internet Explorer", "Firefox", "Safari", "Chrome", "Opera" ];
	// browserList.forEach(function(e) {
	// 	var li = document.createElement("li");
	// 	li.textContent = e;
	// 	docfrag.appendChild(li);
	// });
	// ul.appendChild(docfrag);

	// var docu = new DOMParser().parseFromString('<xml></xml>',  "application/xml");
	// var comment = docu.createComment('This is a not-so-secret comment in your document');

	// docu.getElementsByTagName('xml')[0].appendChild(comment);

	// alert(new XMLSerializer().serializeToString(docu));
	// Displays: <xml><!--This is a not-so-secret comment in your document--></xml>	





/*function addTextNode(text) {
  var newtext = document.createTextNode(text),
      p1 = document.getElementById("p1");

  p1.appendChild(newtext);
}*/

	// var node = document.getElementById("div1");
	// var a = document.createAttribute("my_attrib");
	// a.value = "newVal";
	// node.setAttributeNode(a);
	// console.log(node.getAttribute("my_attrib")); // "newVal"

	// var p1 = document.getElementById('p1');
	// console.log('nodeName  -  ', p1.nodeName);
	// console.log('nodeValue  -  ', p1.nodeValue);
	// console.log('nodeType  -  ', p1.nodeType);
	// console.log('parentNode  -  ', p1.parentNode);
	// console.log('childNodes  -  ', p1.childNodes);
	// console.log('firstChild  -  ', p1.firstChild);
	// console.log('lastChild  -  ', p1.lastChild);
	// console.log('previousSibling  -  ', p1.previousSibling);
	// console.log('nextSibling  -  ', p1.nextSibling);
	// console.log('attributes  -  ', p1.attributes);
	// console.log('ownerDocument  -  ', p1.ownerDocument);	