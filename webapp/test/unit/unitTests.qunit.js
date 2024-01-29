/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"nicoapp/testenovoapp/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
