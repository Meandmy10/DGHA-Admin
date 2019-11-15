import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotImpimentedYetComponent } from './not-impimented-yet.component';

describe('NotImpimentedYetComponent', () => {
  let component: NotImpimentedYetComponent;
  let fixture: ComponentFixture<NotImpimentedYetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotImpimentedYetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotImpimentedYetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
