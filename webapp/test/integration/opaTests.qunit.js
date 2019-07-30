/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"agl/test/app/mytestapp/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});