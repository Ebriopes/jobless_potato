import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShorterComponent } from './shorter.component';

describe('ShorterComponent', () => {
  let component: ShorterComponent;
  let fixture: ComponentFixture<ShorterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShorterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShorterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
