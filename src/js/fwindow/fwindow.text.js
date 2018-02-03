import {fwindow} from './fwindow.js';

export class textWindow extends fwindow{
    
    init()
    {
        this.title = "Text";
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
        this.windowElm.find('textarea').froalaEditor();  
        
    }
    
    
    
};