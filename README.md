# CurtainBlock.js
### Developed by Jessica Alouette
### v1.2.2
#### A simple, flat, native way to block content from view until the user wants to see it.

## About CurtainBlock.js

CurtainBlock.js was devised initially as a method to hide all the content on a given page from anyone who might come stumbling onto a given page and not be willing to see the content on it. I primarily think people will use this for adult blogs or whatever.

## Demo

A demo of this script can be [found here](http://owlet57.github.io/CurtainBlock.js)

## Requirements

* A browser that runs JS
* localStorage support (most if not all modern browsers have this)
* jQuery (I used 2.0.3 in development but you can use whatever)

## Features

* Lightweight
* Easy to add to your existing code
* 2 minute setup!
* Uses localStorage() for persistent confirm.

## Setup

The easiest method is just to add these 3 lines of code in at the end of the `<body>`:

	<script src="//code.jquery.com/jquery-1.10.2.min.js"></script>
	<script src="//owlet57.github.io/CurtainBlock/CurtainBlock.min.js"></script>
	<script>CurtainBlock(true);</script>

Add this to your `<head>`:

	<link rel="stylesheet" href="//owlet57.github.io/CurtainBlock/CurtainBlock.css">

And create the relevant divs and buttons:

	<div class="CurtainBlock">
    <div class="CurtainBlockAlert">
        <!-- The Alert -->
        <noscript>This website requires Javascript.</noscript>
        <button class="CurtainBlockConfirm"><!-- Confirm button text --></button>
        <button class="CurtainBlockDeny"><!-- Deny button text --></button>
    </div>
	</div>

And you're done!

Oh, and in case you've set up CurtainBlock.js to be in your HTML, but forget to initialize it, it will give you a friendly reminder to initialize it in the console.

## What's new in v1.2

* Easier starter call, with all your options on one line!
* Hopefully a bit faster and more efficient
* Cleaner code

## Options

CurtainBlock.js, as of v1.2, now just passes options in it's first call.  To set your options, just set them between the brackets.

### Persistent

Sets the use of persistence (via localStorage) to either on or off, so you can avoid displaying alerts to users who have already visited and accepted the warning.

* **Default:** *false*
* **Options:** *true, false*

*Example:*
	
	CurtainBlock(true)

### Transparent

Sets up a transparency option, so a user can see some of the content on your page if you want them to.

* **Default:** *false*
* **Options:** *true, false*

*Example:*
	
	CurtainBlock(true,true)

### Redirect URL

Sets a url for CurtainBlock to redirect to in the event the user does not want to continue ahead.

* **Default:** *about:blank*
* **Options:** *string*

*Example:*

	CurtainBlock(true,true,"http://blog.owlet57.com")

*** 

##### Special Thanks to The M Machine, Porter Robinson, and KOAN Sound for keeping me going while I wrote this.
##### Additional thanks to Jaybud for helping me test and work on this.
