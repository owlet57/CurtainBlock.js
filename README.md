# CurtainBlock.js
### Developed by Jeremy Mills (owlet57)
### v1.1.1
#### A simple, flat, native way to block content from view until the user wants to see it.

## About CurtainBlock.js

CurtainBlock.js was devised initially as a method to hide all the content on a given page from anyone who might come stumbling onto a given page and not be willing to see the content on it. I primarily think people will use this for like adult blogs or whatever.

## Demo

A demo of this script can be [found here](http://owlet57.github.io/CurtainBlock.js)


## Requirements

* A browser that runs JS
* localStorage support (most if not all modern browsers have this)
* jQuery (I used 2.0.3 but you can use whatever)

## Features

* Lightweight
* Easy to add to your existing code
* 2 minute setup!
* Uses localStorage() for persistent confirm.

## Setup

The easiest method is just to add these 3 lines of code in your header:

    <link rel="stylesheet" href="CurtainBlock.css" />
	<script src="CurtainBlock.js"></script>
	<script>CurtainBlock.init = true;</script>

And create the relevant divs and buttons:

	<div class="CurtainBlock">
		<div class="CurtainBlockAlert">
			<!-- The Alert -->
			<noscript>This website requires Javascript.</noscript>
			<button class="CurtainBlockConfirm"></button>
			<button class="CurtainBlockDeny"></button>
		</div>
	</div>

And you're done!

Oh, and in case you've set up CurtainBlock.js to be in your HTML, but forget to initialize it, it will give you a friendly reminder to initialize it in the console.

## What's new in v1.1.1

* Minor edits to the documentation
* Minor bug fixes and edits
* New "minimal" version

## Options

### CurtainBlock.options.redir

Sets a url for CurtainBlock to redirect to in the event the user does not want to continue ahead.

* **Default:** *about:blank*
* **Options:** *string*

*Example:*

	CurtainBlock.options.redir = "http://blog.owlet57.com";

### CurtainBlock.options.persistent

Sets the use of persistence (via localStorage) to either on or off, so you can avoid displaying alerts to users who have already visited and accepted the warning.

* **Default:** *false*
* **Options:** *true, false*

*Example:*
	
	CurtainBlock.options.persistent = true;

### CurtainBlock.options.transparency

Sets up a transparency option, so a user can see some of the content on your page if you want them to.

* **Default:** *false*
* **Options:** *true, false*

*Example:*
	
	CurtainBlock.options.transparency = true;

*** 

##### Special Thanks to The M Machine, Porter Robinson, and KOAN Sound for keeping me sane while I wrote this.
##### Additional thanks to ISky (aka Jaybud) for helping me test and work on this.