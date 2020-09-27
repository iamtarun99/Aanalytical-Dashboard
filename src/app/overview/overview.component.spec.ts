import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { OverviewComponent } from './overview.component';

describe('OverviewComponent', () => {
  let component: OverviewComponent;
  let fixture: ComponentFixture<OverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OverviewComponent ],
      providers:[
        {provide: MAT_DIALOG_DATA,useValue:'x'}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
