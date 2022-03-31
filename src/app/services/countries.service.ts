import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class CountriesService {
  private allCountriesUrl = 'https://restcountries.com/v2/all';

  constructor(private http: HttpClient) {}

  getAllCountries(): Observable<{}> {
    return this.http.get(this.allCountriesUrl);
  }

  getCountryDetails(country: string): Observable<{}> {
    return this.http.get(`https://restcountries.com/v3.1/name/${country}`);
  }

  getBorderCountryNames(borderCode: string): Observable<any> {
    return this.http.get(`https://restcountries.com/v3.1/alpha/${borderCode}`);
  }
}
