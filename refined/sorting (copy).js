class Sorting {

	constructor( argument ) {
		this.args = arguments[ 0 ];
		this.display = document.getElementById('display');
	}

	bubble() {
		for (var i = 0; i <= this.args.length; i++) {
			for (var j = 0; j <= this.args.length - i; j++) {				
				if( this.args[ j ] > this.args[ j + 1 ] ) {
					this.swap( this.args, j );
				}
			}
		}		
		this.output( this.args );
	}

	selection() {
		for (var i = 0; i < this.args.length - 1; i++) {
			var pivot = i;
			for (var j = i + 1; j < this.args.length; j++) {
				if ( this.args[ pivot ] > this.args[ j ] ) {
					var temp = this.args[ j ];
					this.args[ j ] = this.args[ pivot ];
					this.args[ pivot ] = temp;
					// this.swap( this.args, j );
				}
			}
		}
		this.output( this.args );
	}

	swap( arrayObject, j ) {
		var temp = arrayObject[ j ];
		arrayObject[ j ] = arrayObject[ j + 1 ];
		arrayObject[ j + 1 ] = temp;

		return arrayObject;
	}

	output( args ) {
		console.log(args);
		// this.display.innerHTML = args.join('&nbsp;&nbsp;&nbsp;');
	}

}

var btn = document.querySelector('#submit-btn');
btn.addEventListener('click', function() { location.reload(); });

var array = [23, 43, 56, 36, 76, 7, 87, 98, 89, 9, 0, 92, 1, 12, 43, 763];
// var array = [5, 4, 3, 2, 1];


window.onload = function() {
	// calling non static methods
	var sort = new Sorting(array);
	sort.output('unsorted array');
	sort.output(array);
	sort.output('bubble sort');
	sort.bubble();
	sort.output('selection sort');
	sort.selection();

};