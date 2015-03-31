# Foundation Errors  [![Build Status](https://travis-ci.org/Meloncon/meteor-foundation-errors.svg?branch=master)](https://travis-ci.org/Meloncon/meteor-foundation-errors)

Foundation Errors is a Meteor package that provides the same Errors syntax from tmeasday's package 'meteor-errors' and adds in Foundation syntax in place of the common Bootstrap syntax.

## Installation
To add this package, run:
	meteor add meloncon:foundation-errors


## Usage
Include the template somewhere in your main HTML file:

	{{> meteorErrors}}

To throw an error with the default 'info' style from Foundation:
	Errors.throw('This is a test message.');

You may also specify the different styles of Foundation Alerts:
	Errors.throw('Your profile has been updated!', {style: 'success'});
	Errors.throw('Proceed with caution!', {style: 'warning'});
	Errors.throw('We will perform a rolling restart in 5 minutes.', {style: 'info'});
	Errors.throw('Invalid username and password.', {style: 'alert'});
	Errors.throw("It's a friend's birthday!", {style: 'secondary'});

To clear all seen messages:
	Errors.clearSeen();

##TODO
I would like to expand this to cover other Foundation style options, such as 'radius' or 'rounded'. That's why I chose to use an object literal as the second (optional) argument. Depending on interest or need other features may be added too. Feel free to open an issue with other suggestions to implement! Thanks!