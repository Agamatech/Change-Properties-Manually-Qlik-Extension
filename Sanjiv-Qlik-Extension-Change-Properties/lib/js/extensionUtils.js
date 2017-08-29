/*global define*/
define( [
  'jquery',
  'underscore'
], function ( $, _ ) {
  'use strict';

  return {
    addStyleToHeader: function ( cssContent ) {
      $( "<style>" ).html( cssContent ).appendTo( "head" );
    }

  };

} );
