import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatIconModule  } from '@angular/material/icon';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { InstalationsComponent } from './instalations/instalations.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { Ng2CarouselamosModule } from 'ng2-carouselamos';
import { MatCardModule, MatInputModule } from '@angular/material';
import { ContactsComponent } from './contacts/contacts.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    InstalationsComponent,
    ContactsComponent,
    LoginComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    NoopAnimationsModule,
    MatIconModule,
    AngularFontAwesomeModule,
    MDBBootstrapModule.forRoot(),
    Ng2CarouselamosModule,
    MatCardModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule


  ],
  providers: [
    AuthGuard,
  ],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }
