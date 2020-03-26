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
import { CurriculumComponent } from './curriculum/curriculum.component';
import { SelectContentComponent } from './select-content/select-content.component';
import { NewCurriculumComponent } from './new-curriculum/new-curriculum.component';
import { QuizContextComponent } from './quiz-context/quiz-context.component';


const routes: Routes = [
  {path:'',redirectTo:'library',pathMatch:'full'},
  {path:'',component:LayoutComponent,children:[
      {path:'analytics',component:DashboardComponent},
      {path:'enrollment',component:EnrollmentComponent},
      {path:'payments',component:PaymentsComponent},
      {path:'library',component:StudioComponent},
      {path:'curriculum/new',component:NewCurriculumComponent},
      {path:'curriculum/:id', component:CurriculumComponent,children:[
        {path:'topics',component:TopicsComponent, children:[
          {path:':topic_id/content/:type',component:SelectContentComponent},
          {path:':topic_id/quiz/:context_id',component:QuizContextComponent},
        ]},
        // {path:'quiz/:context_id',component:QuizContextComponent},
        {path:'content/:id',component:PreviewComponent}
      ]},
      {path:'admins',component:AdminsComponent},
      {path:'account',component:AccountComponent},
      {path:'preview',component:PreviewComponent},
      {path:'training',component:TrainingComponent},
      {path:'careers',component:CareerGuidanceComponent},
  
    ]
  },
  {path:'login',component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
