import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UserModule } from './user/user.module';
import { ChatModule } from './chat/chat.module';
import { SharedModule } from './shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './user/login/login.component';

import { HttpClientModule } from '@angular/common/http';

import { CookieService } from 'ngx-cookie-service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
 
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, UserModule, ChatModule, SharedModule, HttpClientModule, BrowserAnimationsModule, ToastrModule.forRoot(),
    RouterModule.forRoot([
      { path: 'login', component: LoginComponent, pathMatch: 'full' },

      { path: '*', component: LoginComponent },
      { path: '**', component: LoginComponent },
      { path: '', redirectTo: 'login', pathMatch: 'full' },
    ])
  ],
  providers: [ CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
