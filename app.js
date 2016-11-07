"use strict";

var bonjour = require('bonjour')();
var AirPlay = require('airplay-protocol');

function init() {

	Homey.log("Starting airplay client");

	bonjour.find({ type: 'airplay' }, function (service) {
	  //console.log('Found an AirPlay server:', service);
		var airplay = new AirPlay(service.referer.address, service.port);
		airplay.play('http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4', function (err) {
		  if (err) throw err

		  airplay.playbackInfo(function (err, res, body) {
		    if (err) throw err
		    //console.log('Playback info:', body)
		  })
		})
	});

}

module.exports.init = init;
