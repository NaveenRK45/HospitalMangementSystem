import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocChgPwdComponent } from './doc-chg-pwd.component';

describe('DocChgPwdComponent', () => {
  let component: DocChgPwdComponent;
  let fixture: ComponentFixture<DocChgPwdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocChgPwdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DocChgPwdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
