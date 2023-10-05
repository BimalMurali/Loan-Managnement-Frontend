import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanofficerComponent } from './loanofficer.component';

describe('LoanofficerComponent', () => {
  let component: LoanofficerComponent;
  let fixture: ComponentFixture<LoanofficerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoanofficerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanofficerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
