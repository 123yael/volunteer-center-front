import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddingVolunteeringComponent } from './adding-volunteering/adding-volunteering.component';
import { FreeActivitiesCompletedComponent } from './free-activities-completed/free-activities-completed.component';
import { FreeActivitiesCurrentComponent } from './free-activities-current/free-activities-current.component';
import { FreeActivitiesStatusesComponent } from './free-activities-statuses/free-activities-statuses.component';
import { FreeActivityWithvolunteerDetailsComponent } from './free-activity-withvolunteer-details/free-activity-withvolunteer-details.component';
import { VolunteerFeedbackComponent } from './volunteer-feedback/volunteer-feedback.component';
import { VolunteersForApprovalComponent } from './volunteers-for-approval/volunteers-for-approval.component';
import { NgbModule, NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { AppRoutingModule } from 'src/app/app-routing.module';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { HttpClientModule } from '@angular/common/http';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatTableModule } from '@angular/material/table';
import { MatProgressBarModule } from '@angular/material/progress-bar';


@NgModule({
  declarations: [
    AddingVolunteeringComponent,
    FreeActivitiesCompletedComponent,
    FreeActivitiesCurrentComponent,
    FreeActivitiesStatusesComponent,
    FreeActivityWithvolunteerDetailsComponent,
    VolunteerFeedbackComponent,
    VolunteersForApprovalComponent,
  ],
  imports: [
    CommonModule,
    NgbRatingModule,
    MatDialogModule,
    MatIconModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatSelectModule,
    NgbModule,
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatDividerModule,
    HttpClientModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTableModule,
    MatProgressBarModule,
  ]
})
export class ResponsibleModule { }
