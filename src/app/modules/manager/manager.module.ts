import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AssociationDetailsComponent } from './association-details/association-details.component';
import { FreeActivitiesInAssociationComponent } from './free-activities-in-association/free-activities-in-association.component';
import { NewAssociationsComponent } from './new-associations/new-associations.component';
import { ReadingFeedbackComponent } from './reading-feedback/reading-feedback.component';
import { ReportsOfAssociationsComponent } from './reports-of-associations/reports-of-associations.component';
import { ReportsOfVolunteersComponent } from './reports-of-volunteers/reports-of-volunteers.component';
import { StatusesComponent } from './statuses/statuses.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ResponsibleModule } from '../responsible/responsible.module';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
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
    AssociationDetailsComponent,
    FreeActivitiesInAssociationComponent,
    NewAssociationsComponent,
    ReadingFeedbackComponent,
    ReportsOfAssociationsComponent,
    ReportsOfVolunteersComponent,
    StatusesComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    MatIconModule,
    NgbModule,
    MatButtonModule,
    AppRoutingModule,
    MatDividerModule,
    HttpClientModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTableModule,
    MatProgressBarModule,
  ]
})
export class ManagerModule { }
