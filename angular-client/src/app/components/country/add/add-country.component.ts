import { Component, OnInit } from '@angular/core';
import { CountryService } from 'src/app/services/country/country.service';

@Component({
  selector: 'app-add-country',
  templateUrl: './add-country.component.html',
  styleUrls: ['./add-country.component.css']
})
export class AddCountryComponent implements OnInit {
  country = {
    code: '',
    description: '',
    published: false
  };
  submitted = false;

  constructor(private countryService: CountryService) { }

  ngOnInit() {
  }

  saveCountry() {
    const data = {
      code: this.country.code,
      description: this.country.description
    };

    this.countryService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  newCountry() {
    this.submitted = false;
    this.country = {
      code: '',
      description: '',
      published: false
    };
  }

}
