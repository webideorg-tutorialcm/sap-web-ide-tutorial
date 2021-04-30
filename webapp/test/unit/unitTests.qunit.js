/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"Workspace/nw/epm/refapps/ext/po/apv/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});