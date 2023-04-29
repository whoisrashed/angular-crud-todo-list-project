import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appPasswordStrength]',
  exportAs:'strengthValue'
})
export class PasswordStrengthDirective {

  strengthValue!:number;
  constructor() { }

  @HostListener('input', ['$event'])
  output(event:InputEvent){
   
    const e = event.target as HTMLInputElement;
    const value = e.value;
    this.strengthValue = this.passwordStrengthChecker(value);
    //console.log(strength)
  }

  passwordStrengthChecker(pw:string):number {
    if(!pw) return 0;
    else if(pw.length<6) return 1; // weak
    else if(pw.length<8) return 2; //medium
    return 3; //strong
  }

}
