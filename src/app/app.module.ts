import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { AuthGuard } from './auth.guard';
import { MatDialogModule } from '@angular/material/dialog';
import { DatePipe } from '@angular/common';
import { SpinnerInterceptor } from './spinner.interceptor';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { AlertDialogComponent } from './sharedComponents/alert-dialog/alert-dialog.component';
import { MenuComponent } from './sharedComponents/menu/menu.component';
import { ManagerModule } from './modules/manager/manager.module';
import { ResponsibleModule } from './modules/responsible/responsible.module';
import { VolunteerModule } from './modules/volunteer/volunteer.module';
import { RegistrationModule } from './modules/registration/registration.module';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    AlertDialogComponent,
  ],
  imports: [
    ManagerModule,
    ResponsibleModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    NgbModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatDialogModule,
    MatProgressBarModule,
    VolunteerModule,
    RegistrationModule,
  ],
  providers: [AuthGuard, DatePipe, {
    provide: HTTP_INTERCEPTORS,
    useClass: SpinnerInterceptor,
    multi: true,
  },],
  bootstrap: [AppComponent],
})
export class AppModule { }
