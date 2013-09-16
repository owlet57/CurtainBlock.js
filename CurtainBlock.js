// CurtainBlock.js
// Written by Jeremy Mills
// Setup (for easy dev access)
function CurtainBlock(persistent,transparency,redir) {
	$curtain = $('.CurtainBlock');
	$alert = $('.CurtainBlockAlert');
	$confirm = $('.CurtainBlockConfirm');
	$deny = $('.CurtainBlockDeny');
	complete = 0;
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
				window.location.replace(redir);
			});
		}
	}