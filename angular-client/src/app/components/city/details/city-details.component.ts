import { Component, OnInit } from '@angular/core';
import { CityService } from 'src/app/services/city/city.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-city-details',
  templateUrl: './city-details.component.html',
  styleUrls: ['./city-details.component.css']
})
export class CityDetailsComponent implements OnInit {
  currentCity = null;
  message = '';

  constructor(
    private cityService: CityService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.message = '';
    this.getCity(this.route.snapshot.paramMap.get('id'));
  }

  getCity(id) {
    this.cityService.get(id)
      .subscribe(
        data => {
          this.currentCity = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  updatePublished(status) {
    const data = {
      code: this.currentCity.code,
      description: this.currentCity.description,
      published: status
    };

    this.cityService.update(this.currentCity.id, data)
      .subscribe(
        response => {
          this.currentCity.published = status;
          console.log(response);
        },
        error => {
          console.log(error);
        });
  }

  updateCity() {
    this.cityService.update(this.currentCity.id, this.currentCity)
      .subscribe(
        response => {
          console.log(response);
          this.message = 'The city was updated successfully!';
        },
        error => {
          console.log(error);
        });
  }

  deleteCity() {
    this.cityService.delete(this.currentCity.id)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/countries']);
        },
        error => {
          console.log(error);
        });
  }
}
