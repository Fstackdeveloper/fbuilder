
import {elements} from './fbuilder.elements.js';
import {formWindow} from '../fwindow/fwindow.form.js';


export class form extends elements{
    
    
    static initStatic()
    {
        form.title = "form";
        form.icon = "icon-form";
    }
    

    
    init()
    {
        this.element.type="form";
        this.element.header="Edit Header";
        this.element.content="Edit Content";
        this.element.icon = form.icon;
        this.element.title = form.title;
    }
    

        
    click() 
    {
        
        
        var self = this;
        var startWindow = new formWindow(this.fbuilder, {controls:this.element} );
        startWindow.submitCompelete = function (controls) {
            $.extend(self.element, controls);
            self.element.$.find('.content').html(self.insertContent());
        };
        
        
        
    }

    
    
    
};