import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewBGComponent } from './view-bg.component';

describe('ViewBGComponent', () => {
  let component: ViewBGComponent;
  let fixture: ComponentFixture<ViewBGComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewBGComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewBGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
