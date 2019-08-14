import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { ProfileComponent } from './components/profile/profile.component';
import {HttpClientModule} from '@angular/common/http';
import {JarwisService} from './services/jarwis.service';
import {TokenService} from './services/token.service';
import {AuthService} from './services/auth.service';
import {AfterLoginService} from './services/after-login.service';
import {BeforeLoginService} from './services/before-login.service';
import { PostTweetComponent } from './components/post-tweet/post-tweet.component';
import { SettingsComponent } from './components/settings/settings.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    SignupComponent,
    ProfileComponent,
    PostTweetComponent,
    SettingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    JarwisService,
    TokenService,
    AuthService,
    AfterLoginService,
    BeforeLoginService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
