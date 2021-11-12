import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JsonServerComponent } from './json-server.component';

describe('JsonServerComponent', () => {
  let component: JsonServerComponent;
  let fixture: ComponentFixture<JsonServerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JsonServerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JsonServerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
