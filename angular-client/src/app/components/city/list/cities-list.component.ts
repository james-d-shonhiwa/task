import { Component, OnInit } from '@angular/core';
import { CityService } from 'src/app/services/city/city.service';

@Component({
  selector: 'app-cities-list',
  templateUrl: './cities-list.component.html',
  styleUrls: ['./cities-list.component.css']
})
export class CitiesListComponent implements OnInit {

  cities: any;
  currentCity = null;
  currentIndex = -1;
  code = '';

  constructor(private cityService: CityService) { }

  ngOnInit() {
    this.retrieveCities();
  }

  retrieveCities() {
    this.cityService.getAll()
      .subscribe(
        data => {
          this.cities = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  refreshList() {
    this.retrieveCities();
    this.currentCity = null;
    this.currentIndex = -1;
  }

  setActiveCity(tutorial, index) {
    this.currentCity = tutorial;
    this.currentIndex = index;
  }

  removeAllCities() {
    this.cityService.deleteAll()
      .subscribe(
        response => {
          console.log(response);
          this.refreshList();
        },
        error => {
          console.log(error);
        });
  }

  searchCode() {
    this.cityService.findByCode(this.code)
      .subscribe(
        data => {
          this.cities = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
  
}
