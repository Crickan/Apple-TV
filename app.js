"use strict";



function init() {

    Homey.log("Starting airplay client");

    Homey.manager('flow').on('action.castVideo', onFlowActionCastVideo)
    Homey.manager('flow').on('action.stopVideo', onFlowActionStopVideo)

}

module.exports.init = init;

function onFlowActionCastVideo(callback, args) {
    Homey.manager('drivers')
        .getDriver('appletv')
        .playVideo(args.appletv.id, args.url, callback)
}

function onFlowActionStopVideo(callback, args) {
    Homey.manager('drivers')
        .getDriver('appletv')
        .stopVideo(args.appletv.id, callback)
}
