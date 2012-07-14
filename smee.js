// Document loaded
$(function() {
	// Open the 'new state' dialog when you click the editor
	$('#editor')
		.click(function(event) {
			$('#newstatebox')
				.show()
				.offset({
					left: event.pageX - 70,
					top: event.pageY - 40,
				});
			$('#newstate').focus();
		});
	// Create a new state when you press 'enter' in the dialog
	$('#newstate')
		.autocomplete({
			source: states,
		})
		.keydown(function(e) {
			if(e.keyCode == 13) {
				pos = $('#newstatebox').position();
				pos.left += 80;
				pos.top += 50;
				if(addState($(this).val(), pos)) {
					$(this).val("");
					$('#newstatebox').hide();
				}
			}
		});
	// Hide the new state dialog
	$('#newstatebox')
		.hide()
		.mouseleave(function() {
			if($('#newstate').val() == "")
				$(this).hide();
		});
});
