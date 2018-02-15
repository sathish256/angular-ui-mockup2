import { AgRendererComponent } from "ag-grid-angular";
import { Component, HostListener } from "@angular/core";

@Component({
    templateUrl: './status.component.html'
})
export class StatusTemplateRenderer implements AgRendererComponent {    
    public value: any;    

    agInit(params: any) {        
        this.value = params.data;
    }

    refresh(params: any): boolean {
        this.value = params.data;
        return true;
    }
}