import { Component, Input, OnInit } from '@angular/core';
import {MatDialog } from '@angular/material/dialog';
import { OverviewComponent } from '../overview/overview.component';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {

  @Input() data:any;
  @Input() period:string;
  columnDefs:any;
  gridOptions: any;

  constructor(private dialog:MatDialog) { }

  ngOnInit(): void {
    this.columnDefs = [
      {field: 'company',filter:true},
      {field:'industryType', filter:true},
      {headerName:"Price",field:'currentPrice',colId:3},
    ];
    this.gridOptions = {
      rowSelection: 'single'
    };
  }

  ngOnChanges(){
    if(this.data)
    this.updateGrid();
  }

  updateGrid(){
    this.columnDefs[2].field = this.period;
    this.gridOptions.api.setColumnDefs(this.columnDefs);
  }

  onRowClicked(ev){
    this.showOverview(ev.data);
   }
   
  showOverview(data){
    this.dialog.open(OverviewComponent, {
      height: 'auto',
      width: '600px',
      data: data
    });
  }

}
