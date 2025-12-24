import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DestinationsData } from './destinations-data';

describe('DestinationsData', () => {
  let component: DestinationsData;
  let fixture: ComponentFixture<DestinationsData>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DestinationsData]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DestinationsData);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
