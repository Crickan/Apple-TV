"use strict";



function init() {

    Homey.log("Starting airplay client");

    Homey.manager('flow').on('action.castVideo', onFlowActionCastVideo)
    Homey.manager('flow').on('action.stopVideo', onFlowActionStopVideo)

    Homey.manager('flow').on('action.castVideoKodi', onFlowActionCastVideoKodi)
    Homey.manager('flow').on('action.stopVideoKodi', onFlowActionStopVideoKodi)

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

function onFlowActionCastVideoKodi(callback, args) {
    Homey.manager('drivers')
        .getDriver('kodi')
        .playVideo(args.kodi.id, args.url, callback)
}

function onFlowActionStopVideoKodi(callback, args) {
    Homey.manager('drivers')
        .getDriver('kodi')
        .stopVideo(args.kodi.id, callback)
}
