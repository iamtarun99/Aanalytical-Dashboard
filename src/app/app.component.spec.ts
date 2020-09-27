import { TestBed, async,ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { DataService } from './data.service';
import { Observable, of } from 'rxjs';

class MockClass{
  getData():Observable<any>{
    return of([])
  }
}

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      providers:[
        {provide: DataService,useClass:MockClass}]
    }).compileComponents();
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('date method defined', () =>{
    component.selectDate("");
    expect(component.selectDate).toBeDefined();
  });
});
