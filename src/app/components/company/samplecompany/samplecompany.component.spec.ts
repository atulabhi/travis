import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SamplecompanyComponent } from './samplecompany.component';

describe('SamplecompanyComponent', () => {
  let component: SamplecompanyComponent;
  let fixture: ComponentFixture<SamplecompanyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SamplecompanyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SamplecompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
