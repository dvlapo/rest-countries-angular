import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-country-card',
  templateUrl: './country-card.component.html',
  styleUrls: ['./country-card.component.css'],
})
export class CountryCardComponent implements OnInit {
  @Input() allCountries!: [];
  @Input() flag!: string;
  @Input() countryName!: string;
  @Input() population!: number;
  @Input() region!: string;
  @Input() capital!: string;

  constructor() {}

  ngOnInit(): void {}
}
