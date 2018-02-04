/* 
    Created on : Feb 1, 2018, 8:40:09 PM
    Author     : Mohamed Al Moelef
    Email      : info@fullstackdeveloper.org
    Website    : fullstackdeveloper.org
*/

import {elements} from './fbuilder.elements.js';
import {htmlWindow} from '../fwindow/fwindow.html.js';

export class html extends elements{
    

    static initStatic()
    {
        html.title = "HTML";
        html.icon = "icon-html";
    }
        
    init()
    {
        this.element.type="html";
        this.element.header="Edit Header";
        this.element.content="Edit Content";
        this.element.showheader = "1";
        this.element.icon = html.icon;
        this.element.title = html.title;

    }
        
    
    
    
    click() 
    {
        
        
        var self = this;
        var startWindow = new htmlWindow(this.fbuilder, {controls:this.element} );
        startWindow.submitCompelete = function (controls) {
            $.extend(self.element, controls);
            self.element.$.find('.content').html(self.insertContent());
        };
        
        
        
    }
    
    
    
    
};