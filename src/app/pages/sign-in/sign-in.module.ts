import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignInComponent } from './sign-in.component';
import { AppRoutingModule } from '../../app-routing.module';


@NgModule({
  declarations: [
    SignInComponent,
  ],

  exports:[
    SignInComponent,
  ],

  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    // BrowserAnimationsModule,
    // MatInputModule,
    // AppRoutingModule,
  ]
})
export class SignInModule { }
