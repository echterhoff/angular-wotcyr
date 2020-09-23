import { UsernameValidators } from './../common/validators/username.validators';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'persohub-complex-form',
  templateUrl: './complex-form.component.html',
  styleUrls: ['./complex-form.component.scss']
})
export class ComplexFormComponent {
  form = new FormGroup({
    account: new FormGroup({
      'username': new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        UsernameValidators.cannotContainSpace
      ], [
        UsernameValidators.mustBeUnique
      ],
      ),
      'password': new FormControl('', Validators.required)
    })
  });

  get username(){
    return this.form.get('account.username');
  }

  login() {
    // let isValid = authService.login(this.form.value);
    // if(!isValid) {
      this.form.setErrors({
        invalidLogin: true
      });
    // }
  }

  buttonClicked(event: Event) {
    console.log(event.target);
  }


}
