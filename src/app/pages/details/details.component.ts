import { Component, OnInit, SimpleChanges } from '@angular/core';
import { CountriesService } from 'src/app/services/countries.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit {
  name!: string;
  countryName!: string;
  sourceData: any = [];
  countryDetails: any = {};
  flagSrc: any = '';
  nativeNames: any = [];
  population: any = null;
  region: any = '';
  subRegion: any = '';
  capital: any = '';
  tld: any = '';
  currencies: any = [];
  borders: any = [];
  borderCountriesNames: any = [];
  languages: any = [];

  constructor(
    private countriesService: CountriesService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.name = this.route.snapshot.params['country'];

    this.getCountryDetails();
  }

  getCountryDetails() {
    this.countriesService
      .getCountryDetails(this.name)
      .subscribe((details: any) => {
        this.sourceData = details[0];
        this.countryDetails = this.sourceData;
        this.countryName = this.countryDetails.name.common;
        this.flagSrc = this.countryDetails.flags.svg;
        this.population = this.countryDetails.population;
        this.region = this.countryDetails.region;
        this.subRegion = this.countryDetails.subregion;
        this.capital = this.countryDetails.capital[0];
        this.tld = this.countryDetails.tld[0];
        this.nativeNames = Object.values(this.countryDetails.name.nativeName);
        this.currencies = Object.values(this.countryDetails.currencies);
        this.languages = Object.values(this.countryDetails.languages);
        this.borders = this.countryDetails.borders;
      });
  }

  getCountryBorderNames() {
    this.borders.map((borderCode: string) => {
      this.countriesService
        .getBorderCountryNames(borderCode)
        .subscribe((borderCountryNames) => {
          let countryName = borderCountryNames[0].name.common;
          this.borderCountriesNames.push(countryName);
          console.log(this.borderCountriesNames);
        });
    });
  }

  ngDoCheck() {
    if (this.borders !== []) {
      this.getCountryBorderNames();
      this.borders = [];
    }
  }

  goBack() {
    window.history.back();
  }
}
