import * as elements from './elements/index.js';

export class readJson {
    fbuilder;
    ajax;
    
        constructor(fbuilder, ajax)
        {
          this.fbuilder = fbuilder;
          this.ajax = ajax;
          this.inputData();
          this.start();
        }
        
        
        start()
        {
            self =this;
            if(this.fbuilder.data('auto') === true )
            {
              this.ajax.get('')          
              .then(function (response) {
                  self.fbuilder.items = response.data || [];
                  self. build();
              })
              .catch(function (error) {
                console.log(error);
              });
            }
            else if (this.fbuilder.prop("tagName") === 'TEXTAREA')
            {
                this.fbuilder.items = (this.fbuilder.val() && this.fbuilder.val().trim() !=='')?JSON.parse(this.fbuilder.val().trim()):[];
                this.build();
                
            }

        }
        
        
        
        build()
        {
            for (let no in this.fbuilder.items )
            {
               let instanse =  new elements[this.fbuilder.items[no].type](this.fbuilder, this.fbuilder.items[no]);
               instanse.insert();
               this.fbuilder.items[no] = instanse.element;
            }
            
        }
        
        
        inputData()
        {
          self =this;
          this.ajax.get('input')          
          .then(function (response) {
              self.fbuilder.input = response.data || [];
          })
          .catch(function (error) {
            console.log(error);
          });

        }
        
        

}