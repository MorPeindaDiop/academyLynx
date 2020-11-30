import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfermaDatiComponent } from './conferma-dati.component';

describe('ConfermaDatiComponent', () => {
  let component: ConfermaDatiComponent;
  let fixture: ComponentFixture<ConfermaDatiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfermaDatiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfermaDatiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
