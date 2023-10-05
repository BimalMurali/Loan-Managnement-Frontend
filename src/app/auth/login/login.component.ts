import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/shared/models/users'
import { AuthService } from 'src/app/shared/services/auth.service'



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

   //declare variables
   loginForm!: FormGroup;
   isSubmitted: boolean = false;
   error: String = '';
 
   loginUser?: User = new User()
 
  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    
    //Create a Reactive Form
    this.loginForm = this.formBuilder.group({
      userName: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }
  //get controls for validation
  get formControls() {
    return this.loginForm.controls;
  }
//Functionality
loginCredentials(): void {
  //Setting Value to isSubmitted
  this.isSubmitted = true;

  //Checking form is Valid
  if (this.loginForm.invalid) {
    this.error = "Please enter username and Password"
    return;
  }

  //form is valid
  else {
    console.log("Form is valid");
    //Call service for login
    this.authService.loginVerify(this.loginForm.value)
      .subscribe(response => {
        console.log(response);

        if (response.data == 'INVALID CREDENTIALS!!') {
          this.error = "Invalid response"
          console.log(this.error);
        }

        else if (response.data.role === 1) {
          console.log("1 Logged in");
          this.error = ' ';
          localStorage.setItem("USER_NAME", response.data.Username);
          sessionStorage.setItem("USER_NAME", response.data.Username);
          localStorage.setItem("ROLE", response.data.role);
          localStorage.setItem("JWT_UTIL", response.data.ACCESSTOKEN);
          this.router.navigate(["/customer/home"]);

        }

        else if (response.data.role === 2) {
          console.log("2 Logged in");
          this.error = ' ';
          localStorage.setItem("USER_NAME", response.data.Username);
          sessionStorage.setItem("USER_NAME", response.data.Username);
          localStorage.setItem("ROLE", response.data.role);
          localStorage.setItem("JWT_UTIL", response.data.ACCESSTOKEN);
          this.router.navigate(["/admin/home"]);
        }

        else if (response.data.role === 3) {
          console.log("3 Logged in");
          this.error = ' ';
          localStorage.setItem("USER_NAME", response.data.Username);
          sessionStorage.setItem("USER_NAME", response.data.Username);
          localStorage.setItem("ROLE", response.data.role);
          localStorage.setItem("JWT_UTIL", response.data.ACCESSTOKEN);
          this.router.navigate(["/loanofficer/home"]);
        }


      }

      )
  }
}
}