import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphComponent } from './graph.component';

describe('GraphComponent', () => {
  let component: GraphComponent;
  let fixture: ComponentFixture<GraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphComponent);
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
  it('industry type others - method called', () =>{
    let spy = spyOn(component, 'drawGraph'); 
    component.data = [{industryType:"a"}];
    component.period = "industryType";
    component.changeType("a");
    expect(spy).toHaveBeenCalled(); 
  });
  it('industry type all - method called', () =>{
    let spy = spyOn(component, 'drawGraph'); 
    component.data = [{industryType:"a"}];
    component.period = "industryType";
    component.changeType("all");
    expect(spy).toHaveBeenCalled(); 
  });
  it('draw method defined', () =>{
    let mockData = [{a:"value"}];
    component.drawGraph(mockData,"a");
    expect(component.drawGraph).toBeDefined();
  });
});
