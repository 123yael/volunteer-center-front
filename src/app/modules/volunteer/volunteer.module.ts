import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditFreeActivityFormComponent } from './edit-free-activity-form/edit-free-activity-form.component';
import { FeedbackFormComponent } from './feedback-form/feedback-form.component';
import { FeedbackHistoriesComponent } from './feedback-histories/feedback-histories.component';
import { FreeActivityDetailsComponent } from './free-activity-details/free-activity-details.component';
import { MyFreeActivityDetailsComponent } from './my-free-activity-details/my-free-activity-details.component';
import { RequestComponent } from './request/request.component';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
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
    EditFreeActivityFormComponent,
    FeedbackFormComponent,
    FeedbackHistoriesComponent,
    FreeActivityDetailsComponent,
    MyFreeActivityDetailsComponent,
    RequestComponent,
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatDialogModule,
    NgbModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
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
export class VolunteerModule { }
