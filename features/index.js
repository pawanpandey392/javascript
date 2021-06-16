// Prototype and Inheritance

// Regex 
const subst = `X`;
const contactRegex = /\d(?!\d{}$)/gm;
const addressRegex = /[a-zA-Z\d](?!^$)/gm;
const roughRegex = /\B[a-z|A-Z\d]/gm;



// The substituted value will be contained in the result variable
console.log(`\nTest Mask All :- 'Contact Number'`);
let string = `(123) 556-7890`;
console.log(string, ' - ', string.replace(contactRegex, subst));
let string1 = `123-556-7890`;
console.log(string1, ' - ', string1.replace(contactRegex, subst));
let string2 = `9899768927`;
console.log(string2, ' - ', string2.replace(contactRegex, subst));
let string3 = `989 976 8927`;
console.log(string3, ' - ', string3.replace(contactRegex, subst));

// The substi tuted value will be contained in the result variable
console.log(`\nTest Mask All :- 'Address'`);
let address = `\nSangam Vihar Phase-I, Gas Godam Road, Kusumkhera, Haldwani (Nainital), Uttarakhand, (India)`;
console.log('Address 1 - ', address.replace(addressRegex, subst));

let address1 = `\n3239 Anamika Enclave-I, Canal Road, Gurugram, hariyana, (India)`;
console.log('Address 2 - ', address1.replace(addressRegex, subst));

console.log('------------------------------------');


var email = "abcdef@gmail.com";
var output = email.replace(/^(.{2})[^@]+/, "$1XXXXXXX");
console.log(email);
console.log(output);


console.log('------------------------------------');


function emailMask(email) {
	var maskedEmail = email.replace(/([^@\.])/g, "*").split('');
	var previous	= "";
	for(i=0;i<maskedEmail.length;i++){
		if (i<=1 || previous == "." || previous == "@"){
			maskedEmail[i] = email[i];
		}
		previous = email[i];
	}
	return maskedEmail.join('');
}

// Usage:
	console.log ( emailMask("pawanpa.ndey392@gmail.com") );

console.log('------------------------------------');
console.log('------------------------------------');

console.log("pawanpandey392@gmail.com".replace(/\B([^@\.])/g, "*"));
console.log("pawanpa.ndey392@gmail.com".replace(/\B([^@\.])/g, "*"));
console.log("pawanpa.ndey392@gmail.com".replace(/([^@\.])/g, "*"));



// console.log("pawanpa.ndey392@gmail.com".replace(/^([^@\.])/g, "*"));