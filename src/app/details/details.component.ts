import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

import { HousingService } from '../housing.service';
import { HousingLocation } from '../housing-location';
import { flatMap } from 'rxjs';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  housingService = inject(HousingService);
  housingLocation: HousingLocation | undefined;
  applyForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl('', [Validators.required, Validators.email])
  });
  formSubmitted : boolean = false;

  constructor(){
    // id is a local var
    const housingLocationId = Number(this.route.snapshot.params['id']);
    this.housingLocation = this.housingService.getHousingLocationById(housingLocationId);
  }

  submitApplication(){
    if (this.applyForm.valid){
      this.housingService.submitApplication(
        this.applyForm.value.firstName ?? '', // ?? means if firstName is null or undefined, use ''
        this.applyForm.value.lastName ?? '',
        this.applyForm.value.email ?? ''
      )
      this.formSubmitted = true;
    }
  }

}
