/*global define*/
define( [], function () {
	'use strict';
	var stringProp = {
		ref: "props.stringProp",
		label: "String Setting:",
		type: "string",
		expression: "optional",
		show: true
	};
	var propertyPanelDefinition = {
		uses: "settings",
		items: {
			customSettings: {
				type: "items",
				label: "Settings",
				items: {
					stringProp: stringProp
				}
			}
		}
	};
	return {
		type: "items",
		component: "accordion",
		items: {
			settings: propertyPanelDefinition
		}
	};

} );
