/*global QUnit*/

sap.ui.define([
	"nicoapp/testenovoapp/controller/S1.controller"
], function (Controller) {
	"use strict";

	QUnit.module("S1 Controller");

	QUnit.test("I should test the S1 controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
