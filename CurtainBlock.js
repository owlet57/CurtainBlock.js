// CurtainBlock.js
// Written by Jeremy Mills
var CurtainBlock = $.fn.init();
$(function($) {
	// Setup (for easy dev access)
	$curtain = $('.CurtainBlock');
	$alert = $('.CurtainBlockAlert');
	$confirm = $('.CurtainBlockConfirm');
	$deny = $('.CurtainBlockDeny');
	complete = 0;
	this.init = function (persistent,transparency,redir) {
		// Checks for localStorage and disables the curtain, if that option is toggled.
		if (persistent) {
			if (localStorage.getItem("curtainConfirm")) {
				$curtain.hide();
				complete = 1;
			};
		};
		// If we see that stored key, run the Curtain.
		if (complete === 0) {
			$confirm.show();
   			$deny.show();
			// Redirect / hide based on user input
			if (transparency) {
				$curtain.css('background-color','rgba(0,0,0,0.85');
			}
			$confirm.click(function () {
				$curtain.fadeOut(750);
				$alert.fadeOut(350);
				// If we're persistent, set up the localStorage
				if (persistent) {
					localStorage.setItem("curtainConfirm", true);
				};
			});
			$deny.click(function () {
				// Redir function
				if (CurtainBlock.options.redir.length > 0) {
					// Redirect to a blank page
					window.location.replace(redir)
				} else {
					// Redirect to a page the dev specifies in their setup (by putting a string into CurtainBlock.redir)
					window.location.replace("about:blank")
				}
			});
		}
	}
});