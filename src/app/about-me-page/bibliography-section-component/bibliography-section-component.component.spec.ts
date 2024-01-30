import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BibliographySectionComponent } from './bibliography-section-component.component';

describe('SectionComponentComponent', () => {
  let component: BibliographySectionComponent;
  let fixture: ComponentFixture<BibliographySectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BibliographySectionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BibliographySectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
