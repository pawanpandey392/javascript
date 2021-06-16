/*		var form = document.getElementById('myform');

		form.onsubmit = function(event) {
			event.preventDefault();

			var formData = new FormData(form);
			formData.append("email_id", "Groucho@gmail.com");

			var request = new XMLHttpRequest();
			request.open("POST", "http://dev.js.com/posted.php");
			request.onreadystatechange = function () {
		        if(request.readyState === XMLHttpRequest.DONE && request.status === 200) {
		            console.log(JSON.stringify(JSON.parse(request.responseText),null,2));
		        }
		    };
			request.send(formData);
		}*/


		// console.log(request.responseText);




		// var request = new XMLHttpRequest();
		// // POST to httpbin which returns the POST data as JSON
		// request.open('POST', 'http://dev.js.com/posted.php', true);

		// var formData = new FormData();
		// formData.append('key1', 'value1');
		// formData.append('key2', 'value2');

		// request.send(formData);
		// console.log(request.response);





		// var request = new XMLHttpRequest();
		// // POST to httpbin which returns the POST data as JSON
		// request.open('POST', 'http://dev.js.com/posted.php', /* async = */ false);

		// var formData = new FormData(formData);
		// request.send(formData);

		// console.log(request.response);


		// console.log(request);