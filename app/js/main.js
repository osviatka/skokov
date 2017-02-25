$(function() {
	$(".item-content").slice(0, 2).show();
	$(".btn-item-content").on('click', function (e) {
		e.preventDefault();
		$(".item-content:hidden").slice(0, 1).show();
		if ($(".item-content:hidden").length == 0) {
			$(".btn-item-content").fadeOut('slow');
		}
	});
	$(".item-featured").slice(0, 2).show();
	$(".btn-item-featured").on('click', function (e) {
		e.preventDefault();
		$(".item-featured:hidden").slice(0, 1).show();
		if ($(".item-featured:hidden").length == 0) {
			$(".btn-item-featured").fadeOut('slow');
		}
	});
	$('#exampleModalLong').on('show.bs.modal', function (event) {
		var button = $(event.relatedTarget),
			headingText = button.data('heading'),
			countryText = button.data('country'),
			modal = $(this);
		modal.find('.modal-head').text(headingText);
		modal.find('.country').text(countryText);
	});

});

jQuery(function () {

	var availableTags = ["Andrew", "Adam", "Alan", "Alfred", "Alton", "Antony", "Ann", "Bobby", "Denny", "Vong", "Ringo", "Max", "Ivan", "Mary", "Michael", "Oleg", "Osho", "Ronald", "Sam", "Eugene", "Alexandr", "Sonny", "Kira", "July", "Artur", "Tony"];

	$( "#autoComplete" ).autocomplete({
		lookup: availableTags,
		lookupLimit: 5
	});
});

