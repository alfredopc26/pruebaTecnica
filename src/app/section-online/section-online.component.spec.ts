import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionOnlineComponent } from './section-online.component';

describe('SectionOnlineComponent', () => {
  let component: SectionOnlineComponent;
  let fixture: ComponentFixture<SectionOnlineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionOnlineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionOnlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
