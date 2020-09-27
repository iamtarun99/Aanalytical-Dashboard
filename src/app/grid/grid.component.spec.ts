import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {MatDialog } from '@angular/material/dialog';
import { GridComponent } from './grid.component';

class MockDialog{
  open(a,b){
  }
}

describe('GridComponent', () => {
  let component: GridComponent;
  let fixture: ComponentFixture<GridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridComponent ],
      providers:[
        {provide: MatDialog,useClass:MockDialog}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('ngOnInit method defined', () =>{
    expect(component.ngOnInit).toBeDefined();
  });
  it('ngOnChanges method defined', () =>{
    expect(component.ngOnChanges).toBeDefined();
  });
  it('row method called', () =>{
    let spy = spyOn(component, 'showOverview'); 
    component.onRowClicked("");
    expect(spy).toHaveBeenCalled(); 
  });
  it('showOverview method defined', () =>{
   component.showOverview("");
   expect(component.showOverview).toBeDefined();
  });
  it('updateGrid method defined', () =>{
    component.gridOptions ={api : {setColumnDefs : function(a){}}};
   component.updateGrid();
   expect(component.updateGrid).toBeDefined();
  });
});
