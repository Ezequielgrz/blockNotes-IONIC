import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { AppStateService } from 'src/app/services/app-state.service';
import {  } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  email: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router, private appStateService: AppStateService) { }

  login() {
    if (this.authService.login(this.email, this.password)) {
      this.router.navigate(['/home']);
    } else {
      console.error('Inicio de sesión fallido. Verifica tus credenciales.');
    }
  }

  ngOnInit() {
    this.appStateService.setShowTabs(false);
  }

  ngOnDestroy() {
    this.appStateService.setShowTabs(true);
  }
}
