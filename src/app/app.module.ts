import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { BrowserModule } from '@angular/platform-browser';
import { SignInModule } from './pages/sign-in/sign-in.module';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    SignInModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
