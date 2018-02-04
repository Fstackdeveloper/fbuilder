/* 
    Created on : Feb 1, 2018, 8:40:09 PM
    Author     : Mohamed Al Moelef
    Email      : info@fullstackdeveloper.org
    Website    : fullstackdeveloper.org
*/


import {uniqId} from './fbuilder.functions.js';
import {select} from './fwindow/fwindow.select.js';

export default class tools {
    
    fbuilder;
    fitems;

  
    constructor(fbuilder, fitems)
        {
          this.fbuilder = fbuilder;
          this.fitems = fitems;
        //  this.fbuilder.append(this.builder());
           fbuilder.builder = $( this.builder() ).insertBefore( this.fbuilder);
          this.clickWindow();
        }
        
    clickWindow() {
        
        var self = this;
         this.fbuilder.builder.find('.fbuilder-new').on('click', function(e) {
             new select(self.fbuilder,self.fitems);
         });
        
        
    }
        
            
    
    builder()
    {
         return `
         <div class="fbuilder">
            <div class='fbuilder-builder'>
            </div>
            <div class='fbuilder-new'>
            Element
            </div>
          </div>
            `;
    }
     
        
     
        
        
}

