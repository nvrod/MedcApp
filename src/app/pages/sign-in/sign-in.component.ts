import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators, NgForm, FormGroup } from '@angular/forms';
import { ValidacionesService } from '../servicios/validaciones.service';
import { AuthService } from '../servicios/auth.service';
import { SignInData} from '../model/sign.inData';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {


  formularioLogIn:FormGroup = this.fb.group({
    user: ['',[Validators.required, Validators.maxLength(20), Validators.minLength(6),]],
    contraseña1: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(20),Validators.pattern('^[a-zA-Z0-9!@#$%^&*()]+$')]],
  })

  formularioPass:FormGroup = this.fb.group({
    contraseña: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(20),Validators.pattern('^[a-zA-Z0-9!@#$%^&*()]+$')]],
    ConfirmarContraseña: ['', [Validators.required]],
  }, {
    validators: [this.VsService.camposIguales('contraseña','ConfirmarContraseña')]
  })


  constructor (private fb: FormBuilder,
               private VsService:ValidacionesService,
               private AuthService: AuthService){
  }

  ngOnInit(): void {

  }

  campoNoValido (campo:string){
    return this.formularioLogIn.get(campo)?.invalid
        && this.formularioLogIn.get(campo)?.touched;
  }

  campoNoValidoPass (campo:string){
    return this.formularioPass.get(campo)?.invalid
        && this.formularioPass.get(campo)?.touched;
  }

  submitFormLogIn(signInForm: NgForm){
    console.log (signInForm.value);
    const signInData = new SignInData (signInForm.value.email, signInForm.value.password)
    this.AuthService.authenticate(signInData)
  }

  submitFormularioShow(){
    console.log (this.formularioPass.value)
    this.formularioPass.markAllAsTouched();
  }

  // copia el input correo
  correo:string =''

  // eye-button
  hide = true;

  // muestra los modales

  isShownSignIn = true;
  isShownRecuperar = false;
  isShownNewPass = false;
  isShownRestaurar = false;

  returnSignIn($event:any){
    $event.preventDefault()
    this.isShownSignIn = true
    this.isShownRecuperar = false
    this.isShownNewPass = false
    this.isShownRestaurar = false
  }

  returnRecuperar(){
    this.isShownSignIn = false
    this.isShownRecuperar = true
    this.isShownNewPass = false
    this.isShownRestaurar = false
  }

  returnNewPass($event:any){
    $event.preventDefault()
    this.isShownSignIn = false
    this.isShownRecuperar = false
    this.isShownNewPass = true
    this.isShownRestaurar = false
  }


  returnRestaurar($event:any){
    $event.preventDefault()
    this.isShownSignIn = false
    this.isShownRecuperar = false
    this.isShownNewPass = false
    this.isShownRestaurar = true
  }
}
