/* 
    Created on : Feb 1, 2018, 8:40:09 PM
    Author     : Mohamed Al Moelef
    Email      : info@fullstackdeveloper.org
    Website    : fullstackdeveloper.org
*/

import {elements} from './fbuilder.elements.js';
import {textWindow} from '../fwindow/fwindow.text.js';

export class text extends elements{
    

    static initStatic()
    {
        text.title = "Text";
        text.icon = "icon-html";
    }
        
    init()
    {
        this.element.type="text";
        this.element.header="Edit Header";
        this.element.content="Edit Content";
        this.element.showheader = "1";
        this.element.icon = text.icon;
        this.element.title = text.title;

    }
        
    
    
    
    click() 
    {
        
        
        var self = this;
        var startWindow = new textWindow(this.fbuilder, {controls:this.element} );
        startWindow.submitCompelete = function (controls) {
            $.extend(self.element, controls);
            self.element.$.find('.content').html(self.insertContent());
        };
        
        
        
    }
    
    
    
    
};