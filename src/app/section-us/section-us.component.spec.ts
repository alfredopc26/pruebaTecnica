import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionUsComponent } from './section-us.component';

describe('SectionUsComponent', () => {
  let component: SectionUsComponent;
  let fixture: ComponentFixture<SectionUsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionUsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
