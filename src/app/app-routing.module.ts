import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { DistrictService } from './services/district.service';
import { CategoryService } from './services/category.service';
import { AssociationService } from './services/association.service';
import { FreeActivityService } from './services/free-activity.service';
import { FeedbackService } from './services/feedback.service';
import { MyFreeActivityDetailsComponent } from './modules/volunteer/my-free-activity-details/my-free-activity-details.component';
import { FeedbackFormComponent } from './modules/volunteer/feedback-form/feedback-form.component';
import { MenuComponent } from './sharedComponents/menu/menu.component';
import { LogInComponent } from './modules/registration/log-in/log-in.component';
import { SignUpVolunteerComponent } from './modules/registration/sign-up-volunteer/sign-up-volunteer.component';
import { SignUpManagerComponent } from './modules/registration/sign-up-manager/sign-up-manager.component';
import { RequestComponent } from './modules/volunteer/request/request.component';
import { FeedbackHistoriesComponent } from './modules/volunteer/feedback-histories/feedback-histories.component';
import { NewAssociationsComponent } from './modules/manager/new-associations/new-associations.component';
import { VolunteersForApprovalComponent } from './modules/responsible/volunteers-for-approval/volunteers-for-approval.component';
import { StatusesComponent } from './modules/manager/statuses/statuses.component';
import { ReportsOfAssociationsComponent } from './modules/manager/reports-of-associations/reports-of-associations.component';
import { ReportsOfVolunteersComponent } from './modules/manager/reports-of-volunteers/reports-of-volunteers.component';
import { ReadingFeedbackComponent } from './modules/manager/reading-feedback/reading-feedback.component';
import { FreeActivitiesCompletedComponent } from './modules/responsible/free-activities-completed/free-activities-completed.component';
import { FreeActivitiesCurrentComponent } from './modules/responsible/free-activities-current/free-activities-current.component';
import { FreeActivitiesStatusesComponent } from './modules/responsible/free-activities-statuses/free-activities-statuses.component';
import { VolunteerFeedbackComponent } from './modules/responsible/volunteer-feedback/volunteer-feedback.component';

const routes: Routes = [
  { path: '', component: MenuComponent, canActivate: [AuthGuard] },
  {
    path: 'menu',
    component: MenuComponent,
    canActivate: [AuthGuard],
  },
  { path: 'logIn', component: LogInComponent },
  { path: 'signUpVolunteer', component: SignUpVolunteerComponent },
  {
    path: 'signUpManager',
    component: SignUpManagerComponent,
    resolve: {
      associations: AssociationService,
    },
  },
  {
    path: 'request',
    component: RequestComponent,
    resolve: {
      districts: DistrictService,
      categories: CategoryService,
    },
  },
  {
    path: 'myFreeActivityDetails', component: MyFreeActivityDetailsComponent, resolve: {
      freeActivities: FreeActivityService,
    },
  },
  {
    path: 'feedbackHistories', component: FeedbackHistoriesComponent, resolve: {
      feedbacks: FeedbackService,
    },
  },
  {
    path: 'newAssociationsForApproval',
    component: NewAssociationsComponent,
    resolve: {
      associations: AssociationService,
    },
  },
  {
    path: 'volunteersForApproval',
    component: VolunteersForApprovalComponent,
    resolve: {
      freeActivities: FreeActivityService,
    },
  },
  {
    path: 'statuses', component: StatusesComponent, resolve: {
      associations: AssociationService,
    },
  },
  {
    path: 'reportsOfAssociations', component: ReportsOfAssociationsComponent, resolve: {
      associations: AssociationService,
    },
  },
  { path: 'reportsOfVolunteers', component: ReportsOfVolunteersComponent },
  { path: 'readingFeedback', component: ReadingFeedbackComponent },
  {
    path: 'freeActivitiesCompleted', component: FreeActivitiesCompletedComponent, resolve: {
      freeActivities: FreeActivityService,
    },
  },
  {
    path: 'freeActivitiesCurrent', component: FreeActivitiesCurrentComponent,
    resolve: {
      freeActivities: FreeActivityService,
    },
  },
  {
    path: 'freeActivitiesStatuses', component: FreeActivitiesStatusesComponent, resolve: {
      freeActivities: FreeActivityService,
    },
  },
  {
    path: 'volunteerFeedback', component: VolunteerFeedbackComponent, resolve: {
      feedbacks: FeedbackService,
    },
  },
  { path: 'feedbackForm', component: FeedbackFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
