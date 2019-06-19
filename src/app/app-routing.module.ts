import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {HomeComponent} from "./home/home.component";
import {ConfigurationComponent} from "./configuration/configuration.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'monitored-urls',
    pathMatch: 'full'
  },
  {
    path: 'monitored-urls',
    component: HomeComponent,
    data: {
      title: 'Alertes'
    }
  },
  {
    path: 'configuration',
    component: ConfigurationComponent,
    data: {
      title: 'Configuration'
    }
  }
];

@NgModule({
  imports: [
    BrowserAnimationsModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
