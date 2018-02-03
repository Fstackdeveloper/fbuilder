import {fwindow} from './fwindow.js';
import * as elements from '../elements/index.js';

export class select extends fwindow{
    
    init()
    {
        this.title = "Select Element";
        
        //Set All Static Values in elements  
        for (let key in elements) {
            if (elements.hasOwnProperty(key))
            {
                elements[key].initStatic();
            }
        }

    }
    
    content()
    {
       var html='';
       for (let key in elements) {
            if (elements.hasOwnProperty(key))
            {
                html += `
                        <div data-${key} class="fwindow-select-elm">
                            <i class="${elements[key].icon}"></i> ${elements[key].title}
                        </div>
                    `;
            }
        }

        return html;
    }
    
    
    events()
    {
        this.hideSave();
        var self = this;
        
        
       for (let key in elements) 
       {
            if (elements.hasOwnProperty(key))
            {
                this.windowElm.find("[data-" + key + "]").on('click', function(ev){
                         let instanse = new elements[key](self.fbuilder,self.fitems);
                         instanse.insert();
                         self.fbuilder.items.push(instanse.element);
                         console.log(self.fbuilder.items);
                         self.windowElm.remove();
                });            
            }
        }

 }
    
    
    
};