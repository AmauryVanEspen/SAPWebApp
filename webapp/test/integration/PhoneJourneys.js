jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

sap.ui.require([
	"sap/ui/test/Opa5",
	"com/test/teched/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"com/test/teched/test/integration/pages/App",
	"com/test/teched/test/integration/pages/Browser",
	"com/test/teched/test/integration/pages/Master",
	"com/test/teched/test/integration/pages/Detail",
	"com/test/teched/test/integration/pages/NotFound"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "com.test.teched.view."
	});

	sap.ui.require([
		"com/test/teched/test/integration/NavigationJourneyPhone",
		"com/test/teched/test/integration/NotFoundJourneyPhone",
		"com/test/teched/test/integration/BusyJourneyPhone"
	], function () {
		QUnit.start();
	});
});