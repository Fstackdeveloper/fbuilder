/* 
    Created on : Jan 14, 2018, 8:40:09 PM
    Author     : Mohamed Al Moelef
    Email      : info@fullstackdeveloper.org
    Website    : fullstackdeveloper.org
*/

import {ar} from './fbuilder.ar.js';
import {en} from './fbuilder.en.js';

export class language {
   
       constructor(fbuilder)
        {
           this.fbuilder = fbuilder;
           
           if(!this.fbuilder.data('lang'))
           {
              return en; 
           }
           
           switch(this.fbuilder.data('lang'))
           {
               case  'ar':
                   return ar;
                break;
                case 'en':
                     return en;
                break;

           }
           
        } 
}