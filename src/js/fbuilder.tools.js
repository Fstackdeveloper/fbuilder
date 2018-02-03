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
          this.fbuilder.append(this.builder());
          this.clickWindow();
        }
        
    clickWindow() {
        
        var self = this;
         $('.fbuilder-new').on('click', function(e) {
             new select(self.fbuilder,self.fitems);
         });
        
        
    }
        
            
    toolwindow()
    {
       return `
        <div class='fwindow-warpper'>
            <div class='fwindow'>
            
            <div class="fwindow-header">
            </div>
            
            
            <div class="fwindow-body">
            </div>
            
            <div class="fwindow-footer">
            <button data-close >cancel</button>
            <button data-save >save</button>
            </div>
            </div>
        </div>
        `;

    }
    
    
    
    builder()
    {
         return `
            <div class='fbuilder-builder'>
            </div>
            <div class='fbuilder-new'>
            Element
            </div>
            `;
    }
     
        
     
        
        
}

