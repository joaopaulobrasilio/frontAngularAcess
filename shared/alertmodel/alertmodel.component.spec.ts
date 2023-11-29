import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertmodelComponent } from './alertmodel.component';

describe('AlertmodelComponent', () => {
  let component: AlertmodelComponent;
  let fixture: ComponentFixture<AlertmodelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AlertmodelComponent]
    });
    fixture = TestBed.createComponent(AlertmodelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
