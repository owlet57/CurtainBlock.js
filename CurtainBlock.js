// CurtainBlock.js
// Written by Jeremy Mills
// Options for easy access and setup

CurtainBlock = {
  	init: false,
	options: {
		persistent: false, // Disable the alerts if you've confirmed it before
		redir: 'about:blank', // Redirect URL on denial
		transparency: false //15% transparency if you want it
	},
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
	if (CurtainBlock.init) {
		// Checks for localStorage and disables the curtain, if that option is toggled.
		if (CurtainBlock.options.persistent) {
			var confirmation = localStorage.getItem("curtainConfirm")
			if (confirmation) {
				$curtain.hide();
				complete = 1;
			};
		};
		// If we don't have the storage, run the CurtainThing.
		if (complete === 0) {
			// Show Everything (The Curtain is on by default.)
			$confirm.show();
   			$deny.show();
			$alert.fadeIn(500);
			// Redirect / hide based on user input
			if (CurtainBlock.options.transparency) {
				$curtain.css('background-color','rgba(0,0,0,0.85')
			}
			$confirm.click(function () {
				$curtain.fadeOut(750);
				$alert.fadeOut(350);
				// If we're persistent, set up the localStorage
				if (CurtainBlock.options.persistent) {
					localStorage.setItem("curtainConfirm", true);
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
		console.log("The CurtainBlock.js code is here, but you didn't start it!~ Set CurtainBlock.init to true in your HTML to start it!");
	}
});
