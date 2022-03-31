import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { CountriesService } from './services/countries.service';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { IonicModule } from '@ionic/angular';
import { SearchComponent } from './components/search/search.component';
import { HomeComponent } from './pages/home/home.component';
import { DetailsComponent } from './pages/details/details.component';
import { FilterComponent } from './components/filter/filter.component';
import { CountryCardComponent } from './components/country-card/country-card.component';

const appRoutes: Routes = [
  { path: 'details/:country', component: DetailsComponent },
  { path: '', component: HomeComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchComponent,
    HomeComponent,
    DetailsComponent,
    FilterComponent,
    CountryCardComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [CountriesService],
  bootstrap: [AppComponent],
})
export class AppModule {}
