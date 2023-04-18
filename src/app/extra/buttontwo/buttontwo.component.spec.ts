import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtontwoComponent } from './buttontwo.component';

describe('ButtontwoComponent', () => {
  let component: ButtontwoComponent;
  let fixture: ComponentFixture<ButtontwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtontwoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtontwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
