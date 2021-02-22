import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddCountryComponent } from './components/country/add/add-country.component';
import { CountryDetailsComponent } from './components/country/details/country-details.component';
import { CountriesListComponent } from './components/country/list/countries-list.component';

import { AddCityComponent } from './components/city/add/add-city.component';
import { CityDetailsComponent } from './components/city/details/city-details.component';
import { CitiesListComponent } from './components/city/list/cities-list.component';

import { AddProjectComponent } from './components/project/add/add-project.component';
import { ProjectDetailsComponent } from './components/project/details/project-details.component';
import { ProjectsListComponent } from './components/project/list/projects-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AddCountryComponent,
    CountryDetailsComponent,
    CountriesListComponent,
    AddCityComponent,
    CityDetailsComponent,
    CitiesListComponent,
    AddProjectComponent,
    ProjectDetailsComponent,
    ProjectsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
