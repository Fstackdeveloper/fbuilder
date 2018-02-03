
import {elements} from './fbuilder.elements.js';

export class form extends elements{
    
    
    static initStatic()
    {
        form.title = "form";
        form.icon = "icon-form";
    }
    

    
    init()
    {
        this.element.type="html";
        this.element.header="Edit Header";
        this.element.content="Edit Content";
        this.icon = form.icon;
        this.title = form.title;
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