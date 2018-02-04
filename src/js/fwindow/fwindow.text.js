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
                        <textarea class="fwindow-control tinymce" name="content">${this.controls.content}</textarea>
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
                   
           if(!window.tinymce)
           {
               $.getScript("https://cdnjs.cloudflare.com/ajax/libs/tinymce/4.7.6/tinymce.min.js", function () { 
                window.tinymce.init({
                      selector: "textarea.tinymce",
                      theme: 'modern',
                      plugins: 'print preview fullpage searchreplace autolink directionality visualblocks visualchars fullscreen image link media template codesample table charmap hr pagebreak nonbreaking anchor toc insertdatetime advlist lists textcolor wordcount  imagetools   contextmenu colorpicker textpattern help',
                      toolbar1: 'formatselect | bold italic strikethrough forecolor backcolor | link | alignleft aligncenter alignright alignjustify  | numlist bullist outdent indent  | removeformat',
                      image_advtab: true,
                      content_css: [
                        'https://fonts.googleapis.com/css?family=Lato:300,300i,400,400i',
                        'https://www.tinymce.com/css/codepen.min.css'
                      ]
                     });       

               });
            }
            else
            {
                 window.tinymce.init({
                  selector: "textarea.tinymce",
                  theme: 'modern',
                  plugins: 'print preview fullpage searchreplace autolink directionality visualblocks visualchars fullscreen image link media template codesample table charmap hr pagebreak nonbreaking anchor toc insertdatetime advlist lists textcolor wordcount  imagetools   contextmenu colorpicker textpattern help',
                  toolbar1: 'formatselect | bold italic strikethrough forecolor backcolor | link | alignleft aligncenter alignright alignjustify  | numlist bullist outdent indent  | removeformat',
                  image_advtab: true,
                  content_css: [
                    'https://fonts.googleapis.com/css?family=Lato:300,300i,400,400i',
                    'https://www.tinymce.com/css/codepen.min.css'
                  ]
                 });       

            }
   

    }
    
    
    
};