"use strict";



function init() {

	Homey.log("Starting airplay client");

	var airplayer = require('airplayer');

	var list = airplayer();

	list.on('update', function (player) {
	  console.log('Found new AirPlay device:', player.name);
	  player.play('http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4');
	});

}

module.exports.init = init;
