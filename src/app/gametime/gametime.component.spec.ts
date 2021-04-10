import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GametimeComponent } from './gametime.component';

describe('GametimeComponent', () => {
  let component: GametimeComponent;
  let fixture: ComponentFixture<GametimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GametimeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GametimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
