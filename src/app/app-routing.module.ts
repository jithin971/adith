import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AliminiComponent } from './alimini/alimini.component';
import { ChildFriendlyComponent } from './child-friendly/child-friendly.component';
import { CsrInitiativeComponent } from './csr-initiative/csr-initiative.component';
import { DonarComponent } from './donar/donar.component';
import { DonationComponent } from './donation/donation.component';
import { MeterialDonationComponent } from './meterial-donation/meterial-donation.component';
import { ProgressTrackingSystemComponent } from './progress-tracking-system/progress-tracking-system.component';
import { RegistrationComponent } from './registration/registration.component';
import { ViewStudentsComponent } from './view-students/view-students.component';
import { PhotosComponent } from './photos/photos.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'alumini',
    component:AliminiComponent
  },
  {
    path:'cfc',
    component:ChildFriendlyComponent
  },
  {
    path:'csr',
    component:CsrInitiativeComponent
  },
  {
    path:'donar',
    component:DonarComponent
  },
  {
    path:'donation',
    component:DonationComponent
  },
  {
    path:'mdc',
    component:MeterialDonationComponent
  },
  {
    path:'pts',
    component:ProgressTrackingSystemComponent
  },
  {
    path:'registration',
    component:RegistrationComponent
  },
  {
    path:'view',
    component:ViewStudentsComponent
  },
  {
    path:'photos',
    component:PhotosComponent
  },
  {
    path:'**',
    redirectTo:''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
