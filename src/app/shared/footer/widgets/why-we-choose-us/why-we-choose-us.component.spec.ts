import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyWeChooseUsComponent } from './why-we-choose-us.component';

describe('WhyWeChooseUsComponent', () => {
  let component: WhyWeChooseUsComponent;
  let fixture: ComponentFixture<WhyWeChooseUsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhyWeChooseUsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhyWeChooseUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
