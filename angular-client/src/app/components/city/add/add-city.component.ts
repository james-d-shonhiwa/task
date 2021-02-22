import { Component, OnInit } from '@angular/core';
import { CityService } from 'src/app/services/city/city.service';

@Component({
  selector: 'app-add-city',
  templateUrl: './add-city.component.html',
  styleUrls: ['./add-city.component.css']
})
export class AddCityComponent implements OnInit {
  city = {
    code: '',
    description: '',
    published: false
  };
  submitted = false;

  constructor(private cityService: CityService) { }

  ngOnInit() {
  }

  saveCity() {
    const data = {
      code: this.city.code,
      description: this.city.description
    };

    this.cityService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  newCity() {
    this.submitted = false;
    this.city = {
      code: '',
      description: '',
      published: false
    };
  }

}
