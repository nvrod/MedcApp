import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { HomeComponent } from './pages/home/home.component';




const routes: Routes = [
  {
    path: 'dashboard',
    component: HomeComponent
  },
  {
    path: '',
    component: SignInComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
