
import {elements} from './fbuilder.elements.js';

export class crousel extends elements{
    
    
    static initStatic()
    {
        crousel.title = "Crousel";
        crousel.icon = "icon-crousel";
    }


    
    init()
    {
        this.element.type="html";
        this.element.header="Edit Header";
        this.element.content="Edit Content";
        this.icon = crousel.icon;
        this.title = crousel.title;
    }
    
    model()
    {
        return `
            <div class='fbuilder-component-html'>
                <div class="fbuilder-component-header">
                    <input type="text" />
                </div>
            </div>
    `;
    }
    
    
    
    
};