import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MeterialModule } from './meterial/meterial.module';
import { RegistrationComponent } from './registration/registration.component';
import { ViewStudentsComponent } from './view-students/view-students.component';
import { ProgressTrackingSystemComponent } from './progress-tracking-system/progress-tracking-system.component';
import { AliminiComponent } from './alimini/alimini.component';
import { DonationComponent } from './donation/donation.component';
import { DonarComponent } from './donar/donar.component';
import { MeterialDonationComponent } from './meterial-donation/meterial-donation.component';
import { CsrInitiativeComponent } from './csr-initiative/csr-initiative.component';
import { ChildFriendlyComponent } from './child-friendly/child-friendly.component';
import { HomeComponent } from './home/home.component';
import { PhotosComponent } from './photos/photos.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    ViewStudentsComponent,
    ProgressTrackingSystemComponent,
    AliminiComponent,
    DonationComponent,
    DonarComponent,
    MeterialDonationComponent,
    CsrInitiativeComponent,
    ChildFriendlyComponent,
    HomeComponent,
    PhotosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MeterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
