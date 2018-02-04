import {fwindow} from './fwindow.js';

export class formWindow extends fwindow{
    
    init()
    {
        this.title = "Form";
    }
    
    content()
    {
        var self = this;
        var formsSelect= '';
        this.fbuilder.input.forms.map(function (form, i) { 
            formsSelect += `<option value="${form.id}" ${(self.controls.form && self.controls.form.toString() === form.id.toString())?'selected':''}>${form.text}</option>`;
        }) ;

       var html=` 
                    <div class="fwindow-group">
                         <label for="header">Header</label>
                         <input class="fwindow-control" type="text" name="header" value="${this.controls.header?this.controls.header:''}" placeholder="${this.controls.header_placeholder}" >
                     </div>
        
                     <div class="fwindow-group">
                         <label for="header">Type</label>
                        <select class="fwindow-control" name="form">
                        <option> Select Form </option>
                             ${formsSelect}
                        </select>
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
        
        
    }
    
    
    
};