import { Injectable } from '@angular/core';
import { AbstractControl, ValidationErrors } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidacionesService {

  constructor() { }


  camposIguales(campo1:string, campo2:string){

    return ( formGroup: AbstractControl ): ValidationErrors | null => {

      const contraseña1 = formGroup.get(campo1)?.value;
      const contraseña2 = formGroup.get(campo2)?.value;

      if ( contraseña1 !== contraseña2){
        formGroup.get(campo2)?.setErrors({noIguales:true});
        return {noIguales:true}
      }

      formGroup.get(campo2)?.setErrors(null)

      return null
    }


  }
}
