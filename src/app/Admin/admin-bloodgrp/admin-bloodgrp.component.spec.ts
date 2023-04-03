import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminBloodgrpComponent } from './admin-bloodgrp.component';

describe('AdminBloodgrpComponent', () => {
  let component: AdminBloodgrpComponent;
  let fixture: ComponentFixture<AdminBloodgrpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminBloodgrpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminBloodgrpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
