import { TestBed } from '@angular/core/testing';
// import {HttpClientModule} from '@angular/common/http';
import { DataService } from './data.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('DataService', () => {
  let service: DataService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [DataService]
    });
    service = TestBed.get(DataService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('be able to retrieve json from the API via GET', () => {
    const dummyPosts = [{
        a:1
        }];
    service.getData().subscribe(posts => {
        expect(posts.length).toBe(1);
        expect(posts).toEqual(dummyPosts);
    });
    
  const request = httpMock.expectOne( '/assets/MockShareMarketData.json');
  expect(request.request.method).toBe('GET');
  request.flush(dummyPosts);
  });
  afterEach(() => {
    httpMock.verify();
});
});
