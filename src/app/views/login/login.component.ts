import { Component, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { NavbarService } from 'src/app/services/navbar.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnDestroy {
  form: FormGroup;
  roles = ['ROL-A', 'ROL-B'];

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private readonly navService: NavbarService,
  ) {
    this.form = this.fb.group({
      rol: ['', Validators.required],
      password: ['', Validators.required],
    });

    this.navService.setShowUser(false);
  }

  ngOnDestroy(): void {
    this.navService.setShowUser(true);
  }

  login() {
    const val = this.form.value;

    if (val.rol && val.password) {
      this.authService.login(val.rol, val.password).subscribe({
        error: () => {
          alert('Acceso denegado');
        },
      });
    }
  }
}
