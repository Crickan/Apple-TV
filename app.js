"use strict";



function init() {

	Homey.log("Starting airplay client");

	Homey.manager('flow').on('action.castVideo', onFlowActionCastVideo)

}

module.exports.init = init;

function onFlowActionCastVideo(callback, args) {
	Homey.manager('drivers')
		.getDriver('airplay')
		.playVideo(args.airplay.id, args.url, callback)
}
