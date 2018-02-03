/* 
    Created on : Feb 1, 2018, 8:40:09 PM
    Author     : Mohamed Al Moelef
    Email      : info@fullstackdeveloper.org
    Website    : fullstackdeveloper.org
*/

import './fbuilder.prototype.js';
import Sortable from 'sortablejs';
import tools from './fbuilder.tools.js';
import {uniqId} from './fbuilder.functions.js';


(function ( $ ) {

$.fn.fbuilder = function() {
        
    var fbuilderID = uniqId();
    
    var fbuilder = $(this);
    fbuilder.items = [];

    new tools(fbuilder);
    
    var i = 0;

    var builderContainer = new Sortable($(this).find('.fbuilder-builder')[0], {group: "fbuilder_"+ fbuilderID, 
    	// Element dragging ended
	onEnd: function (evt) {
           var temp = fbuilder.items[evt.oldIndex];
            fbuilder.items[evt.oldIndex] = fbuilder.items[evt.newIndex];
            fbuilder.items[evt.newIndex] = temp;
	}

    });
    
};

$("[data-fbuilder]").each(function () { $(this).fbuilder(); });   
}( jQuery ));
