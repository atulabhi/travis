import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SampledocComponent } from './sampledoc.component';

describe('SampledocComponent', () => {
  let component: SampledocComponent;
  let fixture: ComponentFixture<SampledocComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SampledocComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SampledocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
