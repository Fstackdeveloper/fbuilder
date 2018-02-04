import * as elements from './elements/index.js';

export class readJson {
    fbuilder;
    ajax;
    
        constructor(fbuilder, ajax)
        {
          this.fbuilder = fbuilder;
          this.ajax = ajax;
          this.start();
          this.inputData();
        }
        
        
        start()
        {
          self =this;
          this.ajax.get('/')          
          .then(function (response) {
              self.fbuilder.items = response.data || [];
              self. build();
          })
          .catch(function (error) {
            console.log(error);
          });

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
          this.ajax.get('/input')          
          .then(function (response) {
              self.fbuilder.input = response.data || [];
          })
          .catch(function (error) {
            console.log(error);
          });

        }
        
        

}