export class fwindow {
    
    windowElm;
    title;
    fbuilder;
    fitems;
    controls = {};
    submitCompelete;
    
    constructor(fbuilder,others)
    {        
        this.fbuilder = fbuilder;
        if(others)
        {
        this.controls = others.controls;
         }
         
        this.init();
        this.windowElm =  $(this.html()).appendTo(document.body);
        this.size();
        this.onClose();
        this.onSave(); 
        this.onClick();
        this.onSubmit();
        this.events();
    }
    
    
    init()
    {
        //for child
    }
    
    content()
    {
       //for child
    }
        
   events()
   {
       //for child
   }
    
    
    size()
    {
        let windowHeight = this.windowElm.find('.fwindow').innerHeight();
        let headerHeight = this.windowElm.find('.fwindow-header').outerHeight();
        let footerHeight = this.windowElm.find('.fwindow-footer').outerHeight();
        let bodyHeight =  windowHeight - (headerHeight+footerHeight);
        
        this.windowElm.find('.fwindow-body').css('height', bodyHeight + 'px');
    }
    
            


        
    html()
    {
       return `
        <div class='fwindow-warpper'>
            <div class='fwindow'>
            
            <div class="fwindow-header">
              ${this.title}
            </div>
            
            
            <div class="fwindow-body">
            <form class="fwindow-form">
                
               ${this.content()}
               
            </form>
            </div>
            
            <div class="fwindow-footer">
            <button data-close >cancel</button>
            <button data-save >save</button>
            </div>
            </div>
        </div>
        `;

    }
    
    
    onClose()
    {
        var self = this;
        this.windowElm.find('[data-close]').on('click', function (ev) {
            self.windowElm.remove();
        });

        this.windowElm.on('click', function (ev) {
            self.windowElm.remove();
        });
    }
    
    
    onSave()
    {
        var self = this;
        this.windowElm.find('[data-save]').on('click', function (ev) {
            self.windowElm.find('.fwindow-form').trigger( "submit" );
        });
    }
    
    
    
    onClick()
    {
        this.windowElm.find('.fwindow').on('click', function (ev) {
            ev.stopPropagation();
        }); 
    }
    
    
    onSubmit()
    {
        var self = this;
        this.windowElm.find('.fwindow-form').on('submit', function (ev) {
            ev.preventDefault();
            self.controls={};
            $(this).find('.fwindow-control').each(function () {
                self.controls[$(this).attr("name")] = $(this).val();
            });
            self.submitCompelete(self.controls);
            self.windowElm.remove();
            self.fbuilder.save();
        });
    }
    
    
    hideSave()
    {
        this.windowElm.find('[data-save]').hide();
    }

        
        
}