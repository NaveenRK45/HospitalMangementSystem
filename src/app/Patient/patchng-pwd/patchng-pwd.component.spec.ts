import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatchngPwdComponent } from './patchng-pwd.component';

describe('PatchngPwdComponent', () => {
  let component: PatchngPwdComponent;
  let fixture: ComponentFixture<PatchngPwdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatchngPwdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatchngPwdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
