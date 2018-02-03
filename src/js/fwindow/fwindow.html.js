import {fwindow} from './fwindow.js';

export class htmlWindow extends fwindow{
    
    init()
    {
        this.title = "HTML";
    }
    
    content()
    {
       var html=` 
                    <div class="fwindow-group">
                         <label for="header">Header</label>
                         <input class="fwindow-control" type="text" name="header" value="${this.controls.header}" >
                     </div>
        
                     <div class="fwindow-group">
                         <label for="header">Content</label>
                        <textarea class="fwindow-control" name="content">${this.controls.content}</textarea>
                     </div>


                `;
       
        return html;
    }
    
    
    events()
    {
        var self = this;        
    }
    
    
    
};