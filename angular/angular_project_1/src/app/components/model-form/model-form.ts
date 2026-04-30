import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-model-form',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './model-form.html',
  styleUrl: './model-form.css',
})
export class ModelForm {
  registerForm: FormGroup;

  constructor() {
    this.registerForm = new FormGroup({
      firstName: new FormControl('Virat', [Validators.required,Validators.minLength(5)]),
      lastName: new FormControl('Kohli', [Validators.required]),
      email: new FormControl('Virat@gmail.com', [Validators.required, Validators.email]),
      address: new FormGroup({
        city: new FormControl(),
        state: new FormControl(),
        pincode: new FormControl(),
      }),
    },{updateOn:'blur'});
  }

  submitForm() {
    console.log(this.registerForm);
  }
}
