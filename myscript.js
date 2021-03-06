$(document).ready(function(){
	let $input = $('input');
	let $bin = $('#bin');
	let $dec = $('#dec');
	let $hex = $('#hex');

	$bin.on('input', function() {
		let s = $(this).val();
		
		let i = s.length;
		if(i === 0) {
			$hex.val("");
			$dec.val("");
			return;
		}
		while (i--) {
			if(!($.inArray(s.charAt(i), ['0', '1']) >= 0)) {
				$dec.val("error");
				$hex.val("error");
				return;
			}
		}
		$hex.val(parseInt(s, 2).toString(16).toUpperCase());
		$dec.val(parseInt(s, 2).toString(10).toUpperCase());
	});

	$dec.on('input', function() {
		let s = $(this).val();
		
		let i = s.length;
		if(i === 0) {
			$bin.val("");
			$hex.val("");
			return;
		}
		while (i--) {
			if(!($.inArray(s.charAt(i), ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']) >= 0)) {
				$hex.val("error");
				$bin.val("error");
				return;
			}
		}
		$hex.val(parseInt(s, 10).toString(16).toUpperCase());
		$bin.val(parseInt(s, 10).toString(2).toUpperCase());
	});

	$hex.on('input', function() {
		let s = $(this).val();
		
		let i = s.length;
		if(i === 0) {
			$bin.val("");
			$dec.val("");
			return;
		}
		while (i--) {
			if(!($.inArray(s.charAt(i), ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f', 'A', 'B', 'C', 'D', 'E', 'F']) >= 0)) {
				$dec.val("error");
				$bin.val("error");
				return;
			}
		}
		$bin.val(parseInt(s, 16).toString(2).toUpperCase());
		$dec.val(parseInt(s, 16).toString(10).toUpperCase());
	});


	function CheckReset() {
		let isTrue = false;
		$input.each(function() {
			if($(this).val()) {
				isTrue = true;
			}
		});
		return isTrue;
	}

	$input.on("change paste keyup", function() {
		UpdateButtons();
	});

	$('#reset').click(function() {
		$input.each(function() {
			$(this).val("");
		});
		UpdateButtons();
	});

	function UpdateButtons() {
		if(CheckReset()) {
			$('button#reset').prop("disabled", false);
		} else {
			$('button#reset').prop("disabled", true);
		}
	}
});