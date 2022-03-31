import { Component, Input, OnInit } from '@angular/core';
import { CountriesService } from 'src/app/services/countries.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  loading = true;
  allCountries: any = [];
  countriesToFilter: any = [];

  @Input() query = '';

  constructor(private countriesService: CountriesService) {}

  ngOnInit(): void {
    this.countriesService.getAllCountries().subscribe((countries) => {
      this.allCountries = countries;
      this.countriesToFilter = countries;
      this.loading = false;
    });
  }

  search(query: string) {
    this.allCountries = this.countriesToFilter;
    this.allCountries = this.allCountries.filter((country: any) => {
      let formatedQuery = query.charAt(0).toUpperCase() + query.slice(1);
      return country.name.includes(formatedQuery);
    });
  }

  filterByRegion(region: string) {
    this.allCountries = this.countriesToFilter;
    if (region === 'All') {
      return this.allCountries;
    } else {
      this.allCountries = this.allCountries.filter((country: any) => {
        return country.region === region;
      });
    }
  }
}
