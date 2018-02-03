/* 
    Created on : Feb 1, 2018, 8:40:09 PM
    Author     : Mohamed Al Moelef
    Email      : info@fullstackdeveloper.org
    Website    : fullstackdeveloper.org
*/

import {uniqId} from '../fbuilder.functions.js';

export class elements {
    element = {};
    fbuilder;
    icon;
    title;
    static title; 
    static icon;

  
    constructor(fbuilder)
        {
          this.fbuilder = fbuilder;
          this.element.id = uniqId();
          this.init();   
        }
        
        
    insertContent()
    {
        return `
                 <div class='header' >
                    <i class="${this.icon}"></i> ${this.title}
                </div>
                 <div class='body' >
                        ${this.element.header}
                 </div>
        `;
    }

    
    insert()
    {
      let html = `
            <div data-id=${this.element.id} class='fbuilder-container'>
              <div class="delete">
                    <i class="icon-close"></i> 
                </div>
            <div class="content">
            ${this.insertContent()}
            </div>
            </div>
            `;
     this.element.$ =  $(html).appendTo(this.fbuilder.find('.fbuilder-builder'));
     this. onClick();
     this.onDelete();
    }
    
    
        
    onClick()
    {
        var self = this;
        var startTime, endTime;
        
        this.element.$.on('mousedown', function(ev) {
             startTime = Date.now();
        });
       this.element.$.on('mouseup', function(ev) {
                 endTime = Date.now();
                 let period = endTime - startTime;
                 if(period < 300)
                 {
                    self.click();
                 }
            });

    }
    
    
    
    

    
    
    onDelete()
    {
        let self = this;
        this.element.$.find('.delete i').on('click', function(ev) {
            ev.stopPropagation();
            
            // Delete element from fitems array ( Use filter to get elements that is not equal to current element id )
          self.fbuilder.items =  self.fbuilder.items.filter((elm) => {
                return elm.id !== self.element.id;
            });
                              
            self.element.$.remove();
        });
        
    }
        
        
        
    
   click() {
       //child
   }

}
