import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {
  MatButtonModule,
  MatCardModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatRadioModule,
  MatSelectModule,
  MatSidenavModule,
  MatToolbarModule
} from "@angular/material";
import {NavigationComponent} from './navigation/navigation.component';
import {LayoutModule} from '@angular/cdk/layout';
import {HomeComponent} from './home/home.component';
import {TitleService} from "./common/title.service";
import {ConfigurationComponent} from './configuration/configuration.component';
import {ReactiveFormsModule} from '@angular/forms';
import {CookieService} from "ngx-cookie-service";
import {HttpClientModule} from '@angular/common/http';
import {reducer} from "./common/monitored-url.reducer";
import {StoreModule} from '@ngrx/store';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HomeComponent,
    ConfigurationComponent
  ],
  imports: [
    BrowserModule,
    MatCardModule,
    MatSidenavModule,
    AppRoutingModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatMenuModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    ReactiveFormsModule,
    HttpClientModule,
    StoreModule.forRoot({
      monitoredUrls: reducer
    })
  ],
  providers: [TitleService, CookieService],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(titleService: TitleService) {
    titleService.init();
  }
}
