import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CountriesListComponent } from './components/country/list/countries-list.component';
import { CountryDetailsComponent } from './components/country/details/country-details.component';
import { AddCountryComponent } from './components/country/add/add-country.component';
import { CitiesListComponent } from './components/city/list/cities-list.component';
import { CityDetailsComponent } from './components/city/details/city-details.component';
import { AddCityComponent } from './components/city/add/add-city.component';

import { ProjectsListComponent } from './components/project/list/projects-list.component';
import { ProjectDetailsComponent } from './components/project/details/project-details.component';
import { AddProjectComponent } from './components/project/add/add-project.component';

const routes: Routes = [
  { path: '', redirectTo: 'countries', pathMatch: 'full' },
  { path: 'countries', component: CountriesListComponent },
  { path: 'countries/:id', component: CountryDetailsComponent },
  { path: 'add-country', component: AddCountryComponent },
  { path: 'cities', component: CitiesListComponent },
  { path: 'cities/:id', component: CityDetailsComponent },
  { path: 'add-city', component: AddCityComponent },
  { path: 'projects', component: ProjectsListComponent },
  { path: 'projects/:id', component: ProjectDetailsComponent },
  { path: 'add-project', component: AddProjectComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
