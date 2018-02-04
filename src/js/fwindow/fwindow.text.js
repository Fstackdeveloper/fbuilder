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
        
        
                     <div class="fwindow-group">
                         <label for="header">Show Header</label>
                        <select class="fwindow-control" name="showheader">
                        <option value="1" ${(this.controls.showheader && this.controls.showheader.toString() === "1")?'selected':''}> yes </option>
                        <option value="0" ${(this.controls.showheader && this.controls.showheader.toString() === "0")?'selected':''}> no </option>
                        </select>
                     </div>



                `;
       
        return html;
    }
    
    
    events()
    {
        var self = this;
        $.getScript("https://cdnjs.cloudflare.com/ajax/libs/froala-editor/2.5.1//js/froala_editor.pkgd.min.js", function () { self.windowElm.find('textarea').froalaEditor(); });
    }
    
    
    
};