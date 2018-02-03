/* 
    Created on : Feb 1, 2018, 8:40:09 PM
    Author     : Mohamed Al Moelef
    Email      : info@fullstackdeveloper.org
    Website    : fullstackdeveloper.org
*/

import './fbuilder.prototype.js';
import Sortable from 'sortablejs';
import tools from './fbuilder.tools.js';
import {readJson} from './fbuilder.read.js';
import {uniqId} from './fbuilder.functions.js';
import axios from 'axios';



(function ( $ ) {

$.fn.fbuilder = function() {
        
    var fbuilderID = uniqId();
    
    var fbuilder = $(this);
    
    if(fbuilder.data('ajax').substr(fbuilder.data('ajax').length - 1) !== '/' )
    {
        fbuilder.data('ajax', fbuilder.data('ajax') + '/');
    }
    
    var ajax = axios.create({
      baseURL: fbuilder.data('ajax'),
      timeout: 1000
    });

    
    
    fbuilder.items = [];
    
    
 new readJson(fbuilder, ajax);


    
    fbuilder.save = function()
    {
        let build = [];
        for (let no in this.items) {
            build[no] = {};
            for (let key in this.items[no])
            {
                 if(key !== '$')
                 {
                     build[no][key] = this.items[no][key];
                 }
            }
        }
        

        ajax.post('/save', {
            build: build
          })
          .then(function (response) {
           // console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });


    };

    new tools(fbuilder);
    
    var i = 0;

    var builderContainer = new Sortable($(this).find('.fbuilder-builder')[0], {group: "fbuilder_"+ fbuilderID, 
    	// Element dragging ended
	onEnd: function (evt) {
            
           var temp = fbuilder.items[evt.oldIndex];
           
           if (evt.newIndex > evt.oldIndex)
           {
               for (let i = evt.oldIndex; i < evt.newIndex; i++ )
               {
                   fbuilder.items[i] = fbuilder.items[i+1];
               }
               
               fbuilder.items[evt.newIndex] = temp;
               
           }
           else
           {
               for (let i = evt.oldIndex; i > evt.newIndex; i-- )
               {
                   fbuilder.items[i] = fbuilder.items[i-1];
               }
               
               fbuilder.items[evt.newIndex] = temp;

           }
                       
            fbuilder.save();
	}

    });
    
};

$("[data-fbuilder]").each(function () { $(this).fbuilder(); });   
}( jQuery ));
