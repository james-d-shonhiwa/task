import { Component, OnInit } from '@angular/core';
import { CountryService } from 'src/app/services/country/country.service';

@Component({
  selector: 'app-countries-list',
  templateUrl: './countries-list.component.html',
  styleUrls: ['./countries-list.component.css']
})
export class CountriesListComponent implements OnInit {

  countries: any;
  currentCountry = null;
  currentIndex = -1;
  code = '';

  constructor(private countryService: CountryService) { }

  ngOnInit() {
    this.retrieveCountries();
  }

  retrieveCountries() {
    this.countryService.getAll()
      .subscribe(
        data => {
          this.countries = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  refreshList() {
    this.retrieveCountries();
    this.currentCountry = null;
    this.currentIndex = -1;
  }

  setActiveCountry(tutorial, index) {
    this.currentCountry = tutorial;
    this.currentIndex = index;
  }

  removeAllCountries() {
    this.countryService.deleteAll()
      .subscribe(
        response => {
          console.log(response);
          this.refreshList();
        },
        error => {
          console.log(error);
        });
  }

  searchTitle() {
    this.countryService.findByTitle(this.code)
      .subscribe(
        data => {
          this.countries = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
  
}
