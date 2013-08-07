// CurtainBlock.js
// Written by Jeremy Mills

// Options for easy access and setup
CurtainBlock = {
  	init: false,
	options: {
		persistent: false, // Set this false by default yeah
		redir: 'about:blank'
	},
	start: function () {
		if (CurtainBlock.init == true) {
			return true;
		} else {
			return false;
		}
	}
}
$(document).ready(function () {
	// Setup!
	$curtain = $('.CurtainBlock');
	$alert = $('.CurtainBlockAlert');
	$confirm = $('.CurtainBlockConfirm');
	$deny = $('.CurtainBlockDeny');
	complete = 0;
	// Core CurtainBlock methods, including the start
	// Checks that CurtainBlock.js is setup properly
	if (CurtainBlock.start()) {
		// Checks for a cookie and disables the curtain, if that option is toggled.
		if (CurtainBlock.options.persistent) {
			var confirmation = localStorage.getItem("alertConfirmed")
			if (confirmation) {
				$curtain.hide();
				complete = 1;
			};
		};
		if (complete === 0) {
			$curtain.show();
			$confirm.show();
   			$deny.show();
			$alert.fadeIn(500);
			$confirm.click(function () {
				$curtain.fadeOut(750);
				$alert.fadeOut(350);
				if (CurtainBlock.options.persistent) {
					localStorage.setItem("alertConfirmed", true);
				};
			});
			$deny.click(function () {
				// Redir function
				if (CurtainBlock.options.redir.length === 0) {
					// Redirect to a blank page
					window.location.replace("about:blank")
				} else {
					// Redirect to a page the dev specifies in their setup (by putting a string into CurtainBlock.redir)
					window.location.replace(CurtainBlock.options.redir)
				}
			});
		}
	} else {
		$curtain.hide();
		console.log("The CurtainBlock.js code is here, but you didn't start it!~ Set CurtainBlock.init to true in your HTML to start it!")
	}
});
