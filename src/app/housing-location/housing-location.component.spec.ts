import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from "@angular/router/testing";

import { HousingLocationComponent } from './housing-location.component';
import { HousingLocation } from '../housing-location';

describe('HousingLocationComponent', () => {
  let component: HousingLocationComponent;
  let fixture: ComponentFixture<HousingLocationComponent>;

  beforeEach(() => {
    const mockHousingLocation: HousingLocation = {
      id: 0,
      name: "mock name",
      city: "m",
      state: "m",
      photo: "",
      availableUnits: 0,
      wifi: true,
      laundry: true
    };

    TestBed.configureTestingModule({
      imports: [HousingLocationComponent, RouterTestingModule]
    });

    fixture = TestBed.createComponent(HousingLocationComponent);
    component = fixture.componentInstance;
    component.housingLocation = mockHousingLocation; // Provide mock data here
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
