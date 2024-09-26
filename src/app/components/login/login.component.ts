import { Component } from '@angular/core';
import { FormBuilder, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { LoginData } from 'src/app/model/logindata.model';
import { User } from 'src/app/model/user.model';
import { LoginService } from 'src/app/services/login.service';
import { NavbarComponent } from "../navbar/navbar.component";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ MatButtonModule, MatInputModule, NavbarComponent, MatFormFieldModule, ReactiveFormsModule, MatIconModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  public formulary = this.buildForm()
  hide = true;
  authStatus: string = "";
  model = new User();

  ngOnInit(): void {
  }

  constructor(
    private loginService: LoginService,
    private router: Router,
    private formBuilder: FormBuilder,
    private snackBar: MatSnackBar) { }

  buildForm() {
    return this.formBuilder.group({
      email: new FormControl ('', Validators.required),
      password :new FormControl ('', Validators.required)
    })
  }
  validateUser() {
    if (this.formulary.valid) {
      const loginData: LoginData = {
        email: this.formulary.get('email')?.value,
        password: this.formulary.get('password')?.value
      };
      this.loginService.validateLoginDetails(loginData).subscribe(
        responseData => {
          window.sessionStorage.setItem("Authorization",responseData.headers.get('Authorization')!);
          this.model = <any> responseData.body;
          this.model.authStatus = 'AUTH';
          window.sessionStorage.setItem("userdetails",JSON.stringify(this.model));
          this.router.navigate(['dashboard']);
          console.log(responseData)
        },
        error => {
          this.snackBar.open('Senha incorreta. Tente novamente', 'Fechar', {
            duration: 5000,
            panelClass: ['error-snackbar']
          })
        });
      }
  }
}
