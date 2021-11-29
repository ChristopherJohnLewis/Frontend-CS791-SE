import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaluateModelComponent } from './evaluate-model.component';

describe('EvaluateModelComponent', () => {
  let component: EvaluateModelComponent;
  let fixture: ComponentFixture<EvaluateModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EvaluateModelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EvaluateModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
