import { AgRendererComponent } from "ag-grid-angular";
import { Component, HostListener } from "@angular/core";

@Component({
    templateUrl: './amount.component.html'
})
export class AmountTemplateRenderer implements AgRendererComponent {    
    public value: any;    

    agInit(params: any) {        
        this.value = params.data.amount;
    }

    refresh(params: any): boolean {
        this.value = params.data.amount;
        return true;
    }
}