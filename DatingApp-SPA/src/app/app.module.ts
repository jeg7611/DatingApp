import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { isPromise } from 'q';
import { AuthService } from './_services/auth.service';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { ErrorInterceptorProvide } from './_services/error.interceptor';
import { AlertifyService } from './_services/alertify.service';
import { BsDropdownModule } from 'ngx-bootstrap';

@NgModule({
   declarations: [
      AppComponent,
      NavComponent,
      HomeComponent,
      RegisterComponent
   ],
   imports: [
      BrowserModule,
      HttpClientModule,
      AppRoutingModule,
      FormsModule,
      BsDropdownModule.forRoot()
   ],
   providers: [
      AuthService,
      ErrorInterceptorProvide,
      AlertifyService,
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
