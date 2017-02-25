(function() {


	var people = [
		{
			name: 'Casey',
			rate: 60
		},
		{
			name: 'Camille',
			rate: 80
		},
		{
			name: 'Gordon',
			rate: 75
		},
		{
			name: 'Nigel',
			rate: 120
		}
	];

	var rows = [],
	$min = $('#value-min'),
	$max = $('#value-max'),
	$table = $('#rates');

	function makeRows() {
		people.forEach(function(person) {
			var $row = $('<tr></tr>');
			$row.append( $('<td></td>').text(person.name) );
			$row.append( $('<td></td>').text(person.rate) );
			rows.push({
				person: person,
				$element: $row
			}); // End of rows.push

		}); // End of people.forEach

	} // End of function MakeRows()

	function appendRows() {
		var $tbody = $('<tbody></tbody>');
		rows.forEach(function(row) {
			$tbody.append(row.$element);
		}); // End of rows.forEach()
		$table.append($tbody);

	} // End of function appendRows()

	function update(min, max) {
		rows.forEach(function(row) {
			if (row.person.rate >= min && row.person.rate <= max) {
				row.$element.show();
			} else {
				row.$element.hide();
			}

		}); // End of rows.forEach()
	} // End of function Update()

	function init() {
		$('#slider').noUiSlider({
			range: [0, 150], start: [65, 90], handles: 2, margin: 15, connect: true,
			serialization: { to: [$min,$max], resolution: 1 }
		}).change(function() { update($min.val(), $max.val()); });
		makeRows();
		appendRows();
		update($min.val(), $max.val());
	}
	$(init);

}());




