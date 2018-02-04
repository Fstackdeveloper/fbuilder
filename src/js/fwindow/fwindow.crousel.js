import {fwindow} from './fwindow.js';

export class crouselWindow extends fwindow{
    
    init()
    {
        this.title = "Crousel";
    }
    
    
    
    content()
    {
        var self = this;
        var typesSelect = '';
        var categorySelect= '';
        this.fbuilder.input.fcrousel.types.map(function (type, i) { 
            typesSelect += `<option value="${type.id}" ${(self.controls.fcrouseltype && self.controls.fcrouseltype.toString() === type.id.toString())?'selected':''}>${type.text}</option>`;
        }) ;
        
       if(this.controls.fcrouseltype)
       {
       this.fbuilder.input.fcrousel[this.controls.fcrouseltype].map(function (category, i) { 
          
            categorySelect += `<option value="${category.id}" ${(self.controls.category && self.controls.category.toString() === category.id.toString())?'selected':''}>${category.text}</option>`;
        }) ;
       }

       var html=` 
                    <div class="fwindow-group">
                         <label for="header">Header</label>
                         <input class="fwindow-control" type="text" name="header" value="${this.controls.header?this.controls.header:''}" placeholder="${this.controls.header_placeholder}" >
                     </div>
                       
                     <div class="fwindow-group">
                         <label for="header">Type</label>
                        <select class="fwindow-control" name="fcrouseltype">
                        <option> Select Type </option>
                        ${typesSelect}
                        </select>
                     </div>
                     
                      
                      <div class="fwindow-group fwindow-group-category" ${(this.controls.fcrouseltype)? '':'style="display:none"'} >
                         <label for="header">Category</label>
                        <select class="fwindow-control" name="category">
                        ${categorySelect}
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
        this.windowElm.find('[name="fcrouseltype"]').on('change', function () {
            self.windowElm.find('.fwindow-group-category').hide();
            
            var categorySelect= '';
           if($(this).val())
           {
               var fcrouseltype = $(this).val();
               self.fbuilder.input.fcrousel[$(this).val()].map(function (category, i) { 
                    categorySelect += `<option value="${category.id}" ${(self.controls.category && self.controls.category.toString() === category.id.toString() && fcrouseltype === self.controls.fcrouseltype)?'selected':''}>${category.text}</option>`;
                }) ;
           }
           
            self.windowElm.find('[name="category"]').html(categorySelect);
            
            self.windowElm.find('.fwindow-group-category').show();
           
        
        });
        
    }
    
    
    
};