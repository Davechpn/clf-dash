import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EnrollmentComponent } from './enrollment/enrollment.component';
import { PaymentsComponent } from './payments/payments.component';
import { StudioComponent } from './studio/studio.component';
import { AdminsComponent } from './admins/admins.component';
import { AccountComponent } from './account/account.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { LayoutComponent } from './layout/layout.component';
import { PreviewComponent } from './preview/preview.component';
import { ReactiveFormsModule, FormsModule} from '@angular/forms';
import { CdkStepperModule} from '@angular/cdk/stepper';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { TreeModule } from 'angular-tree-component';
import { 
  MatFormFieldModule,
  MatAutocompleteModule,
  MatButtonModule,
  MatBadgeModule,
  MatTreeModule,
  MatButtonToggleModule,
  MatCardModule,
  MatDatepickerModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDialogModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatStepperModule,
} from '@angular/material';
import { StatsComponent } from './stats/stats.component';
import { SearchComponent } from './search/search.component';
import { environment } from '../environments/environment';
import { ServiceWorkerModule } from '@angular/service-worker';
import { CurriculumComponent } from './curriculum/curriculum.component';
import { TrainingComponent } from './training/training.component';
import { IntroTemplatesComponent } from './templating/intro-templates/intro-templates.component';
import { LessonTemplatesComponent } from './templating/lesson-templates/lesson-templates.component';
import { CommentsTemplatesComponent } from './templating/comments-templates/comments-templates.component';
import { CorrectionsTemplatesComponent } from './templating/corrections-templates/corrections-templates.component';
import { CgTemplatesComponent } from './templating/cg-templates/cg-templates.component';
import { RegistrationTemplatesComponent } from './templating/registration-templates/registration-templates.component';
import { SharingTemplatesComponent } from './templating/sharing-templates/sharing-templates.component';
import { TopicsComponent } from './topics/topics.component';
import { TutorsComponent } from './tutors/tutors.component';
import { CareerGuidanceComponent } from './career-guidance/career-guidance.component';
import { ImageCropperModule } from 'ngx-image-cropper';
import { SelectContentComponent } from './select-content/select-content.component';
import { QuizContextComponent } from './quiz-context/quiz-context.component';

@NgModule({
  declarations: [
    AppComponent,
    EnrollmentComponent,
    PaymentsComponent,
    StudioComponent,
    AdminsComponent,
    AccountComponent,
    DashboardComponent,
    LoginComponent,
    LayoutComponent,
    PreviewComponent,
    StatsComponent,
    SearchComponent,
    CurriculumComponent,
    TrainingComponent,
    IntroTemplatesComponent,
    LessonTemplatesComponent,
    CommentsTemplatesComponent,
    CorrectionsTemplatesComponent,
    CgTemplatesComponent,
    RegistrationTemplatesComponent,
    SharingTemplatesComponent,
    TopicsComponent,
    TutorsComponent,
    CareerGuidanceComponent,
    SelectContentComponent,
    QuizContextComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ChartsModule,
    CdkStepperModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule.enablePersistence(),
    TreeModule.forRoot(),
    ImageCropperModule,
    //Material Modules Below
    MatFormFieldModule,
    MatTreeModule,
    MatDatepickerModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDialogModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatStepperModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
