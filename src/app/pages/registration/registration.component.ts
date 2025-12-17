import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { HttpService } from 'src/app/shared/services/http.service';
import { MustMatchValidator } from 'src/app/shared/validations/validations.validator';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent {
  registerForm!: FormGroup;
  submitted = false;
  constructor(
    private _dataService: HttpService,
    private _fb: FormBuilder,
    private _toastr: ToastrService,
    private _router:Router
  ) {

  }
  createRegisterForm() {
    this.registerForm = this._fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
    }, {
      validator: MustMatchValidator('password', 'confirmPassword')
    });
    this.registerForm.reset();
  }
  ngOnInit() {
    this.createRegisterForm();
  }
  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  onSubmit(formData: any) {
    this.submitted = true;
    console.log(formData);
    debugger;
    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }

    this._dataService.post(environment.BASE_API_PATH + "CustomerMaster/Save/", formData.value).subscribe(
      data => {
        if (data.isSuccess) {
          this._toastr.info('Data saved successfully! ', 'CREATE ACCOUNT');
          debugger;
          this._router.navigate(['pages/login'])
          this.registerForm.reset();
        } else {
          this._toastr.error(data.errors[0], 'CREATE ACCOUNT');
        }
      }
    );
  }
}
