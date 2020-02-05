import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EnrollmentComponent } from './enrollment/enrollment.component';
import { PaymentsComponent } from './payments/payments.component';
import { StudioComponent } from './studio/studio.component';
import { AdminsComponent } from './admins/admins.component';
import { AccountComponent } from './account/account.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { LayoutComponent } from './layout/layout.component';
import { PreviewComponent } from './preview/preview.component';
import { TrainingComponent } from './training/training.component';
import { CareerGuidanceComponent } from './career-guidance/career-guidance.component';
import { TopicsComponent } from './topics/topics.component';


const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'',component:LayoutComponent,children:[
      {path:'home',component:DashboardComponent},
      {path:'enrollment',component:EnrollmentComponent},
      {path:'payments',component:PaymentsComponent},
      {path:'studio',component:StudioComponent},
      {path:'admins',component:AdminsComponent},
      {path:'account',component:AccountComponent},
      {path:'preview',component:PreviewComponent},
      {path:'training',component:TrainingComponent},
      {path:'careers',component:CareerGuidanceComponent}
    ]
  },
  {path:'login',component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
