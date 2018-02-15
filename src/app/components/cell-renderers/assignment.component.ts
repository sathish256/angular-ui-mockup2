import { AgRendererComponent } from "ag-grid-angular";
import { Component, HostListener } from "@angular/core";

@Component({
    templateUrl: './assignment.component.html'
})
export class AssignmentTemplateRenderer implements AgRendererComponent {    
    public value: any;
    private gridWidth: number;

    agInit(params: any) {
        this.gridWidth = document.getElementById("grid-wrapper").offsetWidth;        
        this.value = params.data;
    }

    refresh(params: any): boolean {
        this.value = params.data;
        return true;
    }

    @HostListener('window:resize')
    onResize() {
        this.gridWidth = document.getElementById("grid-wrapper").offsetWidth;
    }
}