import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionProjectComponent } from './section-project.component';

describe('SectionProjectComponent', () => {
  let component: SectionProjectComponent;
  let fixture: ComponentFixture<SectionProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionProjectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
