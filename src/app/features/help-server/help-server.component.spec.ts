import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpServerComponent } from './help-server.component';

describe('HelpServerComponent', () => {
  let component: HelpServerComponent;
  let fixture: ComponentFixture<HelpServerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HelpServerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HelpServerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
