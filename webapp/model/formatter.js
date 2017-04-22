sap.ui.define([
	], function () {
		"use strict";

		return {
			/**
			 * Rounds the currency value to 2 digits
			 *
			 * @public
			 * @param {string} sValue value to be formatted
			 * @returns {string} formatted currency value with 2 digits
			 */
			currencyValue : function (sValue) {
				if (!sValue) {
					return "";
				}

				return parseFloat(sValue).toFixed(2);
			},
		  /**
	      * Formats an address to a static google maps image
	      * @public
	      * @param {string} sBuilding the building number
	      * @param {string} sStreet the street
	      * @param {string} sZIP the postal code
	      * @param {string} sCity the city
	      * @returns {string} sValue a google maps URL that can be bound to an image
	      */
	    formatMapUrl: function(sBuilding, sStreet, sZIP, sCity) {
	      return "/GoogleMaps/staticmap?zoom=16&size=400x400&markers="
	        + jQuery.sap.encodeURL(sBuilding +" "+ sStreet + ", " + sZIP +  " " + sCity );
	    }

		};

	}
);