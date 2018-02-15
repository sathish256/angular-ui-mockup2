import { AssignmentTemplateRenderer } from "../cell-renderers/assignment.component";
import { Component, Inject, Input } from "@angular/core";
import { TempData } from "../../models/tempData";
import { GridOptions } from "ag-grid/main";
import { StatusTemplateRenderer } from "../cell-renderers/status.component";
import { AmountTemplateRenderer } from "../cell-renderers/amount.component";

@Component({
    selector: 'large-view-component',
    templateUrl: './large-view.component.html'
})
export class LargeViewComponent {
    @Input()
    rowData: TempData[];
    private gridApi;
    private gridColumnApi;
    private columnDefs;
    public gridOptions: GridOptions;

    constructor() {
        this.columnDefs = this.createColumnDefs();
        this.gridOptions = <GridOptions>{};
    }

    private setRowHeight(value) {
        this.gridOptions.api.forEachNode(rowNode => {
            rowNode.setRowHeight(value);
        });
        this.gridOptions.api.onRowHeightChanged();
    }

    private createColumnDefs() {
        const columnDefs = [
            { headerName: 'Assignments', cellRendererFramework: AssignmentTemplateRenderer },
            { headerName: 'Type', field: 'type', width: 90 },
            { headerName: 'B P Number', field: 'bpNumber', width: 120 },
            { headerName: 'Loan Number', field: 'loanNumber', width: 130 },
            { headerName: 'Description', field: 'description', width: 250 },
            { headerName: 'Documents', field: 'documents', width: 120 },
            { headerName: 'Amount', field: 'amount', width: 100, cellRendererFramework: AmountTemplateRenderer, cellStyle: { 'text-align': 'right' } },
            { headerName: 'Status', field: 'status', width: 180, cellRendererFramework: StatusTemplateRenderer }
        ]
        return columnDefs;
    }

    columnsToHide(columns, ...args) {
        var returnColumns = [];
        for (let i = 0; i < args.length; i++) {
            for (let j = 0; j < columns.length; j++) {
                if (columns[j].colId == args[i]) {
                    returnColumns.push(columns[j]);
                    break;
                }
            }
        }
        return returnColumns;
    }

    onGridSizeChanged(params) {
        var gridWidth = document.getElementById("grid-wrapper").offsetWidth;
        var columnsToHide = [];
        var height = 25;
        var allColumns = params.columnApi.getAllColumns();
        params.columnApi.setColumnsVisible(allColumns, true);
        if (gridWidth >= 900)
            columnsToHide = this.columnsToHide(allColumns, 0);
        else if (gridWidth >= 800 && gridWidth < 900)
            columnsToHide = this.columnsToHide(allColumns, 'type', 'bpNumber', 'loanNumber');
        else if (gridWidth >= 700 && gridWidth < 800) {
            columnsToHide = this.columnsToHide(allColumns, 'type', 'bpNumber', 'loanNumber', 'amount');
            height = 50;
        }
        else if (gridWidth >= 600 && gridWidth < 700) {
            columnsToHide = this.columnsToHide(allColumns, 'type', 'bpNumber', 'loanNumber', 'amount', 'description');
            height = 75;
        }
        else if (gridWidth >= 500 && gridWidth < 600) {
            columnsToHide = this.columnsToHide(allColumns, 'type', 'bpNumber', 'loanNumber', 'amount', 'description', 'documents');
            height = 100;
        }
        params.columnApi.setColumnsVisible(columnsToHide, false);
        params.api.sizeColumnsToFit();
        this.setRowHeight(height);
    }

    onGridReady(params) {
        this.onGridSizeChanged(params);
        this.gridApi = params.api;
        this.gridColumnApi = params.columnApi;
    }
}