
import {elements} from './fbuilder.elements.js';
import {crouselWindow} from '../fwindow/fwindow.crousel.js';


export class crousel extends elements{
    
    
    static initStatic()
    {
        crousel.title = "Crousel";
        crousel.icon = "icon-crousel";
    }


    
    init()
    {
        this.element.type="crousel";
        this.element.header_placeholder="Write Title";
        this.element.showheader = "1";
        this.element.icon = crousel.icon;
        this.element.title = crousel.title;
    }
        
    
    click() 
    {
        
        
        var self = this;
        var startWindow = new crouselWindow(this.fbuilder, {controls:this.element} );
        startWindow.submitCompelete = function (controls) {
            $.extend(self.element, controls);
            self.element.$.find('.content').html(self.insertContent());
        };
        
        
        
    }

    
    
    
    
};