import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewAcessosComponent } from './new-acessos.component';

describe('NewAcessosComponent', () => {
  let component: NewAcessosComponent;
  let fixture: ComponentFixture<NewAcessosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewAcessosComponent]
    });
    fixture = TestBed.createComponent(NewAcessosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
