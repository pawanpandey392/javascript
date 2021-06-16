class Elements 
{
	constructor() 
	{
		this.r = ''
		this.s = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
		this.t = document.querySelector('#landing-page')
		this.j( this.t )
		this.u = this.p()
	}

	a( args ) 
	{
		if ( args === 'login' ) {
			this.d();
		} else if ( args === 'register' ) {
			this.e();
		}
	}

	b( args ) 
	{
		args = args.classes;
		if ( Array.isArray( args ) ) {
			var dV = this.t;
			for ( var i = 0; i < args.length; i++ ) {
				var temp = document.createElement('div');
				temp.setAttribute( 'class', args[ i ] );

				if ( ! dV.hasChildNodes() ) {
					dV.appendChild( temp )
					dV = dV.firstChild
				}
			}
		}
		return this.t;
	}

	c( ft, nDE ) 
	{
		nDE = this.g( nDE );
		var fe = document.createElement('form');

		for( var kY in ft ) {
			for( var id in ft[ kY ] ) {
				for( var vl in ft[ kY ][ id ] ) {
					if ( vl === 'id' ) {
						fe.setAttribute( vl, ft[ kY ][ id ][ vl ] + '_' + this.u );
					} else {
						fe.setAttribute( vl, ft[ kY ][ id ][ vl ] );
					}
				}
			}
		}
		nDE.appendChild( fe )
		return this.t;
	}

	d() 
	{
		this.f( this.n(), this.c( this.l(), this.b( this.k() ) ) )
	}

	e() 
	{
		this.f( this.o(), this.c( this.m(), this.b( this.k() ) ) )
	}

	f( jO, el ) 
	{
		el = this.g( el )
		for( var key in jO ) {
			for( var id in jO[ key ] ) {
				for( var pR in jO[ key ][ id ] ) {

				    var tP = jO[ key ][ id ].type,
				    	et = jO[ key ][ id ].ele_type,
				    	eN = jO[ key ][ id ].name,
				    	uI = jO[ key ][ id ].uniqueid;

					var ele = document.createElement( et )
					ele.setAttribute( "type", tP )
					ele.setAttribute( "name", eN )
					ele.setAttribute( "id", "id-" + uI )

					if ( jO[ key ][ id ][ pR ] !== 'undefined' ) {
						ele.setAttribute( "placeholder", jO[ key ][ id ][ pR ] )
					}

					if ( tP === 'submit' ) {
						ele.innerHTML = "Submit";
						ele.setAttribute( 'class', 'btn btn-primary btn-block' );
					} else if ( eN === '_cancel' ) {
						ele.innerHTML = "Cancel";
						ele.setAttribute( 'class', 'btn btn-block' );
					} else if ( tP === 'checkbox' ) {
						ele.setAttribute( "class", "class-" + uI );
					} else {
						ele.setAttribute( "class", "form-control class-" + uI );
					}
				}
				if ( tP !== 'submit' && tP !== 'button' ) {
					el.appendChild( this.h( ele, tP, uI ) )
				} else {
					el.appendChild( ele )
				}
			}
		}
	}

	g( args ) 
	{
		while ( args.hasChildNodes() ) args = args.firstChild 
		return args;
	}

	h( eL, type, uI ) 
	{
		var fG = document.createElement('div');
		fG.setAttribute( 'class', 'form-group' );

		var lFl = document.createElement('label');
		lFl.setAttribute( 'for', 'id-' + uI );

		if ( uI === 'emailid' ||  uI === 'email-id' ) {
			lFl.innerHTML = 'Email address:';
		} else if ( uI === 'password' ) {
			lFl.innerHTML = 'Password:';
		} else if ( uI === 'remember-token' ) {
			fG.removeAttribute( 'class' );
			fG.setAttribute( 'class', 'checkbox' );
			lFl.removeAttribute( 'for' );

			var sE = document.createElement('span');
			sE.innerHTML = 'Remember me'

			lFl.appendChild( eL )
			lFl.appendChild( sE )

			fG.appendChild( lFl )
			return fG;
		} else if ( uI === 'user-name' ) {
			lFl.innerHTML = 'User Name:';
		} else if ( uI === 'contact-number' ) {
			lFl.innerHTML = 'Contact Number:';
		} else if ( uI === 'confirm-password' ) {
			lFl.innerHTML = 'Confirm Password:';
		}

		fG.appendChild( lFl )
		fG.appendChild( eL )
		return fG;
	}

	i( oJ ) 
	{
		console.log( JSON.stringify( oJ, undefined, 2 ) )
	}

	j( args ) 
	{
		while ( args.hasChildNodes() ) args.removeChild( args.lastChild )
	}

	k() 
	{
		return {"classes":["row","col-md-12 col-xs-12 col-sm-12 col-lg-12"]};
		return this.q( 'division' )
	}

	l() 
	{
		return {"form_attributes":[{"id":"_login_form_id","class":"_login_form_class","onclick":"return validate(this)","action":"/login","method":"POST","name":"_login_form"}]};
	}

	m() 
	{
		return {"form_attributes":[{"id":"_register_form_id","class":"_register_form_class","onclick":"return validate(this)","action":"/register","method":"POST","name":"_registration_form"}]};
	}

	n() 
	{
		return {"_email_id":[{"ele_type":"input","type":"text","name":"_email_id","uniqueid":"emailid","caption":"Email address"}],"_password":[{"ele_type":"input","type":"password","name":"_password","uniqueid":"password","caption":"Password"}],"_remember_me":[{"ele_type":"input","type":"checkbox","name":"_remember_token","uniqueid":"remember-token"}],"_submit_button":[{"ele_type":"button","type":"submit","name":"_submit","uniqueid":"submit-button"}],"_cancel_button":[{"ele_type":"button","type":"button","name":"_cancel","uniqueid":"cancel-button"}]};
	}

	o() 
	{
		return {"_user_name":[{"ele_type":"input","type":"text","name":"_user_name","uniqueid":"user-name","caption":"Your name"}],"_email_id":[{"ele_type":"input","type":"email","name":"_email_id","uniqueid":"email-id","caption":"Email address"}],"_contact_number":[{"ele_type":"input","type":"text","name":"_contact_number","uniqueid":"contact-number","caption":"Contact number"}],"_password":[{"ele_type":"input","type":"password","name":"_password","uniqueid":"password","caption":"Password"}],"_confirm_password":[{"ele_type":"input","type":"password","name":"_confirm_password","uniqueid":"confirm-password","caption":"Confirm password"}],"_submit_button":[{"ele_type":"button","type":"submit","name":"submit","uniqueid":"submit-button"}],"_cancel_button":[{"ele_type":"button","type":"button","name":"_cancel","uniqueid":"cancel-button"}]};
	}

	p() 
	{
	    for( var i = 0; i < 10; i++ ) this.r += this.s.charAt(Math.floor(Math.random() * this.s.length));
	    return this.r;
	}

	q( request ) 
	{
		var xhr = new XMLHttPRequest();
		xhr.open('GET', 'httP://dev.js.com:3000/get-json?request=' + request, true);
		xhr.responseType = 'text';
		xhr.onload = function () {
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