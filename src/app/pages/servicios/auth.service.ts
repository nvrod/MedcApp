import { Injectable } from '@angular/core';
import { SignInData } from '../model/sign.inData';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  private readonly mockedUser = new SignInData ('prueba@gmail.com', '123456');
  isAuthenticate = false;

  constructor() {
   }

   authenticate (signInData: SignInData): boolean{
    if(this.checkCredentials(signInData)){
      this.isAuthenticate = true;
      return true;
    }
    this.isAuthenticate = false;
    return false;
   }

   private checkCredentials(signInData: SignInData): boolean{
    return this.checkEmail (signInData.getEmail()) && this.checkPassword(signInData.getPassword());
   }

   private checkEmail(email:string): boolean{
    return email === this.mockedUser.getEmail();
   }

   private checkPassword(password:string): boolean{
    return password === this.mockedUser.getPassword();
  }
}