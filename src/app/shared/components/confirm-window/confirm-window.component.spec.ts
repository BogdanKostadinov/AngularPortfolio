import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmWindowComponent } from './confirm-window.component';

describe('ConfirmWindowComponent', () => {
  let component: ConfirmWindowComponent;
  let fixture: ComponentFixture<ConfirmWindowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmWindowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfirmWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
